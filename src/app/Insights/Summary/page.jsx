import Summary from "@/components/InsightsSummary/Summary";
import SummaryParameters from "@/components/InsightsSummary/SummaryParameters";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";
export default function InsightsSummary(params) {
    return(
        <>
        <Navbar/>
        <div className="h-full md:w-[90%] w-[97%] mx-auto ">
        <div className="md:hidden flex justify-between">
          <div className= "text-[#F4F4F4]  mb-2 mt-6 md:mr-32 ml-[0.7rem] font-arca text-2xl ">
            Summary
          </div>
          <div className="text-[#B2B2B2] w-[7rem] mt-[1.8rem] font-poppins text-xs md:ml-[9rem]  ">
              Your Clevo Code
              <span className="text-[#FFF] md:ml-2"> 1010 3431 1200</span>
            </div>
        </div>
        <div className=" flex-col md:hidden mt-6 md:ml-4 ml-[1.5rem]">
          <Link href="Summary/BioMolecules">
            <Summary />
            </Link>
          <Summary />
          <Summary />
          <Summary />
          <Summary />
        </div>
  
        <div className="hidden md:flex mt-4">
          <div className="flex-col h-[80%] flex-1 mt-6 md:mt-16 max-w-[33.33%]">
            <div className="text-[#F4F4F4] font-base md:font-bold arca text-3xl md:ml-6  ">
              Summary
            </div>
            <div className="m-8">
            <Link href="Summary/BioMolecules">
            <Summary />
            </Link>
            </div>
            <div className="m-8">
              <Summary />
            </div>
            <div className="m-8">
              <Summary />
            </div>
          </div>
          <div className="flex-1 ">
            <img
              src="/body.svg"
              alt=""
              className="hidden md:block w-[80%] h-full ml-10 mt-14"
            />
          </div>
          <div className="flex-col h-[80%] flex-1 mt-16 md:max-w-[33.33%]">
            <div className="text-[#B2B2B2] font-poppins text-base md:ml-[9rem]  ">
              Your Clevo Code:
              <span className="text-[#FFF] md:ml-2"> 1010 3431 1200</span>
            </div>
            <div className="m-8">
              <Summary />
            </div>
            <div className="m-8">
              <Summary />
            </div>
            <div className="m-8">
              <Summary />
            </div>
          </div>
        </div>
  
        <div className="mt-8">
          <div className="text-[#F4F4F4] font-base md:font-bold font-poppins text-3xl ml-6 md:ml-8">
            Parameters
          </div>
  
          <div className="hidden md:flex gap-[7%]">
            <div className="flex-col">
              <Link href="/Parameters">
                <SummaryParameters />{" "}
              </Link>
              <SummaryParameters />
              <SummaryParameters />
              <SummaryParameters />
              <SummaryParameters />
              <SummaryParameters />
            </div>
            <div className="flex-col">
              <SummaryParameters />
              <SummaryParameters />
              <SummaryParameters />
              <SummaryParameters />
              <SummaryParameters />
              <SummaryParameters />
            </div>
          </div>
  
          <div className="md:hidden flex-col ml--8">
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
            <Link href="/Parameters">
              <SummaryParameters />{" "}
            </Link>
          </div>
        </div>
      </div>
      </>
    );
}