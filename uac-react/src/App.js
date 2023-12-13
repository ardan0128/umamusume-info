import { Route, Routes } from 'react-router-dom';
import ListUmamusume from './pages/ListUmamusume';

import Main from './pages/Main';
import DetailUmamusume from './pages/DetailUmamusume';
import SvgGather from './pages/SvgGather';

import SvgAptitudeSpeed from './components/svg/blue/SvgAptitudeSpeed';
import SvgAptitudeStamina from './components/svg/blue/SvgAptitudeStamina';
import SvgAptitudePower from './components/svg/blue/SvgAptitudePower';
import SvgAptitudeGuts from './components/svg/blue/SvgAptitudeGuts';
import SvgAptitudeWisdom from './components/svg/blue/SvgAptitudeWisdom';
import SvgAptitudeTurf from './components/svg/red/surface/SvgAptitudeTurf';
import SvgAptitudeDirt from './components/svg/red/surface/SvgAptitudeDirt';
import SvgAptitudeShort from './components/svg/red/distance/SvgAptitudeShort';
import SvgAptitudeMile from './components/svg/red/distance/SvgAptitudeMile';
import SvgAptitudeMedium from './components/svg/red/distance/SvgAptitudeMedium';
import SvgAptitudeLong from './components/svg/red/distance/SvgAptitudeLong';
import SvgAptitudeRunner from './components/svg/red/strategy/SvgAptitudeRunner';
import SvgAptitudeLeader from './components/svg/red/strategy/SvgAptitudeLeader';
import SvgAptitudeBetweener from './components/svg/red/strategy/SvgAptitudeBetweener';
import SvgAptitudeChaser from './components/svg/red/strategy/SvgAptitudeChaser';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Main />}></Route>
      <Route path="/umamusume" element={<ListUmamusume />}></Route>
      <Route path="/umamusume">
        <Route path=":id" element={<DetailUmamusume />}></Route>
      </Route>
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
        <Route path="gather" element={<SvgGather />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
