import React from 'react'
import Body from './component/Body'
import Header from './component/Header';
import "./App.css"
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Watchpage from './component/watchpage';
import Maincontainer from './component/Maincontainer'
 const App = () => {
  const Approuter=createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
          {
            path:"/",
            element:<Maincontainer/>
          },
          {
            path:"watch",
            element:<Watchpage/>
          }
      ]
    }
  ])
 
  return (
    <Provider store={store}>
     <Header/>
     <RouterProvider router={Approuter}/>
    </Provider>
  )
}
export default App;