# Skeleton Application

This document consists of the following parts:

- Introduction
- Getting started
- Different template types
- Developing the Skeleton App
- ApiService
- More tools

This documentation is intended for front-end developers with an understanding of the following technologies:

- [`HTML / CSS / JavaScript`](https://developer.mozilla.org/en-US/docs/Learn)
- [`TypeScript`](https://www.typescriptlang.org/)
- [`React`](https://reactjs.org/)
- [`Gatsby`](https://www.gatsbyjs.com/)
- [`Command Line Interface`](https://www.codecademy.com/article/command-line-interface)

And know how to use these tools:

- [`Docker Desktop`](https://docs.docker.com/desktop/windows/install/)
- [`NodeJS`](https://nodejs.org/en/)
- [`Node Package Manager`](https://www.npmjs.com/)

---

## Introduction

The skeleton application is designed for rapid application testing and prototype development on the [NL Design System](http://storybook.nldesignsystem.nl/?path=/story/nl-design-system-introductie--page). There are several templates you can use as a running start - - each with their own functionality and purpose.

_PIP_:

It provides a basic skeleton application with full [NL Design System](http://storybook.nldesignsystem.nl/?path=/story/nl-design-system-introductie--page) functionality that any developer can easily extend, view locally, and deploy to an online environment for demonstration purposes. It has [Common Gateway](https://github.com/CommonGateway) support, multiple navigations and much more.

_Website_:

A simple website skeleton, including header, footers, routing and more. Does not initiate authentication

_Dashboard:

Coming Soon_

## Getting started

You can find the repository for this application [here](https://github.com/ConductionNL/skeleton-app). Cloning this repository to your machine is the next step.

You can do this by clicking the green button, downloading the `ZIP` format, and unzipping in your preferred folder or use the following set of commands:

In your command line interface, in the correct directory:

``` cli
git clone https://github.com/ConductionNL/skeleton-app.git
cd skeleton-app
```

That's all for an initial setup.

## Chosing a template

Navigate to the root folder of the repository you just downloaded. Open your preferred terminal and execute:

```CLI
cd pwa
npm install
npm start
```

Navigate in your browser to `localhost:8000` and you are welcomed to the template choosing section. Check out the live implementations and select your templated based on desired functionality. Follow the installation instructions.

### Spinning up the Skeleton App

The skeleton app is built with GatsbyJs. Knowledge of this framework is recommended but not required.

For full functionality with logging in (PIP template, for instance), you will need to spin up the back-end along with the front-end. It is unnecessary to continue with the website templating section of the Skeleton App.

Depending on the development, these steps require you to:

- Spin up the [front-end of the application](./frontend.md).
- Spin up the [backend](./backend.md)

With the front end running on `localhost:8000`, you are now ready to develop the Skeleton App. On the left-side navigation, you can opt for:

- Adding pages
- Components
- ApiService (back-end needed)
- Forms

### Accessing and editing this documentation

You can access this documentation with [`mkdocs`](https://www.mkdocs.org/). For first-timers accessing this excellent documentation tool. This tool is installed by default.

Head over to `localhost:8000` to see this document locally.

>__NOTE__ Mkdocs can't run on any other port by default. It's recommended first to run the documentation and then `Gatsby`. Gatsby also defaults to port `localhost:8000`, but asks to run at `localhost:8001` if 8000 is unavailable. Mkdocs errors in that scenario.
