import { _globals } from "../Models/globals.js";

function setGenerateStockFloors(itemsList) {
    let freeSpacesOnFloor = _globals.stockModel.floorLimit;
    let floorUnderConstruction = [];
    let readyFloors = [];

    function createTempObject(item, size, quant) {
        const tempObject = {
            id: item.itemId,
            name: item.itemName,
            color: item.itemColor,
            size: size,
            quant: quant
        };

        return tempObject;
    }

    itemsList.forEach(item => {
        for(const size in item.itemSizes) {
            const itemQuant = item.itemSizes[size];

            if(itemQuant > 0) {
                checkFreeSpacesOnFloor(size, itemQuant, item);
            }
        }
    });

    function checkFreeSpacesOnFloor(size, itemQuant, item) {
        let valueToStock =
            itemQuant <= freeSpacesOnFloor ?
            itemQuant :
            freeSpacesOnFloor
        ;

        const tempObject = createTempObject(item, size, valueToStock);
        floorUnderConstruction.push(tempObject);
        freeSpacesOnFloor -= valueToStock;
        item.itemSizes[size] -= valueToStock;
        checkReadyFloor(size, itemQuant, item);
    }

    function checkReadyFloor(size, itemQuant, item) {
        if(freeSpacesOnFloor == 0) {
            freeSpacesOnFloor = _globals.stockModel.floorLimit;
            readyFloors.push(floorUnderConstruction);
            floorUnderConstruction = [];
            
            if(item.itemSizes[size] > 0) {
                checkForLeftOvers(size, itemQuant, item);
            }
        }
    }

    function checkForLeftOvers(size, itemQuant, item) {
        if (item.itemSizes[size] >= _globals.stockModel.floorLimit) {
            const tempObject = createTempObject(item, size, _globals.stockModel.floorLimit);
            floorUnderConstruction.push(tempObject);
            readyFloors.push(floorUnderConstruction);
            floorUnderConstruction = [];
            item.itemSizes[size] -= _globals.stockModel.floorLimit;
            
            // recursive
            checkForLeftOvers(size, itemQuant, item);
        } else {
            const tempObject = createTempObject(item, size, item.itemSizes[size]);
            freeSpacesOnFloor -= item.itemSizes[size];
            item.itemSizes[size] -= item.itemSizes[size];

            if(tempObject.quant > 0) {
                floorUnderConstruction.push(tempObject);
            }
        }
    }
    
    if(floorUnderConstruction.length > 0) {
        readyFloors.push(floorUnderConstruction);
    }
    
    return readyFloors;
}

export const generateStockFloors = setGenerateStockFloors;