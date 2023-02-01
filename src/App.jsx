
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useEffect } from 'react'
// import axios from 'axios'
import ProductId from './pages/ProductId'
// import ProductDescription from './components/ProductDetails/ProductDescription'
import Home from './pages/Home';
import Login from './pages/Login'
import './App.css'
import { getUserCartThunk } from './store/slices/cart.slice'
// import AppNavBar2 from './components/shared/AppNavBar2'
import Cart from './pages/Cart'
// import SearchInput from './components/shared/SearchInput'
import AppNavBar from './components/shared/AppNavBar'
import Purchases from './pages/Purchases'
import ProtectedRoutes from './components/ProtectedRoutes';
import LoadingScreen from './components/loadingScreen/LoadingScreen';
// import Footer from './components/Footer/Footer'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

function App() {

  const isLoading = useSelector(state => state.isLoading)
  //! Despacha las acciones y los thinks
  const dispatch = useDispatch();

  // Thunks
  //! Peticion asincronica
  // ? The Thunks should also use dispatch
  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getUserCartThunk())
  }, [])

  // console.log(isLoading);
  //! Users
  // useEffect(() => {
  //   const URL = 'https://e-commerce-api-v2.academlo.tech/api/v1/users';
  //   const data = {
  //     firstName: "elisa",
  //     lastName: "lobo",
  //     email: "nelisa@gmail.com",
  //     password: "lobo123",
  //     phone: "1234567890"
  //   }
  //   axios.post(URL, data)
  //     .then(response => {
  //       console.log('App', response.data)
  //       // navigate('/');
  //       // localStorage.setItem("token", response.data.token);
  //       // localStorage.setItem("userName", response.data.user.firstName + " " + response.data.user.lastName);
  //   })

  //     .catch(err => console.log('err', err));
  // }, [])
  //! Users
  
  //! Solo para consultar los datos en consola
  // const products = useSelector(state => state.products);
  // console.log(products);

  return (
    <div className="App">
      <AppNavBar />
      {/* <AppNavBar2 /> */}
      {/* <SearchInput /> */}
      { isLoading && <LoadingScreen />}

      <Container >
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
      </Container>
    </div>
  )
}
export default App
