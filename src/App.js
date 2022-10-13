import './App.css';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import SearchPage from './SearchPage'

import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path = '/' element={<Home />}/>
          <Route path='/search' element={ <SearchPage/>}/ >
        </Routes>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
