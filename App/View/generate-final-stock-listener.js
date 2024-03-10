import { _globals } from "../Models/globals.js";
import { generateStockFloors } from "../Core/generate-stock-floors.js";
import { generateStockUnits } from "../Core/generate-stock-units.js";
import { showStock } from "../Utils/show-stock.js";
import { showAlert } from "../Utils/show-alert.js";

function setGenerateFinalStock() {
    document.getElementById("generateFinalStock").addEventListener("click", () => {
        if(_globals.stockModel != null) {
            const readyFloors = generateStockFloors(_globals.itemsList, _globals.stockModel); // generate individual floors based in items' global list
            const stockUnits = generateStockUnits(readyFloors, _globals.stockModel); // generate stock units based on ready floors
            document.getElementById("noStockAlert").innerHTML = "";
            showStock(stockUnits); // show final stock
        } else {
            showAlert("noStockAlert", "Você precisa definir um modelo de prateleira!", "danger", true);
        }
    });
}

export const generateFinalStock = setGenerateFinalStock;
