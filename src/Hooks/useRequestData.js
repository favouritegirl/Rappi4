import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useRequestData = (initialState, url) => {
  const [data, setData] = useState(initialState);

  const getData = async () => {
    await axios
      .get(url, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  useEffect(() => {
    getData();
  },[]);

  return [data];
};
