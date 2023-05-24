import React from 'react'
import Navbar from '../pages/landing/Navbar'

function BaseLayout(props) {
    const { children } = props
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default BaseLayout