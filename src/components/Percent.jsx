export function Percent({ title, percent }) {
    return <div className="py-3">
        <div className="flex justify-between mb-1">
            <span className="font-bold">
                {title}
            </span>
            <span className="font-bold ">
                {percent}%
            </span>
        </div>
        <div className="bg-gray-300 h-2.5">

            <div className="bg-blue-600 h-2.5" style={{ width: `${percent}%` }}></div>
        </div>
    </div>
}