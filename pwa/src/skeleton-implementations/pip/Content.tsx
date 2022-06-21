import * as React from "react";
import { isLoggedIn } from "../../services/auth";
import { AuthenticatedLayout } from "./layout/AuthenticatedLayout";
import { UnauthenticatedLayout } from "./layout/UnauthenticatedLayout";

export const Content: React.FC = ({ children }) => {
  return isLoggedIn() ? <AuthenticatedLayout {...{ children }} /> : <UnauthenticatedLayout {...{ children }} />;
};
