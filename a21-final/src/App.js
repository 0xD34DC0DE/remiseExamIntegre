import './App.css';
import QueryButtons from './components/QueryButtons';
import ClientTable from './components/ClientTable';
import {useState} from 'react'

console.warn = () => {}

function App() {
  const [clients, setClients] = useState([]);

  return (
    <div>
      <QueryButtons setClients={setClients}/>
      <ClientTable clients={clients}/>
    </div>
  );
}

export default App;
