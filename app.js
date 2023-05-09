window.TypeScriptStart = () => {
    //この中に処理を書くこと******************************************************************************************************************************************************************
    //**************************************************************************************************************************************************************************************
    async function fetchProducts() {
        const response = await fetch('/products');
        const productsData = await response.json();
        return productsData;
    }
    async function displayProducts() {
        try {
            const products = await fetchProducts();
            products.forEach((product) => {
                console.log(`Product: ${product.name}, price: $${product.price}`);
            });
        }
        catch (error) {
            console.error('Failed to display products:', error);
        }
    }
    // Usage:
    displayProducts();
    //ここまでに処理を書くこと------------------------------------------------------------------------------------------------------------------
};
export {};
