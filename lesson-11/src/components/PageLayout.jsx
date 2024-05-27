import { useEffect } from "react";

const PageLayout = ({ title, headline, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="mx-10 my-10">
      <h1 className="font-bold mb-5">{headline}</h1>
      {children}
    </div>
  );
};

export default PageLayout;
