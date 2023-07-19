import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { ENPOIND } from "../const/const";

export const ProductContext = createContext();

const CRUDContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [inputInfo, setInputInfo] = useState({
    Price: "",
    Manufacturer: "",
    CPU: "",
    RAM: "",
    SSD: "",
    Img: "",
    category: "",
  });

  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(!show);
  };

  const getData = () => {
    try {
      axios(`${ENPOIND}?Manufacturer=${search}`).then(({ data }) => {
        setProducts(data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [search, products]);

  const addProduct = () => {
    setSelected(null);
    if (selected) {
      try {
        axios.put(`${ENPOIND + "/" + selected}`, inputInfo).then((el) => {
          console.log(el);
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        axios.post(ENPOIND, inputInfo).then((res) => {
          console.log(res);
        });
      } catch (err) {
        console.log(err);
      }
    }
    getData();
    setInputInfo({
      Price: "",
      Manufacturer: "",
      CPU: "",
      RAM: "",
      SSD: "",
      Img: "",
      category: "",
    });
    openModal();
  };

  const deleteProduct = (id) => {
    let check = window.confirm("Do you want to launch this product?");
    if (check) {
      let newProducts = products.filter((el) => el.id !== id);
      axios.delete(`${ENPOIND}/${id}`);
      setProducts(newProducts);
    }
  };

  const editProduct = async (id) => {
    setSelected(id);
    openModal();
    try {
      const { data } = await axios.get(`${ENPOIND + "/" + id}`);
      setInputInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fillInput = (e) => {
    setInputInfo({ ...inputInfo, [e.target.name]: e.target.value });
  };

  const state = {
    products,
    deleteProduct,
    editProduct,
    setSearch,
    openModal,
    show,
    selected,
    inputInfo,
    fillInput,
    addProduct,
  };
  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

export default CRUDContext;
