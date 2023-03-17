import './styles/app.css';
import Navigation from "./components/UI/Navigation/Navigation";
import Footer from "./components/UI/Footer/Footer";
import Slider from "./components/UI/Main/Slider/Slider";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Slider/>
            <Footer/>
        </div>
    );
}

export default App;
