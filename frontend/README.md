# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

How frontend works? 
when initially we run npm install(node package manager-install), npm reads package.json and read dependencies and npm downloads those packages that are needed for the application where all those packages are placed inside the folder node_modules that are needed for the execution.

1.package.json => it can be created by us or else done by "npm init"
2.package-lock.json => created by npm, downloads the exact versions and dependency tree, what exact version we need that is made a record over here.
3.node_modules => npm downloads actual packages over here, all actual packages are stored in this folder.
4.what npminit commands do? created what we need, how?, when npm init given, we will be enetering the version,description and entry point.then npm creates package.json
5.then how does npm know we want react? we give npm install react react-dom, then npm adds react to dependencies in package.json.
6.when given npm create vite@latest we select framework like what version of react,vue,etc..then vite creates a react project with appropriate package.json.
7.vite.config.js created by vite this is for vite configuration that is created by the command npm create vite@latest.
8.vite@latest creates dependencies in package.json and also seperate vite.confi.js files for vite configuration.
9.eslint.config.js => checks javascript and react code for problems and coding rule violations. this file is for configurations of eslint.
