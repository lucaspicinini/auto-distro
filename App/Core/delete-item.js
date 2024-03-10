import { _globals } from "../Models/globals.js";

function setGenerateDeleteItemButtons(){
    const allButtons = document.getElementsByTagName('button');

    if(document.getElementById("containerAccordionItems").hasChildNodes()) {
        const deleteItemButtons = new Array();

        Array.from(allButtons).forEach((button) => {
            if(button.innerHTML === "Remover item da lista") {
                deleteItemButtons.push(button);
            }
        });

        deleteItem(deleteItemButtons);
    }
}

function deleteItem(deleteItemButtons) {
    deleteItemButtons.forEach((button) => {
        button.addEventListener("click", () => {
            document.getElementById("deleteItemConfirmButton").addEventListener("click", () => {
                const itemId = button.id.replace("deleteItemButton-", "");
                const itemToDelete = document.getElementById(`accordionItem-${itemId}`);
                document.getElementById("containerAccordionItems").removeChild(itemToDelete);
                const auxiliarList = [];
                
                for(let i = 0; i < _globals.itemsList.length; i++) {
                    if (_globals.itemsList[i].itemId !== itemId) {
                        auxiliarList.push(_globals.itemsList[i]);
                    } 
                }

                _globals.itemsList = auxiliarList;
                if(_globals.itemsList.length == 0) {
                    document.getElementById("itemsListContainer").classList.add("d-none");
                }
            });
        });
    });
}

export const generateDeleteItemButtons = setGenerateDeleteItemButtons;
