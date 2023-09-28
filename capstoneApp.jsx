import { Routes, Route } from "react-router-dom";
import "./capstone.css";
import Homepage from './components/Home';
import Login from './components/Login';
import DisplayItem from "./components/showItem";
import DisplayCategory from "./components/showCategory";
import Header from "./components/Header";
import Cart from "./components/Cart";
import {useState, useEffect} from 'react';
import SignUp from "./components/SignUp";
import Checkout from "./components/Purchase";

function App() {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState("")
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("token");
    console.log("token", data)
    if (data) setToken(data);
  }, []);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    console.log("cart data", cartData)
    if (cartData) setCart(cartData);
  }, []);

  return (
    <div>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Homepage token={token} cart={cart} setCart={setCart} />} />
        <Route path="/:itemId" element={<DisplayItem token={token} cart={cart} setCart={setCart} />} />
        <Route path="/category/:category" element={<DisplayCategory token={token} cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} total={total} setTotal={setTotal}  />} />
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
        <Route path="/register" element={<SignUp token={token} setToken={setToken} />} />
        <Route path="/checkout" element={<Checkout total={total} setCart={setCart} />} />
      </Routes>
    </div>
  )
}

export default App