import { useEffect, useState } from "react";
import style from "./todo.module.css";
import { TiDelete } from "react-icons/ti";
import { format } from "date-fns";

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
  const [state, setState] = useState("SP");
  const [city, setCity] = useState(cityArr[0] || "");
  const [contract, setContract] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('01/06/2024');
  const [list, setList] = useState<IList[]>(JSON.parse(localStorage.getItem('[LIST_CONTRACTS]') || "[]") || []);

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
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/distritos?orderBy=nome`
    ).then((res) => res.json());

    setCityArr(response);
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
      <form onSubmit={handleSubmit} className={style.form_container}>
        <h4>Criar Registro</h4>
        <div className={style.input_container}>
          <div className={style.box_1}>
            <div className={style.input_component}>
              <label>Número do Contrato</label>
              <input type="text" placeholder="Ex:123456789" required value={contract} onChange={(e) => setContract(e.target.value)} />
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
                {cityArr.map((city) => (
                  <option key={city.id}>{city.nome}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={style.box_2}>
            <div className={style.input_component}>
              <label>Número do Cliente</label>
              <input type="tel" required placeholder="(88) 8888-8888" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className={style.input_component}>
              <label>Data de Instalação</label>
              <input type="date" required placeholder="12/01/2024" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>
        </div>
        <button type="submit">Criar Registro</button>
      </form>
      <h4>Registros</h4>
      <table className={style.table_container}>
        <thead>
          <tr>
            <th>Contrato</th>
            <th>Cidade/Estado</th>
            <th>Número do Cliente</th>
            <th>Data de Instalação</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {list && list.map((item) => (
            <tr key={item.id}>
              <td>{item.contract}</td>
              <td>{item.city}/{item.state}</td>
              <td>{item.number}</td>
              <td>{format(new Date(item.date), 'dd/MM/yyyy')}</td>
              <td><TiDelete onClick={() => handleDelete(item.id)} className={style.delete_icon} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
