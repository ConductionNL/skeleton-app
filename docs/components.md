# Development of the Skeleton Application

This page consists of the following parts:

- Using packages
- Adding components
  - Basic table
  - Basic form
  - Multistep form
  - Form.io
- API service

## _Using packages_

Now that we added the pages we can add components to it.
The components we are going to use are in the [conduction-components package](https://www.npmjs.com/package/@conduction/components) and the [gemeente-denhaag package](https://nl-design-system.github.io/denhaag/?path=/story/den-haag-introduction--page).
these packages are already included in `package.json` and can be used

@TODO more info view, use and add packages

--- 

## _Adding components_

In this guide I will show you how you can add a table on the main page and a form on the detail page.
After that we will tie it all together by posting the form and rendering the data in the table.


### _Basic table_
First add the table to `/src/templates/test/TestTemplate.tsx`.

```Javascript
//  /src/templates/test/TestTemplate.tsx
import * as React from "react";
import { Button, Heading3 } from "@gemeente-denhaag/components-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@gemeente-denhaag/table";

export const HomeTemplate: React.FC = () => {
  return (
    <div>
      <div> 
        <Heading3>Meldingen</Heading3> 
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Titel</TableHeader>
              <TableHeader>Omschrijving</TableHeader>
              <TableHeader>Datum</TableHeader>
              <TableHeader><Button>Melding doen</Button></TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Test melding</TableCell>
              <TableCell>Dit is een test melding</TableCell>
              <TableCell>01-01-2022</TableCell>
              <TableCell/>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
```

Now go to localhost:800 en click on the sideNav item 'Test page'.
You should see this:

![Table example](./images/table.png)


### _Basic form_
Then add the form `/src/templates/test/TestDetailTemplate.tsx`

```Javascript
// /src/templates/test/TestDetailTemplate.tsx
import * as React from "react";
import { useForm } from "react-hook-form";
import { Button, FormField, FormFieldInput, FormFieldLabel } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";
import { InputText, Textarea } from "@conduction/components";

interface ITestDetail {
  title: string;
  description: string;
}

interface TestDetailProps {
  example?: ITestDetail;
}

export const TestDetailTemplate: React.FC<TestDetailProps> = ({ example }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  //the empty onSubmit is dependent on an API to function. This API is not yet implemented
  const onSubmit = async () => {};
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormFieldInput>
          <FormFieldLabel>Titel</FormFieldLabel>
          <InputText {...{ register, errors }} validation={{ required: true }} name="title" />
        </FormFieldInput>
      </FormField>
      <FormField>
        <FormFieldInput>
          <FormFieldLabel>Omschrijving</FormFieldLabel>
          <Textarea {...{ register, errors }} name="message" validation={{ required: true }} />
        </FormFieldInput>
      </FormField>
      <Button size="large" type="submit">
        Verzenden
      </Button>
    </form>
  );
};
```

Now we can link the table to the form
Edit the button in the table to: 

```Javascript
//  /src/templates/test/TestTemplate.tsx
<Button onClick={() => navigate("/testFolder/testDetail")}>Melding doen</Button>
```

Click on the button.
You should see this:

![Form Example](./images/form.png)


### _Multistep form_

here documentation for adding a multistep form

### _Form.io_

here documentation for adding a form.io form

---

## _Adding an API to the ApiService_

Now that you've added the components we can tie it all together [click here to see the guide](./apiService.md).

---