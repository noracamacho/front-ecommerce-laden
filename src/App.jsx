
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useEffect } from 'react'
import ProductId from './pages/ProductId'
import Home from './pages/Home';
import Login from './pages/Login'
import './App.css'
import { getUserCartThunk } from './store/slices/cart.slice'
// import AppNavBar2 from './components/shared/AppNavBar2'
import Cart from './pages/Cart'
import AppNavBar from './components/shared/AppNavBar'
import Purchases from './pages/Purchases'
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

  //! Despacha las acciones y los thinks
  const dispatch = useDispatch();

  // Thunks
  //! Peticion asincronica
  // ? The Thunks should also use dispatch
  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getUserCartThunk())
  }, [])
  
  //! Solo para consultar los datos en consola
  // const products = useSelector(state => state.products);
  // console.log(products);

  return (
    <div className="App">
      <AppNavBar />
      {/* <AppNavBar2 /> */}
      {/* <SearchInput /> */}
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/login' element={ <Login />}/>
        <Route path='/product/:id' element={ <ProductId /> } />
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />} >
          <Route path='/purchases' element={ <Purchases />}/>
          <Route path='/cart' element={ <Cart />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
