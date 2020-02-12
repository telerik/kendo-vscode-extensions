# Contributing to the Kendo UI VsCode Scaffolder

Thank you for your interest in contributing to Kendo UI!

## Ways to Contribute

You can contribute by:

* Submitting bug-fixes.
* Proposing changes in the documentation or updates to existing code.
* Adding features or missing functionality.

## Commit Message Guideliens

### Overview

We follow some rules as to how our Git commit messages can be best formatted in such a way that they are more readable and easy to follow when going through the project history. Moreover, we use the Git commit messages to generate the changelog.

### Formats

> The length of each commit message should not exceed 50 characters. This allows for a greater readability on GitHub and for using various Git tools.

Each commit message consists of a:

* [(Mandatory) Header](#header)
* [(Optional) Body](#body)
* [(Optional) Footer](#footer)

The following example demonstrates the regular pattern format of a commit message.

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Header

The header is mandatory to include in a commit message and follows a special pattern that contains:

* [Type](#type)
* [Scope](#scope)
* [Subject](#subject)

##### Type

The type header is mandatory and has to be any of the following options:

* **chore**&mdash;A change that affects the build system or external dependencies. For example, `scopes: gulp, npm`.
* **docs**&mdash;A change in the documentation only.
* **feat**&mdash;A new feature.
* **fix**&mdash;A bug fix.
* **perf**&mdash;A change in the code for improving the performance.
* **refactor**&mdash;A change in the code that neither fixes a bug nor adds a feature.
* **style**&mdash;A change that does not affect the meaning of the code. For example, white-space, formatting, missing semi-colons, and other.
* **test**&mdash;An addition of missing tests or a correction of existing tests.

The following examples provide commit messages of the `docs` and `fix` types.

```
docs: add content on data back from server, fix links
```
```
fix: sync locked containers when height changes
```

##### Scope

The scope of the header is optional. It should be the name of the component which is affected, as perceived by someone who reads the changelog that was generated on the base of the commit messages.

##### Subject

The subject contains a succinct description of the change. When creating the subject:

* Use the Imperative Mood. For example, "change", and not "changed" or "changes".
* Don't capitalize the first letter.
* Don't put a period (`.`) at the end.
* Try to limit the subject to 50 characters. GitHub hides the rest of the message.

### Body

When creating the body:

* Use the Imperative Mood. For example, "change", and not "changed" or "changes".
* Include the motivation for the change and contrast this with the previous behavior.
* Reference the GitHub issues that this commit targets.

The following example provides a Git command for a commit message of the `fix` type.

```
git commit -m 'fix(grid): missing left border' -m 'telerik/kendo-themes/issues/1234'
```

### Footer

When creating the footer:

* Include all the information about any **Breaking Changes**.

When implementing a **Breaking Change** commit message:

* Start with `BREAKING CHANGE:`.
* Follow the intro line with a space or two newlines. The rest of the commit message is then used to describe the change.

## Steps to Contribute

To submit a pull request:

1. If this is your first contribution to Kendo UI, read and sign the [Kendo UI Contribution License Agreement (CLA)](https://docs.google.com/forms/d/e/1FAIpQLSdSzuLLij8dtytTeiXCzlHcTmHYZIxgrAa7BSaO_fno79ua1A/viewform?c=0&w=1). The CLA confirms that you acknowledge the legal aspects of your contributions.
1. Fork the repo
1. Make changes in a git branch, dedicated to the issue you are fixing:

     ```shell
     git checkout -b my-fix-branch develop
     ```

1. Add your contribution, following the [coding guidelines](#coding-guidelines) and [commit message guidelines](#commit-message-guidelines).
1. [Submit a Pull Request](https://help.github.com/articles/creating-a-pull-request/).
1. Address any feedback to the Pull Request until the PR is approved.
1. Rebase your PR onto the latest changes from the `develop` branch.
