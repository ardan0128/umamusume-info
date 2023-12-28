import { Route, Routes } from 'react-router-dom';
import ListUmamusume from './pages/ListUmamusume';

import Main from './pages/Main';
import DetailUmamusume from './pages/DetailUmamusume';
import SvgGather from './pages/SvgGather';
import ModalTest from './pages/ModalTest';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Main />}></Route>
      <Route path="/umamusume" element={<ListUmamusume />}></Route>
      <Route path="/umamusume">
        <Route path=":id" element={<DetailUmamusume />}></Route>
      </Route>
      <Route path="/svg">
        <Route path="gather" element={<SvgGather />}></Route>
      </Route>
      <Route path="/modal">
        <Route path="test" element={<ModalTest></ModalTest>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
