import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ENPOIND } from "../const/const";

const ProductInfoPage = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    const getPc = async () => {
      try {
        const { data } = await axios.get(
          `${ENPOIND+"/"+params.id}`
        );
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    getPc();
  },[params.id]);
  const {
    Price,
    Manufacturer,
    CPU,
    GPU,
    RAM,
    SSD,
    Screen,
    Img,
    Permission,
    FrameRate,
    AspectRatio,
    Diagonal,
    KeyboardType,
    Interface,
    Backlight,
    MaximumCoolerHeight,
    MaximumGraphicsCardLength,
    CaseColor,
  } = product;

  return (
    <div className="flex justify-between">
      <img src={Img} style={{ width: "450px" }} alt="" />
      <div className="w-1/2 p-5 gap-y-3 flex flex-col">
        <h3 className="font-bold text-4xl text-center pb-3">{Manufacturer}</h3>
        {CPU ? (
          <p>
            <span className="pr-4 text-gray-500">CPU:</span>
            {CPU}
          </p>
        ) : FrameRate ? (
          <p>
            <span className="pr-4 text-gray-500">FrameRate:</span>
            {FrameRate}
          </p>
        ) : (
          ""
        )}
        {GPU ? (
          <p>
            <span className="pr-4 text-gray-500">GPU:</span>
            {GPU}
          </p>
        ) : AspectRatio ? (
          <p>
            <span className="pr-4 text-gray-500">AspectRatio:</span>
            {AspectRatio}
          </p>
        ) : (
          ""
        )}
        {RAM ? (
          <p>
            <span className="pr-4 text-gray-500">RAM:</span>
            {RAM}
          </p>
        ) : Diagonal ? (
          <p>
            <span className="pr-4 text-gray-500">Diagonal:</span>
            {Diagonal}
          </p>
        ) : (
          ""
        )}
        {SSD ? (
          <p>
            <span className="pr-4 text-gray-500">SSD:</span>
            {SSD}
          </p>
        ) : (
          ""
        )}
        {Screen ? (
          <p>
            <span className="pr-4 text-gray-500">Screen:</span>
            {Screen}
          </p>
        ) : Permission ? (
          <p>
            <span className="pr-4 text-gray-500">Screen:</span>
            {Permission}
          </p>
        ) : (
          ""
        )}
        {KeyboardType ? (
          <p>
            <span className="pr-4 text-gray-500">KeyboardType:</span>
            {KeyboardType}
          </p>
        ) : (
          ""
        )}
        {Interface ? (
          <p>
            <span className="pr-4 text-gray-500">Interface:</span>
            {Interface}
          </p>
        ) : (
          ""
        )}
        {Backlight ? (
          <p>
            <span className="pr-4 text-gray-500">Backlight:</span>
            {Backlight}
          </p>
        ) : (
          ""
        )}
        {MaximumGraphicsCardLength ? (
          <p>
            <span className="pr-4 text-gray-500">MaximumGraphicsCardLength:</span>
            {MaximumGraphicsCardLength}
          </p>
        ) : (
          ""
        )}
        {CaseColor ? (
          <p>
            <span className="pr-4 text-gray-500">CaseColor:</span>
            {CaseColor}
          </p>
        ) : (
          ""
        )}
        {MaximumCoolerHeight ? (
          <p>
            <span className="pr-4 text-gray-500">MaximumCoolerHeight:</span>
            {MaximumCoolerHeight}
          </p>
        ) : (
          ""
        )}
        <p>
          <span className="pr-4 text-gray-500">Price:</span>
          {Price}
        </p>
      </div>
    </div>
  );
};

export default ProductInfoPage;
