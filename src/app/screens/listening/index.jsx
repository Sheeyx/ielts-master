import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { CartItem } from "../../lib/types/search";
import ListeningDetail from "./components/listening-detail";
import ListeningSection from "./Listening";
import Practice from "./components/PracticePage";



export default function ListeningPage(){
  const listening = useRouteMatch();
  
    return (
      <div className="products-page">
        <Switch>
          <Route path={`${listening.path}/practice/:id`}>
            <Practice />
          </Route>
          <Route path={`${listening.path}/:id`}>
            <ListeningDetail />
          </Route>
          <Route path={`${listening.path}`}>
            <ListeningSection />
          </Route>
        </Switch>
      </div>
    )
}