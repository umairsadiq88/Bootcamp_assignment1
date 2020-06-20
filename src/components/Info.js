import React from "react";

function Info(props) {
  console.log(props);

  return (
    <div>
      <h3>Info Page</h3>
      <p>
        {" "}
        My Name is {props.name}. <br />
        My Age is {props.age} <br />
        My hobby is {props.hobby}.{" "}
      </p>
    </div>
  );
}

export default Info;
