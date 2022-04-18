import React from "react";

function App() {
  console.log(window.ipcRenderer);

  return (
    <div className="h-screen w-screen  flex justify-center items-center">
      <div className="text-5xl font-extrabold">
        <span className="bg-clip-text  text-transparent bg-gradient-to-r from-red-500 to-blue-500">
          Electron * ts * tailwind * vite
        </span>
      </div>
    </div>
  );
}

export default App;
