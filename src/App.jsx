import React, { useEffect } from 'react'
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {

  const dispatch = useDispatch()
  // const  data  = useSelector((state) => state.home.url) // you can write this way without destructring
  //const { url } = useSelector((state) => state.home) // here dstructure direct url

  useEffect(() => {
    fetchApiConfig();
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res)

      const url = {
        backdrop: res.images.secure_base_url + 
        "w1280",
        poster: res.images.secure_base_url + 
        "w1280",
        profile: res.images.secure_base_url + 
        "w1280",
      }
      dispatch(getApiConfiguration(url))
    })
  }
  return (
    <BrowserRouter>
      <Header />
      <AllRoutes />
      <Footer />
    </BrowserRouter>
  )
}
