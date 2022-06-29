# Skeleton Application

This skeleton application is designed for rapid application testing and prototype development on the NL Design System. It provides a basic skeleton application with full NL Design system functionality that any developer can easily extend, view locally and deploy to an online environment for demonstration purposes. The main benefits are:

-   Development and (online) demonstration of prototypes without the need of a server.
-   An out-of-the-box basic application that doesn't require configuration or setup and can be extended immediately.


## Getting started

To set up your own project, you will need a GitHub account and be logged in. Simply click on the "use this template" button. Tell GitHub where you want to spin up your prototype and click "create a repository from template".


## Spinning up your local environment

The Skeleton application is an end-to-end application and consists of a Gatsby-based front-end and an optional back-end from [PetStore](https://github.com/CommonGateway/PetStoreAPI).

Running this repository locally has these prerequisites:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

With both installed, first:

- Spin up the [front-end of the application](./docs/frontend.md).
- Spin up the [backend](./docs/backend.md)

Clone your new repository to your local machine to start developing. Open the terminal, and navigate to the folder containing your repository.## Developing on the Skeleton Application

Click [here](./docs/index.md) for the introduction of the skeleton-app

## Technical Documentation

Full technical documentation is provided on [read the docs](https://conductionnl.github.io/skeleton-app/) and is based on [MKDocs](https://www.mkdocs.org/). A more product owner focused (and less technical) product page is hosted at [link to be added](https://github.com/ConductionNL/skeleton-app).

If you want to run the technical documentation on localhost, you can do so by using MKDocs build server and the serve command. Just go to the local repository and execute the following command for the documentation to be available on [port 8000](http://localhost:8000). Make sure to [install MKDocs](https://www.mkdocs.org/user-guide/installation/) first.

## Publishing your prototype to the internet (Gatsby only)

The Gatsby version of the skeleton application has built support for GitHub pages. You can turn your application into a static website and publish it as a GitHub page. The skeleton repository comes with a build GitHub action for publishing itself as a GitHub page. You can have your prototype automatically published to the internet on a code push.

For this to work, you will need to do activate GitHub-pages on your repository, go to your repository settings, click on pages, select `gh-pages` as a source, and press on save (if you do not see a `gh-pages` branch yet you can create one by pushing to main).

After clicking on save, you can wait for GitHub to publish your project and provide you with a link you can share for your demo. Keep in mind that all pushes to main and development will result in updates to your online demo environment from this point on.