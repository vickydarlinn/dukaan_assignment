import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";

const TransactionCard = () => {
  const [payouts] = useState(22);
  const [refunds] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      refundDate: "2024-01-01",
      transactionId: "TRCN123",
      orderAmount: "$100",
      orderId: "281563",
      status: "Successful",
    },
    {
      refundDate: "2024-01-01",
      transactionId: "TRCN123",
      orderAmount: "$100",
      orderId: "281563",
      status: "Processing",
    },
    {
      refundDate: "2024-01-01",
      transactionId: "TRCN123",
      orderAmount: "$100",
      orderId: "281563",
      status: "Successful",
    },
    {
      refundDate: "2024-01-01",
      transactionId: "TRCN123",
      orderAmount: "$100",
      orderId: "281563",
      status: "Processing",
    },
    {
      refundDate: "2024-01-01",
      transactionId: "TRCN123",
      orderAmount: "$100",
      orderId: "281563",
      status: "Successful",
    },
    {
      refundDate: "2024-01-01",
      transactionId: "TRCN123",
      orderAmount: "$100",
      orderId: "281563",
      status: "Successful",
    },
    {
      refundDate: "2024-01-01",
      transactionId: "TRCN123",
      orderAmount: "$100",
      orderId: "281563",
      status: "Processing",
    },
  ];

  return (
    <section className=" w-full overflow-hidden p-3 ">
      <h2 className=" text-2xl pt-10 font-medium py-5">
        Transactions | This month
      </h2>
      <div className="flex items-center gap-4 md:py-3 ">
        <button className="border px-4 py-1 rounded-3xl bg-[#e6e6e6] text-[#808080]">
          Payouts ({payouts})
        </button>
        <button className="border px-4 py-1 rounded-3xl bg-[#126eb4] text-white">
          Refunds ({refunds})
        </button>
      </div>

      <div className="flex justify-between p-2 py-5 gap-5">
        <div className="flex w-full  md:w-64">
          <input
            type="text"
            placeholder="Order ID or Transaction ID"
            className="text-gray-400 outline-none border border-gray-400 rounded-md px-2 py-1 w-full"
          />
        </div>
        <div className=" flex gap-3">
          <div className="border px-2 py-1 rounded-lg flex items-center gap-2 text-[#4d4d4d] cursor-pointer ">
            <span>Sort</span>{" "}
            <span>
              <TbArrowsSort />
            </span>
          </div>
          <div className=" cursor-pointer border px-2 py-1 rounded-lg flex justify-center items-center">
            <BsDownload />
          </div>
        </div>
      </div>
      {/* table  */}
      <div className="overflow-auto  bg-white pt-5">
        <table className="w-full text-[#4D4D4D]  ">
          <thead className="bg-[#F2F2F2]  text-left   capitalize rounded-md">
            <tr className=" tracking-wider ">
              <th scope="col" className="px-6 py-3 font-medium   ">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium  ">
                Status
              </th>
              <th scope="col" className="px-6 py-3 font-medium  ">
                Transaction ID
              </th>
              <th scope="col" className="px-6 py-3  font-medium ">
                Refund Date
              </th>
              <th scope="col" className="px-6 py-3 font-medium  ">
                Order Amount
              </th>
            </tr>
          </thead>

          <tbody className="bg-white text-[#4D4D4D] divide-y divide-gray-200 font-medium text-left ">
            {data.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-[#126eb4] cursor-pointer">
                  #{row.orderId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2 items-center">
                  <span
                    className={`${
                      row.status === "Successful"
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    <FaCircle />
                  </span>
                  <span>{row.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.transactionId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.refundDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.orderAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className="flex w-full lg:justify-center justify-between items-center gap-20 md:px-5 lg:px-0 py-5">
        <div
          className={`border  cursor-pointer px-5 py-2 w-24 flex items-center justify-center ${
            currentPage == 1 ? "invisible" : "visible"
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </div>
        <div className="hidden lg:flex gap-10">
          {" "}
          {Array.from({ length: 8 }, (_, index) => index + 1).map((page) => (
            <span
              key={page}
              className={`cursor-pointer w-5 h-5 flex justify-center items-center p-4 rounded-sm ${
                currentPage === page ? "text-white bg-[#136db4] " : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </span>
          ))}
        </div>
        <div
          className={`border cursor-pointer px-5 py-2 w-24 flex items-center justify-center ${
            currentPage == 8 ? "invisible" : "visible"
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </div>
      </div>
    </section>
  );
};

export default TransactionCard;
