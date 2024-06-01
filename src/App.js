import './App.css';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import QuantityPicker from "./components/quantitypicker";


function App() {
  return (
    <div className="App">
      <Navbar />

      <h1>Hello from React</h1>

      <QuantityPicker />

      <Footer />
    </div>
  );
}

export default App;
