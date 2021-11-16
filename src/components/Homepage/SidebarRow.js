import React from 'react'

function SidebarRow({src,Icon,active,title,expand}) {
    return (
        <div className={`flex items-center space-x-2 p-4 ${!active && "hover:bg-gray-200"} rounded-xl cursor-pointer ${active && "bg-blue-300"}`}>
            {src && (
                <img 
                className="rounded-full cursor-pointer"
                src={src}
                alt="Profile"
                width="40"
                height="40"
                layout="fixed"
                />
            )}
            {Icon && (
                <Icon className="h-5 sm:h-8 text-blue-500" />
            )}
            <p className={`${!expand && "hidden"} sm:inline-flex z-10  sm:font-medium delay-100`}>{title}</p>
        </div>
    )
}

export default SidebarRow
