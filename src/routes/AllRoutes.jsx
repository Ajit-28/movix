import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Details from '../pages/details/Details'
import SearchResult from '../pages/searchResult/SearchResult'
import PageNotFound from '../pages/404/PageNotFound'
import Explore from '../pages/explore/Explore'


export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/:mediaType/:id" element={<Details />} />
      <Route path='/search/:query' element={<SearchResult />} />
      <Route path='/explore/:mediaType' element={<Explore />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
