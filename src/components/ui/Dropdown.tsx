import ExpandDown from "../../assets/Expand_down.svg?react";

interface DropdownProps {
    options: number[],
    selectedValue?: number;
    onChange: (value: string) => void;
    placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue=0,
  onChange,
  placeholder="Select an option",
}) => {
  return (
    <div className='relative'>
      <select
        name='property-type'
        id='property-type'
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className='w-[170px] px-3 py-3 appearance-none outline-none text-sm font-medium bg-midnight text-sky-light border-2 border-slate-dark rounded-xl'
      >
        <option value={0} disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ExpandDown className='absolute right-3 top-3 cursor-pointer pointer-events-none' />
    </div>
  );
};

export default Dropdown;
