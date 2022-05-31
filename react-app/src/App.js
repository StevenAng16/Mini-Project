import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Header from './Components/Header'
import HomeApp from './Components/Home';
import Login from './Components/Login';
import Footer from './Components/Footer';

import NintendoSwitchConsole from './Pages/nintendoswitchconsole';
import NintendoSwitchAccessories from './Pages/nintendoswitchaccessories';
import NintendoSwitchGames from './Pages/nintendoswitchgames';
import PlayStationConsole from './Pages/playstationconsole';
import PlayStationAccessories from './Pages/playstationaccessories';
import PlayStationGames from './Pages/playstationgames';
import XboxConsole from './Pages/xboxconsole';
import XboxGames from './Pages/xboxgames';

import NintendoSwitch from './Product/Console/NintendoSwitch';
import NintendoSwitchNeon from './Product/Console/NintendoSwitchNeon';
import NintendoSwitchGray from './Product/Console/NintendoSwitchGray';
import NintendoSwitchAnimalCrossing from './Product/Console/NintendoSwitchAnimalCrossing';
import NintendoSwitchMarioEdition from './Product/Console/NintendoSwitchMarioEdition';

import NintendoSwitchLite from './Product/Console/NintendoSwitchLite';

import NintendoSwitchOLED from './Product/Console/NintendoSwitchOLED';
import NintendoSwitchOLEDNeon from './Product/Console/NintendoSwitchOLEDNeon';
import NintendoSwitchOLEDWhite from './Product/Console/NintendoSwitchOLEDWhite';

import AdaptorCharger from './Product/Accessories/AdaptorCharger';
import AdaptorChargerLoose from './Product/Accessories/AdaptorChargerLoose';
import AnalogCap from './Product/Accessories/AnalogCap';
import ChargingGrip from './Product/Accessories/ChargingGrip';
import JoyCon from './Product/Accessories/JoyCon';
import ProController from './Product/Accessories/ProController';

import MarioKart8Deluxe from './Product/Games/NintendoSwitch/SwitchMarioKart8Deluxe';
import LuigiMansion3 from './Product/Games/NintendoSwitch/SwitchLuigiMansion3';
import ClubhouseGames51WorldwideClassics from './Product/Games/NintendoSwitch/SwitchClubhouseGames51WorldwideClassics';
import Minecraft from './Product/Games/NintendoSwitch/SwitchMinecraft';
import NintendoSwitchSports from './Product/Games/NintendoSwitch/SwitchNintendoSwitchSports';
import MarioRabbidsSparksOfHope from './Product/Games/NintendoSwitch/SwitchMario+RabbidsSparksOfHope';
import SuperMarioParty from './Product/Games/NintendoSwitch/SwitchMarioParty'
import YoshiCraftedWorld from './Product/Games/NintendoSwitch/SwitchYoshiCraftedWorld'

import PS5 from './Product/Console/PS5';
import PS5InterDisc from './Product/Console/PS5InterDisc';
import PS5InterDigital from './Product/Console/PS5InterDigital';
import PS5IndoDisc from './Product/Console/PS5IndoDisc';

import DualShock4 from './Product/Accessories/DualShock4';

import PS4Minecraft from './Product/Games/PlayStation/PS4Minecraft'
import PS4MinecraftDungeons from './Product/Games/PlayStation/PS4MinecraftDungeons'

import XSeries from './Product/Console/SeriesX';
import SSeries from './Product/Console/SeriesS';
import './App.css';

