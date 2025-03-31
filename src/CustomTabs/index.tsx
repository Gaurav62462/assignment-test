import React, { useState } from 'react';
import { DocumentItem, TabsType } from '../constant/types';
import { Tabs } from '../components/Tabs';

const documents = [
    { price: '₤ 30.59', date: 'Nov 1, 2019', name: 'Bill 1', type: 'bills' },
    { price: '₤ 11.59', date: 'Jan 1, 2019', name: 'Receipts 1', type: 'receipts' },
    { price: '₤ 50.44', date: 'Apr 1, 2010', name: 'Bill 2', type: 'bills' },
    { price: '₤ 10.10', date: 'Nov 1, 2022', name: 'Receipts 2', type: 'receipts' },
    { price: '₤ 50.88', date: 'Oct 1, 2023', name: 'Bill 3', type: 'bills' },
    { price: '₤ 2.59', date: 'Dec 1, 2019', name: 'Receipts 3', type: 'receipts' },
    { price: '₤ 3.1', date: 'Nov 1, 2020', name: 'Bill 4', type: 'bills' },
    { price: '₤ 50.49', date: 'Feb 1, 2019', name: 'Receipts 4', type: 'receipts' },
    { price: '₤ 1.59', date: 'Nov 1, 2005', name: 'Bill 5', type: 'bills' },
]

const tabs = [
    { label: 'All Documents', value: 'allDocuments' },
    { label: 'Bills', value: 'bills' },
    { label: 'Receipts', value: 'receipts' }
]
export default function CustomTabs() {
    const [filterTab, setFilterTab] = useState<DocumentItem[]>(documents)

    const handleClick = (tab: TabsType) => {
        if(tab.value === 'allDocuments'){
            setFilterTab(documents)
            return
        } 
       const filterData =  documents.filter((item)=> item.type === tab.value)
       setFilterTab(filterData)
    };

    return (
        <div className="mb-4">
                <Tabs tabs={tabs} tabsClick={(val:TabsType)=>handleClick(val)} />
            <div className='border-[1px] border-gray_200 rounded-[12px] mt-6'>
                {
                    (filterTab || []).map((document,index) => {
                        return (
                            <div key={index} className='flex p-4 pl-6 border-b-[1px] border-gray_200'>
                                <img src={`images/docs.svg`} alt='logo' />
                                <div className='flex flex-col ml-3'>
                                    <p className='text-[14px] text-black_500 font-medium'>
                                        {document.name}
                                    </p>
                                    <p className='text-[12px] text-velvel_curtain font-normal'>
                                       Date:  {document.date}
                                    </p>
                                    <p className='text-[12px] text-velvel_curtain font-normal'>
                                        {document.price}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}