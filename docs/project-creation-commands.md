# Project creation commands

[⬅️&nbsp;&nbsp;README](../README.md)

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

9. create the todos api calls lib

`nx g @nrwl/workspace:lib api-calls --directory=todos`

10. add the axios-mock-adapter dependency to help write the jest tests

`yarn add -D axios-mock-adapter`

11. create a shared helpers lib

`nx g @nrwl/workspace:lib helpers --directory=shared`

12. create a shared redux helpers lib

`nx g @nrwl/workspace:lib redux-helpers --directory=shared`

```
yarn add redux react-redux redux-thunk
yarn add -D @types/react-redux
```

13. create the todos redux lib (react redux following the re-ducks pattern)

`nx g @nrwl/workspace:lib redux --directory=todos`

14. create the todos wrapper lib (wraps the redux and any other provider needed)

`nx g @nrwl/react:lib wrapper --directory=todos`

15. create the todos ui-components lib

`nx g @nrwl/react:lib ui-components --directory=todos`

initially defined the Layout component and move the contend from the todos application src/App into it

also added a new project dependency to the components

`yarn add clsx`

16. create the todos feature lib (uses the redux and implements the ToDos list/add/edit feature)

`nx g @nrwl/react:lib feature --directory=todos`
