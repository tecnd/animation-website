import './App.css'

import Card from './Card'
import planetsThumb from './images/planets.png'
import planets1 from './videos/planets1.mp4'

function App() {
  return (
    <>
      <header>
        <h1 className="text-white text-3xl text-center py-5">CSCI 417 Computer Animation</h1>
      </header>
      <div className="py-5 h-screen flex flex-wrap gap-5 justify-center items-center">
        <Card image={planetsThumb} title="Solar System"/>
      </div>
    </>
  );
}

export default App;
