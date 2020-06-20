import React from "react";
import Info from "../Info";

function Login(props) {
  console.log(props);

  return (
    <div>
      <h3>Login Form</h3>
      <p>
        {" "}
        My Name is {props.name}. <br />
        My Age is {props.age} <br />
        My hobby is {props.hobby}.{" "}
      </p>
      <hr />
      <Info name={props.name} age={props.age} hobby={props.hobby} />
    </div>
  );
}

export default Login;
