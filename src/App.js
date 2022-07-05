import { Routes, Route, Navigate, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Quotes from "./pages/Quotes";
import Navbar from "./components/Navbar";
import AppLayout from "./components/AppLayout";
import SpecificQuote from "./pages/SpecificQuote";
import NotFound from "./pages/NotFound";
import NewQuote from "./pages/NewQuote";

const DUMMY_DATA = [
  {
    id: "q1",
    title: "React is aweasome!",
    author: "Dragusin Cristian"
  },
  {
    id: "q2",
    title: "Hai la cafelutza!!",
    author: "Vladimir Putin"
  }
];

function App() {
  return (
    <AppLayout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/welcome"} />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/quotes" element={<Quotes DUMMY_DATA={DUMMY_DATA} />} />
        <Route path="/quotes/:id/*" element={<SpecificQuote DUMMY_DATA={DUMMY_DATA} />} >
          <Route path="" element={<Link to={`comments`}>Show comments</Link>} />
          <Route path='comments' element={<p>Here is the comments sections, That's gonna be fun!</p>} />
        </Route>
        <Route path="/newQuote" element={<NewQuote />} />
        {/* USE FOR NOT FOUND PAGE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
