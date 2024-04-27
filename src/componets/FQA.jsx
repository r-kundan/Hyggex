import React from "react";

function FQA() {
    
  return (
   <div className=" gap-16 flex flex-col ">
     <div className="flex justify-between flex-col gap-4 md:flex-row">
      <div className="flex">
        <p className="w-16 h-16 rounded-full bg-white flex justify-center items-center shadow-outer">
          <svg
            className="w-8 h-8 fill-[#051b92]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M465.4 409.4l87.1-150.2-32-.3-55.1 95L259.2 0 23 407.4l32 .3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.5 .1-235.8-404.6z" />
          </svg>
        </p>
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-slate-500">Published by</h6>
          <div className="text-3xl text-[#051b92] p-2 flex items-center ">
            Hygge<span className="font-extrabold">X</span>
          </div>
        </div>
      </div>

      <div className="flex">
        <p className="w-16 h-16 rounded-full bg-gradient-to-bl from-[#031684] to-[#157df5] flex justify-center items-center">
         
        <svg className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg> 
        </p>
        <div className="flex flex-col justify-center items-center">
          
          <div className="text-3xl text-[#051b92] p-2 flex items-center ">
       Create Flashcard
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold text-[#051b92]">
            FAQ
        </h1>
       
               <div className="flex flex-col justify-center items-center md:items-start  gap-7">
               <select className="border-2 border-[#051b92] p-3 rounded-xl h-16 text-wrap md:w-[40rem] text-sm w-96">
                        <option value="option1">Can education flashcards be used for all age groups?</option>
                       
                    </select>
                    <select className="border-2 text-sm  border-[#051b92] h-16 text-wrap p-3 rounded-xl md:w-[40rem] w-96">
                        <option value="option1">How do education flashcards work?</option>
                       
                    </select>
                    <select className="border-2 text-sm text-wrap border-[#051b92] p-3 rounded-xl md:w-[40rem] w-96 h-16">
                        <option value="option1">Can education flashcards be used for test preparation?</option>
                       
                    </select>
               </div>
    </div>
   </div>
  );
}

export default FQA;
