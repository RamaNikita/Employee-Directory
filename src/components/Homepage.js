import Header from "./Header";
import SearchBar from "./Searchbar";
import EmployeeList from "./EmployeeList";
export default function Homepage(props) {
  return (
    <div className="homepage">
      <Header text={props.text} />
      <div className="search">
        <SearchBar />
      </div>
      <div>
        <EmployeeList />
      </div>
    </div>
  );
}
