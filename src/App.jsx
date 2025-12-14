import './App.css';
import CatList  from './components/CatList';
import DATA from './data';

function App() {
  return (
    <>
      <CatList cats={DATA}/>
    </>
  );
}

export default App;
