import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

const SpecificQuote = (props) => {
    const DUMMY_DATA = props.DUMMY_DATA;
    const params = useParams();
    const match = useRouteMatch();
    const quote = DUMMY_DATA.find(q => q.id === params.id);

    // YOU CAN USE PATHS IN 3 WAYS:
    // 1. normal/visual way: `/quotes/:${params.id}`
    // 2. placeholder way, writing it: "/quotes/:id"
    // 3. using match.path (same as 2.): --down there--
    // advantage: NO NEED TO HARDCODE THE PATHS, SO WE CAN CHANGE IT ONLY ONCE IN APP.js


    if (!quote) {
        return (
            <p>Quote not found!</p>
        )
    } else
        return (
            <div>
                <h2>{quote.title}</h2>
                <p>{quote.author}</p>
                {/* When you want to use a Route, use: match.path (it uses the placeholder /:id) */}
                <Route path={`${match.path}`} exact>
                    {/* When you want to go somewhere use: match.url (it uses the actual path url) */}
                    <Link to={`${match.url}/comments`}>Show comments</Link>
                </Route>

                <Route path={`${match.path}/comments`}>
                    <p>Here is the comments sections, That's gonna be fun!</p>
                </Route>
            </div>
        );
}

export default SpecificQuote;