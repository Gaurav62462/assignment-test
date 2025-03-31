import { Tabs } from "./Tabs";
import { TabsType } from "../constant/types";
import CustomButton from "../CustomButton";

const tabs = [
    { label: 'Bills', value: 'bills' },
    { label: 'Receipts', value: 'receipts' },
    { label: 'Bank', value: 'bank' }
  ]

  interface EasyUploadProps {
    setUploadedFile:(val:any) => void
    setFileUrl:(val:string) => void
  }
  
const EasyUpload = ({setUploadedFile,setFileUrl}:EasyUploadProps) => {
  const emailSingle = "abc.single@gmail.com";
  const emailMultiple = "abc.multiple@gmail.com";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied :  ${text}`);
  };

  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setFileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className="mx-auto bg-white p-6 rounded-xl">
      <div className="flex pb-2 flex items-center">
      <p className="text-velvel_curtain text-sm font-bold">EasyUpload</p> 
      <Tabs tabs={tabs} tabsClick={(val: TabsType) => {}} initialActive='receipts' className='w-full' />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="w-[50%] mr-[15px]">
        <p className="text-velvel_curtain text-sm font-normal">Document Owner</p>
        <input className="border-b w-[100%] h-[40px] font-semibold text-sm font-bold " />
        </div>
        <div className="flex items-start justify-between w-[50%] border-b  flex-col">
        <p className="text-gray-500  ml-[10px]">Client</p>
        <select className="w-full border-0 rounded-md p-2">
          <option>Select Client</option>
        </select>
        </div>
      </div>

      <div className="border-dashed border-2 border-gray-300 rounded-md mt-6 p-6 ">
      <label className="justify-center items-center cursor-pointer flex">
        <input type="file" className="hidden" accept="image/png, image/jpeg, application/pdf, text/csv" onChange={handleFileChange} />
      <img src={'images/Upload.svg'} alt="left arrow" className="cursor-pointer mr-2" />
        <div className="flex justify-center flex-col">
        <p className="text-blue_500 font-medium mt-2">Drag & Drop or Choose file to upload</p>
        <p className="text-blue_500 text-sm">JPG, PNG, PDF, CSV</p>
        </div>
      </label>
      </div>
      <div className="flex items-start justify-center">
      <CustomButton className="w-[25%] mt-4 bg-blue_500 text-white">
        Add Receipt
      </CustomButton>
      </div>

      <div className="mt-6">
        <p className="text-velvel_curtain text-sm font-normal">Send Over Email</p>
        <div className="flex items-center mt-2 " >
          Single :<p className="text-blue_500 mr-2"> {emailSingle}</p>
          <img onClick={()=>copyToClipboard(emailSingle)} src={'images/copy.svg'} alt="left arrow" className="cursor-pointer" />
        </div>
        <div className="flex items-center mt-2" >
          Multiple :<p className="text-blue_500 mr-2"> {emailMultiple}</p>
          <img onClick={()=>copyToClipboard(emailMultiple)} src={'images/copy.svg'} alt="left arrow" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default EasyUpload;
