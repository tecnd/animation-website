import React from "react";

import treasure from "./videos/treasure.mp4";
import wireframe from "./videos/treasureWireframe.mp4";

export default function Treasure() {
  return (
    <div className="flex justify-center align-center items-center flex-col px-1 sm:px-12 md:px-36 max-w-screen-xl mb-24 mx-auto">
      <h1 className="text-2xl">Project 2: Treasure Chest</h1>
      <h2 className="text-xl pb-5">3/3/22</h2>
      <video controls src={wireframe} className="w-full my-3" />
      <video controls src={treasure} className="w-full my-3" />
    </div>
  );
}
