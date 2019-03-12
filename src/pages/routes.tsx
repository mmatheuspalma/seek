import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Checkout from './Checkout';

import 'assets/styles/style.css';

export default class Routes extends Component {
   render() {
      return (
         <BrowserRouter>
            <Switch>
               <Route exact path='/' component={Checkout} />
               <Route path='*' component={() => <div> Página não encontrada </div>} />
            </Switch>
         </BrowserRouter>
      );
   }
}
