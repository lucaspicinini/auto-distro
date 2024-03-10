import { _globals } from "../Models/globals.js";
import { validForm } from "../Utils/valid-form.js";
import { generateStockModel } from "../Core/generate-stock-model.js";
import { showAlert } from "../Utils/show-alert.js";
import { resetStockModel } from "../Core/reset-stock-model.js";

function setSetStockModel() {
  const setStockModelButton = document.getElementById("setStockModelButton");

    setStockModelButton.addEventListener("click", (event) => {
        const form = document.getElementById("stockForm");
        
        if (!form.checkValidity()) {
           validForm(form, event);
         } else {
            setStockModelButton.classList.add("disabled");
            document.getElementById("noStockAlert").innerHTML = "";
            document.getElementById("readyStockModelAlert").innerHTML = "";
            document.getElementById("stockFloors").toggleAttribute("readonly", true);
            document.getElementById("floorLimit").toggleAttribute("readonly", true);
            generateStockModel();
            showAlert("readyStockModelAlert", "Modelo de prateleira definido!", "success", false)
            resetStockModel(_globals.stockModel);         
          }
     });
}

export const setStockModel = setSetStockModel;
