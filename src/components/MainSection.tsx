import { useState } from "react"
import CustomButton from "../CustomButton"
import CustomTabs from "../CustomTabs"
import EasyUpload from "./EasyUpload"

interface MainSectiorProps {
    activeMenu: { id: number, content: string, name: string }
}


const MainSectior: React.FC<MainSectiorProps> = ({ activeMenu }) => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [fileUrl, setFileUrl] = useState<string | null>(null);

    return (
        <main className="flex-1 p-5 pt-[36px] bg-gray-100 h-screen overflow-auto flex-grow">
            <div className="bg-white pt-[26px] pr-[21px] pl-[21px] pb-[21px]">
                <div className="flex items-center justify-end">
                    <CustomButton className="text-[14px] font-medium w-[120px] bg-blue_500 text-white w-[180px]">Add to Expenses Report</CustomButton>
                </div>
                <div className="flex-1 flex-col lg:flex-row flex items-start mt-6">
                    <CustomTabs />
                    <div className="border-dashed border-2 border-[#ECECF2] p-3 w-[100%] ml-4">
                        <div className="p-3  h-[100vh] bg-[#F6DEBA]">
                            {fileUrl && (
                                <div className="mt-4 p-2 border rounded-lg">
                                    {uploadedFile?.type === "application/pdf" ? (
                                        <iframe src={fileUrl} className="w-full h-[250px]" title="Uploaded PDF"></iframe>
                                    ) : (
                                        <img src={fileUrl} alt="Uploaded" className="max-w-full h-auto" />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
                <EasyUpload setUploadedFile={(val) => setUploadedFile(val)} setFileUrl={(val) => setFileUrl(val)} />
            </div>
        </main>
    )
}

export default MainSectior