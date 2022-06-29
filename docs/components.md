# Components

This page consists of the following parts:

- Using packages
- Adding components
  - Basic table
  - Basic form
  - Multistep form
  - Form.io
- API service

---

## _Using packages_

---
The Skeleton app is designed to be modular to save on development time. One of the aspects of this is the compatibility to use components developed from different players in various ecosysems. One of the players in the NL Design System is the municpality of The Hague. These components work especially well with the PIP-template.

Now that we added the pages, let's add some components.

The components we're using are in the [conduction-components package](https://www.npmjs.com/package/@conduction/components) and the [gemeente-denhaag package](https://nl-design-system.github.io/denhaag/?path=/story/den-haag-introduction--page).
these packages are already included in `package.json` and can be used right away.

@TODO more info view, use, and add packages

---

## _Adding components_

---

This guide shows you how to add common page elements like tables and forms to your pages. After that, we will tie it all together
by submitting the form and rendering the data in a table. We assume imports are known to the user as well as React hooks and TypeScript interfaces. If any of the examples below are unclear, please revisit the requirements on the home page of the documentation or the [glossary](glossary.md).

---

### _Basic table_

---

First add the table to `/src/templates/test/[your-example-name].tsx`.

```Javascript

//  /src/templates/test/[your-example-name].tsx
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

Navigate to `localhost:8000` en click on the sideNav item '[your-example-name] page'.
You should see this:

![Table example](./images/table.png)

---

### _Basic form_

---

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

---

## _Multistep forms_

A multi-step form is a long form that is broken into multiple pieces. 
They're used to make long forms, such as shipping or registration forms, less intimidating and daunting. 
By allowing customers to complete their information in smaller chunks, you create a positive user experience and increase conversions.
---


>**NOTE**
> To be able to follow these steps you need an overview and detail page. If you haven't already done this, click [here](pages.md) for the explanation

You always have a beginning and an end of a multi-step form. We can make this generic so that we can reuse it. This is what we're going to start with first.

We will create a template at `cd /pwa/src/templates/multiStep/StartTemplate.tsx`.
In this template we want to divide the structure into three parts with a devider.

1. The subject with a description.
2. The steps to take with a button to continue.
3. More information where to refer to another page

We are going to start adding the first part, the subject with a description.
Because the title and description can change when reusing this template, we will create an interface for this.
The code looks like this.
```Javascript
//  /src/templates/test/TestTemplate.tsx
import * as React from "react";

