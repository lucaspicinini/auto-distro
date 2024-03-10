import { _globals } from "../Models/globals.js";

function setShowItems() {
    document.getElementById("itemsListContainer").classList.remove("d-none");
    document.getElementById("containerAccordionItems").innerHTML = "";

    _globals.itemsList.forEach((item) => {
        document.getElementById("containerAccordionItems").innerHTML += item.HtmlItem;
    })
}

export const showItems = setShowItems;
