class Item {
    itemId;
    totalSizes;
    HtmlItem;

    constructor(itemName = "", itemColor = "", itemSizes = {}) {
        this.itemName = itemName;
        this.itemColor = itemColor;
        this.itemSizes = itemSizes;
        this.generateItemId();
        this.generateTotalSizes();
        this.generateHtmlItem();
    }

    generateItemId() {
        this.itemId = 
            this.itemName.replaceAll(" ", "")
            + "-"
            + this.itemColor.replaceAll(" ", "")
        ;
    }

    generateTotalSizes() {
        this.totalSizes =
              this.itemSizes.P
            + this.itemSizes.M
            + this.itemSizes.G
            + this.itemSizes.GG
            + this.itemSizes.GGG
        ;
    }

    generateHtmlItem() {
        this.HtmlItem = `
            <div class="accordion-item" id="accordionItem-${this.itemId}">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionItems-${this.itemId}" aria-expanded="false" aria-controls="accordionItems-${this.itemId}">
                    ${this.itemName} - ${this.itemColor}
                </button>
                </h2>
                <div id="accordionItems-${this.itemId}" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <p><strong>P: ${this.itemSizes.P}</strong></p>
                        <p><strong>M: ${this.itemSizes.M}</strong></p>
                        <p><strong>G: ${this.itemSizes.G}</strong></p>
                        <p><strong>GG: ${this.itemSizes.GG}</strong></p>
                        <p><strong>GGG: ${this.itemSizes.GGG}</strong></p>
                        <p><strong>Total: ${this.totalSizes}</strong></p>
                    </div>
                    <div>
                      <button class="w-100 btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#deleteItemsModal" id="deleteItemButton-${this.itemId}">Remover item da lista</button>
                    </div>
                </div>
            </div>`
        ;
    }
}

export const ItemClass = Item;
