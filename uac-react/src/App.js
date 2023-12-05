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
      </Route>
    </Routes>
  );
}

export default App;
