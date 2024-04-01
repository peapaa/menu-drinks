import { Link } from "react-router-dom";
import styles from "./product.module.scss";
import { ThemeContext, MyContextValue, Drink } from "../Context";
import React, { useContext } from "react";
import InputFiled from "./InputFiled";
import { Result } from "antd";

const ListProducts: React.FC = () => {
  const value: MyContextValue | undefined = useContext(ThemeContext);
  console.log("value file listproduct", value);
  const data: Drink[] | undefined = value?.list;
  console.log("loading", value?.loading);

  return (
    <div className={styles.productList}>
      <div>
        <InputFiled />
      </div>

      <div className={styles.product}>
        {value?.loading && <div className={styles.loading}>Loading&#8230;</div>}
        {data ? (
          data.map((item: Drink) => (
            <div className={styles.container} key={item.idDrink}>
              <img src={item.strDrinkThumb} className={styles.img} />
              <div className={styles.category}>{item.strDrink}</div>
              <p className={styles.content}>
                {item.strInstructions || item.strInstructionsIT}
              </p>
              <div style={{ textAlign: "center", marginTop: "12px" }}>
                <Link
                  to={`/single-product/${item.idDrink}`}
                  className={styles.details}
                >
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <Result status="404" title="404" subTitle="Not a product" />
        )}
      </div>
    </div>
  );
};

export default ListProducts;
