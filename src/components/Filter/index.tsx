import React, { useState } from 'react';
import useDebounce from '../../hook/useDebounce';

interface IProps {
  placeholder: string;
  id: string;
  handleFilterChange: (event: any) => void;
}

const InputFilter: React.FC<IProps> = (props) => {
  const { placeholder, id, handleFilterChange } = { ...props };
  const [filterValue, setFilterValue] = useState('');
  const debouncedValue = useDebounce(filterValue, 1000);
  const handleChangeAttackFromValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChangeAttackFromValue');
    setFilterValue(e.target.value);
    if (debouncedValue) {
      console.log('debouncedValue', debouncedValue);
      handleFilterChange(e);
    }
  };
  return (
    <div>
      <label htmlFor={id}>
        {' '}
        атака от:
        <input
          type="number"
          placeholder={placeholder}
          min="0"
          id={id}
          value={filterValue}
          onChange={handleChangeAttackFromValue}
        />
      </label>
    </div>
  );
};

export default InputFilter;
