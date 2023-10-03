import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ecommarce - home page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>home page</h1>
    </>
  );
};

export default Home;
