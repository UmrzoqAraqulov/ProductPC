import React, { useContext } from 'react'
import { ProductContext } from '../hooks/CRUDContext';
import { useNavigate } from 'react-router-dom';

const Card = ({ Img, Manufacturer, CPU, id, Interface }) => {
  const {deleteProduct,editProduct} = useContext(ProductContext);
  const navigate = useNavigate();

  const ProductInfo = (id) =>{
    navigate(`productInfo/${id}`);
    console.log(id);
  }

  return (
    <div className="w-full shadow-md p-2">
      <img className="w-full" src={Img} alt="" />
      <h3 className="font-bold text-xl py-1">{Manufacturer}</h3>
      <p>{CPU?CPU:"Connect: "+Interface}</p>
      <div className="flex justify-between px-2 py-2">
        <button onClick={()=>ProductInfo(id)} className="bg-green-600 px-3 rounded py-1">More</button>
        <button onClick={()=>editProduct(id)} className="bg-blue-600 px-3 rounded py-1">Edit</button>
        <button onClick={()=>deleteProduct(id)} className="bg-red-600 px-3 rounded py-1">Delete</button>
      </div>
    </div>
  );
};

export default Card