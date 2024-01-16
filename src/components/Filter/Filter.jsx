import s from './Filter.module.css';

export const Filter = ({ handleChangeFilter }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.FindName}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={handleChangeFilter}
        className={s.InputFilter}
        placeholder="Enter your name"
      />
    </div>
  );
};
