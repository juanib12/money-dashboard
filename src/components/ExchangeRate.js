const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
    return (
        <div className="exchange-rate">
            <h3>Tipo de Cambio</h3>
            <h1>{exchangeRate}</h1>
            <p>{chosenPrimaryCurrency} a {chosenSecondaryCurrency} </p>
        </div>
    )
}

export default ExchangeRate