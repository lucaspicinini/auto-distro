import { _globals } from "../Models/globals.js";

function setResetStockModel() {
  const resetStockConfirmButton = document.getElementById("resetStockConfirmButton");

    if(resetStockConfirmButton) {
       resetStockConfirmButton.addEventListener("click", () => {
         document.getElementById("readyStockModelAlert").innerHTML = "";
         document.getElementById("setStockModelButton").classList.add("disabled");
         document.getElementById("stockFloors").toggleAttribute("readonly", false);
         document.getElementById("floorLimit").toggleAttribute("readonly", false);
         document.getElementById("stockFloors").value = "";
         document.getElementById("floorLimit").value = "";
         document.getElementById("setStockModelButton").classList.remove("disabled");
         _globals.stockModel = null;
       });
    }
}

export const resetStockModel = setResetStockModel;
