import { useEffect, useState } from "react";
import style from "./todo.module.css";
import { FaCircleInfo } from "react-icons/fa6";
import CardContract from "../CardRegister";


const states = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MS", "MT", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

type ICity = {
  id: number;
  nome: string;
};

type IList = {
  id: number;
  contract: string;
  city: string;
  state: string;
  number: string;
  date: string;
}

export default function TodoList() {
  const [cityArr, setCityArr] = useState<ICity[]>([]);
  const [state, setState] = useState("RJ");
  const [city, setCity] = useState("");
  const [contract, setContract] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [list, setList] = useState<IList[]>(JSON.parse(localStorage.getItem('[LIST_CONTRACTS]') || "[]") || []);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    const listLocal = localStorage.getItem('[LIST_CONTRACTS]');
    if (listLocal) {
      setList(JSON.parse(listLocal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('[LIST_CONTRACTS]', JSON.stringify(list));
  }, [list]);

  const searchCity = async () => {
    console.log(state === 'SP')

    if(state === 'SP') {
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/distritos?orderBy=nome`
      ).then((res) => res.json());

      setCity('São Paulo');
      setCityArr(response);
    } else {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/distritos?orderBy=nome`
    ).then((res) => res.json());

    setCityArr(response);
    setCity(response[0].nome)
  }
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const data = {
      id: Math.random(),
      contract: contract,
      state: state,
      city: city,
      number: number,
      date: date
    };

    if(!data){
      return
    } else {

    setList((list) => [...list, data]);
    setContract('');
    setNumber('');
    setDate('');
    }
  };

  function handleDelete(id: number) {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  useEffect(() => {
    searchCity();
  }, [state]);

  return (
    <section className={style.todo_container}>
      <h2>Lista de Contratos</h2>
      <FaCircleInfo id={style.info} onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)}/>
        {info && 
        <span className={style.popup} onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)}>
              Tabela para armazenar seus contratos feitos, uma forma de organizar todos seus contratos concluídos com os
              dados importantes para localiza-los. <strong>Atenção! Todos os dados são salvos localmente, não são hospedados
              em nenhum Banco de Dados ou Servidores Externos, os dados são salvos no navegador da máquina localmente.
            </strong>
          </span>
          }
      <form onSubmit={handleSubmit} className={style.form_container}>
        <div className={style.input_container}>
          <div className={style.box_1}>
            <div className={style.input_component}>
              <label>Número do Contrato</label>
              <input type="text" placeholder="Contrato" required value={contract} onChange={(e) => setContract(e.target.value)} />
            </div>
            <div className={style.input_component}>
              <label>Estado</label>
              <select value={state} onChange={(e) => setState(e.target.value)}>
                {states.map((state, index) => (
                  <option key={index}>{state}</option>
                ))}
              </select>
            </div>
            <div className={style.input_component}>
              <label>Cidade</label>
              <select value={city} onChange={(e) => setCity(e.target.value)}>
               {state === 'SP' && <option key={77777777}>São Paulo</option>}
                {cityArr.map((city) => (
                  <option key={city.id}>{city.nome}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={style.box_2}>
            <div className={style.input_component}>
              <label>Número do Cliente</label>
              <input type="tel" required placeholder="Número do cliente" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className={style.input_component}>
              <label>Data de Instalação</label>
              <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>
        </div>
        <button type="submit">Criar Registro</button>
      </form>
      <h4>Lista de Registros:</h4>
      <div className="list-container">
        {list.map((item) => (
          <CardContract 
          city={item.city} 
          contract={item.contract} 
          date={item.date} 
          number_client={item.number} 
          state={item.state} 
          key={item.id}
          onCLick={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
