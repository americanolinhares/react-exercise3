import React from 'react'
import { Route } from 'react-router-dom'
import { MovieDetail } from './components/MovieDetail'
import { MoviesList } from './components/MoviesList'

export const Routes = () => (
    <>
      <Route path="/" exact component={MoviesList} />
      <Route path="/:id" exact component={MovieDetail} />
    </>
);