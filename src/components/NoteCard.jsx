import { useContext, useRef, useState } from "react"
import CardButtons from "./subComponents/CardButtons";
import { ListContext } from "../store/list-context";

export default function NoteCard({ item }){
    const [show,setShow] = useState(false)
    const [isEditing , setIsEditing] = useState(false)
    const {onUpdate} = useContext(ListContext)
    const editRef = useRef(null);

    function handleShow(e){  
        {!isEditing && setShow(show => (!show))}
    }
    
    const handleRedirect = (e) => {
        e.stopPropagation();
    };

    function handleEdit(e){
        e.stopPropagation()
        setIsEditing(true)
    }
    
    function handleSubmit(e) {
        e.stopPropagation()
        onUpdate({title : item.title , content : editRef.current.innerText, id: item.id})
        setIsEditing(false)
    }

    return (
        <>
         {  
            <section id="content" onClick={handleShow}>
                <section id="Card-Header">
                        <h2>{item.title}</h2>
                        {show &&  <CardButtons item={item} handleEdit={handleEdit} onRedirect = {handleRedirect} />}
                </section>
                <p className={`note ${show ? "show" : ""} `} ref={editRef} contentEditable={isEditing} suppressContentEditableWarning={true}>
                    {item.content}
                </p>

                {isEditing && <button onClick={handleSubmit} className="add-item-button">Submit</button>}
            </section> 
         }
        </>
    )
}