import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import { GetIpLocation, GetLocation } from './utils/user/user.details';
import { useEffect } from 'react';

const Shop = () => {
  return (
    <div>
      <h1>Welcome to the Shop</h1>
    </div>
  )
}

const App = () => {

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await GetLocation();
      console.log("Location:", location);
    };

    const fetchIPLocation = async () => {
      const ipLocation = await GetIpLocation();
      console.log("IP Location:", ipLocation);
    };

    fetchLocation();
    fetchIPLocation();
  }, []);

  return (
    <div>
      <div>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='sign-in' element={<SignIn />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
