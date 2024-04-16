import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter=createBrowserRouter([
  {
    element:<Body/>,
    path:"/",
    children:[
      {
        element:<MainContainer/>,
        path:"/",
      },
      {
        element:<WatchPage/>,
        path:"/watch",
      }
    ]
  }
])
function App() {
  return (
    <div >
  <Header/>
  <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
