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

  const fields = [
   { name:"Bill Number",type:'input'},
  { name: "Bill Date",type:'input'},
   {name: "Paid Amount",type:'input'},
   {name: "Due Date",type:'input'},
    {name:"Bank Transaction Ref",type:'input'},
    {name: "Payment Mode",type:'select'},
    {name: "Currency",type:'select'},
    {name: "Total Amount",type:'input'},
    {name: "Tax Amount",type:'input'},
    {name: "FX Rate",type:'input'},
  ]

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
        className="fixed top-4 right-4 z-50 md:hidden  text-white p-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ?  <img src={'images/arrow-l.svg'} alt="close" /> : <img src={'images/arrow-r.svg'} alt="close" />}
      </button>

    <aside className={`bg-white h-screen px-6 py-5 flex flex-col transition-all duration-300 ease-in-out
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
        <label className="font-bold text-[14px] text-velvel_curtain">Type Comment</label>
          <textarea
            placeholder="Start typing..."
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

          {(fields ||  []).map((label, index) => (
            <div key={index} className="my-2 mt-4">
              {label.type === 'select' ?
              <>
               <label className="block text-sm text-velvel_curtain font-normal">{label.name}</label>
                <select className="w-full border-b-[1px] border-[velvel_curtain] text-black_500 text-[16px]  h-[40px] rounded-[0px]">
                      <option value={'method'}>Select payment method</option>
              </select>
              </>
              :
              <>
              <label className="block text-sm text-velvel_curtain font-normal">{label.name}</label>
              <input
                type="text"
                placeholder="Start Typing"
                className="w-full pb-3 border-b-[1px] placeholder-velvel_curtain text-sm font-bold"
              />
                </>
              }
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
        <label className="block text-[14px] text-velvel_curtain font-normal mt-4">Description</label>
        <textarea
          placeholder="Enter Description"
          className="w-full p-2 rounded-0 border-b-[1px] border-gray_200 mb-6"
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
          <CustomButton className="w-full bg-[#603AE51A] text-[14px] font-[500] text-blue_500 py-2 rounded-md">
            Save
          </CustomButton>
          <CustomButton className="w-full flex items-center justify-center bg-blue_500 text-[14px] font-[500]  text-white py-2 mt-2 rounded-md">
            Publish
            <img src={'images/arrow-b.svg'} className="m-2" alt='logo' />
          </CustomButton>
        </div>
      </div>
    </aside>
    </>
  )
}

export default Rightbar