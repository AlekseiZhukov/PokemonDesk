import React, { useState } from 'react';
import s from './Filter.module.scss';

interface IProps {
  onSubmit: (event: any) => void;
}
interface IValues {
  [n: string]: string;
}
const InputFilter: React.FC<IProps> = (props) => {
  const [searchAttackToValue, setSearchAttackToValue] = useState('');
  const [searchAttackFromValue, setSearchAttackFromValue] = useState('');
  const { onSubmit } = props;

  const handleOnChangeInputAttackToValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAttackToValue(e.target.value);
  };
  const handleOnChangeInputAttackFromValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAttackFromValue(e.target.value);
  };
  const onSubmitFilter = (e: React.FormEvent) => {
    e.preventDefault();
    const values: IValues = {
      attack_to: searchAttackToValue,
      attack_from: searchAttackFromValue,
    };

    onSubmit(values);
  };

  return (
    <form onSubmit={onSubmitFilter} className={s.formFilter}>
      <div className={s.filterInputWraper}>
        <label className={s.filterLabelInput} htmlFor="attack_from">
          attack from:
          <input
            className={s.filterInput}
            type="number"
            value={searchAttackFromValue}
            onChange={handleOnChangeInputAttackFromValue}
            id="attack_from"
            name="attack_from"
          />
        </label>
        <label className={s.filterLabelInput} htmlFor="attack_to">
          attack to:
          <input
            className={s.filterInput}
            type="number"
            value={searchAttackToValue}
            onChange={handleOnChangeInputAttackToValue}
            id="attack_to"
            name="attack_to"
          />
        </label>
      </div>
      <input type="submit" value="filtering" />
    </form>
  );
};

export default InputFilter;
