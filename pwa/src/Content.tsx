import * as React from "react";
import * as styles from "./Content.module.css";
import { Container } from "@conduction/components";
import { ArrowRightIcon } from "@gemeente-denhaag/icons";
import {
  Divider,
  Heading1,
  Heading2,
  Heading3,
  LeadParagraph,
  Link,
  Paragraph,
  Tab,
  TabContext,
  TabPanel,
  Tabs,
} from "@gemeente-denhaag/components-react";
import clsx from "clsx";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = () => {
  const [selectedTemplate, setSelectedTemplate] = React.useState<"pip" | "website" | "dashboard">("pip");
  const [currentTab, setCurrentTab] = React.useState<number>(0);
  const [content, setContent] = React.useState<any>(detailContent["pip"]);

  React.useEffect(() => {
    setContent(detailContent[selectedTemplate]);
  }, [selectedTemplate]);

  return (
    <Container>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <Heading1>Welcome to the Skeleton Application</Heading1>

          <Link target="_blank" href="https://conduction.nl" icon={<ArrowRightIcon />} iconAlign="start">
            Created by Conduction
          </Link>
        </div>

        <Divider />

        <div className={styles.textContainer}>
          <Heading2>Step one: pick your template</Heading2>

          <LeadParagraph>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed
            consectetur. Donec ullamcorper nulla non metus auctor fringilla.
          </LeadParagraph>
        </div>

        <div className={styles.templatesGrid}>
          <div
            className={clsx(styles.templateCard, selectedTemplate === "pip" && styles.active)}
            onClick={() => setSelectedTemplate("pip")}
          >
            <Heading3>PIP</Heading3>

            <Paragraph>Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.</Paragraph>
          </div>

          <div
            className={clsx(styles.templateCard, selectedTemplate === "website" && styles.active)}
            onClick={() => setSelectedTemplate("website")}
          >
            <Heading3>Website</Heading3>

            <Paragraph>Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.</Paragraph>
          </div>

          <div
            className={clsx(styles.templateCard, selectedTemplate === "dashboard" && styles.active)}
            onClick={() => setSelectedTemplate("dashboard")}
          >
            <Heading3>Dashboard</Heading3>

            <Paragraph>Coming soon.</Paragraph>
          </div>
        </div>

        <TabContext value={currentTab.toString()}>
          <Tabs
            value={currentTab}
            onChange={(_, newValue: number) => {
              setCurrentTab(newValue);
            }}
          >
            <Tab label="Introduction" value={0} />
            <Tab label="Local installation guide" value={1} />
          </Tabs>

          <TabPanel className={styles.tabPanel} value="0">
            <div className={styles.tabHeading}>
              <Heading3>{content.introduction.title}</Heading3>

              {content.introduction.linkToLive && (
                <Link
                  target="_blank"
                  href={content.introduction.linkToLive.href}
                  icon={<ArrowRightIcon />}
                  iconAlign="start"
                >
                  {content.introduction.linkToLive.label}
                </Link>
              )}
            </div>

            {content.introduction.content}

            <Link
              target="_blank"
              href="https://github.com/ConductionNL/skeleton-app/tree/development"
              icon={<ArrowRightIcon />}
              iconAlign="start"
            >
              Skeleton Application documentation
            </Link>
          </TabPanel>

          <TabPanel className={styles.tabPanel} value="1">
            <Heading3>{content.installation.title}</Heading3>

            {content.installation.content}

            <Link
              target="_blank"
              href="https://github.com/ConductionNL/skeleton-app/tree/development"
              icon={<ArrowRightIcon />}
              iconAlign="start"
            >
              Skeleton Application documentation
            </Link>
          </TabPanel>
        </TabContext>
      </div>
    </Container>
  );
};

const detailContent: any = {
  ["pip"]: {
    introduction: {
      title: "PIP Template",
      linkToLive: {
        label: "Live PIP implementation",
        href: "https://mijn.commonground.nu",
      },
      content: (
        <>
          <LeadParagraph>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur
            ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.
          </LeadParagraph>

          <LeadParagraph>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur
            ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.
          </LeadParagraph>
        </>
      ),
    },
    installation: {
      title: "Getting started",
      content: (
        <>
          <ol className={styles.list}>
            <li>
              <Paragraph>Stop your development server</Paragraph>
            </li>
            <li>
              <Paragraph>
                Navigate to the source folder of this repository (note: this is the starting folder and NOT the 'src'
                folder of this project)
              </Paragraph>
            </li>
            <li>
              <Paragraph>Run the following command</Paragraph>
              <Paragraph className={styles.code}>
                cp pwa/src/skeleton-implementations/pip/Content.tsx pwa/src/ && <br />
                rsync -r pwa/src/skeleton-implementations/pip/layout pwa/src/ && <br />
                rsync -r pwa/src/skeleton-implementations/pip/pages pwa/src/ && <br />
                rsync -r pwa/src/skeleton-implementations/pip/templates pwa/src/ && <br />
                rsync -r pwa/src/skeleton-implementations/pip/templates/templateParts pwa/src/templates/ && <br />
                rm -rf pwa/src/skeleton-implementations
              </Paragraph>
            </li>
            <li>
              <Paragraph>Start your development server</Paragraph>
            </li>
          </ol>
        </>
      ),
    },
  },
  ["website"]: {
    introduction: {
      title: "Website Template",
      linkToLive: {
        label: "Live Website implementation",
        href: "https://opencatalogi.nl",
      },
      content: <LeadParagraph>Coming soon</LeadParagraph>,
    },
    installation: {
      title: "Getting started",
      content: "Coming soon",
    },
  },
  ["dashboard"]: {
    introduction: {
      title: "Coming soon",
    },
    installation: {
      title: "Getting started",
      content: "Coming soon",
    },
  },
};
