import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CardRestaurant from "../../Components/CardRestaurants/CardRestaurant";
import { Footer } from "../../Components/FooterMenu/FooterMenu";
import Header from "../../Components/Header/Header";
import { Order } from "../../Components/Order/Order";
import { BASE_URL } from "../../Constants/url";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import { useProtectedPage } from "../../Hooks/UseProtectedPage";
import { InputSearch, Main, Menu, MenuItem, Restaurants } from "./styled";

const Feed = () => {
  useProtectedPage();

  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [valueCategory, setValueCategory] = useState("");
  const [inputText, setInputText] = useState("");
  const token = localStorage.getItem('token')

  const { states, setters } = useGlobal();
  const { setOrder } = setters;
  const { order } = states;

  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants`, {headers:{auth:token}})
      .then((res) => {
        setRestaurants(res.data.restaurants);
        filterCategory(res.data.restaurants);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const getOrder = async () => {
    await axios
      .get(`${BASE_URL}/active-order`, {headers:{auth:token}})
      .then((res) => {
        if (!res.data) {
          setOrder(res.data.order);
          //mostrar ou não modal de pedido em andamento
          const expires = res.data.order.expiresAt;
          setTimeout(() => {
            getOrder();
          }, expires - new Date().getTime());
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const filterCategory = (restaurants) => {
    const array = [];
    restaurants.map((rest) => {
      return array.push(rest.category);
    });
    //tirar informações duplicadas do array
    setCategories([...new Set(array)]);
  };

  const filterRestaurant = restaurants
    .filter((rest) => {
      return inputText
        ? rest.name.toLowerCase().includes(inputText.toLowerCase())
        : true;
    })
    .filter((rest) => {
      return valueCategory ? rest.category.includes(valueCategory) : true;
    })
    .map((rest) => {
      return <CardRestaurant key={rest.id} restaurant={rest} />;
    });

  useEffect(() => {
    getRestaurants();
    getOrder();
  }, []);

  return (
    <Main>
      <Header title={"Rappi4"} />
      <InputSearch
        value={inputText}
        placeholder="Restaurante"
        onChange={(event) => setInputText(event.target.value)}
      />
      <Menu>
        <MenuItem onClick={() => setValueCategory("")}>Todos</MenuItem>
        {categories.map((c) => (
          <MenuItem key={c} onClick={() => setValueCategory(c)}>
            {c}
          </MenuItem>
        ))}
      </Menu>
      <Restaurants>{filterRestaurant}</Restaurants>
      {order && (
        <Order
          restaurant={order.restaurantName}
          totalPrice={order.totalPrice}
        />
      )}
      <Footer />
    </Main>
  );
};

export default Feed;
