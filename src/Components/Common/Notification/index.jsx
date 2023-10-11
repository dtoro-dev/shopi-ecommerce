/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./style.css";

const Notification = ({ show, title, message, setShow }) => {
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    if (show) {
      setVisible(show);
      setTimeout(() => {
        setVisible(false);
        setShow(false);
      }, 2000);
    }
  };

  useEffect(() => {
    handleVisibility();
  }, [show]);
  
  return (
    <div
      className={`notification rounded-lg border border-red-800 fixed bottom-0 right-0 p-4 m-4 transition duration-300 z-30 ${
        visible && show ? "opacity-100 bg-red-400" : "opacity-0"
      }`}
    >
      <div className="flex justify-between items-center">
        <p className="font-bold">{title}</p>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default Notification;
