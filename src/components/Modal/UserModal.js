import './UserModal.scss'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { faBan, faBarsStaggered, faCommentSlash, faGear, faHouseLock, faL, faQuestionCircle, faRightFromBracket, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import reactRouterDom from 'react-router-dom';






import React, { useState, useEffect } from 'react';

function UserModal() {
    // Khai báo state cho dữ liệu nhập vào
    const [modalIsOpen, setModalIsOpen] = useState(true);

    let navigate = useNavigate();

    const logOut = () => {
        navigate('/login');
    };
    return (
        <div>

            <Modal isOpen={modalIsOpen}
                toggle={setModalIsOpen(false)}>
                <ModalBody className='modal-dialog'>
                    <div className='containFunct'>
                        <div className='modal-dialog-func'>

                            <div className='icon'>
                                <FontAwesomeIcon className='iconContain' icon={faGear} />
                            </div>
                            <div className='text'>
                                Preferences
                            </div>
                        </div>
                    </div>
                    <div className='containFunct'>
                        <div className='modal-dialog-func'>
                            <div className='icon'>
                                <FontAwesomeIcon className='iconContain' icon={faCommentSlash} />
                            </div>
                            <div className='text'>
                                Restricted accounts
                            </div>

                        </div>
                    </div>
                    <div className='containFunct'>
                        <div className='modal-dialog-func'>
                            <div className='icon'>
                                <FontAwesomeIcon className='iconContain' icon={faHouseLock} />
                            </div>
                            <div className='text'>
                                Private & safety
                            </div>

                        </div>
                    </div>
                    <div className='containFunct TwoFunct'>
                        <div className='modal-dialog-func'>
                            <div className='icon'>
                                <FontAwesomeIcon className='iconContain' icon={faQuestionCircle} />
                            </div>
                            <div className='text'>
                                Help
                            </div>

                        </div>
                        <div className='modal-dialog-func'>
                            <div className='icon'>
                                <FontAwesomeIcon className='iconContain' icon={faTriangleExclamation} />
                            </div>
                            <div className='text'>
                                Report a problem
                            </div>

                        </div>
                    </div>
                    <div className='containFunct ThreeFunct'>
                        <div className='modal-dialog-func'>
                            <div className='icon'>
                                <FontAwesomeIcon className='iconContain' icon={faBarsStaggered} />
                            </div>
                            <div className='text'>
                                Terms
                            </div>

                        </div>
                        <div className='modal-dialog-func'>
                            <div className='icon'>
                                <FontAwesomeIcon className='iconContain' icon={faBarsStaggered} />
                            </div>
                            <div className='text'>
                                Privacy Policy
                            </div>

                        </div>
                        <div className='modal-dialog-func'>
                            <div className='icon'>
                                <FontAwesomeIcon className='iconContain' icon={faBarsStaggered} />
                            </div>
                            <div className='text'>
                                Cookie Policy
                            </div>

                        </div>
                    </div>
                    <div className='containFunct TwoFunct'>
                        <div className='modal-dialog-func'>
                            <div className='icon'>
                                <FontAwesomeIcon className='iconContain' icon={faFacebookMessenger} />
                            </div>
                            <div className='text'>
                                Try Messenger for Windows
                            </div>

                        </div>
                        <div className='modal-dialog-func'>
                            <div className='icon'>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </div>
                            <div className='text' onClick={logOut}>
                                Log out
                            </div>

                        </div>
                    </div>
                </ModalBody>

            </Modal>
        </div>
    );
}

// const mapDispatchToProps = dispatch => {
//     return {
//         logOutRedux: () => dispatch(actions.logOut()),

//     };
// };

export default UserModal;;
