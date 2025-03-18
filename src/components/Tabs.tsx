import React, { useState } from 'react';
import CustomButton from '../CustomButton';
import { TabsType } from '../constant/types';

interface TabsProps {
    tabs: { label: string, value: string }[],
    tabsClick:(val: TabsType) => void
    initialActive?:string
    className?:string
}

export const Tabs: React.FC<TabsProps> = ({
    tabs,
    tabsClick,
    initialActive,
    className
}) => {
    const [active, setActive] = useState(initialActive || 'allDocuments');

    const handleClick = (tab: TabsType) => {
        tabsClick(tab)
        setActive(tab.value);
    };

    return (
        <div className="flex w-full">
                {
                    (tabs || []).map((tab, index) => {
                        return (
                            <CustomButton
                                key={index}
                                className={`${className && className} text-[14px] !bg-transparent h-[40px] text-velvel_curtain w-[112px] transition-all duration-200  border-2 border-transparent font-bold ${active === tab.value ? 'border-2 !border-[#ECECF2] rounded-[8px] !text-black_500' : ''}`}
                                id={tab.value}
                                onClick={() => handleClick(tab)}
                            >
                                {tab.label}
                            </CustomButton>
                        )
                    })
                }
        </div>
    );
}