import './styles/app.css';
import Navigation from "./components/UI/Navigation/Navigation";
import Footer from "./components/UI/Footer/Footer";
import MainPage from "./components/UI/Main/MainPage";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <MainPage/>
            <Footer/>
        </div>
    );
}

export default App;
