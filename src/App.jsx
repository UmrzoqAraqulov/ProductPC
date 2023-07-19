import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductInfoPage from "./pages/ProductInfoPage";
import Layout from "./components/Layout";
import { useContext } from "react";
import { LoginInfo } from "./hooks/LoginContext";
import LogInPage from "./pages/LogInPage";

const App = () => {
  const privatePages = [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "productInfo/:id",
      element: <ProductInfoPage />,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {privatePages.map(({ element, ...rest }) => (
            <Route key={element} {...rest} element={<PrivateRoute>{element}</PrivateRoute>} />
          ))}
        </Route>
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

function PrivateRoute({ children }) {
  const { auth } = useContext(LoginInfo);
  return auth ? children : <Navigate to="/login" />;
}

export default App;
