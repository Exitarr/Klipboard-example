import { useContext , useRef } from "react"
import { ListContext } from "../store/list-context"

export default function AddItem({setAdd}) {
    const titleRef = useRef();
    const textRef = useRef();
    const { onUpdate } = useContext(ListContext);

    function handleSubmit() {
        const task = {
            id : -1,
            title: titleRef.current.value,
            content: textRef.current.value,
        };
        onUpdate(task);
        setAdd(false)
    }

    function closeForm(){
        setAdd(false)
    }

    return (
        <div id="Input-Form">
            <label>Title</label>
            <input type="text" placeholder="Enter a title" ref={titleRef} required></input>

            <label>Text Content</label>
            <textarea
                    placeholder="enter the data"
                    rows="6"
                    cols="50"
                    ref={textRef}
                    required
            />
            <button type='submit' className="add-item-button" onClick={handleSubmit}>Submit</button>
            <button type="button" className="button-text" onClick={closeForm}>Close</button>
        </div>
    )
}