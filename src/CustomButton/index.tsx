import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = `${className && className} pl-4 pr-4 h-[48px]  rounded-[8px] w-fit font-semibold text-[#603AE5] border-0  bg-[#603AE51A]`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
