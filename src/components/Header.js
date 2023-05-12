const Header = (props) => {
  return (
    <div className="header">
      {props.text === "Employee" ? <button>&lt;</button> : ""}
      <h2>{props.text}</h2>
    </div>
  );
};
export default Header;
