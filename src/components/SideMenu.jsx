import React from "react";
import { FaSquarePollVertical } from "react-icons/fa6";
import { PiClipboardTextFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";

const SideMenu = () => {
  return (
    <>
      <div className="menu bg-indigo-800 w-56 flex flex-col gap-2 items-center justify-start">
        <div className="flex-1/4 p-3 mb-4 bg-white rounded-xl">
          <a className="btn btn-ghost text-2xl text-slate-900">StudentHub</a>
        </div>
        <div className="text-white w-[8rem] text-lg font-semibold hover:bg-indigo-500 rounded-xl">
          <a>
            <div className="flex flex-row justify-start items-center gap-2 p-3 ">
              <FaSquarePollVertical />
              <h2>Report</h2>
            </div>
          </a>
        </div>
        <div className="text-white w-[8rem] text-lg font-semibold hover:bg-indigo-500 rounded-xl">
          <a>
            <div className="flex flex-row justify-start items-center gap-2 p-3">
              <PiClipboardTextFill />
              <h2>Exam</h2>
            </div>
          </a>
        </div>
        <div className="text-white w-[8rem] text-lg font-semibold hover:bg-indigo-500 rounded-xl">
          <a>
            <div className="flex flex-row justify-start items-center gap-2 p-3">
              <FaCalendarAlt />
              <h2>Schedule</h2>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
