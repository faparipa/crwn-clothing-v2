//import Directory from './components/directory/directory.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';

import Home from './routes/home/home.component';
import SingIn from './routes/sing-in/sing-in.component';

const Shop = () => {
  return <h1>I am a Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sing-in' element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
