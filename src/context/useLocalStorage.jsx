import React from "react";

const useLocalStorage = (itemName, initialValue)=>{
    const [item, setItem] = React.useState(initialValue);


    React.useEffect(()=>{

        const localStorateItem = localStorage.getItem(itemName);
        let parsedItem;
        if(!localStorateItem){
            localStorateItem.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue
        }else{
            parsedItem = JSON.parse(localStorateItem)
            setItem(parsedItem)
        }

    }, [])

    const saveItem = (newItem)=>{
        localStorage.setItem(itemName,JSON.stringify(newItem));
        setItem(newItem)
    };

    return {
        item,
        saveItem
    }
}