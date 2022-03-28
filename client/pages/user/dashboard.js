import React from "react";
import UserRoute from "../../routes/UserRoute";
import Layout from "./../../components/Layout/index";

const dashboard = () => {
  return (
    <Layout>
      <UserRoute>
        <h1>Dashboard Page</h1>
      </UserRoute>
    </Layout>
  );
};

export default dashboard;
