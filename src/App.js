import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { HomePage } from './pages/home';
import { GamePage } from './pages/game';
import { OrderPage } from './pages/order';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/game/:title" element={<GamePage></GamePage>}></Route>
        <Route path="/order" element={<OrderPage></OrderPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
