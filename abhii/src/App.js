import logo from './logo.svg';
import './App.css';
import Studentss from './components/Studentss';
import Navibar from './components/Navibar';
import Entryy from './components/Entryy';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Studentss/> */}
      <Navibar/>
      {/* <Entryy/> */}
      <Routes>
        <Route path='/stud' element={<Studentss/>}/>
        <Route path='/entr' element={<Entryy data={{sname:'',sgrade:''}} method="post"/>}/>
      </Routes>
    </div>
  );
}

export default App;
