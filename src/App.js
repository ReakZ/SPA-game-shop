import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { HomePage } from './pages/home';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
