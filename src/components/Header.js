const Header = ({ toggleAdd }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button onClick={toggleAdd}>Add</button>
    </header>
  );
};

export default Header;
