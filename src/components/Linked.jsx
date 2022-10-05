export function Linked({ title, content, path }) {
    return (
        <>
            {
                path == "" ?
                    <li className="py-1">
                        <span className="font-medium">
                            {title}
                        </span>
                        <div>
                            {content}
                        </div>
                    </li>
                    :
                    <li className="py-1">
                        <a href={path} className="font-medium visited:text-purple-900">
                            {title}
                        </a>
                        <div>
                            <a href={path} className="text-blue-500 visited:text-purple-900">
                                {content}
                            </a>
                        </div>
                    </li>
            }
        </>
    )
}