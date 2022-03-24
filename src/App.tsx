import React from "react";
import { Route, Router, Switch, Link } from "wouter";

import Card from "./Card";
import Planets from "./Planets";
import planetsThumb from "./images/planets.png";
import Treasure from "./Treasure";
import treasureThumb from "./images/treasureThumb.png";
import Bounce from "./Bounce";
import bounceThumb from "./images/treasureThumb.png";

// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const currentLocation = () => {
  return window.location.hash.replace(/^#/, "") || "/";
};

const useHashLocation = (): [string, (s: string) => string] => {
  const [loc, setLoc] = React.useState(currentLocation());

  React.useEffect(() => {
    // this function is called whenever the hash changes
    const handler = () => setLoc(currentLocation());

    // subscribe to hash changes
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = (to: string) => (window.location.hash = to);
  return [loc, navigate];
};

function App() {
  return (
    <Router hook={useHashLocation} base="/~zwang34">
      <div className="flex flex-col min-h-screen">
        <header className="flex flex-col justify-center align-center items-center mb-12">
          <Link href="/" className="text-3xl my-5 text-center">
            CSCI 417 Computer Animation
          </Link>
          <h2 className="text-lg">Kerry Wang</h2>
        </header>
        <Switch>
          <Route path="/">
            <div className="grow flex flex-wrap gap-5 justify-center items-center align-center">
              <Link href="/planets">
                <a>
                  <Card
                    image={planetsThumb}
                    title="Solar System"
                    subtitle="2/17/22"
                  />
                </a>
              </Link>
              <Link href="/treasure">
                <a>
                  <Card
                    image={treasureThumb}
                    title="Treasure Chest"
                    subtitle="3/3/22"
                  />
                </a>
              </Link>
              <Link href="/bounce">
                <a>
                  <Card
                    image={bounceThumb}
                    title="Bouncing Ball"
                    subtitle="3/24/22"
                  />
                </a>
              </Link>
            </div>
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/treasure">
            <Treasure />
          </Route>
          <Route path="/bounce">
            <Bounce />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
