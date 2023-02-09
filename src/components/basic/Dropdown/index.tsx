import { useEffect, useRef, useState } from 'react';
import {
  DropdownWrapper,
  DropdownSelected,
  DropdownIcon,
  DropdownItems,
  DropdownItemWrapper,
} from './style';

interface Props {
  items: string[];
  onChange: (value: string) => void;
}

function Dropdown({ items, onChange }: Props) {
  const [currentValue, setCurrentValue] = useState(items.length ? items[0] : '');
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleChangeSelected = (value: string) => {
    onChange(value);
    setCurrentValue(value);
  };

  const dropdownItems = items.map((value, index) => (
    <DropdownItems
      key={value}
      onClick={() => handleChangeSelected(value)}
      current={value === currentValue}
      last={index === items.length - 1}
    >
      {value}
    </DropdownItems>
  ));

  const handleClickDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !(dropdownRef.current as Element).contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <DropdownWrapper ref={dropdownRef} isOpen={isOpen} onClick={handleClickDropdown}>
        <DropdownSelected>{currentValue}</DropdownSelected>
        <DropdownIcon isOpen={isOpen} />
      </DropdownWrapper>
      {isOpen && currentValue && <DropdownItemWrapper>{dropdownItems}</DropdownItemWrapper>}
    </>
  );
}

export default Dropdown;
