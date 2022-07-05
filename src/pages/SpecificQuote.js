import { useParams, Route, Outlet, Link, Routes } from "react-router-dom";

const SpecificQuote = (props) => {
    const DUMMY_DATA = props.DUMMY_DATA;
    const params = useParams();
    const quote = DUMMY_DATA.find(q => q.id === params.id);

    if (!quote) {
        return (
            <p>Quote not found!</p>
        )
    } else
        return (
            <div>
                <h2>{quote.title}</h2>
                <p>{quote.author}</p>


                {/* Use Outlet when you have sub-Routes in the App.js */}
                <Outlet />

                {/* Or you can use this approach and delete the sub-Routes from App.js */}
                {/* <Routes>
                    <Route path="" element={ <Link to={`comments`}>Show comments</Link>}/>
                    <Route path='comments' element={<p>Here is the comments sections, That's gonna be fun!</p>} />
                </Routes> */}

            </div>
        );
}

export default SpecificQuote;