function App () {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
    <>
    
    <Router>
    <Header/>
          <Routes>
            <Route path="/" element={<HomeApp />}/>
            <Route path="/Components/Login" element={<Login />}/>
            <Route path="/Components/Cart" element={<Cart />}/>  
            
            <Route path="Pages/nintendoswitchconsole.js" exact element={<NintendoSwitchConsole />}/>
              <Route path="Product/Console/NintendoSwitch.js" exact element={<NintendoSwitch />}/>
                  <Route path="/Product/Console/NintendoSwitchNeon" element={<NintendoSwitchNeon/>}/> 
                  <Route path="/Product/Console/NintendoSwitchGray" element={<NintendoSwitchGray/>}/>
                  <Route path="/Product/Console/NintendoSwitchAnimalCrossing" element={<NintendoSwitchAnimalCrossing/>}/>
                  <Route path="/Product/Console/NintendoSwitchMarioEdition" element={<NintendoSwitchMarioEdition/>}/>
                
              <Route path="Product/Console/NintendoSwitchLite.js" exact element={<NintendoSwitchLite />}/>

              <Route path="Product/Console/NintendoSwitchOLED.js" exact element={<NintendoSwitchOLED />}/>
                  <Route path="/Product/Console/NintendoSwitchOLEDNeon" element={<NintendoSwitchOLEDNeon />}/>
                  <Route path="/Product/Console/NintendoSwitchOLEDWhite" element={<NintendoSwitchOLEDWhite />}/>

            <Route path="Pages/nintendoswitchaccessories.js" exact element={<NintendoSwitchAccessories />}/>
                <Route path="Product/Accessories/AdaptorCharger.js" exact element={<AdaptorCharger />}/>
                <Route path="Product/Accessories/AdaptorChargerLoose.js" exact element={<AdaptorChargerLoose />}/>
                <Route path="Product/Accessories/AnalogCap.js" exact element={<AnalogCap />}/>
                <Route path="Product/Accessories/ChargingGrip.js" exact element={<ChargingGrip />}/>
                <Route path="Product/Accessories/JoyCon.js" exact element={<JoyCon />}/>
                <Route path="Product/Accessories/ProController.js" exact element={<ProController />}/>

            <Route path="Pages/nintendoswitchgames.js" exact element={<NintendoSwitchGames />}/>
                <Route path="Product/Games/NintendoSwitch/SwitchMarioKart8Deluxe.js" exact element={<MarioKart8Deluxe />}/>
                <Route path="Product/Games/NintendoSwitch/SwitchLuigiMansion3.js" exact element={<LuigiMansion3 />}/>
                <Route path="Product/Games/NintendoSwitch/SwitchClubhouseGames51WorldwideClassics.js" exact element={<ClubhouseGames51WorldwideClassics />}/>
                <Route path="Product/Games/NintendoSwitch/SwitchMinecraft.js" exact element={<Minecraft />}/>
                <Route path="Product/Games/NintendoSwitch/SwitchNintendoSwitchSports.js" exact element={<NintendoSwitchSports />}/>
                <Route path="Product/Games/NintendoSwitch/SwitchMario+RabbidsSparksOfHope.js" exact element={<MarioRabbidsSparksOfHope />}/>
                <Route path="Product/Games/NintendoSwitch/SwitchMarioParty.js" exact element={<SuperMarioParty />}/>
                <Route path="Product/Games/NintendoSwitch/SwitchYoshiCraftedWorld.js" exact element={<YoshiCraftedWorld />}/>

            <Route path="Pages/playstationconsole.js" exact element={<PlayStationConsole />}/>
                <Route path="Product/Console/PS5.js" exact element={<PS5 />}/>
                    <Route path="/Product/Console/PS5InterDisc" element={<PS5InterDisc />}/>
                    <Route path="/Product/Console/PS5InterDigital" element={<PS5InterDigital />}/>
                    <Route path="/Product/Console/PS5IndoDisc" element={<PS5IndoDisc />}/>

            <Route path="Pages/playstationaccessories.js" exact element={<PlayStationAccessories />}/>
                <Route path="Product/Accessories/AnalogCap.js" exact element={<AnalogCap />}/>
                <Route path="Product/Accessories/DualShock4.js" exact element={<DualShock4 />}/>
                  
            <Route path="Pages/playstationgames.js" exact element={<PlayStationGames />}/>
                <Route path="Product/Games/PlayStation/PS4Minecraft.js" exact element={<PS4Minecraft />}/>
                <Route path="Product/Games/PlayStation/PS4MinecraftDungeons.js" exact element={<PS4MinecraftDungeons />}/>

            <Route path="Pages/xboxconsole.js" exact element={<XboxConsole />}/>
                <Route path="Product/Console/SeriesX.js" exact element={<XSeries />}/>
                <Route path="Product/Console/SeriesS.js" exact element={<SSeries />}/>

            <Route path="Pages/xboxgames.js" exact element={<XboxGames />}/>
          </Routes>
          <Footer/>
    </Router>
    
    </>
  );
}

export default App;
