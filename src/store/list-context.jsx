import { createContext, useEffect, useState } from "react";


export const ListContext = createContext({
    items : [],
    onUpdate : (task) => {},
    onDelete : (taskId) => {},
    onSearch : (taskUrl) => {}
})

export default function ListContextProvider({children}){
    

    let items = localStorage.getItem("storedClips");
    if(items) items = JSON.parse(items);
    else items = [];
    const [currItems , setItems] = useState(items)
      

    const ctxValue = {
        items : currItems,
        onUpdate : handleSubmit,
        onDelete : handleDelete,
        onSearch : handleSearch
    }  
    
    function addtoStorage(){    
        localStorage.setItem('storedClips', JSON.stringify(currItems));
    }
    const [selectedText, setSelectedText] = useState('');

    useEffect(() => {
        addtoStorage();
    }, [currItems]);

    
    function handleSubmit(task){
        if(items.length > 0) var idx = currItems.findIndex(item => item.id === task.id);
        if(idx === -1 || items.length === 0){
            const newItem = {
                id : currItems.length + 1,
                title : task.title,
                content : task.content,
                url : "https://www.google.com/"
            }
            setItems((prev) => {
                return [...prev , newItem]
            });
        }
        else{
            setItems((prev) => {
                const updatedItems = [...prev];
                updatedItems[idx] = task;
                return updatedItems;
            });
        }
    }

    function handleDelete(taskId){
        setItems((prev) => {
            const updatedItems = prev.filter((item) => item.id !== taskId);
            return updatedItems;
        });
    }

    function handleSearch(taskUrl){
        const redirectUrl = taskUrl
        chrome.tabs.create({ url: redirectUrl });
    }


    return(
        <ListContext.Provider value={ctxValue}>
            {children}
        </ListContext.Provider>
    )
}