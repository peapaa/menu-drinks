import React, { useContext } from "react";
import styles from "./product.module.scss";
import { ThemeContext, MyContextValue } from "../Context";

const InputFiled: React.FC = () => {
  const value: MyContextValue | undefined = useContext(ThemeContext);
  console.log("value file input", value);

  return (
    <div className={styles.headerSearch}>
      <input
        type="text"
        placeholder=" please enter name "
        className={styles.input}
        value={value?.search}
        onChange={(e) => value?.setSearch(e.target.value)}
      />
      <button className={styles.searchProduct}>Search</button>
    </div>
  );
};

export default InputFiled;
