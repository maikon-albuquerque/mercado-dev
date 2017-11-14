import React, {Component} from 'react'
import base from './base'

import HeaderHome from './HeaderHome'
import AnuncioHome from './AnuncioHome'
import LinkCategoria from './LinkCategoria'


class Home extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          anuncios: []
        }
        base.bindToState('anuncios',{
          context: this,
          state: 'anuncios',
          queries:{
            limitToLast: 3
          }
        })
      }

    render() {
    let index = 0
    return (
        <div>
            <HeaderHome />
                <div className="container">
                <h3>Ultimos Anúncios</h3>
                <div className="row">
                    { Object.keys(this.state.anuncios).map( key => {
                      const anuncio = this.state.anuncios[key]
                    return <AnuncioHome key={key} anuncio={anuncio} />
                    })}
                </div>
                <h3>Categorias</h3>
                <div className="row">
                { this.props.categorias.map( (cat, indice) => {
                    return [
                            <LinkCategoria categoria={cat} key={indice} />,
                            ++index%4 === 0 && <div key={'c'+indice} className="w-100"></div>
                        ]
                })}
                </div>
                </div>
        </div>
    )
    }
}
export default Home