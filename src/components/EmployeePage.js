// import EmployeeList from "./EmployeeList";
import Header from "./Header";
export default function EmployeePage(props) {
  return (
    <>
      <div className="employeepage">
        <div className="employeeHeader">
          <Header text={props.text} />
          <div className="main">
            <div className="info">
              <img className="employeeImage" src="./images/E1.png" alt="icon" />
              <div>
                <h2>James King</h2>
                <h2>President and CEO</h2>
              </div>
            </div>
            <div className="info">
              <h5>Call Office</h5>
              <p>781-000-0002</p>
              {/* <button>&gt;</button> */}
            </div>
            <div className="info">
              <h5>Call Mobile</h5>
              <p>781-000-0002</p>
              {/* <button>&gt;</button> */}
            </div>
            <div className="info">
              <h5>SMS</h5>
              <p>781-000-0002</p>
              {/* <button>&gt;</button> */}
            </div>
            <div className="info">
              <h5>Email</h5>
              <p>jKing@fakemail.com</p>
              {/* <button>&gt;</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
