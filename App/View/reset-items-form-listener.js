function setResetItemsForm() {
   const clearItemsFormConfirmButton = document.getElementById("clearItemsFormConfirmButton");
   
    if(clearItemsFormConfirmButton) {
      clearItemsFormConfirmButton.addEventListener("click", () => {
         document.getElementById("itemName").value = "";
         document.getElementById("itemColor").value = "";
         document.getElementById("sizeP").value = "";
         document.getElementById("sizeM").value = "";
         document.getElementById("sizeG").value = "";
         document.getElementById("sizeGG").value = "";
         document.getElementById("sizeGGG").value = "";
      });
    }
}

export const resetItemsForm = setResetItemsForm;
