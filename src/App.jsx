import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import Header from "./components/header";

function App() {


  return (
    <>

      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </Router>

    </>
  )
}

export default App
