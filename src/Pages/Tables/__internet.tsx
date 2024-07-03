import "./table-pages.css";
import { cidades_promo, internet_padrao, internet_promo_six } from "../../services";
import { CardNet } from "../../components/CardProduct/__card";
import { useEffect, useState } from "react";

export default function TableInternet() {
    const [city, setCity] = useState('');
    const [citysFiltred, setCitysFiltred] = useState(cidades_promo);
    const [selectCity, setSelectCity] = useState(false);
    const [cards, setCards] = useState(internet_padrao);

    useEffect(() => {
        if (city) {
            const filteredCities = cidades_promo.filter(item => 
                item.toLowerCase().includes(city.toLowerCase())
            );
            setCitysFiltred(filteredCities);
        } else {
            setCitysFiltred(cidades_promo);
        }
    }, [city]);

    const handleCitySelect = (selectedCity: any) => {
        setCity(selectedCity);
        setSelectCity(false);
        setCards(internet_promo_six); // Atualiza a lista de cards para as promoções
    };

    const handleReset = () => {
        setCity('');
        setCards(internet_padrao); // Redefine a lista de cards para o valor padrão
    };

    return (
        <section className="table-container">
            <h1>OFERTAS DE INTERNET</h1>
            <div className="input-container">
                <input 
                    placeholder="Cidades com promoções" 
                    value={city} 
                    onChange={(e) => {
                        setCity(e.target.value);
                        setSelectCity(true);
                    }}
                />
                {city && selectCity && (
                    <div className="citys-container">
                        {citysFiltred.map((item, index) => (
                            <p 
                                onClick={() => handleCitySelect(item)} 
                                key={index}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <div className="cards-container">
                {cards.map((item) => (
                    <CardNet 
                        key={item.id} 
                        name={item.name} 
                        value={item.value} 
                        promo={item?.promo} 
                        nomeclature={item.nomeclature}
                    />
                ))}
            </div>
            <button className="btn-reset" onClick={handleReset}>Mostrar planos padrões</button>
        </section>
    );
}
