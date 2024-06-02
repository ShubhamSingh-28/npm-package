import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_JAGXrD6NX8Y7pft7thq9uE7h3rRHUAageiFTY6Ls');

export const ChangeCurrency = async(fromCurrency, ToCurrency, unit)=>{
 const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: ToCurrency
    })
    const result = res.data[ToCurrency] * unit
    return result;
}
