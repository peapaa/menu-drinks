import styles from "./product.module.scss";
import React from "react";
interface Drink {
  idDrink: number;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strInstructions: string;
}
interface Props {
  data: Drink[];
}
const ListProducts: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.product}>
      {data.map((item: Drink) => (
        <div className={styles.container} key={item.idDrink}>
          <img src={item.strDrinkThumb} className={styles.img} />
          <span>{item.strCategory}</span>
          <p>{item.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
