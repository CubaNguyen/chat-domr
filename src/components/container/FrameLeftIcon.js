import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCircleUser, faUserGroup, faDoorOpen, faCommentDots, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import './FrameLeftIcon.scss'
import { Link } from 'react-router-dom';
import UserModal from '../Modal/UserModal';



import React, { useState, useEffect } from 'react';

function FrameLeftIcon() {
    // Khai báo state cho dữ liệu nhập vào
    const [isClick, setIsClick] = useState('');
    const [icon, setIcon] = useState('icon');
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUserodal, setIsOpenUserodal] = useState(false);


    const handleOpenTab = (openTab) => {
        setIcon('iconActive')
        setIsClick(openTab)

    }

    const handleOpenDoor = () => {

        setIsOpen(!isOpen)
    }
    const openUserModal = () => {
        setIsOpenUserodal(!isOpenUserodal)

    }

    return (
        <div className={isOpen === true ? 'frameLeftIconContainer Active' : 'frameLeftIconContainer'}>
            <div className='upper'>

                <div className='chats'
                    onClick={() => handleOpenTab('chat')}
                >
                    <Link to="/" exact style={{ color: '#65676b', textDecoration: 'none' }}>
                        <div className={isClick === 'chat' ? `${icon}` : 'icon'}>
                            <FontAwesomeIcon className={isClick === 'chat' ? `iconContain Active` : 'iconContain'} icon={faComment} />
                            <div className='text'>Chats</div>
                        </div>

                    </Link>
                </div>



                <div className='people'
                    onClick={() => handleOpenTab('people')}
                >
                    <Link to="/active" exact style={{ color: '#65676b', textDecoration: 'none' }}>

                        <div className={isClick === 'people' ? `${icon}` : 'icon'}>
                            <FontAwesomeIcon className={isClick === 'people' ? `iconContain Active` : 'iconContain'} icon={faUserGroup} />
                            <div className='text'>People</div>
                        </div>
                    </Link>

                </div>
                <div className='requests'
                    onClick={() => handleOpenTab('requests')}
                >
                    <Link to="/requests" exact style={{ color: '#65676b', textDecoration: 'none' }}>

                        <div className={isClick === 'requests' ? `${icon}` : 'icon'}>
                            <FontAwesomeIcon className={isClick === 'requests' ? `iconContain Active` : 'iconContain'} icon={faCommentDots} />
                            <div className='text'>Requests</div>
                        </div>
                    </Link>


                </div>
                <div className='archive'
                    onClick={() => handleOpenTab('archive')}
                >
                    <Link to="/archived" exact style={{ color: '#65676b', textDecoration: 'none' }}>
                        <div className={isClick === 'archive' ? `${icon}` : 'icon'}>
                            <FontAwesomeIcon className={isClick === 'archive' ? `iconContain Active` : 'iconContain'} icon={faBoxArchive} />
                            <div className='text'>Archive</div>

                        </div>
                    </Link>


                </div>
            </div>

            <div className={isOpen === true ? 'lower Active' : 'lower'}>
                <FontAwesomeIcon className={isOpen === true ? 'user Active' : 'user'} icon={faCircleUser}
                    onClick={() => openUserModal()}
                />

                <div className='isClick'>

                    <div className={`${icon}`}
                        onClick={() => handleOpenDoor()}
                    >
                        <FontAwesomeIcon className='iconContain' icon={faDoorOpen} />

                    </div>
                </div>
            </div>
            {isOpenUserodal === true &&
                <UserModal></UserModal>
            }
        </div>
    );
}

export default FrameLeftIcon
