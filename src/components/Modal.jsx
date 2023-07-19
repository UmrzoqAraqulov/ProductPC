import { useContext } from "react";
import { ProductContext } from "../hooks/CRUDContext";

const Modal = () => {
  const { openModal, show, selected, fillInput, inputInfo ,addProduct} =
    useContext(ProductContext);

  const submit = (e) => {
    e.preventDefault();
    console.log(1);
    addProduct()
  };
  return (
    <div>
      {show ? (
        <div
          onClick={openModal}
          className="w-full h-full bg-black bg-opacity-60 fixed top-0 left-0 z-10 cursor-pointer"
        />
      ) : (
        ""
      )}
      {show ? (
        <div
          style={{ height: "450px", width: "500px" }}
          className="fixed z-20 top-10 left-1/2 -translate-x-1/2 rounded bg-white py-3 px-5 "
        >
          <h2 className="text-2xl font-semibold text-center pt-4 mb-4">
            {selected ? "Editing Product" : "Adding Product"}
          </h2>
          <form onSubmit={submit}>
            <label className="font-semibold" htmlFor="ImgUrl">
              ImgUrl:
            </label>
            <input
              value={inputInfo.Img}
              onChange={fillInput}
              required
              type="text"
              id="ImgUrl"
              name="Img"
              placeholder="ImgUrl"
              className="w-10/12 my-2 border ml-3 outline-none px-2 text-md rounded-sm"
            />
            <label className="font-semibold" htmlFor="category">
              Category:
            </label>
            <select className="ml-2 bg-transparent font-semibold border py-0.5 px-2" name="category" id="category">
              <option value="laptop">laptop</option>
              <option value="keyboard">keyboard</option>
              <option value="monitor">monitor</option>
              <option value="frame">frame</option>
            </select> <br />
            <label className="font-semibold" htmlFor="title">
              Title:
            </label>
            <input
              value={inputInfo.Manufacturer}
              onChange={fillInput}
              required
              type="text"
              name="Manufacturer"
              id="title"
              placeholder="Title"
              className="w-10/12 my-2 border ml-3 outline-none px-2 text-md rounded-sm"
            />
            <label className="font-semibold" htmlFor="CPU">
              CPU:
            </label>
            <input
              value={inputInfo.CPU}
              onChange={fillInput}
              required
              type="text"
              id="CPU"
              name="CPU"
              placeholder="CPU"
              className="w-10/12 my-2 border ml-3 outline-none px-2 text-md rounded-sm"
            />
            <label className="font-semibold" htmlFor="SSD">
              SSD:
            </label>
            <input
              value={inputInfo.SSD}
              onChange={fillInput}
              required
              type="text"
              id="SSD"
              name="SSD"
              placeholder="SSD"
              className="w-10/12 my-2 border ml-3 outline-none px-2 text-md rounded-sm"
            />
            <label className="font-semibold" htmlFor="RAM">
              RAM:
            </label>
            <input
              value={inputInfo.RAM}
              onChange={fillInput}
              required
              type="text"
              id="RAM"
              name="RAM"
              placeholder="RAM"
              className="w-10/12 my-2 border ml-3 outline-none px-2 text-md rounded-sm"
            />
            <label className="font-semibold" htmlFor="Price">
              Price:
            </label>
            <input
              value={inputInfo.Price}
              onChange={fillInput}
              required
              type="text"
              id="Price"
              name="Price"
              placeholder="Price"
              className="w-10/12 my-2 border ml-3 outline-none px-2 text-md rounded-sm"
            />
            <button
              type="submit"
              className="py-1.5 px-5 mt-5 bg-blue-600 rounded w-24 text-white text-lg"
            >
              {selected ? "Save" : "Add"}
            </button>
          </form>

          <p
            className="absolute top-0 right-3 text-2xl cursor-pointer"
            onClick={openModal}
          >
            x
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
