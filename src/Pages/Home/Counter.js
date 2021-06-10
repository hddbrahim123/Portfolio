import React from 'react'

import counter from '../../assets/images/counters-bg.jpg'

const Counter = ()=>{


    const mystyle = {
        backgroundImage: 'url('+counter+')',
    };

    return (
        <React.Fragment>
            <section className="pt-5 counter" style={mystyle}>
                {/* <div className="counter__overlay"></div> */}
                <div className="container ">
                  <div className="row">
                    <div className="col-sm-4 col-lg-4">
                       <div className="counter__box my-4 text-center ">
                           <span className="ico-circle"><p className="text-white pb-4">3</p></span>
                           <h5 className="mt-4">Works Completed</h5>
                       </div>
                    </div>
                    <div className="col-sm-4 col-lg-4">
                        <div className="counter__box my-4 text-center ">
                           <span className="ico-circle"><p className="text-white pb-4">1</p></span>
                           <h5 className="mt-4">YEARS OF EXPERIENCE</h5>
                       </div>
                    </div>
                    <div className="col-sm-4 col-lg-4">
                        <div className="counter__box my-4 text-center ">
                           <span className="ico-circle"><p className="text-white pb-4">5</p></span>
                           <h5 className="mt-4">Total Clients</h5>
                       </div>
                    </div>
                  </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Counter
