
import { CardTv } from "../../components/CardProduct/__card";
import { clarotv } from "../../services";
import "./table-pages.css";





export default function TableTv(){
    return (
        <section className="table-container">
            <h1>OFERTAS DE TV</h1>
            <div className="cards-container">
                {clarotv.map((item) => (
                    <CardTv name={item.name} 
                    nomeclature={item.nomeclature} 
                    value={item.value} 
                    promo={item.promo}
                    key={item.id}/>
                ))}
            </div>
            <div className="infos-clarotv">
                <h4>ADICIONAIS</h4>
                <p>PONTO ADICIONAL BOX R$59,90 - PONTO ADICIONAL HD R$49,90 (SOMENTE PARA CLIENTE 4K) - PONTO ADICIONAL SOUNDBOX R$89,90</p>
            </div>
        </section>
    )
}