import './App.css';
import Congrats from './components/Congrats/Congrats';
import FormWord from './components/FormWord/FormWord';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header/> 
      <FormWord/>
      <GuessedWords/>
      <Congrats/>
    </>
  );
}

export default App;
