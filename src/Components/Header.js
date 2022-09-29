import React from 'react'

function Header({ textColor, title }) {
    const style = {color: "yellow", fontSize: "40px"}
    return <div style={{style}}>
                {title}
            </div>
}


// below is called default export
export default Header;