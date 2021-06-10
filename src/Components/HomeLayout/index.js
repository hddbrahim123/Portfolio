import React from 'react'
import Header from './Header'

const HomeLayout = (props)=>{
    return (
        <React.Fragment>
            <Header />
            <div className="page-home">
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default HomeLayout
