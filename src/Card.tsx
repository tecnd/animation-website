export declare interface CardProps {
    image: string,
    title: string,
    subtitle: string
}

export default function Card(props: CardProps) {
    return(
        <div className="bg-white hover:bg-slate-300 rounded-md border-2 h-72 w-60 shrink-0 shadow">
            <img src={props.image} className="rounded-t-md"/>
            <h2 className="p-2 text-2xl text-black">{props.title}</h2>
            <p className="p-2 text-gray-700">{props.subtitle}</p>
        </div>
    )
}
