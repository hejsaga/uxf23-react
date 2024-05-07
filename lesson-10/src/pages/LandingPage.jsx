import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import PageLayout from "../components/PageLayout";

const LandingPage = () => {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <PageLayout title="Home" headline={`Attention pretended ${userName}!`}>
      <p>
        Performed suspicion in certainty so frankness by attention pretended.
        Newspaper or in tolerably education enjoyment. Extremity excellent
        certainty discourse sincerity no he so resembled. Joy house worse arise
        total boy but. Elderly up chicken do at feeling is. Like seen drew no
        make fond at on rent.
      </p>
      <button className="mt-5" onClick={() => setUserName("Jane Doe")}>
        Change name
      </button>
    </PageLayout>
  );
};

export default LandingPage;
