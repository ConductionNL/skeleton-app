import * as React from "react";
import * as styles from "./Layout.module.css";
import "./../translations/i18n";
import APIContext, { APIProvider } from "../apiService/apiContext";
import APIService from "../apiService/apiService";
import { GatsbyProvider, IGatsbyContext } from "../context/gatsby";
import { StylesProvider } from "@gemeente-denhaag/components-react";
import { isLoggedIn } from "../services/auth";
import { Head } from "./Head";
import { AuthenticatedLayout } from "./AuthenticatedLayout";
import { UnauthenticatedLayout } from "./UnauthenticatedLayout";

interface LayoutProps {
  children: React.ReactNode;
  pageContext: any; // Gatsby pageContext
  location: any; // Gatsby location
}

const Layout: React.FC<LayoutProps> = ({ children, pageContext, location }) => {
  const [API, setAPI] = React.useState<APIService>(React.useContext(APIContext));
  const [gatsbyContext, setGatsbyContext] = React.useState<IGatsbyContext>({ ...{ pageContext, location } });

  React.useEffect(() => {
    setAPI(new APIService());
  }, []);

  React.useEffect(() => {
    setGatsbyContext({ ...{ pageContext, location } });

    const JWT = sessionStorage.getItem("JWT");

    !API.authenticated && JWT && API.setAuthentication(JWT);
  }, [pageContext, location]);

  return (
    <>
      <Head />

      <div className={styles.container}>
        <GatsbyProvider value={gatsbyContext}>
          <APIProvider value={API}>
            <StylesProvider>
              {isLoggedIn() ? <AuthenticatedLayout {...{ children }} /> : <UnauthenticatedLayout {...{ children }} />}
            </StylesProvider>
          </APIProvider>
        </GatsbyProvider>
      </div>
    </>
  );
};

export default Layout;
