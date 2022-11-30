const initialState = [
    { id: 0, name: "Produce", imgName: "banana.png", bg: "#eed352" },
    { id: 1, name: "Dairy, Eggs", imgName: "dairy.png", bg: "#e4b986" },
    { id: 2, name: "Meat", imgName: "meat.png", bg: "#ff8c66" },
    { id: 3, name: "Vegetables", imgName: "vegetables.png", bg: "#eda340" },
    { id: 4, name: "Candy", imgName: "candy.png", bg: "#e4b986" },
    { id: 5, name: "frozen foods", imgName: "frozen.png", bg: "#f47775" },
    { id: 6, name: "breakfast", imgName: "breakfast.png", bg: "#e4b986" },
    { id: 7, name: "lunch ideas", imgName: "lunch.png", bg: "#deceb7" }
];

const products = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
    return state
}

export default products