interface StartTemplateProps {
  title: string;
  description: string;

export const StartTemplate: React.FC<StartTemplateProps> = ({
  title,
  description,
}) => {

  return (null);
};
```

Then in the return of the template we add a div that will contain everything.
In this we add another div where we add a `<Heading>{title}</Heading>` and `<Paragraph>{description}</Paragraph>` of the package `@gemeente-denhaag/components-react`.

```Javascript
//  /src/templates/test/TestTemplate.tsx
import * as React from "react";

interface StartTemplateProps {
  title: string;
  description: string;
}

export const StartTemplate: React.FC<StartTemplateProps> = ({
  title,
  description,
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Heading1>{title}</Heading1>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};
```

We close the first section with a `<Divider />`, then we can continue with the second section of the template.
We'll open another div for this section. In this we place a title with a generic fixed text `<Heading2>What steps can you expect</Heading2>`.
Below we add the List and ListItem from @gemeente-denhaag.
We want to be able to make the ListItem variable. That's why we're going to add a variable to the interface. Because you can add multiple steps, we make this an array.
We also need to make the start button variable. The button has a href and a label.
```Typescript
interface StartTemplateProps {
  title: string;
  description: string;
  processSteps: string[];
  startButton: {
    label: string;
    href: string;
  };
}

export const StartTemplate: React.FC<StartTemplateProps> = ({
  title,
  description,
  processSteps,
  startServiceButton,
})
```

Now we are going to add the List and ListItem to the return, around the list item we map the `processSteps` so that we loop through the array.
For the button we open a div in this we put an onclick function that navigates to the variable `startButton.href`.
In the div we add a `<Button></Button>` containing the `startButton.label`. We end this section with a `<Divider />`.

```Javascript
return (
  <div>
    <div>
      <Heading1>{title}</Heading1>
      <Paragraph>{description}</Paragraph>
    </div>

    <Divider />

    <div>
      <Heading2>What steps can you expect</Heading2>

      <List>
        {processSteps.map((step, idx) => (
          <ListItem key={idx} primaryText={t(step)}></ListItem>
        ))}
      </List>
      <div onClick={() => navigate(startButton.href)}>
        <Button icon={<ArrowRightIcon />} iconAlign="start">
          {startServiceButton.label}
        </Button>
      </div>
    </div>
  
    <Divider />
  </div>
);
```


Now we can start with the third part. Here we are going to post a list that can link through. We are going to use an array containing label and href. You can do the same as in the second step.
The `StartTemplate.tsx` should look like this:

```Javascript
//  /src/templates/moving/StartTemplate.tsx
import * as React from "react";

interface StartTemplateProps {
  title: string;
  description: string;
  processSteps: string[];
  startButton: {
    label: string;
    href: string;
  };
  moreInformationLinks: {
    label: string;
    href: string;
  };
}

export const StartTemplate: React.FC<StartTemplateProps> = ({
  title,
  description,
  processSteps,
  startServiceButton,
  moreInformationLinks
})=> {

  return (
          <div>
            <div>
              <Heading1>{title}</Heading1>
              <Paragraph>{description}</Paragraph>
            </div>

            <Divider />

            <div>
              <Heading2>What steps can you expect</Heading2>

              <List>
                {processSteps.map((step, idx) => (
                        <ListItem key={idx} primaryText={t(step)}></ListItem>
                ))}
              </List>
              <div onClick={() => navigate(startButton.href)}>
                <Button icon={<ArrowRightIcon />} iconAlign="start">
                  {startServiceButton.label}
                </Button>
              </div>
            </div>

            <Divider />
            
            <div>
              <Heading2>More Information</Heading2>
              <List>
                {moreInformationLinks.map((links, idx) => (
                        <ListItem
                                key={idx}
                                primaryText=links.label
                                actionType="nav"
                                onClick={() => navigate(links.href)}
                        />
                ))}
              </List>
            </div>
          </div>
  );
};
```



We can now create the overview page for moving.
We will create an overview page `cd /pwa/src/pages/moving/MovingPage.tsx` with the template `cd /pwa/src/templates/moving/MovingTemplate.tsx`.
Don't forget to add the index page with the import and export of the overview page (`MovingPage.tsx`).


First we want to edit the template in the overview page where we will place the `StartTemplate.tsx` we created in the steps above.
Now we can call the `StartTemplate.tsx` in the template. Here we have to give the title, description, process steps, startButton and moreInformationLinks. The code looks like this:

```Javascript
import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  StartServiceTemplate,
} from "../templateParts/selfServices/startService/StartServiceTemplate";

const MovingTemplate: React.FC = () => {

  const processSteps: string[] = [
    "Choose your current addres",
    "Choose your new address",
    "Log in with DigID",
    "And your set!",
  ];

  const moreInformationLinks = [
    {
      label: "What is a zipcode?",
      href: "#",
    },
    { label: "What do I do when I settle in a different municipality?", href: "#" },
  ];

  return (
    <StartServiceTemplate
      title={"Moving away"}
      description={
        "Are you moving to a different house? Schedule a date and time. And make the official report to the municipality. Note: keep your DigiD to hand."
      }
      startServiceButton={{ label: "Start moving away", href: "/self-services/moving/form" }}
      {...{ processSteps, moreInformationLinks }}
    />
  );
};

export default MovingTemplate;
```

The overview page is now ready.
Now we can go to the detail page. 
First we want to make a provider to be able to change the context.

```Javascript
import * as React from "react";

export interface IMovingServiceData {
  date: string;
  zipCode: string;
  houseNumber: string;
  coMovers: string[];
}

export const movingServiceData = {} as IMovingServiceData;

export const MovingServiceContext = React.createContext<[IMovingServiceData, (data: IMovingServiceData) => void]>([
  movingServiceData,
  () => null,
]);

export const MovingServiceProvider = MovingServiceContext.Provider;
```

We can call the provider in the detail page.
In the service we have to pass a value. For this we create a const with a React.useState value containing the movingServiceData.
In this provider we set up a switch with the forms that we want to display.
what we want to switch is the steps to take. We also make a const of this with a React.useState value containing the first value of the steps.

```Javascript
import * as React from "react";
import { IMovingServiceData, movingServiceData, MovingServiceProvider } from "./MovingServiceContext";
import { DateFormStep, NewAdressFormStep, CoMoversStep, ConfirmFormStep } from "./steps";

export type TMovingFormServiceSteps = "date" | "newAdress" | "coMovers" | "confirm";

export const MovingServiceForm: React.FC = () => {
  const [step, setStep] = React.useState<TMovingFormServiceSteps>("date");
  const [formData, setFormData] = React.useState<IMovingServiceData>(movingServiceData);

  return (
    <MovingServiceProvider value={[formData, setFormData]}>
      <MovingServiceFormStep {...{ step, setStep }} />
    </MovingServiceProvider>
  );
};

interface MovingServiceFormStepProps {
  step: TMovingFormServiceSteps;
  setStep: React.Dispatch<React.SetStateAction<TMovingFormServiceSteps>>;
}

const MovingServiceFormStep: React.FC<MovingServiceFormStepProps> = ({ step, setStep }) => {
  switch (step) {
    case "date":
      return <DateFormStep setNextStep={() => setStep("newAdress")} />;

    case "newAdress":
      return <NewAdressFormStep setNextStep={() => setStep("coMovers")} handleSetStep={setStep} />;

    case "coMovers":
      return <CoMoversStep setNextStep={() => setStep("confirm")} handleSetStep={setStep} />;

    case "confirm":
      return <ConfirmFormStep setPreviousStep={() => setStep("coMovers")} />;
  }
};
```

I explain below how we create a form that can handle the context that we provide. If you haven't followed the tutorial on how to create a form, check it out here first.
Once you've created the form, we still need to make a few minor adjustments.

Create an interface with setNextStep as void. Create a const with value React.useContext(MovingServiceContext).
Enter the set NextStep value at the onSubmit. And wrap the FormStepTemplate around your form.

FormStepTemplate:
```Javascript
import { Link } from "@gemeente-denhaag/components-react";
import * as React from "react";
import * as styles from "./FormStepTemplate.module.css";
import { ArrowLeftIcon } from "@gemeente-denhaag/icons";
import { useTranslation } from "react-i18next";

interface FormStepTemplateProps {
  title: string;
  setPreviousStep?: () => void;
}

export const FormStepTemplate: React.FC<FormStepTemplateProps> = ({ children, setPreviousStep, title }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      <div className={styles.formContainer}>
        {children}

        <div className={styles.previousStep} onClick={setPreviousStep}>
          <Link icon={<ArrowLeftIcon />} iconAlign="start" disabled={!setPreviousStep}>
            {t("Previous step")}
          </Link>
        </div>
      </div>
    </div>
  );
};
```

```Javascript
import * as React from "react";
import { FormFieldInput, FormFieldLabel, Link } from "@gemeente-denhaag/components-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { InputDate } from "../../../components/formFields";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import { FormStepTemplate } from "../../../templates/templateParts/formStep/FormStepTemplate";
import { MovingServiceContext } from "../MovingServiceContext";

