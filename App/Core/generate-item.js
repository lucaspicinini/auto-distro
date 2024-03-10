import { _globals } from "../Models/globals.js";
import { showAlert } from "../Utils/show-alert.js";
import { ItemClass } from "../Models/Item.js";

function setGenerateItem() {
    const itemName = document.getElementById("itemName").value
    const itemColor = document.getElementById("itemColor").value
    const itemId = 
        itemName.replaceAll(" ", "")
        + "-"
        + itemColor.replaceAll(" ", "")
    ;

    let repeatedItem = false;

    if(_globals.itemsList.length > 0) {
        _globals.itemsList.forEach((item) => {
            if(item.itemId == itemId) {
                repeatedItem = true;
            }
        });
    }

    if(!repeatedItem) {
        const item = new ItemClass(
            itemName,
            itemColor,
            {
                P: Number(document.getElementById("sizeP").value),
                M: Number(document.getElementById("sizeM").value),
                G: Number(document.getElementById("sizeG").value),
                GG: Number(document.getElementById("sizeGG").value),
                GGG: Number(document.getElementById("sizeGGG").value),
            }
        );
        
        document.getElementById("repeatedItemAlert").innerHTML = "";
        bootstrap.Toast.getOrCreateInstance(document.getElementById('addItemToast')).show();
        return item;
    } else {
        showAlert("repeatedItemAlert", "Este item já foi cadastrado!", "danger", true);
        return false;
    }
}

export const generateItem = setGenerateItem;
