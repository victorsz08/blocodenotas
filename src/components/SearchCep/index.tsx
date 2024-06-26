import { useState } from "react";
import style from "./search.module.css";


type IData = {
    localidade: string;
    bairro: string;
    cep: string;
    logradouro: string;
    uf: string;
}

export default function SearchCep() {
    const [data, setData] = useState('');
    const [response, setResponse] = useState<IData | any>('');

    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!data) {
            return;
        }

        let cep = data.replace("-", "");

        if (cep.length === 7) {
            cep = '0' + cep;
        }

        const res = await fetch(`https://opencep.com/v1/${cep}`).then(res => res.json());

        setResponse(res);
    };

    return (
        <div className={style.search_cep_container}>
            <div className={style.title}>
                <h1>Buscar Logradouros</h1>
            </div>
            {!response ?
                <form className={style.response_container} onSubmit={handleSubmit}>
                    <input value={data} onChange={e => setData(e.target.value)} placeholder="Digite o cep..." />
                    <button >Buscar</button>
                </form> :
                <div className={style.data_container}>
                    <table>
                        <thead>
                            <tr className="table-reference">
                                <th>Logradouro</th>
                                <th>Bairro</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>CEP</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table">
                                <td>{response.logradouro}</td>
                                <td>{response.bairro}</td>
                                <td>{response.localidade}</td>
                                <td>{response.uf}</td>
                                <td>{response.cep}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={() => { setData(''); setResponse('') }}>Nova Busca</button>
                </div>
            }
        </div>
    );
}
