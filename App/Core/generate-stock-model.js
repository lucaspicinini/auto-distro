import { _globals } from "../Models/globals.js";
import { StockModelClass } from "../Models/StockModel.js";

function setGenerateStockModel() {
    _globals.stockModel = new StockModelClass(
        Number(document.getElementById("stockFloors").value),
        Number(document.getElementById("floorLimit").value)
    );
}

export const generateStockModel = setGenerateStockModel;
