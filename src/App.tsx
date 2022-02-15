import './App.css'
import {Route, Router, Switch, Link} from 'wouter'

import Card from './Card'
import Planets from './Planets'
import planetsThumb from './images/planets.png'

function App() {
  return (
    <Router base='/~zwang34'>
      <div className='flex flex-col min-h-screen'>
        <header className='flex flex-col justify-center align-center items-center mb-12'>
          <Link href='/' className="text-3xl my-5 text-center">CSCI 417 Computer Animation</Link>
          <h2 className='text-lg'>Kerry Wang</h2>
        </header>
        <Switch>
          <Route path='/'>
            <div className="grow flex flex-wrap gap-5 justify-center items-center align-center">
              <Link href='/planets'>
                <a><Card image={planetsThumb} title="Solar System" subtitle="2/17/22"/></a>
              </Link>
            </div>
          </Route>
          <Route path='/planets'><Planets/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
