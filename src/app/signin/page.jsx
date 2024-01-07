import Image from 'next/image'

export default function SignIn() {
    return (
        <div className="flex items-center gap-[4rem] mt-[20%] md:ml-[24.5%] ml-[10%] md:mt-[5%] h-[25rem] md:h-[32rem] md:w-[55%] w-[80%] bg-[#1C1F24] shadow-s border-[0.5px] border-solid border-zinc-600/20 blur-0 rounded-3xl">
          <div className=" md:w-[40rem] md:h-[27rem] md:mt-[2.5rem] flex items-center gap-[4rem] ml-[5.5rem]">
            <div className="w-[70%] md:w-[40%] h-full">
              <div className="text-[#FFF] font-roboto text-4xl md:text-3xl font-sm md:my-[1.8rem] whitespace-nowrap">Sign In</div>
              <div className="flex-col mt-[5rem]">
                <form>
                  <div className="flex-col">
                    <div className="mb-1  w-full">
                      <label className="text-[#B2B2B2] font-roboto md:text-lg text-xl whitespace-nowrap">Clevo code</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="bg-transparent border-b-[1px] border-b-[#2E333B] w-full font-roboto md:mb-0 mb-2"
                        
                      />
                    </div>
                  </div>
    
                  <div className="flex-col mt-4">
                  <div className=''>
    
                  <label className="text-[#B2B2B2] whitespace-nowrap md:text-lg text-xl ">Mobile Number</label></div>
                    <div className="flex">
                  <span className="bg-transparent border-b-[1px] border-b-[#2E333B] font-roboto mr-2 w-10 text-[#B2B2B2]">+91</span>
                    <input
                      type="text"
                      className="bg-transparent border-b-[1px] border-b-[#2E333B] w-full"
                    /></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-[40%] mt-2 mr-16 hidden md:block">
              <img src="/login.svg" height="1000" width="1000" className="" />
            </div>
          </div>
        </div>
      );
}
