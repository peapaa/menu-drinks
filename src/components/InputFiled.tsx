import React from "react";
import styles from "./product.module.scss";
interface Props {
  search: string;
  loading: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const InputFiled: React.FC<Props> = ({ search, loading, setSearch }) => {
  console.log(search, loading, setSearch);
  return (
    <div className={styles.headerSearch}>
      <input
        type="text"
        placeholder=" please enter name "
        className={styles.input}
      />
      <button className={styles.searchProduct}>Search</button>
    </div>
  );
};

export default InputFiled;
