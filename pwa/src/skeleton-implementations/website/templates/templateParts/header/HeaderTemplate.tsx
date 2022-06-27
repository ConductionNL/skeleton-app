import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Heading1 } from "@gemeente-denhaag/components-react";
import { Container, PrimaryTopNav, SecondaryTopNav } from "@conduction/components";

export const HeaderTemplate: React.FC = () => {
  const primaryTopNavItems = [{ label: "Home", href: "/" }];
  const secondaryTopNavItems = [{ label: "Common ground", href: "link" }];

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Container layoutClassName={styles.secondaryNavContainer}>
          <SecondaryTopNav items={secondaryTopNavItems} />
        </Container>
      </div>

      <Container layoutClassName={styles.headingContainer}>
        <Heading1 className={styles.title}>Title</Heading1>
        <span className={styles.subTitle}>Sub title</span>
      </Container>

      <Container>
        <PrimaryTopNav items={primaryTopNavItems} />
      </Container>
    </header>
  );
};
