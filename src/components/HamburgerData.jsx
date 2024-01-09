import React from "react";
import profile from "../assets/profile-pic.png";
import { IoIosArrowDown } from "react-icons/io";
import home from "../assets/home.png";
import orders from "../assets/orders.png";
import products from "../assets/products.png";
import delivery from "../assets/delivery.png";
import marketing from "../assets/marketing.png";
import analytics from "../assets/analytics.png";
import payouts from "../assets/payouts.png";
import discounts from "../assets/discount.png";
import audience from "../assets/audience.png";
import appearance from "../assets/appearance.png";
import plugins from "../assets/plugins.png";
import { CiWallet } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const HamburgerData = ({ setIsHamburgerClicked }) => {
  const sidebarOptions = [
    {
      icon: home,
      name: "Home",
    },
    {
      icon: orders,
      name: "Orders",
    },
    {
      icon: products,
      name: "Products",
    },
    {
      icon: delivery,
      name: "Delivery",
    },
    {
      icon: marketing,
      name: "Marketing",
    },
    {
      icon: analytics,
      name: "Analytics",
    },
    {
      icon: payouts,
      name: "Payouts",
    },
    {
      icon: discounts,
      name: "Discounts",
    },
    {
      icon: audience,
      name: "Audience",
    },
    {
      icon: appearance,
      name: "Appearance",
    },
    {
      icon: plugins,
      name: "Plugins",
    },
  ];

  const renderedOptions = sidebarOptions.map((option) => {
    return (
      <div
        className={`flex gap-3 items-center text-white py-2 px-4 ${
          option.name === "Payouts" ? "bg-white/10 rounded-[4px]" : ""
        }`}
      >
        <img src={option.icon} alt="decoration" className="w-[17px]" />
        <p
          className={`text-[14px] ${
            option.name === "Payouts" ? "font-semibold" : ""
          }`}
        >
          {option.name}
        </p>
      </div>
    );
  });

  return (
    <div className="fixed inset-0 flex flex-col gap-10 justify-between py-4 px-3 bg-[#1E2640] min-h-screen border-2">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center text-white">
          <div className="flex gap-3">
            <img src={profile} alt="" />
            <div className="flex flex-col">
              <span className="text-[15px]">Nishyan</span>
              <a href="#" className="text-[13px] underline">
                Visit store
              </a>
            </div>
          </div>
          <div className="flex gap-2">
            <IoIosArrowDown className="cursor-pointer" />
            <RxCross2 onClick={() => setIsHamburgerClicked(false)} />
          </div>
        </div>
        <div className="flex flex-col">{renderedOptions}</div>
      </div>
      <div className="flex gap-2 items-center bg-[#353C53] rounded-[4px] text-white py-[8px] px-[12px]">
        <CiWallet className="text-4xl bg-white/10 px-1 py-1 rounded-[4px]" />
        <div>
          <p className="text-[12px]">Available credits</p>
          <span className="text-[16px] font-medium">222.10</span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerData;
