import planets1 from './videos/planets1.mp4'
import planets2 from './videos/planets2.mp4'
import textured from './images/textured.png'
import inclinations from './images/inclinations.png'
import supernova from './images/supernova.png'

export default function Planets() {
    return(
        <div className='flex justify-center align-center items-center flex-col px-12 md:px-36 max-w-screen-xl mb-24 mx-auto'>
            <h1 className='text-2xl'>Project 1: Solar System</h1>
            <h2 className='text-xl pb-5'>2/17/22</h2>
            <video controls src={planets1} className='w-full my-3'/>
            <video controls src={planets2} className='w-full my-3'/>
            <div className='flex justify-center align-center items-center flex-col md:flex-row'>
                <img src={textured} className='md:w-1/2'/>
                <p className='md:w-1/2'>The first change I made was to texture all of the objects. That includes all the planets, Pluto, the moons, and the Sun.
                    I used textures from <a className='underline' href='https://www.solarsystemscope.com/textures/'>https://www.solarsystemscope.com/textures/</a>.
                </p>
            </div>
            <div className='flex justify-center align-center items-center flex-col md:flex-row-reverse'>
                <img src={inclinations} className='md:w-1/2'/>
                <p className='md:w-1/2'>I also inclined the planet orbits. The inclinations are exaggerated from their true values for visual effect by 2-5x.</p>
            </div>
            <div className='flex justify-center align-center items-center flex-col md:flex-row'>
                <img src={supernova} className='md:w-1/2'/>
                <p className='md:w-1/2'>Last, I made the Sun supernova and expand to consume the solar system at the end.</p>
            </div>
        </div>
    );
}