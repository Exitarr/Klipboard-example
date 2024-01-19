import { useContext } from "react"
import { ListContext } from "../../store/list-context"

export default function ModalCard({ id ,setShowModal }){
    const {onDelete} = useContext(ListContext)

    function handleCancel(){
        setShowModal(false)
    }

    function onConfirm(){
        onDelete(id)
        setShowModal(false)
    }

    return (
        <div>
           <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <div id="confirmation-actions">
                <button onClick={handleCancel} className="button-text"> No</button>
                <button onClick={onConfirm} className="button">Yes</button>
            </div>
            </div>
        </div>
    )
}