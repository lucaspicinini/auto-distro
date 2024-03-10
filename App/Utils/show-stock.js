function setShowStock(stockUnits) {
    document.getElementById("finalStockContainer").classList.remove("d-none");
    
    const unitsHtml = stockUnits.map((unit, i) => {
        const stockId = ++i;

        return `
            <div class="accordion-item" id="accordionFinalStock-${stockId}">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionFinalStocks-${stockId}" aria-expanded="false" aria-controls="accordionFinalStocks-${stockId}">
                    Prateleira: ${stockId}
                </button>
                </h2>
                <div id="accordionFinalStocks-${stockId}" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        ${generateFloors(unit)}
                    </div>
                </div>
            </div>
        `
    }).join('');

    document.getElementById("containerFinalStock").innerHTML = unitsHtml;
}

function generateFloors(unit) {
    const floorsHtml = unit.map((floor, i) => {
        const floorId = ++i;

        return `
        <ul class="mb-1 list-group">
            <p class="fs-5 text-body-emphasis mb-1">Andar ${floorId}:</p>
            <li class="list-group-item d-flex flex-column justify-content-between align-items-start">
                ${listItems(floor)}
            </li>
        </ul>
        `
    }).join('');

    return floorsHtml;
}

function listItems(floor) {
    const itemsHtml = floor.map((item) => {
        return `
        <div class="w-100 mb-2 d-flex justify-content-between">
            <span>${item.name} - ${item.color} | Tam. ${item.size}:</span>
            <span class="badge text-bg-primary rounded-pill">${item.quant}</span>
        </div>
        `
    }).join('');

    return itemsHtml;
}

export const showStock = setShowStock;
