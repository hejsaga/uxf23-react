import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PageLayout from "../components/PageLayout";
import { Form } from "../components/Form";

const LandingPage = () => {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <PageLayout title="Home">
      <Form />
    </PageLayout>
  );
};

export default LandingPage;
