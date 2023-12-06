import { Route, Routes } from 'react-router-dom';
import ListUmamusume from './pages/ListUmamusume';

import Main from './pages/Main';
import DetailUmamusume from './pages/DetailUmamusume';
import SvgAptitudeBlue from './pages/svg/blue/SvgAptitudeBlue';
import SvgAptitudeGreen from './pages/svg/green/SvgAptitudeGreen';
import SvgAptitudeRed from './pages/svg/red/SvgAptitudeRed';
import SvgAptitudeSpeed from './pages/svg/blue/SvgAptitudeSpeed';
import SvgAptitudeStamina from './pages/svg/blue/SvgAptitudeStamina';
import SvgAptitudePower from './pages/svg/blue/SvgAptitudePower';
import SvgAptitudeGuts from './pages/svg/blue/SvgAptitudeGuts';
import SvgAptitudeWisdom from './pages/svg/blue/SvgAptitudeWisdom';
import SvgAptitudeTurf from './pages/svg/red/surface/SvgAptitudeTurf';
import SvgAptitudeDirt from './pages/svg/red/surface/SvgAptitudeDirt';
import SvgAptitudeShort from './pages/svg/red/distance/SvgAptitudeShort';
import SvgAptitudeMile from './pages/svg/red/distance/SvgAptitudeMile';
import SvgAptitudeMedium from './pages/svg/red/distance/SvgAptitudeMedium';
import SvgAptitudeLong from './pages/svg/red/distance/SvgAptitudeLong';
import SvgAptitudeRunner from './pages/svg/red/strategy/SvgAptitudeRunner';
import SvgAptitudeLeader from './pages/svg/red/strategy/SvgAptitudeLeader';
import SvgAptitudeBetweener from './pages/svg/red/strategy/SvgAptitudeBetweener';
import SvgAptitudeChaser from './pages/svg/red/strategy/SvgAptitudeChaser';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Main />}></Route>
      <Route path="/umamusume" element={<ListUmamusume />}></Route>
      <Route path="/umamusume">
        <Route path=":id" element={<DetailUmamusume />}></Route>
      </Route>
      <Route path="/svg/blue" element={<SvgAptitudeBlue />}></Route>
      <Route path="/svg/red" element={<SvgAptitudeRed />}></Route>
      <Route path="/svg/green" element={<SvgAptitudeGreen />}></Route>
      <Route path="/svg">
        <Route path="speed" element={<SvgAptitudeSpeed />}></Route>
        <Route path="stamina" element={<SvgAptitudeStamina />}></Route>
        <Route path="power" element={<SvgAptitudePower />}></Route>
        <Route path="guts" element={<SvgAptitudeGuts />}></Route>
        <Route path="wisdom" element={<SvgAptitudeWisdom />}></Route>
        <Route path="turf" element={<SvgAptitudeTurf />}></Route>
        <Route path="dirt" element={<SvgAptitudeDirt />}></Route>
        <Route path="short" element={<SvgAptitudeShort />}></Route>
        <Route path="mile" element={<SvgAptitudeMile />}></Route>
        <Route path="Medium" element={<SvgAptitudeMedium />}></Route>
        <Route path="Long" element={<SvgAptitudeLong />}></Route>
        <Route path="runner" element={<SvgAptitudeRunner />}></Route>
        <Route path="leader" element={<SvgAptitudeLeader />}></Route>
        <Route path="betweener" element={<SvgAptitudeBetweener />}></Route>
        <Route path="chaser" element={<SvgAptitudeChaser />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
