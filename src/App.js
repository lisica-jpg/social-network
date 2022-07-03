import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App(props) {
  return (
   <>
   <div className='app-wrapper'>
   <Header />
   <Navbar />
   {/* </div>
   <div className='app-wrapper, app-wrapper-content'> */}
   <Routes>
          <Route path="dialogs/*" 
          element={<Dialogs store={props.store} /> }/>
          <Route path="profile" 
          element={<Profile profilePage={props.state.profilePage} 
          dispatch={props.dispatch} /> }/>
          {/* <Route path='/messages/*' element={<Messages/>} /> */}    
    </Routes>
    </div>
    </>
   );
}

export default App;
