import './App.css'
import UserUpdate from './components/userComponents/UserUpdate';
import UserAdd from './components/userComponents/UserAdd';
import UserList from './components/userComponents/UserList';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { useEffect } from 'react';
import { getProduct } from './services/ProductService';
import ProductList from './components/productComponents/ProductList';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductAdd from './components/productComponents/ProductAdd';
import CategoryList from './components/categoryComponents/CategoryList';


function App() {

  const dispatch = useAppDispatch();
  const product = useAppSelector((state)=>state.product.data)

  useEffect(()=>{
    dispatch(getProduct())
  },[])
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/userPage' element={<UserList/>}/>
      <Route path='/addUser' element={<UserAdd/>}/>
      <Route path='/productPage' element={<ProductList/>}/>
      <Route path='/addProduct' element={<ProductAdd/>}/>
      <Route path='categoryPage' element={<CategoryList/>}/>
    </Routes>
    </>
  )
}

export default App
