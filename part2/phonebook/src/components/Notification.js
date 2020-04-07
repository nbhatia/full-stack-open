import React from "react";

const Notification = ({ notification }) => {
  const ERROR_COLOR = "red";
  const SUCCESS_COLOR = "green";

  const errorStyle = {
    color: ERROR_COLOR,
    borderColor: ERROR_COLOR,
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  };

  const infoStyle = {
    ...errorStyle,
    color: SUCCESS_COLOR,
    borderColor: SUCCESS_COLOR
  };

  if (notification.msg === null) {
    return null;
  }

  const msgStyle = notification.type === "error" ? errorStyle : infoStyle;

  return <div style={msgStyle}>{notification.msg}</div>;
};

export default Notification;
