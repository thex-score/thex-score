import fs from 'node:fs/promises'
import path from 'node:path'
import { useScoreRecords } from "../composables/ScoreRecords"
import * as core from '@actions/core'

type ErrorRecord = {game: string, player: string, shot_type: string, file: string}

const errorRecord: ErrorRecord[] = []
const publicDir = path.resolve('public', 'replays')
const ScoreRecords = useScoreRecords()

for (const [player, games] of Object.entries(ScoreRecords)) {
  for (const [game, shots] of Object.entries(games)) {
    for (const [shot_type, rec] of Object.entries(shots)) {
      if (!rec.replay) continue          // null は許容
      const rel = path.join(game, rec.replay)
      const abs = path.join(publicDir, rel)
      try {
        await fs.access(abs)
      } catch {
        errorRecord.push({ game: game, player: player, shot_type: shot_type, file: rel })
      }
    }
  }
}

if (errorRecord.length) {
  core.error('failed:  Missing replay files:')
  for (const e of errorRecord) {
    core.error(`  ${e.file}  (player: ${e.player} / shot: ${e.shot_type})`)
  }
  process.exit(1)      // ジョブを失敗させる
} else {
  core.info('success:  All replay files are present.')
}