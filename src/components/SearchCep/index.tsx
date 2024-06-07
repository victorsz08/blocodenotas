import styled from "styled-components"
import { FaHouse } from "react-icons/fa6";
import { useState } from "react";

const StyleSearch = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 2rem;
    height: 100%;
    border-radius: 1.2rem;

    .response {
        width: 45rem;
        font-size: .8rem;
    }

    .title {
        margin-bottom: 2rem;
        display: flex;
        justify-content: flex-start;
        gap: 15px;
        align-items: center;
    }

    .title svg {
        color: #ff6700;
        width: 1.5rem;
        height: 1.5rem;
    }

    .response table {
        margin: 2rem 0;
    }

    .response table td {
        padding: .6rem;
    }
`

type IData = {
    localidade: string;
    bairro: string;
    cep: string;
    logradouro: string;
    uf: string;
}


export default function SearchCep() {
    const [data, setData] = useState('')
    const [response, setResponse] = useState<IData | any>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!data) {
            return
        };

        const res = await fetch(`https://opencep.com/v1/${data}`).then(res => res.json());

        setResponse(res);
    };

    return (
        <StyleSearch className="box-shadow background-accent">
            <div className="title">
                <FaHouse/>
                <h1>Buscar Logradouros</h1>
            </div>
            {!response ? 
                <form className="response" onSubmit={handleSubmit}>
                    <input className="nt-input" value={data} onChange={e => setData(e.target.value)} placeholder="Digite o cep..."/>
                    <button className="nt-button">Buscar</button>
                </form>    :
                <div className="response">
                    <table>
                        <tr className="table-reference">
                            <td>Logradouro</td>
                            <td>Bairro</td>
                            <td>Cidade</td>
                            <td>Estado</td>
                            <td>CEP</td>
                        </tr>
                        <tr className="table">
                            <td>{response.logradouro}</td>
                            <td>{response.bairro}</td>
                            <td>{response.localidade}</td>
                            <td>{response.uf}</td>
                            <td>{response.cep}</td>
                        </tr>
                    </table>
                    <button className="nt-button" onClick={() => { setData(''); setResponse('')}}>Nova Busca</button>
                </div>
        }
        </StyleSearch>
    )
}