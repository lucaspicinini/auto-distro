import { _globals } from "./Models/globals.js";
import { addItem } from "./View/add-item-listener.js";
import { resetItemsForm } from "./View/reset-items-form-listener.js";
import { setStockModel } from "./View/set-stock-model-listener.js";
import { generateFinalStock } from "./View/generate-final-stock-listener.js";

addItem(); // add items that will be used in auto-distro
resetItemsForm(); // reset items form
setStockModel(); // set the stock model that will be used for distribute all items in global list
generateFinalStock(_globals.stockModel); // entry point for auto-distro's core algorithm 
