interface RadioProps {
    options: { label: string; value: string }[];
    name: string;
    selectedValue: string;
    onChange: (value: string) => void;
  }
  
  const CustomRadio: React.FC<RadioProps> = ({ options, name, selectedValue, onChange }) => {
    return (
      <div className="flex mt-6 mb-2 gap-10">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-1 gap-2">
            <input
              type="radio"
              name={name}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
            />
            <span className="text-[16px] font-medium">{option.label}</span>
          </label>
        ))}
      </div>
    );
  };
  
  export default CustomRadio;
  