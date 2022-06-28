# Development of the Skeleton Application

This page consists of the following parts:

- Adding an API
  - Adding an exiting API
  - Adding an API to the gateway 
- API service
  
---


## Adding a existing API

If you want to use a API thats already online on your app, follow these steps:

- First we add the base url of your API as a variable in the session.
- Get the base url of your API. (example: 'https://cat-fact.herokuapp.com')
- Open `pwa/static/env.js`.
- Add a new variable like: `window.sessionStorage.setItem("CATFACTS_BASEURL", "https://cat-fact.herokuapp.com");`.


- Now we are going to create a client.
- Open `pwa/src/apiService/apiService.ts`.
- Add a new client like:
``` Javascript
  public get CatClient(): AxiosInstance {
    return axios.create({
      baseURL: window.sessionStorage.getItem("CATFACTS_BASEURL") ?? ""
    });
  }
```
- Add headers when needed like: 
``` Javascript
  public get CatClient(): AxiosInstance {
    return axios.create({
      baseURL: window.sessionStorage.getItem("CATFACTS_BASEURL") ?? "",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.getJWT(),
      },
    });
  }
```

- Now we are going to create a resource for the client.
- Copy `pwa/src/apiService/resources/example.ts`.
- Paste it and rename it like: `pwa/src/apiService/resources/catFacts.ts`.
- Uncomment all code.
- Rename the class name like `export default class CatFacts {`.
- Change the endpoint to the proper endpoint (example: `} = await Send(this._instance, "GET", "/facts");`).

- Now we are going to connect the created resource to the created client.
- Open `pwa/src/apiService/apiService.ts`.
- Add a new function like:
``` Javascript
   public get CatFacts(): Example {
     return new CatFacts(this.CatClient);
   }
```

- Now we are going to create a hook for the API resources.
- Copy `pwa/src/hooks/example.ts`.
- Paste it and rename it like: `pwa/src/hooks/catFacts.ts`.
- Uncomment all code.
- Rename the class name like `export default class useCatFacts {`.
- Change the endpoint to the proper endpoint (example: `} = await Send(this._instance, "GET", "/facts");`)

You are ready to go to use this API in your app. Read [fetching and saving data](#.).

## _Adding an API_

To be able to send the form and to show the data in the table we need an api that can handle this.
In [this](https://github.com/CommonGateway/PetStoreAPI#running-the-api-with-the-skeleton-app) guide you can add an exiting API to the skeleton-app.
This guide also explains how to create an API with [Stoplight](https://stoplight.io/)


### _Adding an API to the gateway_
text


## _Adding an API to the ApiService_

The Skeleton Application does API handling via the apiService in the application. The service is built on axios to fetch API data. Using this service saves many lines of code by calling upon methods in the component classes.

You can find the ApiService at `cd pwa/src/apiService/apiService.ts` folder and structured with resources and services. Specific services such as logging are placed in services, and other calls are stored in resources.

If we added the API we can create a `resource` in `cd pwa/src/apiService/resources` or `service` in `cd pwa/src/apiService/services`
We will create a resource file called
- add a file called .tsx file `cd pwa/src/resource/example.tsx` with the following code
  - we want to add a getAll and create function.

The example shown is the Notifications resource:
```Typescript
// /src/apiService/resource/example.ts
import { Send } from "../apiService";
import { AxiosInstance } from "axios";

export default class Example {
  private _instance: AxiosInstance;

  constructor(_instance: AxiosInstance) {
    this._instance = _instance;
  }

  public getAll = async (): Promise<any> => {
    const {
      data: { results },
    } = await Send(this._instance, "GET", "/notifications");

    return results;
  };

  public create = async (variables: { payload: any }): Promise<any> => {
    const { payload } = variables;
    const { data } = await Send(this._instance, "POST", "/notifications", payload);
    return data;
  };
}
```

- then go to `/src/apiService/apiService.ts`
  - here you need to add your resource

```Typescript
// /src/apiService/resource/example.ts
// Resources
import Example from "./resources/example";

// Resources
public get Example(): Example {
  return new Example(this.apiClient);
}
```

Now we want to create `hooks` for the error handling
- add a new page to `/src/hooks` with the following code:
```Typescript
// /src/hooks/example.ts
import * as React from "react";
import { QueryClient, useMutation, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import { navigate } from "gatsby-link";
import { addItem } from "../services/mutateQueries";
import APIContext from "../apiService/apiContext";

export const useExample = (queryClient: QueryClient) => {
  const API: APIService = React.useContext(APIContext);

  const getAll = () =>
    useQuery<any[], Error>("examples", API.Example.getAll, {
      onError: (error) => {
        throw new Error(error.message);
      }
    });

  const create = () =>
    useMutation<any, Error, any>(API.Example.create, {
      onSuccess: async (newNotification) => {
        addItem(queryClient, "notifications", newNotification);
        navigate("/testFolder");
      },
      onError: (error) => {
        throw new Error(error.message);
      }
    });

  return { getAll, create };
};
```

Then we want to handle the form.
Go to `/src/templates/test/TestDetailTemplate` and add/edit the following things
```Typescript
// /src/templates/test/TestDetailTemplate.tsx
const queryClient = useQueryClient();

const _useExample = useExample(queryClient);
const createExample = _useExample.create();

const {
  register,
  handleSubmit,
  formState: { errors },
  setValue
} = useForm();

React.useEffect(() => {
  example && handleSetFormValues(example);
}, [example]);

const handleSetFormValues = (formValues: ITestDetail): void => {
  setValue("title", formValues.title);
  setValue("description", formValues.description);
};

const onSubmit = (data: any) => {
  createExample.mutate({ payload: data });
};
```

// form created -> show result
// add queryclient to the table -> show the result

---


## NEXT STEP...

---
