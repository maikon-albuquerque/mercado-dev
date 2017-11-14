import React, { Component } from 'react'

import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import LinkCategoria from './LinkCategoria'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHome />
        <div className="container">
        <h3>Ultimos Anúncios</h3>
        <div className="row">
        <AnuncioHome />
        <AnuncioHome />
        <AnuncioHome />
        </div>
        <h3>Categorias</h3>
        <LinkCategoria />
        <LinkCategoria />
        <LinkCategoria />
        <LinkCategoria />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
