import ClockParent from "./ClockParent";

const App = () => {
  const showParagraph = true;
  return (
    <>
      <h1>Hello</h1>
      {showParagraph && <p>Here be paragraph</p>}

      <ClockParent />
    </>
  );
};

export default App;
