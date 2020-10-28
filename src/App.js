import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className='app-wraper'>
      <Header />
      <NavBar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
