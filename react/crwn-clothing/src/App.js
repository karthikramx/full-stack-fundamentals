import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
// import { GetIpLocation, GetLocation } from './utils/user/user.details';
// import { useEffect } from 'react';


const App = () => {

  // useEffect(() => {
  //   const fetchLocation = async () => {
  //     const location = await GetLocation();
  //     console.log("Location:", location);
  //   };

  //   const fetchIPLocation = async () => {
  //     const ipLocation = await GetIpLocation();
  //     console.log("IP Location:", ipLocation);
  //   };

  //   fetchLocation();
  //   fetchIPLocation();
  // }, []);

  return (
    <div>
      <div>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='auth' element={<Authentication />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
