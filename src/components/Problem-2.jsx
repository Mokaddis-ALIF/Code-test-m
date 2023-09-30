import React, { useState } from 'react';
import ModalA from './Modal/ModalA'
import ModalB from './Modal/ModalB'
import ModalC from './Modal/ModalC'

const Problem2 = () => {
    const [show, setShow] = useState({
        modalA: false, modalB: false, modalC: false
    });

    const toggleModalA = () => setShow(prev => ({ ...prev, modalA: !prev.modalA }))
    const toggleModalAClose = () => setShow(prev => ({ ...prev, modalA: false }))
    const toggleModalB = () => setShow(prev => ({ ...prev, modalB: !prev.modalB }))
    const toggleModalBClose = () => setShow(prev => ({ ...prev, modalB: false }))
    const toggleModalC = () => setShow(prev => ({ ...prev, modalC: !prev.modalC }))

    return (

        <>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-lg btn-outline-primary" type="button" onClick={toggleModalA} >All Contacts</button>
                        <button className="btn btn-lg btn-outline-warning" type="button" onClick={toggleModalB} >US Contacts</button>
                    </div>

                </div>
            </div>
            {show.modalA && <ModalA status={show.modalA} toggleModalA={toggleModalA} toggleModalB={toggleModalB} close={toggleModalAClose} toggleModalC={toggleModalC} />}
            {/* {show.modalB && <ModalB status={show.modalB} toggleModalB={toggleModalB} toggleModalA={toggleModalA} close={toggleModalBClose} toggleModalC={toggleModalC} />}
            {show.modalC && <ModalC status={show.modalC} close={toggleModalC} />} */}
        </>
    );
};

export default Problem2;