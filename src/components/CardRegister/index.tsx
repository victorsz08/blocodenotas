import { format } from "date-fns";
import "./cardcontract.css"


type IProps = {
    contract: string;
    city: string;
    state: string;
    number_client: string;
    date: string;
    onCLick: () => void;
}



export default function CardContract({ contract, city, date, number_client, state, onCLick } : IProps) {
    return (
        <div className="card-contract">
            <div className="infos">
                <h4>N° do Contrato:</h4>
                <p>{contract}</p>
            </div>
            <div className="infos">
                <h4>Cidade/Estado:</h4>
                <p>{city}/{state}</p>
            </div>
            <div className="infos">
                <h4>Número do Cliente:</h4>
                <p>{number_client}</p>
            </div>
            <div className="infos">
                <h4>Data de Instalação:</h4>
                <p>{format(new Date(date + 'T00:00:00'), 'dd/MM/yyyy')}</p>
            </div>
            <div className="actions-container">
                <button onClick={onCLick}>X</button>
            </div>
        </div>
    )
}