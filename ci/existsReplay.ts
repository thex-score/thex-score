import fs from 'node:fs/promises'
import path from 'node:path'
import { useScoreRecords } from "../composables/ScoreRecords"
import * as core from '@actions/core'

type ErrorRecord = {game: string, player: string, shot_type: string, file: string}

const errorRecord: ErrorRecord[] = []
const publicDir = path.resolve('public', 'replays')
const ScoreRecords = useScoreRecords()
const seenReplay = new Set<string>()
let erroredFlag = false

for (const [player, games] of Object.entries(ScoreRecords)) {
  for (const [game, shots] of Object.entries(games)) {
    for (const [shot_type, rec] of Object.entries(shots)) {
      if (!rec.replay) continue          // null は許容
      const rel = path.join(game, rec.replay)
      const abs = path.join(publicDir, rel)
      if (seenReplay.has(rec.replay)){
        core.error(`failed: detect duplicated replay files: ${rec.replay}`)
        erroredFlag = true
      }else{
        seenReplay.add(rec.replay)
      }
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
  erroredFlag = true
} else {
  core.info('success:  All replay files are present.')
}

if (erroredFlag){
  process.exit(1)
}