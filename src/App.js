import React, { Component } from 'react'
import base from './base'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import NovoAnuncio from './NovoAnuncio'
import Footer from './Footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categorias: []
    }
    base.bindToState('categorias',{
      context: this,
      state: 'categorias'
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact render={() => <Home categorias={this.state.categorias} />} />
          <Route path='/novo-anuncio' exact render={() => <NovoAnuncio categorias={this.state.categorias} /> } />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
