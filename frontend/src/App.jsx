import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './files/Home';
import Signin from './files/Signin';
import Signup from './files/Signup';
import About from './files/About';
import Profile from './files/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './files/CreateListing';
import Listing from'./files/Listing'
import UpdateListing from './files/UpdateListing';
import Search from './files/Search';



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />

        <Route path='/listing/:listingId' element={<Listing />} />

        
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/createlisting' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}