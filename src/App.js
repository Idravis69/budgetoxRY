import './App.css';
import Footer from './componants/footer';
import Header from './componants/navbar';
import Acceuil from './componants/acceuil';
import {Routes, Route} from 'react-router-dom';
import Inscription from './componants/inscription';
import Connexion from './componants/connexion';



function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route path="/" element={<Inscription/>} />
        <Route path="/Acceuil" element={<Acceuil/>} />
        <Route path="/Connexion" element={<Connexion/>} />
    </Routes>

    <Footer/>

    </div>
  );
}




export default App;
