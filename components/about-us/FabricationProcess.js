import React from 'react';
import Image from 'next/image';

import border1 from '../../Asssets/aboutus/border-fab-1.svg';
import dots1 from '../../Asssets/aboutus/dots1.svg';

const FabricationProcess = () => {
    return (
        <div className="container pt-5 mt-2 pb-5">
            <div className="row">
                <h3 className="bold-font text-center text-uppercase">
                    Processus de fabrication
                </h3>
            </div>
            <div className="row">
                <div className='d-flex align-items-center position-relative'>
                    <div className="position-relative w-fit text-center">
                        <Image src={border1} alt="border" />
                        <p className="position-absolute top-50 start-50 translate-middle bold-font">
                            1 <br /> FRUIT
                        </p>

                    </div>
                    <div className='ps-4 about-process-text'>
                        <p>Ramassage</p>
                        <p>Ramassage</p>
                        <p>Ramassage</p>
                    </div>
                    <div className='position-absolute bottom-0 about-dots1'>
                        <Image src={dots1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FabricationProcess
