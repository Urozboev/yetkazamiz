export const addProduct = (productItem) => {
    return {
        type: 'ADD_PRODUCT',
        payload: {
            ...productItem
        } 
    }
}