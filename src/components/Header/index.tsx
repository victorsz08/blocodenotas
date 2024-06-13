import { CgNotes } from 'react-icons/cg'
import { FaExternalLinkAlt } from "react-icons/fa";
import style from './header.module.css';



export default function Header() {
    return (
        <header className={style.header_container}>
            <div className={style.title}>
                <CgNotes/>
                <h1>Bloco de Notas</h1>
            </div>
            <nav className={style.nav_container}>
                <a target='_blank' href='https://planos.claro.com.br/acompanhar-pedido/login?_gl=1*1pm6giv*_ga*MTU3Mjc0NDU5OS4xNzAyMzkxNTkx*_ga_GNP2EH7K6E*MTcwNzM5OTU1OC40NS4xLjE3MDc0MDE4NzQuNjAuMC4w'>Acompanhe seu Pedido<FaExternalLinkAlt/></a>
                <a target='_blank' href='https://claro-brown.vercel.app/tabelainternet.html'>Tabela de Preços<FaExternalLinkAlt/></a>
                <a target='_blank' href='https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp' >Situação Cadastral<FaExternalLinkAlt/></a>
                <a target='_blank' href='https://www.claro.com.br'>Site Claro<FaExternalLinkAlt/></a>
            </nav>
        </header>
    )
}