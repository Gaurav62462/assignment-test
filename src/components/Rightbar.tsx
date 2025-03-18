import { useState } from "react"
import { TabsType } from "../constant/types"
import { Tabs } from "./Tabs"
import CustomButton from "../CustomButton"
const tabs = [
  { label: 'Comment', value: 'comment' },
  { label: 'Query', value: 'query' }
]

interface TitleProps {
  title: string;
}
const Rightbar = () => {
  const [activeTab, setActiveTab] = useState("comment");
  const [paymentStatus, setPaymentStatus] = useState("paid");
  const [lineItem, setLineItem] = useState("single");
  const [isOpen, setIsOpen] = useState(false);


  const SectionHeader: React.FC<TitleProps> = ({ title }) => {
    return (
      <div className="flex items-center justify-between pb-4 border-b-[1px] border-gray_200">
        <img src={'images/arrow-l.svg'} alt="left arrow" />
        <h2 className="text-[16px] font-bold">{title}</h2>
        <img src={'images/arrow-r.svg'} alt="right arrow" />
      </div>
    );
  };


  return (
    <>
       <button
        className="fixed top-4 right-4 z-50 md:hidden bg-black text-white p-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '==' : 'X'}
      </button>

    <aside className={`bg-white h-screen px-6 py-5 flex flex-col shadow-lg border-l transition-all duration-300 ease-in-out
          ${isOpen ? "w-[80%] fixed top-0 right-0" : "w-0 md:w-[23%] md:relative md:block"} 
          overflow-hidden md:overflow-auto`}>
      <div className='flex   p-4 items-start flex-col border-[1px] border-gray_200'>
        <div className='flex  justify-between w-full'>
          <div className="flex items-start ">
            <img src={'images/quickbooks.svg'} alt='logo' />
            <div className=' ml-3'>
              <p className='text-[16px] text-black_500 font-bold'>
                Quickbook
              </p>
              <p className='text-[12px] text-velvel_curtain font-medium'>
                16 June, 2024
              </p>
              <p className='text-[12px] text-velvel_curtain font-medium'>
                8:15 PM
              </p>
            </div>
          </div>
          <p className='text-[12px] text-velvel_curtain font-bold'>
            Publishing...<br />
            Jimmy Jason
          </p>
        </div>
        <div className='flex items-start justify-between w-full mt-4'>
          <div className='flex items-center '>
            <input type="checkbox" className="mr-3 w-[18px] h-[18px]" />
            <p className="text-black_500 text-[16px] font-medium">Auto-sync</p>
          </div>
          <div className='flex items-center'>
            <input type="checkbox" className="mr-3 w-[18px] h-[18px]" />
            <p className="text-black_500 text-[16px] font-medium">Save Config</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Tabs tabs={tabs} tabsClick={(val: TabsType) => setActiveTab(val.value)} initialActive='comment' />
      </div>

      <div className="max-w-lg mx-auto p-4 bg-white rounded-lg  h-screen overflow-auto">

        <div className="">
          <textarea
            placeholder="Type Comment"
            className="w-full p-2 border-b-2 "
          ></textarea>
          <CustomButton className="w-full mt-6 bg-[#F6F6F6] text-velvel_curtain text-[13px] font-medium rounded-[8px]">
            Add Comment
          </CustomButton>
          <CustomButton className="w-full mt-6 bg-blue_500 text-white text-[14px] font-medium rounded-[8px]">
            View Line Items
          </CustomButton>
        </div>

        <div className="mt-4 pt-4">
          <SectionHeader title="Payment Details" />

          <div className="flex items-center justify-between mt-6">
            <h2 className="text-[16px] font-medium">Payment Details</h2>
            <img src={'images/arrow-up.svg'} alt='logo' />
          </div>


          <div className="flex mt-6 mb-2 gap-10">
            <label className="flex items-center space-x-1 gap-2">
              <input
                type="radio"
                name="payment"
                checked={paymentStatus === "paid"}
                onChange={() => setPaymentStatus("paid")}
              />
              <span className="text-[16px] font-medium">Paid</span>
            </label>
            <label className="flex items-center space-x-1 gap-2">
              <input
                type="radio"
                name="payment"
                checked={paymentStatus === "unpaid"}
                onChange={() => setPaymentStatus("unpaid")}
              />
              <span className="text-[16px] font-medium">Unpaid</span>
            </label>
          </div>

          {[
            "Bill Number",
            "Bill Date",
            "Paid Amount",
            "Due Date",
            "Payment Mode",
            "Currency",
            "Total Amount",
            "Tax Amount",
            "FX Rate",
          ].map((label, index) => (
            <div key={index} className="my-2">
              <label className="block text-sm text-velvel_curtain font-normal">{label}</label>
              <input
                type="text"
                placeholder="Start Typing"
                className="w-full p-2 border-b-[1px] placeholder-velvel_curtain text-sm font-bold"
              />
            </div>
          ))}
        </div>

        <div className="pt-4 border-b-[1px] pb-2">
          <div className="flex items-center justify-between ">
            <h2 className="text-[16px] font-medium">Description</h2>
            <img src={'images/arrow-up.svg'} alt='logo' />
          </div>
          <h2 className="text-[14px] font-normal text-velvel_curtain mt-6">List Item</h2>
          <div className="flex items-center gap-10">
            <label className="flex items-center space-x-1 gap-2">
              <input
                type="radio"
                name="lineItem"
                checked={lineItem === "single"}
                onChange={() => setLineItem("single")}
              />
              <span className="text-[16px] font-medium">Single</span>
            </label>
            <label className="flex items-center space-x-1 gap-2">
              <input
                type="radio"
                name="lineItem"
                checked={lineItem === "multiple"}
                onChange={() => setLineItem("multiple")}
              />
              <span className="text-[16px] font-medium">Multiple</span>
            </label>
          </div>
        </div>
        <textarea
          placeholder="Enter Description"
          className="w-full p-2 rounded-md border-b-[1px] border-gray_200 mb-6"
        ></textarea>


        <div className="flex items-center justify-between border-b-[1px] border-gray_200 pb-4 gap-10">
          <img src={'images/arrow-l.svg'} alt='logo' />
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="lineItem"
              checked={lineItem === "single"}
              className='w-[5px]'
            />
            <input
              type="radio"
              name="lineItem"
              className='w-[5px]'
              checked={lineItem === "multiple"}
            />
          </label>
          <img src={'images/arrow-r.svg'} alt='logo' />
        </div>


        <div className="mt-4">
          <CustomButton className="w-full bg-[#603AE51A] text-blue_500 py-2 rounded-md">
            Save
          </CustomButton>
          <CustomButton className="w-full bg-blue_500 text-white py-2 mt-2 rounded-md">
            Publish
          </CustomButton>
        </div>
      </div>
    </aside>
    </>
  )
}

export default Rightbar