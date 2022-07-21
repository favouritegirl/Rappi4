import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import CardRestaurant from "../../Components/CardRestaurants/CardRestaurant";
import Header from "../../Components/Header/Header";
import { TOKEN } from "../../Constants/token";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/UseProtectedPage";
import { InputSearch, Main, Menu, MenuItem, Restaurants } from "./styled";

const Feed = () => {
  useProtectedPage();

  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [valueCategory, setValueCategory] = useState("");
  const [inputText, setInputText] = useState("");

  const getRestaurants = async () => {
    await axios
      .get(`${BASE_URL}/restaurants`, TOKEN)
      .then((res) => {
        setRestaurants(res.data.restaurants);
        filterCategory(res.data.restaurants);
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
    //tira repetição do array
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
  });

  return (
    <Main>
      <Header title={"Rappi4"} />
      <InputSearch
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <Menu>
        <MenuItem onClick={() => setValueCategory("")}>Todos</MenuItem>
        {categories.map((c) => (
          <MenuItem key={c} select={false} onClick={() => setValueCategory(c)}>
            {c}
          </MenuItem>
        ))}
      </Menu>
      <Restaurants>{filterRestaurant}</Restaurants>
    </Main>
  );
};

export default Feed;