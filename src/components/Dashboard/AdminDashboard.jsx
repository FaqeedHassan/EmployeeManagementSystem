import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className=" h-screen w-full p-10">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTask data={props.data} />
    </div>
  );
};

export default AdminDashboard;
