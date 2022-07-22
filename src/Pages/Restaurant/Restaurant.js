import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../../Components/CardProduct/CardProduct";
import CardRestaurant from "../../Components/CardRestaurantsDetails/CardRestaurantDetails";
import { TOKEN } from "../../Constants/token";
import { BASE_URL } from "../../Constants/url";
import { Category, Main, ProductByCategory } from "./styled";

const Restaurant = () => {
  const { restaurant } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [categories, setCategories] = useState([]);

  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants/${restaurant}`, TOKEN)
      .then((res) => {
        setRestaurantInfo(res.data.restaurant);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    if (restaurantInfo.products) {
      const newCategories = [];
      for (const products of restaurantInfo.products) {
        newCategories.push(products.category);
      }
      //tirar informações duplicadas do array
      setCategories([...new Set(newCategories)]);
    }
  }, [restaurantInfo]);

  return (
    <Main>
      {/* Faz um map nas categorias da loja, depois um filtro para verificar se o produto tem a mesma categoria em questão, depois outro map para exibir esses produtos  */}
      <CardRestaurant restaurant={restaurantInfo} />
      {restaurantInfo.products &&
        categories.map((c) => {
          return (
            <ProductByCategory key={c}>
              <Category>{c}</Category>

              {restaurantInfo.products
                .filter((p) => {
                  return p.category === c;
                })
                .map((p) => {
                  return <CardProduct key={p.id} product={p} />;
                })}
            </ProductByCategory>
          );
        })}
    </Main>
  );
};

export default Restaurant;
