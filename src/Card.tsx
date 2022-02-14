function Card(props) {
    return(
        <div className="bg-white hover:bg-slate-300 rounded-md h-72 w-60 shrink-0">
            {props.children}
        </div>
    )
}

export default Card