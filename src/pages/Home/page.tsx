import React, { lazy, Suspense } from "react";
import { Footer, Header } from "../../components";

const Users = lazy(() => import("../../components/Users"));

export const HtmlPage = () => {
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      <br />
      <Suspense fallback={<div>Loading Users...</div>}>
        <Users />
      </Suspense>
      <br />
      <Footer />
    </>
  );
};
