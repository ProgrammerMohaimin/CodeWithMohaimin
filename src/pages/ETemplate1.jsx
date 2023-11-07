import React from "react";
import Aside from "../components/Aside";

const Template1 = () => {
  return (
    <div className="flex">
      <Aside />
      {/* -------------------------- */}{" "}
      <div className="-z-10 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 sticky top-0 left-0 w-full">
        <div className="flex justify-center items-center gap-3 text-white flex-wrap p-4 md:p-4">
          <h1>Hello Template 1</h1>
        </div>
      </div>
    </div>
  );
};

export default Template1;
