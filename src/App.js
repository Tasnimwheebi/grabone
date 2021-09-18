import React from 'react';
import Header from './components/header.jsx';
import Hero from './components/heroimage';
import LeftBar from './components/leftBar.jsx';
import NavBar from './components/navbar.jsx';
import CovidText from './components/covidText.jsx';
import ImageList from './components/imgList1.jsx';
import Footer from './components/footer.jsx';
import Form1 from './components/form1.jsx';
import Collections from './components/collections.jsx';
import Escapes from './components/escapes.jsx';
import Activities from './components/activities.jsx';
import Store from './components/store.jsx';
function App() {
  return (
    <div className="App" style={{"background":"#f4f7fb"}}>
    <Header/>
    <NavBar/>
    <Hero/>
    <CovidText/>
    <LeftBar/>
    <Form1/>
    <ImageList/>
    <Collections/>
    <Escapes/>
    <Activities/>
    <Store/>
    <Footer/>
    </div>
  );
}

export default App;
