# NxTodos

ToDos project example

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

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

Libraries are sharable across libraries and applications. They can be imported from `@nx-todos/mylib`.

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

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

- [[YouTube] Nx: Extensible Dev Tools for Monorepos (React)](https://www.youtube.com/watch?v=E188J7E_MDU)

- [[YouTube playlist] Nx Workspaces Course (Free version) - By Nrwl](https://www.youtube.com/watch?v=2mYLe9Kp9VM&list=PLakNactNC1dH38AfqmwabvOszDmKriGco)

- [Nx Workspaces (by Nrwl) | Nx Playbook](https://nxplaybook.com/p/nx-workspaces) - Introduction to Using an Nx Monorepo - free course

- Visit the [Nx Documentation](https://nx.dev) to learn more.

  - [CLI commands to a React project with Nx](https://nx.dev/react/api/home)

  - [Using Nx at Enterprises](https://nx.dev/react/guides/monorepo-nx-enterprise)

  - [[GitHub] nrwl/nx-examples](https://github.com/nrwl/nx-examples)

  - [[GitHub] nrwl/board-game-hoard](https://github.com/nrwl/board-game-hoard)

---

- [[YouTube] Nx Quickstart - How to Scale a JavaScript Project](https://www.youtube.com/watch?v=VUyBY72mwrQ)

- [[YouTube] Nx - Extensible Dev Tools for Monorepos (React Apps)](https://www.youtube.com/watch?v=Jxh_--FeJeY)

- [[YouTube] Nx Storybook Integration: Demo by Isaac Mann of Nrwl](https://www.youtube.com/watch?v=sFpqyjT7u4s)

---

- Nx Console

  - [[GitHub] nrwl/nx-console](https://github.com/nrwl/nx-console)

  - [VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)

---

- ToDos examples

  - [How To Build a React To-Do App with React Hooks | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks)

  - [Build a To-Do application Using Django and React | Scotch.io](https://scotch.io/tutorials/build-a-to-do-application-using-django-and-react)

## Steps

1. creation command:

`npx create-nx-workspace nx-todos`

```
preset: react + express
application name: todos
application styles: SASS (.scss)
```

2. test the generated application (you'll need 2 terminal to the following commands)

```
nx serve api
nx serve todos
```

3. create a shared data-model libray

`nx g @nrwl/workspace:lib data-model --directory=shared`

4. add the uuid dependency to the project

```
yarn add uuid
yard add -D @types/uuid
```

5. remove the libs/api-interface and cleanup the nx project references

6. create the code skeleton for the api router (libs/api/router)

`nx g @nrwl/express:lib router --directory=api`

7. code the api data manipulation (libs/api/data)

`nx g @nrwl/express:lib data --directory=api`

8. add the axios lib dependency

`yarn add axios`

9. create the todos api lib

`nx g @nrwl/workspace:lib api --directory=todos`

10. add the axios-mock-adapter dependency to help write the jest tests

`yarn add -D axios-mock-adapter`
