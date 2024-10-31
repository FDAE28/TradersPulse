document.addEventListener('DOMContentLoaded', () => {
    console.log("TraderPulse está listo para ser utilizado");

    async function obtenerDatosDeMercador (){
        try {
            const response = await fetch('/api/mercado');
            if(!response.ok){
                throw new Error(`HTTP ERROR - status : ${response.status}`);
            }
            const data = await response.json();
            mostrarDatosEnPantalla(data);
            console.log(data);
        } catch (error) {
            console.error("Error al obtener los datos del mercado", error);
        }
    }

    function mostrarDatosEnPantalla(data) {
        const marketPriceElement = document.getElementById('market-price');
        if (marketPriceElement) {
            marketPriceElement.textContent = `Precio actual: ${data.regularMarketPrice} USD`;
        }
    
        const changeElement = document.getElementById('change');
        if (changeElement) {
            changeElement.textContent = `Variación: ${data.regularMarketChangePercent}%`;
        }
    
        const highElement = document.getElementById('high');
        if (highElement) {
            highElement.textContent = `Máximo del día: ${data.regularMarketDayHigh}`;
        }
    
        const lowElement = document.getElementById('low');
        if (lowElement) {
            lowElement.textContent = `Mínimo del día: ${data.regularMarketDayLow}`;
        }
    
        const openElement = document.getElementById('open');
        if (openElement) {
            openElement.textContent = `Apertura: ${data.regularMarketOpen}`;
        }
    }
    
    

    obtenerDatosDeMercador();

})