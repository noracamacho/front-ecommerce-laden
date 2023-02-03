
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useEffect } from 'react'
import ProductId from './pages/ProductId'
import Home from './pages/Home';
import Login from './pages/Login'
import Cart from './pages/Cart'
import AppNavBar from './components/shared/AppNavBar'
import Purchases from './pages/Purchases'
import ProtectedRoutes from './components/ProtectedRoutes';
import LoadingScreen from './components/loadingScreen/LoadingScreen';
import { useSelector } from 'react-redux'
import Footer from './components/shared/Footer'

function App() {

  const isLoading = useSelector(state => state.isLoading)
  //! Despacha las acciones y los thunks
  const dispatch = useDispatch();

  // Thunks
  //! Peticion asincronica
  // ? The Thunks should also use dispatch
  useEffect(() => {
    dispatch(getAllProductsThunk())
    // dispatch(getUserCartThunk())
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
        <div>
          { isLoading && <LoadingScreen />}
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
      <Footer />
    </div>
  )
}
export default App
