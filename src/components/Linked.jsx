export function Linked({ title, content, path }) {
    return (
        <>
            {
                path == "" ?
                    <li className="pl-2">
                        <span className="font-medium">
                            {title}
                        </span>
                        <div>
                            {content}
                        </div>
                    </li>
                    :
                    <li className="pl-2">
                        <a 
                            href={path} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-medium visited:text-purple-900">
                            {title}
                        </a>
                        <div>
                            <a 
                                href={path} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-500 visited:text-purple-900">
                                {content}
                            </a>
                        </div>
                    </li>
            }
        </>
    )
}