import React from "react";
import Image from "next/image";
function LoggedIN() {
  return (
    <div  className=" flex h-screen justify-center items-center  px-12 bg-slate-800">
      
      <div className=" bg-white border-2  px-10 py-11 shadow-2xl rounded-xl">

      <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Microsoft_Account.svg"   width={100} height={100} alt ="" className="p-11"/>
        <h2 className="text-lg font-semibold">Welcome User</h2>
      </div>
      </div>
    
  );
}

export default LoggedIN;
