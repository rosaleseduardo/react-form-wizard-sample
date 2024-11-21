Thank you for considering contributing to our repository! Your participation helps create something valuable and meaningful. To ensure smooth collaboration, we have established the following guidelines. Please take a moment to review them before you start contributing.

# Table Of Contents

- [Set up your environment](#set-up-your-environment)
- [Development Tooling](#development-tooling)
- [Documentation Standard](#documentation-standard)
- [How to contribute](#how-to-contribute)
- [How You Can Help](#how-you-can-help)
- [Development requirements](#development-requirements)
- [How to make a commit](#how-to-make-a-commit)
- [References](#references)

<br/>

## Set up your environment

1. Download and install [VSCode](https://code.visualstudio.com/Download).
2. Create a `.vscode/settings.json` file in the root of your project and
include this configuration
```json
{
  "workbench.iconTheme": "material-icon-theme",
  "files.autoSave": "onFocusChange",
  "editor.minimap.enabled": true,
  "workbench.statusBar.visible": true,
  "editor.formatOnSave": true,
  "editor.rulers": [80],
  "workbench.colorCustomizations": {
    "editorRuler.foreground": "#40ff66",
    "statusBar.background": "#333333",
    "statusBar.noFolderBackground": "#333333",
    "statusBar.debuggingBackground": "#263238"
  },
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "window.zoomLevel": -1,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.fontLigatures": false,
  "editor.indentSize": "tabSize",
  "editor.wordWrap": "wordWrapColumn",
  "editor.wordWrapColumn": 80,
  "eslint.format.enable": true,
  "tabnine.experimentalAutoImports": true,
}
```
3. Install the following plugins:
   - [Markdown](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
4. Install [pnpm](https://pnpm.io/installation) globally in your machine.
5. Execute `pnpm run install-deps:clean` to install all dependencies. (Read [this reference](https://betterprogramming.pub/npm-ci-vs-npm-install-which-should-you-use-in-your-node-js-projects-51e07cb71e26) for more details)
6. Execute `pnpm run dev` to start the app.

## Development Tooling

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/)
[![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)](https://pnpm.io/)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)

### Testing Tools:

1. [Vitest](https://vitest.dev/)
2. [Jest DOM](https://github.com/testing-library/jest-dom)
3. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

### Documentation Standard

1. [TSDoc](https://tsdoc.org/)

## How to contribute

1. Reporting Issues

   - Use the issue tracker to report bugs or request new features.
   - Provide as much detail as possible, including steps to reproduce the issue.

2. Submitting Pull Requests

   - Create your branch from `main`.
   - Follow the coding style guidelines.
   - Include tests for your changes if applicable.
   - Ensure your code passes all existing tests and does not introduce new
   issues.
   - Submit a pull request and provide a clear description of the changes. More
   details [here](#how-to-make-a-commit).

3. Code of Conduct

   - Be respectful and considerate of others.
   - Engage in constructive and inclusive discussions.

## How You Can Help

There are many ways to contribute, including but not limited to:

- **Reporting Bugs:** If you find a bug, please let us know by opening an issue.
- **Suggesting Features:** Have an idea for a new feature? We'd love to hear
about it.
- **Writing Code:** Submit pull requests to fix bugs or add new features.
- **Improving Documentation:** Help us make our documentation clearer and more
comprehensive.
- **Testing:** Test the project on different platforms and report any issues.

## Development requirements

The development considered to be included in the project's codebase, should
comply with the following criteria:

1. **Do not push a commit if the development is not completed**. Each commit is
expected to be associated to a single ticket number, it means that
**only one commit is allowed per ticket assigned.** (if you need to update your
branch with the latest changes from the main branch, please perform a rebase)
2. **Each commit must deliver a stable version of the app.**
3. The commit must state the title of the task/subtask that was taken,
**_e.g MDC-000 This is the title of the task_**
4. Add a description providing the answers to the following questions:
   - How the development in the branch will add value to the project?
   - (Optional) Is there any remaining work to be done? Please, provide the
   ticket number that will cover this development.

### _**EXCEPTIONS:**_

_If there's a need to merge something that wasn't initially scoped (unexpected bug or behavior), it can be done by following these criteria:_

- _The commit description should state the issue that arose and the temporary fix applied._
- _It must reference the ticket created to cover that bug fixing._

## How to make a commit

Make usage of the command `pnpm run commit:changes` to make a new commit. This will prompt you to define:

1. Type of change you're commiting (a list will be shown to you).
2. Scope of the change (optional).
3. A short, imperative tense description of the change (Refer to step 3 from the previous list)
4. A longer description of the change (Refer to step 4 from the previous list)
5. Notify if there's a breking change
   - If yes, provide details.
   - If no, proceed to the next step.
6. Notify if this commit affect any open issues
   - If yes, add the issue references.
   - If no, proceed to the next step.
7. The commit will be added to the git history.
8. Push the previously created commit to the remote repository.

## References

- [Principles To Perform Testing](https://testing-library.com/docs/guiding-principles)
- [Using Testing Library jest-dom with Vitest](https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/)
- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
