import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

// SORT THE ARRAY 
    const sortQuotes = (quotes, order) => {
        return quotes.sort((first, second) => {
            if(order === "asc") return first.id > second.id ? 1 : -1; 
            else if (order === "desc") return second.id > first.id ? 1 : -1;
            else return quotes;
        })
    }

const Quotes = (props) => {
    const quotes = props.DUMMY_DATA;
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search); // get the url object

    const sortQueryParam = queryParams.get("sort"); // get the sort query
    
    const sortedQuotes = sortQuotes(quotes, sortQueryParam); // get the sorted quotes, based on the query param

    const changeOrderHandler = () => {
        // better to use global variables instead of hardcoding the addresses (like using the location object)
        navigate(`${location.pathname}?sort=${sortQueryParam!=="asc" ? "asc" : "desc"}`); 

    }

    return (
        <div>
            <button onClick={changeOrderHandler}>Change order</button>
            <h1>Quotes page</h1>
            <ul>
            {sortedQuotes.map(quote => {
                return( 
                    // ${location.pathname}/
                    <li key={quote.id}><Link to={`${quote.id}`}>{quote.title}</Link></li>
                );
            })}
           
            </ul>
        </div>
    );
}

export default Quotes;