import * as React from "react";
import { FooterTemplate } from "./templates/templateParts/footer/FooterTemplate";
import { HeaderTemplate } from "./templates/templateParts/header/HeaderTemplate";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <>
      <HeaderTemplate />
      {children}
      <FooterTemplate />
    </>
  );
};
