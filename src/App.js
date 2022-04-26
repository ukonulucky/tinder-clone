import Header from './components/Header';
import './App.css';
import TinderCards from './components/TinderCards';
import ChatButtons from "./components/ChatButtons"

function App() {
  return (
    <div className="App">
     
      <div className="app">
        <Header />
        <TinderCards />
        <ChatButtons />
      </div>
    </div>
  );
}

export default App;
