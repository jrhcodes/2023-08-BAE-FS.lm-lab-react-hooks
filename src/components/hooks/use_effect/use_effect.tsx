import { useEffect, useState } from "react"

const APICall: React.FC = () => {

    const [todoText, setTodoText] = useState("");

    const fetchResponse = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const jsonplaceholder = await response.json();
            setTodoText(jsonplaceholder.title);
        } catch (err: any) {
            alert(`Error occurred getting todo data: ${err.message}`);
        }
    }

    useEffect(() => { fetchResponse() }, []);


    return (
        <>
            <h2>useEffect</h2>
            <p>{todoText}</p>
        </>
    )
}

export default APICall;