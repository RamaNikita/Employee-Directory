import React from "react";
import "./style.css";
import Homepage from "./components/Homepage";
import EmployeePage from "./components/EmployeePage";
export default function App() {
  // const arr = [
  //   {
  //     name: "James King",
  //     jobTitle: "President and CEO",
  //     Office: "781-000-0002",
  //     sms: "781-000-0002",
  //     mobile: "781-000-0002",
  //     email: "jking@fakemail.com",
  //   },
  // ];
  return (
    <div className="app">
      <Homepage text="Employee Directory" />
      <EmployeePage text="Employee" />
    </div>
  );
}