interface MovingStepProps {
  setNextStep: () => void;
}

export const DateFormStep: React.FC<MovingStepProps> = ({ setNextStep }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useContext(MovingServiceContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setValue("date", formData.date);
  }, [formData]);

  const onSubmit = (data: any): void => {
    setFormData({ ...formData, date: data.date });
    setNextStep();
  };

  return (
    <FormStepTemplate title={t("On what date are you moving?")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldInput>
          <FormFieldLabel htmlFor="date">{t("Moving date")}</FormFieldLabel>
          <InputDate name="date" {...{ register, errors }} validation={{ required: true }} />
        </FormFieldInput>

        <button type="submit">
          <Link icon={<ArrowRightIcon />} iconAlign="start">
            {t("Next step")}
          </Link>
        </button>
      </form>
    </FormStepTemplate>
  );
};
```

---


### _Form.io_
Forms are a important aspect of web development. How else can we catch user input and make it so much easier for users to submit their information without the need to leave the confort of their homes? That's why we will demonstrate how to implement a form. The tool we use to add (multistep) forms is called [Form.io](https://form.io). This handy tool will save a lot of time on developing (good) forms.

All forms rendered within the Form.io platform are done through the use of a JSON Schema. This schema is used to tell the renderer how to render the form, but also provides a way for the API to automatically be generated to support the form. This documentation provides detailed specification over the structure of the Form JSON Schema, in addition to a component that can be rendered with a Form.

If you reached this part of the documentation, you should have at least one page made so far. If not, you can always go back and [read this](https://conductionnl.github.io/skeleton-app/pages/) again.

Below is an example with the minimum requirements for a form made with form.io. Writing the JSON schema for your form all by yourself is quite extensive, so it's recommended to use a generator for it. We save hours by using [this useful tool](https://kaleguy.github.io/formiojs-client/#/t/36/). Build a form by dragging the elements and a Form JSON is generated below. Copy this JSON entirely and replace the `Paste here the JSON schema` comment.

Rebuild the server just to be sure and view your own form in the browser on `localhost:8000`

``` Javascript

import * as React from "react";

const FormIOPage: React.FC = () => {
  const [formIO, setFormIO] = React.useState<any>(null);

  const formIOSchema = {
   
    // Paste here the JSON schema

  };

  React.useEffect(() => {
    if (formIO) return;

    import("@formio/react").then((formio) => {
      const { Form } = formio;
      setFormIO(<Form src={formIOSchema} onSubmit={console.log} />); // replace the codeblock here send send the form input elsewhere
    });
  }, [formIO]);

  return <>{formIO && formIO}</>;
};

export default FormIOPage;


```

Once you have filled your form with data, submit it and verify the inputs in the browser console. To handle the input differently,
alter the `onSubmit` codeblock in the  `useEffect` hook.

---

## _Adding an API to the ApiService_

Now that you've added the components, tie it all together in the next guide [click here to see the guide](./apiService.md).

---
