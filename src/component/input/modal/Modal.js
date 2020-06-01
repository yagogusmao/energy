import React, { Component } from 'react';
import ModalPortal from './ModalPortal';
import './styles/style.css';

export default class Modal extends Component {
    render() {
        return (
            <>
                {this.props.isOpen ?
                    <ModalPortal>
                        <div className="modal">
                            <div className="modal-container">
                            {this.props.children}
                            </div>
                        </div>
                    </ModalPortal>
                    :
                    null
                }
            </>
        );
    }
}