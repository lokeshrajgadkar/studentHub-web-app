import React from "react";
import { FcAlarmClock } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import LineChartGraph from "./LineChartGraph";
import AreaChartGraph from "./AreaChartGraph";
import RadarChartGraph from "./RadarChartGraph";

const SummaryResport = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row justify-between p-4">
        <h2 className="text-2xl font-bold">Summary Report</h2>
        <div className="">
          <label className="form-control w-[10rem] max-w-xs">
            <select className="select select-bordered select-info">
              <option disabled selected>
                Select Semester
              </option>
              <option>Semester 1</option>
              <option>Semester 2</option>
              <option>Semester 3</option>
              <option>Semester 4</option>
              <option>Semester 5</option>
            </select>
          </label>
        </div>
      </div>

      <div className="flex w-full h-[10rem] rounded-lg p-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl">
        <div className="card text-white text-base font-semibold rounded-box grid h-20 flex-grow place-items-center">
        <h2 className="text-xl font-semibold">Attendance</h2>
          <div className="flex w-full h-full flex-row gap-2 p-3">
            <div className="bg-white p-2 basis-1/4 max-w-[5rem] max-h-[5rem] rounded-full">
            <FcAlarmClock className="w-full h-full" />
            </div>
            <div>
              <div className="indicator flex flex-col justify-center">
                <span className="indicator-item badge badge-accent">95%</span>
                <div className=" p-2 grid h-fit w-fit place-items-center">
                  <p className="text-3xl text-center">134/140</p>
                </div>
              </div>
              <p className="text-balance">Great! Keep attending the classes!</p>
            </div>
          </div>
        </div>

        <div className="divider divider-horizontal divide-neutral-50"></div>

        <div className="card text-white text-base font-semibold rounded-box grid h-20 flex-grow place-items-center">
          <h2 className="text-xl font-semibold">Task</h2>
          <div className="flex w-full h-full flex-row gap-2 p-3">
            <div className="bg-white p-2 basis-1/4 max-w-[5rem] max-h-[5rem] rounded-full">
              <FcTodoList className="w-full h-full" />
            </div>
            <div>
              <div className="indicator flex flex-col justify-center">
                <span className="indicator-item badge badge-accent">95%</span>
                <div className=" p-2 grid h-fit w-fit place-items-center">
                  <p className="text-3xl text-center">134/140</p>
                </div>
              </div>
              <p>Don't forget to turn in your task</p>
            </div>
          </div>
        </div>

        <div className="divider divider-horizontal divide-neutral-50"></div>

        <div className="card text-white text-base font-semibold rounded-box grid h-20 flex-grow place-items-center">
          <h2 className="text-xl font-semibold">Subjects</h2>
          <div className="flex w-full h-full flex-row gap-2 p-3">
            <div className="bg-white p-2 basis-1/4 max-w-[5rem] max-h-[5rem] rounded-full">
              <FcBriefcase className="w-full h-full" />
            </div>
            <div>
              <div className="indicator flex flex-col justify-center">
                <span className="indicator-item badge badge-accent">80%</span>
                <div className=" p-2 grid h-fit w-fit place-items-center">
                  <p className="text-3xl text-center">12/15</p>
                </div>
              </div>
              <p>You took 12 subjects in this semster</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center p-4">
        <div className="w-full h-full p-3">
            <AreaChartGraph/>
        </div>

        <div className="w-full h-full p-3">
            <RadarChartGraph/>
        </div>
      </div>
    </div>
  );
};

export default SummaryResport;
