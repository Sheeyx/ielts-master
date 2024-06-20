import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { CartItem } from "../../lib/types/search";
import ReadingSection from "./Reading";
import ReadingDetail from "./components/reading-detail";
import Practice from "./components/PracticePage";



export default function ReadingPage(){
  const reading = useRouteMatch();
  
    return (
      <div className="products-page">
        <Switch>
          <Route path={`${reading.path}/practice/:id`}>
            <Practice />
          </Route>
          <Route path={`${reading.path}/:id`}>
            <ReadingDetail />
          </Route>
          <Route path={`${reading.path}`}>
            <ReadingSection />
          </Route>
        </Switch>
      </div>
    )
}