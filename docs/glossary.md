# Development of the Skeleton Application

This page consists of the following parts:

- Layout skeleton-app
  - `cd pwa/src`
    - Pages
      - .tsx file
      - .ts file
      - .module.css file
    - Templates
      - Authenticated template
      - Unauthenticated template
    - Hooks
    - ApiService
      - Resources
      - Services
      - apiContext.ts
      - apiService.ts
  
---

## _Glossary_

---
This is the go-to for additional explaination in case something is unclear.

> ### _Pages_

GatsbyJS is a static web app generator. This means it focusses on a set of pages and renders the components in these pages. This separation ensures blazing fast pages, and provides additional

### _.tsx file_

A `.tsx` file is the TypeScript equivalent of the `.jsx` files used by React. JSX is a syntax extention to JavaScript. Both file types produce React "elements". You can read more about JSX in the [React](https://reactjs.org/docs/introducing-jsx.html) documentation

### _.ts file_

This is a TypeScript file. TypeScript is a superset for JavaScript to make it a strongly typed programming language. Less error prone, tight intergration with editors and native type inference. That's the reason why the Skeleton App uses TypeScript. TypeScript is compiled to regular JavaScript by all browsers.

### _.module.css file_

CSS modules is a fancy way to tackle the problem of global CSS (which tends to become one big unorganized mess) and to guarantee the (scoped) styling of a single component. The Skeleton app is built with components, so the design choice fell on CSS Modules.

> ### _Templates_

To start developing on the Skeleton App with a running start, it comes with various templates right out-of-the-box. When starting up the Skeleton app, you are presented with a choice for your application.

#### _Authenticated templates_

This is variation on the template. Signing in and keeping track of sessions is often cumbersome to implement. Not any more. With the PIP template (Dashboard as well), this is all done for you in the authenticated templates. You do need to spin up the [backend](backend.md) as well.

The authentication is done through `sessionStorage`.

The mechanics of the authentication can be found in  `/pwa/src/services/auth.tsx`

- tell about authenticated templates and the use of it
- add an example with context about what you have to, how you do it and why you have to do it

#### _Unauthenticated template_

If authentication is of no concern, like for instance, the only thing you need is a landing page, choose a unauthenticated template and develop further without the need of a backend or authentication.

> ### _Hooks_

React Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

Some hooks are native to React and can be imported and used in a file. Not all of these hooks cover every situation where you need them, that's why you can find more `custom hooks` in `pwa/src/hooks`.

> ### _ApiService_

The `apiServices` are classes that include advanced functionality, for instance: fucntions that will take care of authentication and CRUD operations.

#### _Resources_

- tell about ApiService resource and the use of it

#### _Services_

- tell about ApiService services and the use of it

#### _apiContext.ts_

- tell about ApiService apiContext.ts file and the use of it

#### _apiService.ts_

- tell about ApiService apiService.ts file and the use of it

---

## Adding pages to the skeleton-app

Now we've looked at the explanation about the structure and files of the skeleton app we can add new pages
[click here to see the guide](./pages.md).

---
