> NOTE: This repo is archived, all the code past the "monorepo-snapshot" tag, and further development has moved to:
> [https://github.com/telerik/vscode-extensions](https://github.com/telerik/vscode-extensions)

# Starter projects locations

Starter projects are sourced from https://github.com/telerik/kendo-vsx-templates

# Build

Build is availble at the VSX Jenkins
`http://10.10.7.82:8080/view/Kendo/job/VisualStudioCode_Extension_Kendo/` (VPN required)

Output is available at this location:
`smb://telerik.com/distributions/DailyBuilds/Guidance/VSCodeExtensions/master`

# Wiki & Handling Updates

Wiki and release instructions are available here:

https://github.com/telerik/kendo-vscode-extensions/wiki/Handling-updates

# Contributing and branching strategy

The main branch is develop and it is where all features go first. We use master for releases.

Always work on new things in a separate, new, branches and when ready initiate a pull request against develop. Add @vvatkov and @agpetrov as reviewers.

When ready rebase you work from develop to master (git checkout master, git rebase develop) and follow the steps in HandlingUpdates, update package.json following the semver rules.
