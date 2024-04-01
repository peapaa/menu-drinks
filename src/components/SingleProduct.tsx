import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Result } from "antd";
import { ThemeContext, MyContextValue } from "../Context";
import styles from "./product.module.scss";
const { Meta } = Card;
interface Drink {
  strDrinkThumb: string;
  strInstructions?: string;
  strCategory: string;
  strAlcoholic: string;
  strInstructionsIT: string;
}
const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Drink | null>(null);
  const value: MyContextValue | undefined = useContext(ThemeContext);

  const fetchUrl = async () => {
    value?.setLoading(true);

    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setProduct(data.drinks[0]);
      console.log("product", product);
    } catch (err) {
      console.log(err);
    }
    value?.setLoading(false);
  };
  useEffect(() => {
    fetchUrl();
  }, [id]);

  return (
    <div className={styles.cardForm}>
      {value?.loading && <div className={styles.loading}>Loading&#8230;</div>}
      {product ? (
        <Card
          hoverable
          className={styles.card}
          cover={<img src={product.strDrinkThumb} alt={product.strAlcoholic} />}
        >
          <Meta
            className={styles.cardMeta}
            title={product.strCategory}
            description={product.strInstructions || product.strInstructionsIT}
          />
          <Link to={"/"}>
            <Button type="primary" className={styles.cardButton}>
              GO BACK
            </Button>
          </Link>
        </Card>
      ) : (
        !value?.loading && (
          <Result status="404" title="404" subTitle="Not a product" />
        )
      )}
    </div>
  );
};

export default SingleProduct;
