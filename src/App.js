import {NavBar} from './component/NavBar';
import {Card} from './component/Card';
import './App.css';
import {arr} from './separate'

function App() {
  const cards = arr.map(item => 
    <Card 
    {...item}
    />
  )
  return (
    <div>
    <NavBar />
    <div className='card-app-container'>
      {cards}
    </div>    
    </div>
    
  );
}

export default App;
