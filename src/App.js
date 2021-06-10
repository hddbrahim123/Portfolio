import React from "react";
import { BrowserRouter as Router , Switch} from "react-router-dom";

import './assets/scss/App.scss'

//imports Layouts
import SellerLayout from "./Components/SellerLayout";
import FullLayout from "./Components/FullLayout";
import HomeLayout from "./Components/HomeLayout";


//imports Routes
import { authSeller, homeRoute, sellerRoutes } from "./routes/allRouters";

//imports middleware
import SellerMiddleware from "./routes/middleware/SellerMiddleware";
import AuthSellerMiddleware from "./routes/middleware/AuthSellerMiddleware";
import HomeMiddleware from "./routes/middleware/HomeMiddleware";

const App = ()=>{
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {sellerRoutes.map((route , i)=>(
            <SellerMiddleware 
              component={route.component}
              path={route.path}
              layout={SellerLayout}
              key={i}
              exact
            />
          ))}

          {authSeller.map((route , i)=>(
            <AuthSellerMiddleware
              component={route.component}
              path={route.path}
              layout={FullLayout}
              key={i}
              exact
            />
          ))}

          {homeRoute.map((route , i)=>(
            <HomeMiddleware
              component={route.component}
              path={route.path}
              layout={HomeLayout}
              key={i}
              exact
            />
          ))}

        </Switch>
      </Router>
    </React.Fragment>
      
  );
}

export default App;
