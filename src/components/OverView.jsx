import { CiCircleQuestion } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";

const Overview = () => {
  return (
    <div className=" p-3">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-medium py-3">Overview</h1>
        <select
          name="selectionOfDays"
          id="days"
          className="border-[1px] border-gray-400 bg-white text-[16px] text-[#4D4D4D] px-2 py-1 rounded-sm"
        >
          <option value="thisMonth">This Month</option>
          <option value="30days">30 days</option>
          <option value="60days">60 days</option>
          <option value="90days">90 days</option>
        </select>
      </div>
      <div className="flex items-start flex-wrap gap-4 ">
        {/* First Component */}
        <div className="bg-[#105890] flex-grow pt-2 text-white rounded-lg">
          <div className="flex items-center gap-2 px-[20px] my-2">
            <h4 className="text-[16px]">Next Payout</h4>
            <CiCircleQuestion />
          </div>
          <div>
            <div className="flex px-[20px] flex-wrap gap-3 justify-between mb-2">
              <span className="text-[32px] font-medium">₹2,312.23</span>
              <div className="flex items-center">
                <a href="#" className=" text-[16px] font-medium underline">
                  23 orders
                </a>
                <FaChevronRight />
              </div>
            </div>
            <div className="flex justify-between  gap-3 flex-wrap text-sm text-[#F2F2F2] font-light bg-[#0E4F82] px-[20px] py-[8px] rounded-b-lg text-[14px]">
              <p>Next payout date:</p>
              <p className="font-medium">Today, 04:00PM</p>
            </div>
          </div>
        </div>
        {/* Second Component */}
        <div className="flex flex-col flex-grow justify-center py-[12px] gap-2 bg-white rounded-lg px-[20px]">
          <div className="flex items-center gap-2">
            <h4 className="text-[#4D4D4D] text-[16px]">Amount Pending</h4>
            <CiCircleQuestion className="text-[#4D4D4D]" />
          </div>
          <div>
            <div className="flex justify-between flex-wrap gap-3">
              <span className="text-[32px] font-medium">₹92,312.20</span>
              <div className="flex items-center ">
                <a
                  href="#"
                  className=" text-[16px] font-medium underline text-[#146EB4]"
                >
                  13 orders
                </a>
                <FaChevronRight className="text-[#146EB4]" />
              </div>
            </div>
          </div>
        </div>
        {/* Third Component */}
        <div className="flex flex-col flex-grow justify-center py-[12px] gap-2 bg-white rounded-lg px-[20px]">
          <div className="flex items-center gap-2  ">
            <h4 className="text-[#4D4D4D] text-[16px]">Amount Processed</h4>
            <CiCircleQuestion className="text-[#4D4D4D]" />
          </div>
          <div>
            <span className="text-[32px] font-medium">₹23,92,312.19</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
