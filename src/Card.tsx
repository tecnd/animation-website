export declare interface CardProps {
    image: string,
    title: string
}

function Card(props: CardProps) {
    return(
        <div className="bg-white hover:bg-slate-300 rounded-md border-2 h-72 w-60 shrink-0">
            <img src={props.image} className="rounded-t-md"/>
            <h2 className="p-2 text-2xl text-black">{props.title}</h2>
        </div>
    )
}

export default Card