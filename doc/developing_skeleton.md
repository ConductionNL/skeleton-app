# Development of the Skeleton Application

This page consists of the following parts:

- Adding pages

## _Adding pages_

A new page can be added with the following steps:

- Create a new file for your page under /src/pages. (The name of the file wil be the slug)
- A 

![Example Page](./assets/example_page.png)

The code looks like this:

```TypeScript

```

---

**_NOTE_**
For adding dynamic pages, add a folder with the `route` name. Inside the folder add an `index.tsx` for the page if no `URL` segments are dynamic and a `[id].tsx` when parts of the URL segment are dynamic.

example:

- `src/pages/products/[id].tsx` will generate a route like `products/product`

---

Adding external content from an API can be found [here](./api.md).
