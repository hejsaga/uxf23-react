const Header = () => {
  const goToGoogle = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="header">
      <p>Saga's gallery</p>
      <button onClick={goToGoogle}>Go to Google</button>
    </div>
  );
};

export default Header;
