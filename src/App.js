import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./components/errorComponent/Error";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                {/*<Route path="/" element={}></Route>*/}


                <Route path="*" element={<Error/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
