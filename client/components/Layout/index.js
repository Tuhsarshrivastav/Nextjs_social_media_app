import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head></Head>
      <Header />
      <main style={{ minHeight: "78.5vh" }}>{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Social Media App",
};

export default Layout;
