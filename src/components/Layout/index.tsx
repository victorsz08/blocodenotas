import { CgNotes } from 'react-icons/cg'
import style from './header.module.css';



export default function Header({ children } : { children: React.ReactNode }) {
    return (
        <section>
            <header className={style.header_container}>
                <div className={style.title}>
                    <CgNotes/>
                    <h1>Bloco de Notas</h1>
                </div>
                <nav className={style.nav_container}>
                    <a target='_blank' href='https://planos.claro.com.br/acompanhar-pedido/login?_gl=1*1pm6giv*_ga*MTU3Mjc0NDU5OS4xNzAyMzkxNTkx*_ga_GNP2EH7K6E*MTcwNzM5OTU1OC40NS4xLjE3MDc0MDE4NzQuNjAuMC4w'>ACOMPANHE SEU PEDIDO</a>
                    <a target='_blank' href='https://claro-brown.vercel.app/tabelainternet.html'>TABELA DE PREÇOS</a>
                    <a target='_blank' href='https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp' >SITUAÇÃO CADASTRAL</a>
                    <a target='_blank' href='https://www.claro.com.br'>SITE DA CLARO</a>
                </nav>
            </header>
                <div className={style.layout_container}>
                    {children}
                </div>
            <footer className={style.footer_container}>
                <p>Bloco de Notas - 2024</p>
            </footer>
        </section>
    )
}