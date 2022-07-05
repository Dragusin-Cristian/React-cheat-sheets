import { useNavigate } from "react-router-dom"; // USED FOR REDIRECTS

const NewQuote = () => {
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        navigate("/quotes");    
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="title">Ttile:</label>
            <input type="text" id="titile" name="title" /><br />
            <label htmlFor="author">author</label><br />
            <input type="text" id="author" name="author" /><br /><br />
            <button >Submit</button>
        </form>
    );
}

export default NewQuote;