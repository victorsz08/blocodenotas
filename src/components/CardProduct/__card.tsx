import "./card_products.css";

type IProps = {
  name: string;
  value: string;
  nomeclature: string;
  promo?: string;
}




export function CardNet({ name, value, nomeclature, promo } : IProps) {
  return (
    <div className="card-container">
      <div className="title-container">
        <h2>{name}</h2>
        <h5>GloboPlay</h5>
      </div>
      <div className="apps-container">
        <p>Apps Inclusos</p>
        <div className="apps">
          <img src="https://mondrian.claro.com.br/brands/app/72px-default/globoplay.svg" alt="GloboPlay" />
          <img src="https://mondrian.claro.com.br/brands/app/partners/72px-default/mcafee.svg" alt="McAfee" />
          <img src="https://mondrian.claro.com.br/brands/app/72px-default/claro-video.svg" alt="Claro Video" />
        </div>
        <div className="nomeclature-container">
          <h4>NOMECLATURAS</h4>
          <p>{nomeclature}</p>
        </div>
      </div>
      <div className="price-container">
        {promo ? <>
          <h2>{promo}</h2>
          <h4>Após {value}</h4>
        </> : <>
          <h2>{value}</h2>
          <h4>Valor Individual</h4>
        </>}
      </div>
    </div>
  )
}

export function CardTv({ name, value, nomeclature, promo } : IProps) {
  return (
    <div className="card-container">
      <div className="title-container">
        <h2>{name}</h2>
        <h5>Max e Netflix</h5>
      </div>
      <div className="apps-container">
        <p>Apps Inclusos</p>
        <div className="apps">
          <img src="https://mondrian.claro.com.br/brands/app/32px-alternative/max.svg" alt="Max" />
          <img src="https://mondrian.claro.com.br/brands/app/72px-default/netflix.svg" alt="Netflix" />
          <img src="https://mondrian.claro.com.br/brands/app/72px-default/globoplay.svg" alt="GloboPlay" />
        </div>
        <div className="nomeclature-container">
          <h4>NOMECLATURAS</h4>
          <p>{nomeclature}</p>
        </div>
      </div>
      <div className="price-container">
        {promo ? <>
          <h2>{value}</h2>
          <h4>{promo}</h4>
        </> : <>
          <h2>{value}</h2>
          <h4>Valor Individual</h4>
        </>}
      </div>
    </div>
  )
}


