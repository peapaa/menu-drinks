import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;
interface Drink {
  strDrinkThumb: string;
  strInstructions?: string;
  strCategory: string;
  strAlcoholic: string;
}
const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Drink | null>(null);
  const fetchUrl = async () => {
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
  };
  useEffect(() => {
    fetchUrl();
  }, [id]);

  return (
    <div>
      {product && (
        <Card
          hoverable
          style={{ width: 440 }}
          cover={<img src={product.strDrinkThumb} alt={product.strAlcoholic} />}
        >
          <Meta
            title={product.strCategory}
            description={product.strInstructions}
          />
        </Card>
      )}
    </div>
  );
};

export default SingleProduct;
