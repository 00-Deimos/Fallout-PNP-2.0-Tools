import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/home/Home';
import QuickReferences from './components/pages/QuickReferences';
import Glossary from './components/pages/Glossary';
import Books from './components/pages/Books';
import Bestiary from './components/pages/Bestiary';
import RandomEncounters from './components/pages/RandomEncounters';
import Races from './components/pages/Races';
import Traits from './components/pages/Traits';
import Special from './components/pages/Special';
import DerivedStatistics from './components/pages/DerivedStatistics';
import Skills from './components/pages/Skills';
import Perks from './components/pages/Perks';
import Reputation from './components/pages/Reputation';
import FalloutTimeline from './components/pages/FalloutTimeline';
import Map from './components/pages/Map';


function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <Routes >
          <Route path="/" element={ <Home />} />
          <Route path="/quickreferences" element={ <QuickReferences />} />
          <Route path="/glossary" element={ <Glossary /> } />
          <Route path="/books" element={ <Books /> } />
          <Route path="/bestiary" element={ <Bestiary />} />
          <Route path="/randomecounters" element={ <RandomEncounters />} /> 
          <Route path="/races" element={ <Races />} />
          <Route path="/special" element={ <Special />} />
          <Route path="/derivedstatistics" element = { <DerivedStatistics />} />
          <Route path="/traits" element={ <Traits />} />
          <Route path="/skills" element={ <Skills />} />
          <Route path="/perks" element={ <Perks />}  />
          <Route path="/reputation" element={ <Reputation />} />
          <Route path="/fallouttimeline" element={ <FalloutTimeline />} />
          <Route path="/map" element={ <Map />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
