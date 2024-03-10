import { _globals } from "../Models/globals.js";

function setGenerateStockUnits(readyFloors) {
    let stockFloors = _globals.stockModel.stockFloors;
    let tempStockUnit = [];
    let stockUnits = [];
 
    for (let i = 0; i < readyFloors.length; i++) {
       const floor = readyFloors[i];
 
       if(stockFloors > 1) {
          tempStockUnit.push(floor);
          stockFloors--;
       } else if(stockFloors == 1) {
          tempStockUnit.push(floor);
          stockUnits.push(tempStockUnit);
          tempStockUnit = [];
          stockFloors = _globals.stockModel.stockFloors;
       }
    }

   if(tempStockUnit.length > 0) {
      stockUnits.push(tempStockUnit);
   }
    
   return stockUnits;
}

export const generateStockUnits = setGenerateStockUnits;
