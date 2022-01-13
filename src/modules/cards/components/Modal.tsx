import React from 'react'

export const Modal = ({ handleClose, show, children }: any, onClose = ()=> {}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    console.log(showHideClassName);
    
    return (
        <div className={showHideClassName} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ handleClose }></button>
                    </div>
                    <div className="modal-body text-dark">
                        <p>asdfdsai </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={ handleClose }>Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
