import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse  from './pages/Browse';
// import RecipeDetails from './pages/RecipeDetails';
// import CategoryDetails from './pages/CategoryDetails';
import SearchDetails from './pages/SearchDetails';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Browse/>}></Route>
      <Route path="/search" element={<SearchDetails/>}></Route>
      {/* <Route path="/recipe/:slug" element={<RecipeDetails/>}></Route>
      <Route path="/category/:slug" element={<CategoryDetails/>}></Route> */}
    </Routes>
  </Router>
  )
}

export default App