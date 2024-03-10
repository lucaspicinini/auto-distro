import { _globals } from "../Models/globals.js";
import { validForm } from "../Utils/valid-form.js";
import { generateItem } from "../Core/generate-item.js";
import { showItems } from "../Utils/show-items.js";
import { generateDeleteItemButtons } from "../Core/delete-item.js";

function setAddItem() {
    document.getElementById("addItemButton").addEventListener("click", (event) => {
        const form = document.getElementById("itemsForm");
        
        if (!form.checkValidity()) {
           validForm(form, event);
         } else {
           const item = generateItem();
     
           if(item != false) {
              _globals.itemsList.push(item);
           }
     
           _globals.itemsList.sort((a, b) => b.totalSizes - a.totalSizes);
           showItems();
           generateDeleteItemButtons();
         }
     });
}

export const addItem = setAddItem;
