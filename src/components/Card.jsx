export function Card(props) {
    return (
        <div className="py-5">
            <span className="text-xl font-bold border-l-4 capitalize border-indigo-500 pl-2">
                {props.title}
            </span>

            <div className="text-justify pt-5">
                {props.children}
            </div>
        </div>
    )
}