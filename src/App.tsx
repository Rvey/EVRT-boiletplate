import React, { useState } from "react";

function App() {
  console.log(window.ipcRenderer);
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen w-screen  flex justify-center items-center flex-col gap-[5em] font-poppins">
      <div className="">
        <span className=" text-5xl font-extrabold bg-clip-text  text-transparent bg-gradient-to-r from-red-500 to-blue-500">
          Electron * ts * tailwind * vite
        </span>
      </div>
      <div className="text-center flex flex-col">
        {count}
        <button
          className="px-5 py-2 bg-blue-400 m-4 rounded-md font-medium text-white "
          onClick={() => setCount(count + 1)}
        >
          yep
        </button>
      </div>
    </div>
  );
}

export default App;
