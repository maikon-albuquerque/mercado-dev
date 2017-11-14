import React, { Component } from 'react'
import base, { storage } from './base'
import { Redirect } from 'react-router-dom'

import HeaderInterno from './HeaderInterno'

class NovoAnuncio extends Component {
    constructor(props){
        super(props)
        this.state = {
            success: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        const file = this.foto.files[0]
        const { name, size} = file
        const ref = storage.ref(name)
        ref.put(file)
            .then( img => {
                const novoAnuncio = {
                    nome: this.nome.value,
                    descricao: this.descricao.value,
                    preco: this.preco.value,
                    telefone: this.telefone.value,
                    foto: img.metadata.downloadURLs[0],
                    vendedor: this.vendedor.value,
                    categoria: this.categoria.value
                }
                base.push('anuncios', {
                    data: novoAnuncio
                })
                .then(() => {
                        this.setState({ success: true })
                    })
            })
            e.preventDefault()
    }
    render(){

        return (
            <div>
                { this.state.success && <Redirect to='/' />}
                <HeaderInterno />
                <div className='container' style={{paddingTop:'120px'}}>
                    <h1>Novo anúncio</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='foto'>Foto</label>
                            <input type='file' className='form-control' id='foto' placeholder='faça um upload de uma imagem' ref={(ref) => this.foto = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='nome'>Nome</label>
                            <input type='text' className='form-control' id='nome' placeholder='Insira o nome do anúncio' ref={(ref) => this.nome = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='nome'>Categorias</label>
                            <select ref={(ref) => this.categoria = ref}>
                                { this.props.categorias.map( cat => <option key={cat.url} value={cat.url}>{cat.categoria}</option>)}   
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='descricao'>Descrição</label>
                            <input type='text' className='form-control' id='descricao' placeholder='Insira o descrição do anúncio'  ref={(ref) => this.descricao = ref}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='preco'>Preço</label>
                            <input type='text' className='form-control' id='preco' placeholder='Insira o preço do anúncio'  ref={(ref) => this.preco = ref}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='telefone'>Telefone</label>
                            <input type='text' className='form-control' id='telefone' placeholder='Insira o telefone para contato'  ref={(ref) => this.telefone = ref}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='vendedor'>Vendedor</label>
                            <input type='text' className='form-control' id='vendedor' placeholder='Digite seu nome'  ref={(ref) => this.vendedor = ref}/>
                        </div>
                        <button type='submit' className='btn btn-warning'>Salvar Anúncio</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default NovoAnuncio