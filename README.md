![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%237C3AED&label=downloads&query=%24%5B%22canvas-send-to-back%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

# Canvas Send to Back Plugin

Send a card in Obsidian Canvas to be behind or in front of all other cards.

<img width="407" alt="image" src="https://github.com/Zachatoo/obsidian-canvas-send-to-back/assets/6936914/41199b01-b2b2-45df-aa9a-7012a475f0bc">

## Installation

1. Open Obsidian **Settings → Community plugins → Browse**.
2. Search for "CSS Editor" and click **Install**, then **Enable**.

---

## Contributing

### Releasing

Releasing a new version involves the following steps:

1. Update `minAppVersion` in `manifest.json` if applicable.
1. Run `npm version patch`, `npm version minor`, or `npm version major`.
    - This command will bump the version in the `manifest.json`, `package.json`, and `package-lock.json` files, add a new entry in `versions.json`, and create a git tag.
1. Push the changes and tag. This will trigger a GitHub action to create the release.
