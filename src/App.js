// import logo from './logo.svg';
import './App.css';
// import About from './Compopnents/About';
import Navbar from './Compopnents/Navbar';
import TextForm from './Compopnents/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container mt-3">
      <TextForm heading="Enter the Text to Analyze"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
