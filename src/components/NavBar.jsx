import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { ProductContext } from "../hooks/CRUDContext";
import Modal from "./Modal";

const NavBar = () => {
  const {setSearch,openModal} = useContext(ProductContext);
  
  return (
    <div className="container lg:w-10/12 mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-green-500">
        OnLine Shop
      </Link>
      <div className="w-1/2 flex items-center border-2 py-1 px-4 rounded-md">
        <input
          onChange={(e)=>setSearch(e.target.value)}
          type="text"
          placeholder="Searching..."
          className="w-full outline-none"
        />
        <div className="cursor-pointer">
          <SearchIcon />
        </div>
      </div>
      <button onClick={openModal} className="bg-blue-500 py-1 px-3 rounded">AddProduct</button>
      <div className="cursor-pointer">
        Account
      </div>
      <Modal/>
    </div>
  );
};

export default NavBar;
