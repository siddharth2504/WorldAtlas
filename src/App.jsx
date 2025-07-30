import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Country } from "./pages/Country"
import { About } from "./pages/About"
import { ErrorPage } from "./pages/ErrorPage"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { CountryDetails } from "./components/Layout/CountryDetails"


function App() {

  const routes = createBrowserRouter(
    [

      {
        path :"/",
        element : <AppLayout />,
        errorElement : <ErrorPage />,
        children : [
      {
        path : "/",
        element : <Home/> 
      },

      {
        path : "about",
        element : <About />
      },

      {
        path : "contact",
        element : <Contact/>
      },

      {
        path : "country",
        element : <Country/>
      },
      {
        path: "country/:id",
        element : <CountryDetails/>
      }

        ]
      }
     

    ]
  )
 return(
  <div>
   <RouterProvider router={routes} />
  </div>
  )
}

export default App
