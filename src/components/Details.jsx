export function Details({ date, title, content }) {
    return (
        <div className="pt-5">
            <p className="text-blue-700">
                {date}
            </p>

            <p className="font-bold">
                {title}
            </p>

            {Array.isArray(content) ?
                <div className="px-4 py-2">
                    <ul className="list-disc text-slate-700">
                        {content.map((item, index) => {
                            return ( <li key = {index}> {item} </li> )
                        })}
                    </ul>
                </div>
                :
                <p className="text-slate-700">
                    {content}
                </p>
            }
        </div>
    )
}