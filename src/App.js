import './styles/app.css';
import './styles/normalize.css'
import Navigation from "./components/UI/Navigation/Navigation";
import Footer from "./components/UI/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Footer/>
        </div>
    );
}

export default App;
