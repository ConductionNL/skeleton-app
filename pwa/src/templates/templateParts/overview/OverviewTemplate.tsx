import * as React from "react";
import * as styles from "./OverviewTemplate.module.css";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { useTranslation } from "react-i18next";

export const OverviewTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Heading1>{t("Overview")}</Heading1>
    </div>
  );
};
