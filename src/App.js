import { Search } from '@mui/icons-material';
import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Header/MainNavigation';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
      <Routes> 
      <Route path ="/" element={<Home/>} exact/>
      <Route path ="/movies"  element={<Movies/>}/>
      <Route path ="/profile"  element={<Profile/>}/> 
      </Routes>
      </Container></div>

    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
