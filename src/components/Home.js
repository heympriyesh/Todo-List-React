import React from 'react';
import { Link, Route,Switch } from 'react-router-dom';
import App from '../App';
import Front from './Front';

const Home=()=>{
    return(
        <>
          
            <Switch>
                <Route exact path="/"   component={Front}/>
                <Route exact path="/todo"  component={App}/>
            </Switch>

        </>
    )
}
export default Home;