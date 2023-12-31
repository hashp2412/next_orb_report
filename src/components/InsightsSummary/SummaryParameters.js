function SummaryParameters() {
  //const parameters = [
  //   "Brain",
  //   "Mental Health",
  //   "Fat",
  //   "Skin",
  //   "Hair",
  //   "Cellular Aging",
  //   "Heart",
  //   "Gut",
  //   "Thyroid",
  //   "Lungs",
  //   "Muscle",
  //   "Detox",
  //   "Sleep",
  //   "Cell Nutrition",
  //   "Joints",
  //   "Blood Sugar",
  //   "Inflammation",
  //   "Mens' health",
  // ];
  //const parameter = parameters.map(() => <span></span>);
  return (
    <>
      <div className=" ml-[0.7rem] h-[8rem] w-[22.5rem] md:h-[9.5rem] md:w-[39rem] mt-10 md:ml-10 bg-[#1C1F24] shadow-s border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
       <div className="h-[7rem] w-[37rem] grid grid-rows-3 grid-cols-1 mx-[1.2rem] my-[1.2rem]">

          <div class="flex justify-between w-[16rem] md:w-[36.7rem]">
          <span className="text-[#B2B2B2] text-lg font-normal tracking-widest leading-relaxed uppercase font-sans ">BRAIN :</span>
          
              <span className="flex w-[4rem] md:justify-end md:w-[8rem] md:mr-3 mt-1 ">
              <img src="/dot.svg" className="h-[1rem] md:mt-[.5rem] mt-[0.2rem]"/>
              <span className="text-[#fffdfd] md:mt-[.1rem] font-light mr-2 md:mr-[0.1rem] md:text-[1.25rem] font-roboto tracking-wider md:ml-1">Optimal:</span>
              <span className="text-[#fffdfd] md:mt-[.1rem] font-light  md:text-[1.25rem] md:ml-2 font-roboto tracking-wide">68%</span>
              </span>   
          </div>

          <div className=" w-[20rem] h-[0.6rem] md:w-[36.5rem] md:h-[0.875rem] flex my-auto">
          
          <div className="w-[68%] bg-[#08B7F6] rounded-l-xl"/>
          <div className="w-[12%] bg-[#2D3137]"/>
          <div className="w-[20%] bg-[#444B53] rounded-r-xl"/> 

          </div>
          <div className="flex justify-end mr-[16rem] md:mr-2">
           
              <img src="/graydot.svg" className="h-[1rem] md:mt-[1rem] mt-[0.2rem]"/>
              <span className="font-roboto text-base font-normal text-[#B2B2B2] mr-4 md:mx-2 md:mt-[0.9rem]">Moderate: 20%</span>
              <img src="/lightgray.svg" className="h-[1rem] md:mt-[1rem] mt-[0.2rem]"/>
              <span className="font-roboto text-base font-normal text-[#B2B2B2] md:mx-2 mr-4 md:mt-[0.9rem]">Faulty: 12%</span>
            
          </div>
        </div>
      </div>
     
    </>
  );
}

export default SummaryParameters;
