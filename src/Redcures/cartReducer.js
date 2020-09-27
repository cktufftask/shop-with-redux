import { products }  from "../productList";


const initState = {
    items: products,
    addedItems: [],
    total: 0,
    discount: 0,
    totalitemscount: 1,
    tax:0,
    shipping:50,
    address:""
};

const cartReducer = (state = initState, action) => {
    const findPrice = (price, discount) => {
        let x = 100;
        let y = x - discount;
        let z = price * x;
        return Math.round(z / y);
    }

    switch (action.type) {
        //Home
        case "UPDATE_ADDRESS":{
            return { ...state,address:action.address}
        }
        case "ADD_TO_CART": {
            //console.log(addedItem)
            let index = state.addedItems.findIndex(item => action.id === item.id);
            const products = [...state.items];
            const prodIndex = products.findIndex(item => action.id === item.id);
            products[prodIndex].quantity -= 1;
            if (index !== -1) {
                const addedItemList = [...state.addedItems];
                const addedItem = addedItemList[index];
                addedItem.quantity += 1;
                return {
                    ...state,
                    items: products,
                    addedItems: addedItemList,
                    total: state.total + addedItem.price,
                    discount: state.discount + (findPrice(addedItem.price, addedItem.discount) - addedItem.price),
                    totalitemscount: state.totalitemscount + 1 

                };

            } else {
                let newItemIndex = state.items.findIndex(item => item.id === action.id);
                if (newItemIndex !== -1) {
                    let newItem = { ...state.items[newItemIndex] };
                    newItem.quantity = 1;
                    return {
                        ...state,
                        items: products,
                        addedItems: [...state.addedItems, newItem],
                        total: state.total + newItem.price,
                        discount: state.discount + (findPrice(newItem.price, newItem.discount) - newItem.price),
                        totalitemscount: state.totalitemscount + 1 


                    };
                }

                return {
                    ...state
                };
            }
        }
        //Cart
        case "REMOVE_ITEM": {
            let itemToRemove = state.addedItems.find(item => action.id === item.id);
            let new_items = state.addedItems.filter(item => action.id !== item.id);

            //calculating the total
            let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
            console.log(itemToRemove);
            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                discount: +(state.discount - (((findPrice(itemToRemove.price, itemToRemove.discount))- itemToRemove.price)*itemToRemove.quantity)),
                totalitemscount: state.totalitemscount -itemToRemove.quantity

            };
        }

        case "ADD_QUANTITY": {

            let index = state.addedItems.findIndex(item => action.id === item.id);
            const products = [...state.items];
            const prodIndex = products.findIndex(item => action.id === item.id);

            if (products[prodIndex].quantity === 0)
                products[prodIndex].quantity = 0;
            else
                products[prodIndex].quantity -= 1;

            if (index !== -1) {
                const addedItemList = [...state.addedItems];
                const addedItem = addedItemList[index];
                addedItem.quantity += 1;
                return {
                    ...state,
                    items: products,
                    addedItems: addedItemList,
                    total: state.total + addedItem.price,
                    discount: state.discount + (findPrice(addedItem.price, addedItem.discount) - addedItem.price),
                    totalitemscount: state.totalitemscount + addedItemList.length
                };
            }
        }
        break;
        case "SUB_QUANTITY": {
            let index = state.addedItems.findIndex(item => action.id === item.id);
            const products = [...state.items];
            const prodIndex = products.findIndex(item => action.id === item.id);
            products[prodIndex].quantity += 1;
            if (index !== -1 ) {
                const addedItemList = [...state.addedItems];
                const addedItem = addedItemList[index];
                addedItem.quantity -= 1;
                if(addedItem.quantity<=0){
                    let itemToRemove = state.addedItems.find(item => action.id === item.id);
                    let new_items = state.addedItems.filter(item => action.id !== item.id);
        
                    //calculating the total
                    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
                    console.log(itemToRemove);
                    return {
                        ...state,
                        addedItems: new_items,
                        total: newTotal,
                        discount: +(state.discount - (((findPrice(itemToRemove.price, itemToRemove.discount))- itemToRemove.price)*itemToRemove.quantity)),
                        totalitemscount: state.totalitemscount -itemToRemove.quantity
        
                    };
                } else{
                    return {
                        ...state,
                        items: products,
                        addedItems: addedItemList,
                        total: state.total - addedItem.price,
                        discount: state.discount - (findPrice(addedItem.price, addedItem.discount) - addedItem.price),
                        totalitemscount: state.totalitemscount - 1
                        
                    };
                }   

            }

        }
        break;
        case "ADD_QUANTITY_WITH_PRODUCT":{
            // const products = [...state.items];
            // let checkId=state.addedItems.filter((item)=>item.id===action.id);
            // if(checkId){
            //     return {...state, addedItems:[{ ...products[action.id]}]}
            // }else{
            //     return {...state, addedItems:{ ...products[action.id].quantity+1}}
            // }
            let index = state.addedItems.findIndex(item => action.id === item.id);
            const products = [...state.items];
            const prodIndex = products.findIndex(item => action.id === item.id);
            products[prodIndex].quantity -= 1;
            if (index !== -1) {
                const addedItemList = [...state.addedItems];
                const addedItem = addedItemList[index];
                addedItem.quantity += 1;
                return {
                    ...state,
                    items: products,
                    addedItems: addedItemList,
                    total: state.total + addedItem.price,
                    discount: state.discount + (findPrice(addedItem.price, addedItem.discount) - addedItem.price),
                    totalitemscount: state.totalitemscount + 1 

                };

            } else {
                let newItemIndex = state.items.findIndex(item => item.id === action.id);
                if (newItemIndex !== -1) {
                    let newItem = { ...state.items[newItemIndex] };
                    newItem.quantity = 1;
                    return {
                        ...state,
                        items: products,
                        addedItems: [...state.addedItems, newItem],
                        total: state.total + newItem.price,
                        discount: state.discount + (findPrice(newItem.price, newItem.discount) - newItem.price),
                        totalitemscount: state.totalitemscount + 1 


                    };
                }

                return {
                    ...state
                };
            }
            

        }    
        case "TOTAL_QUANTITY": {

            let index = state.addedItems.findIndex(item => action.id === item.id);
            const products = [...state.items];
            const prodIndex = products.findIndex(item => action.id === item.id);
            if (index !== -1) {
                const addedItemList = [...state.addedItems];
                const addedItem = addedItemList[index];
                addedItem.quantity -= 1;
                return {
                    ...state,
                    totalitemscount: state.totalitems + products[prodIndex].quantity
                };
            }
        }
         break;   
        default: {
            return state;
        }
    }
};

export default cartReducer;