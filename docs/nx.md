# Nx

[⬅️&nbsp;&nbsp;README](../README.md)

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎&nbsp;&nbsp;**Nx is a set of Extensible Dev Tools for Monorepos.**

- [Introducing Nx 12: Simplified onboarding to Nx, Performance Improvements, Multi-Language support, and more! | Nrwl Blog](https://blog.nrwl.io/introducing-nx-12-simplified-onboarding-to-nx-performance-improvements-multi-language-support-6c344461eb13) - 2021/04/08

- [Nx Private Cloud is Available! | Nrwl Blog](https://blog.nrwl.io/nx-private-cloud-is-available-1cd2891c4561) - 2021/03/24

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app-e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

- [How to develop React apps like Facebook, Microsoft, and Google | Nrwl](https://blog.nrwl.io/how-to-develop-react-apps-like-facebook-microsoft-and-google-bdcafcfbc9be)

- [React Microfrontends and Monorepos: A Perfect Match | Nrwl](https://blog.nrwl.io/monorepos-and-react-microfrontends-a-perfect-match-d49dca64489a)

- [[YouTube] Nx: Extensible Dev Tools for Monorepos (React)](https://www.youtube.com/watch?v=E188J7E_MDU)

- [[YouTube playlist] Nx Workspaces Course (Free version) - By Nrwl](https://www.youtube.com/watch?v=2mYLe9Kp9VM&list=PLakNactNC1dH38AfqmwabvOszDmKriGco)

- [Nx Workspaces (by Nrwl) | Nx Playbook](https://nxplaybook.com/p/nx-workspaces) - Introduction to Using an Nx Monorepo - free course

- Visit the [Nx Documentation](https://nx.dev) to learn more.

  - [Updating Nx](https://nx.dev/latest/react/core-concepts/updating-nx)

  - [Nx CLI](https://nx.dev/react/guides/cli)

    - [CLI commands to a React project with Nx](https://nx.dev/react/api/home)

  - [Using Nx at Enterprises](https://nx.dev/react/guides/monorepo-nx-enterprise)

  - [Rebuilding and Retesting What is Affected](https://nx.dev/react/guides/monorepo-affected)

---

- [[YouTube] Nx Quickstart - How to Scale a JavaScript Project](https://www.youtube.com/watch?v=VUyBY72mwrQ)

- [[YouTube] Nx - Extensible Dev Tools for Monorepos (React Apps)](https://www.youtube.com/watch?v=Jxh_--FeJeY)

- [[YouTube] Nx Storybook Integration: Demo by Isaac Mann of Nrwl](https://www.youtube.com/watch?v=sFpqyjT7u4s)

- [[YouTube] Scalable React Development for Large Projects - Jason Jean | React Conferences by GitNation](https://www.youtube.com/watch?v=Lr-u2ALSEQg)

---

- Nx Console

  - [[GitHub] nrwl/nx-console](https://github.com/nrwl/nx-console)

  - [VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)

## Project examples

- [[GitHub] erkobridee / nx-hello](https://github.com/erkobridee/nx-hello)

- [[GitHub] nrwl/nx-examples](https://github.com/nrwl/nx-examples)

- [[GitHub] nrwl/board-game-hoard](https://github.com/nrwl/board-game-hoard)

- [[GitHub] nrwl/nx-azure-build](https://github.com/nrwl/nx-azure-build) - Example of setting up distributed Azure build for Nx workspace
