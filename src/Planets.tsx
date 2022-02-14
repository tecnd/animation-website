import planets1 from './videos/planets1.mp4'
import planets2 from './videos/planets2.mp4'

export default function Planets() {
    return(
        <div className='flex justify-center align-center items-center flex-col'>
            <video controls src={planets1} className='w-2/3 py-3'/>
            <video controls src={planets2} className='w-2/3 py-3'/>
        </div>
    );
}