import { useContext} from "react";
import Card from "../components/Card";
import { ProductContext } from "../hooks/CRUDContext";

const HomePage = () => {
  const {products} = useContext(ProductContext)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-3 sm:grid-cols-2 mx-auto lg:grid-cols-4">
      {products.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
};

export default HomePage;
