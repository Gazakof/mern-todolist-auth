import React from "react";
import { FaCheck } from "react-icons/fa6";

const Toast = ({ isShow, message, type, onClose }) => {
  return (
    <div>
      <div className="flex items-center gap-3 py-2 px-4">
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full`}
        >
          <FaCheck className="text-xl text-green-500" />
        </div>
        <p className="text-sm text-slate-800">Note added successfully</p>
      </div>
    </div>
  );
};

export default Toast;
