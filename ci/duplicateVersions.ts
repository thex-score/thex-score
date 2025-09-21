import { UseReleases } from "../composables/ReleaseNotes";
import * as core from "@actions/core";

const releases = UseReleases();
const versions = new Set<string>();
for (const release of releases) {
  if (versions.has(release["version"])) {
    core.error(
      `failed: Detect duplicated release versions ${release["version"]}`
    );
    process.exit(1);
  }
  versions.add(release["version"]);
}
core.info("success: No release version are duplicated");
