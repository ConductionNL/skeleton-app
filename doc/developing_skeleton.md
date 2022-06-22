# Development of the Skeleton Application

This page consists of the following parts:

- Adding a page
- Adding a detail page

## _Adding a page_

Add a new page with the following steps:

- Create a new file for your page under `/src/pages`. The file should be named `[name].tsx`(The name of the file will be the slug displayed as a breadcrumb)
- When creating a page for the PIP template, you want to add the 'DashboardTemplate' to your `[name] .tsx'by importing it.
- You can add a template to the page (this is not necessary but makes the code base clean and organized)
  - Create a new folder under `/src/templates`
  - Create a `.tsx` file in `/src/templates/[templateName]`
  - Create a `module.css` file (if necessary) in `/src/templates/[templateName]`

For example, below is a `test.tsx` template with a `testTemplate`.
The code of the `test.tsx` file looks like this:

```TypeScript
// /src/pages/test.tsx
import * as React from "react";
import { DashboardTemplate } from "../templates/dashboard/DashboardTemplate";
import { TestTemplate }from "../templates/testFolder/TestTemplate";

const TestPage: React.FC = () => {
  return (
    <DashboardTemplate>
      <TestTemplate />
    </DashboardTemplate>
  )
};

export default TestPage;
```

The code of the 'TestTemplate' file looks like this:
```TypeScript
// /src/templates/testFolder/TestTemplate.tsx
import * as React from "react";

export const TestTemplate: React.FC = () => {
  return (
    <h4>Hello world!</h4>
  );
};
```

To demonstrate how to add elements like a `sideNav` item. We are going to add one. There is a variable called'menuItems` in the `DashboardTemplate.tsx`. Here you will add the new item.

Replace the `menuItems` codeblock  so it looks like this:
```TypeScript
const menuItems: MenuItem[] = [
  { label: t("Home"), href: "/", current: pathname === "/", icon: <GridIcon /> },
  { label: t("Test page"), href: "/testFolder", current: pathname === "/testFolder", icon: <GridIcon /> }
];
```

Now, if you navigate to `localhost:8000` then click on the `sideNav` item 'Test page'
You should see this:

![Example](./images/testPage.png)

---

## _Adding a detail page_

You can add a new detail page with the following steps:

- Create a new folder under `/src/pages/[name]` (The name of this folder will be the slug and used as a breadcrumb)
- Add the page you created above to the folder
- Create an `index.tsx` file in the folder. This file will import and export the main page
  
The code should look like this:

```Typescript
import TestPage from "../test";

export default TestPage;
```

For example, I added the test file to the folder `testFolder`.
Now go to `localhost:8000/testFolder`.
You will see the same result as above. 

Now it's time to add the detail page
- Create a folder named `[testId]` under the `testFolder` (the square brackets around the name makes Gatsby see this as a variable)
- Create a new file for the detail page. (same as described above)
- Create an index file with the import and export of the detail page

Now go to `localhost:8000/testFolder/testDetai`l. (testDetail can be anything)
You should see this.

![Example](./images/testDetailPage.png)

> **_NOTE_**
> The breadcrumbs will be automatically generated, but we can change this.

To change the breadcrumb, you have to go to the `/pwa/gatsby-config.js` file
Go to the `gatsby-plugin-breadcrumb` block in the file. 
Under options, you can add an array `crumbLabelUpdates`.
Within that array, add an object with `pathName` and `crumbLabel`. 
For the pathName we can add the folder name as it is. `crumbLabel` will be the outcome.

Here I am editing the breadcrumbs of the pages we just created.

"`Typescript
crumbLabelUpdates: [
  {
    pathname: "/testFolder",
    crumbLabel: "Test page",
  },
  {
    pathname: "/testFolder/[testId]",
    crumbLabel: "Test detail page",
  },
]
```

Restart the development server. The breadcrumbs should look like this. 

![Example](./images/breadcrumbs.png)


---
