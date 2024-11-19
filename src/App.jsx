import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { api } from "./api/api";
import CreateProduct from "./components/CreateProduct";


function App() {
  const [Products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);




  useEffect(() => {
    try {
      async function getData() {
        const conn = await api.get('/products')
        setProducts(conn.data)
        
        

      }
      getData()

    } catch (error) {
      console.log(error);

    }
  }, [])

  useEffect(() => {
    try {
      async function getData() {
        const conn = await fetch("http://localhost:3000/categories")
        const data = await conn.json();
        setCategories(data);
        

      }
      getData()
    } catch (error) {
      console.log(error);

    }
  }, [])

  return (
    <>
      <div className=" max-w-screen-2xl mx-auto my-3 p-6 bg-slate-100 grid grid-cols-12 gap-4">
        <Sidebar categories={categories} />
        <CreateProduct />

      </div>
    </>
  );


}

export default App