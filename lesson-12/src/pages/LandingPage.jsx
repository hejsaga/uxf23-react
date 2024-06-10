import PageLayout from "../components/PageLayout";
import Posts from "./Posts";

const LandingPage = () => {
  return (
    <PageLayout title="Home">
      <h1 className="mb-10">Feed</h1>

      <Posts />
    </PageLayout>
  );
};

export default LandingPage;
