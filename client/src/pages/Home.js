import React from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "../components/context/auth";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ecommarce - home page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>home page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </>
  );
};

export default Home;
