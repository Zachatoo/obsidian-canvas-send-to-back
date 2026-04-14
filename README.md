![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22canvas-send-to-back%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

# Canvas Send to Back Plugin

Send a card in Obsidian Canvas to be behind all other cards.

<img width="407" alt="image" src="https://github.com/Zachatoo/obsidian-canvas-send-to-back/assets/6936914/41199b01-b2b2-45df-aa9a-7012a475f0bc">

## Installation

Recommended to install from the Obsidian community store.

You can manually install this using the [BRAT](https://github.com/TfTHacker/obsidian42-brat) Obsidian plugin. Generic installation instructions are available on that plugin's documentation.

---

## Contributing

### Releasing

Releasing a new version involves the following steps:

1. Update `minAppVersion` in `manifest.json` if applicable.
1. Run `npm version patch`, `npm version minor`, or `npm version major`.
    - This command will bump the version in the `manifest.json`, `package.json`, and `package-lock.json` files, add a new entry in `versions.json`, and create a git tag.
1. Push the changes and tag. This will trigger a GitHub action to create the release.
