import './App.css'
import {Route, Router, Switch, Link} from 'wouter'

import Card from './Card'
import Planets from './Planets'
import planetsThumb from './images/planets.png'

function App() {
  return (
    <Router base='/~zwang34'>
      <header className='flex justify-center align-center items-center'>
        <Link href='/' className="text-white text-3xl py-5">CSCI 417 Computer Animation</Link>
      </header>
      <Switch>
        <Route path='/'>
          <div className="py-5 h-screen flex flex-wrap gap-5 justify-center items-center align-center">
            <Link href='/planets'>
              <a>
                <Card image={planetsThumb} title="Solar System"/>
              </a>
            </Link>
          </div>
        </Route>
        <Route path='/planets'><Planets/></Route>
      </Switch>
    </Router>
  );
}

export default App;
