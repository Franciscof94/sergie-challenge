import { Routes, Route } from 'react-router-dom';
import Contact from './views/Contact';
import Header from './components/Header';
import Users from './views/Users';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
