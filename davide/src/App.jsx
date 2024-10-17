import React from 'react'
import Header from './Components/Header/Header.jsx'
import Sobre from './Components/Sobre/Sobre.jsx'
import Cliente from './Components/Clientes/Cliente.jsx'
import SegundoSobre from './Components/SegundoSobre/SegundoSobre.jsx'
import Produtos from './Components/Produtos/Produtos.jsx'
import Conversao from './Components/Conversao/Conversao.jsx'
import Footer from './Components/Footer/Footer.jsx'


export const App = () => {
  return (
    <>
    <Header/>
    <Sobre/>
    <Cliente/>
    <SegundoSobre/>
    <Produtos/>
    <Conversao/>
    <Footer/>
    </>
  )
}
