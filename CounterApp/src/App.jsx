import { useState } from "react";
import "./App.css";

function App() {
   
  const [count,setCount]=useState(0);//to make changes display on ui too

  function handleDec(){
      setCount(count-1);
  }

  function handleInc(){
    setCount(count+1);
  }

  function handleReset(){
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#06b6d4] flex-col gap-10">
      <div className="font-medium text-3xl">Increament & Decreament</div>
      <div className="bg-white flex justify gap-12  rounded-lg text-[25px] items-center ">
        <button className="py-3 px-3 text-4xl" onClick={handleDec}>
               -  
        </button>
        <div className="text-3xl">
          {count}
        </div>
        <button className="py-3 px-3 text-4xl" onClick={handleInc}>
           +
        </button>
      </div>
      <div>
        <button className="text-2xl text-[#083344] font-medium bg-[#0891b2] py-2 px-4 hover-pointer" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
