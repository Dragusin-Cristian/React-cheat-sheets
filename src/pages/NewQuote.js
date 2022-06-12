import { useHistory } from "react-router-dom"; // USED FOR REDIRECTS

const NewQuote = () => {
    const history = useHistory();

    const submitHandler = (event) => {
        event.prevenDefault();
        history.push("/quotes");    
    }

    return (
        <form onSubmit={submitHandler}>
            <label for="title">Ttile:</label>
            <input type="text" id="titile" name="title" /><br />
            <label for="author">author</label><br />
            <input type="text" id="author" name="author" /><br /><br />
            <button >Submit</button>
        </form>
    );
}

export default NewQuote;