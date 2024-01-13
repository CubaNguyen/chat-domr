import './FrameRight.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faThumbsUp, faBell, faAngleRight, faThumbTack, faCircle, faImages, faFileLines, faLink, faBan, faCircleMinus, faTriangleExclamation, faAngleDown, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';

function FrameRight() {
    // Khai báo state cho dữ liệu nhập vào
    const [isOpenInfor, setIsOpenInfor] = useState(false);
    const [isOpenCustom, setIsOpenCustom] = useState(false);
    const [isOpenFile, setIsOpenFile] = useState(false);
    const [isOpenPersonal, setIsOpenPersonal] = useState(false);




    const handleAddFriend = () => {
        alert('đã gửi lời mời kết bạn')
    }


    return (
        <div className='frameRight'>
            <div className='up'>
                <div className='avatarAndName'>
                    <div className='avatar'>
                        AVATAR
                    </div>
                    <div className='nameAndActive'>
                        <div className='name'>
                            Name
                        </div>
                        <div className='active'>
                            Đang hoạt động
                        </div>

                    </div>
                </div>
                <div className='threeFunc'>
                    <div>
                        <div className='personalPage'>

                            <FontAwesomeIcon className='iconContain' icon={faFacebook} />

                        </div>
                        <div className='text'>
                            Trang cá nhân
                        </div>
                    </div>


                    <div>
                        {/* <div className='notification'>

                        <FontAwesomeIcon className='iconContain' icon={faBell} />

                    </div>
                    <div className='text'>
                        Tắt thông báo
                    </div> */}

                        <div className='notification' onClick={() => handleAddFriend()} >

                            <FontAwesomeIcon className='iconContain' icon={faUserPlus} />

                        </div>
                        <div className='text'>
                            Thêm bạn bè
                        </div>
                    </div>

                    <div>
                        <div className='search'>

                            <FontAwesomeIcon className='iconContain' icon={faMagnifyingGlass} />

                        </div>
                        <div className='text'>
                            Tìm kiếm
                        </div>
                    </div>

                </div>
            </div>
            <div className='down'>
                {isOpenInfor === true ?
                    <>
                        <div className='mainFunct'
                            onClick={() => setIsOpenInfor(!isOpenInfor)}>
                            <div className='someText'>
                                Thông tin về đoạn chat
                            </div>
                            <FontAwesomeIcon className='iconFunct' icon={faAngleDown} />
                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                <FontAwesomeIcon className='someIcon' icon={faThumbTack} />
                            </div>
                            <div className='someText'>
                                Xem tin nhắn đã ghim
                            </div>

                        </div>
                    </>

                    :

                    <>
                        <div className='mainFunct'
                            onClick={() => setIsOpenInfor(!isOpenInfor)}>
                            <div className='someText'>
                                Thông tin về đoạn chat
                            </div>

                            <FontAwesomeIcon className='iconFunct' icon={faAngleRight} />
                        </div>
                    </>

                }
                {isOpenCustom === true ?
                    <>
                        <div className='mainFunct'
                            onClick={() => setIsOpenCustom(!isOpenCustom)}
                        >
                            <div className='someText'>
                                Tuỳ chỉnh đoạn chat
                            </div>
                            <FontAwesomeIcon className='iconFunct' icon={faAngleDown} />
                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                <FontAwesomeIcon className='someIcon' icon={faCircle} />
                            </div>
                            <div className='someText'>
                                Đổi chủ đề
                            </div>

                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                <FontAwesomeIcon className='someIcon' icon={faThumbsUp} />
                            </div>
                            <div className='someText'>
                                Thay đổi biểu tượng cảm xúc
                            </div>

                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                Aa
                            </div>
                            <div className='someText'>
                                Chỉnh sửa biệt danh
                            </div>

                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                <FontAwesomeIcon className='someIcon' icon={faMagnifyingGlass} />

                            </div>
                            <div className='someText'>
                                Tìm kiếm trong cuộc nói chuyện
                            </div>

                        </div>
                    </>
                    :
                    <>
                        <div className='mainFunct'
                            onClick={() => setIsOpenCustom(!isOpenCustom)}
                        >
                            <div className='someText'>
                                Tuỳ chỉnh đoạn chat
                            </div>

                            <FontAwesomeIcon className='iconFunct' icon={faAngleRight} />
                        </div>
                    </>
                }
                {isOpenFile === true ?
                    <>
                        <div className='mainFunct' onClick={() => setIsOpenFile(!isOpenFile)}>
                            <div className='someText'>
                                File phương tiện, file và liên kết
                            </div>

                            <FontAwesomeIcon className='iconFunct' icon={faAngleDown} />
                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                <FontAwesomeIcon className='someIcon' icon={faImages} />

                            </div>
                            <div className='someText'>
                                File phương tiện
                            </div>

                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                <FontAwesomeIcon className='someIcon' icon={faFileLines} />

                            </div>
                            <div className='someText'>
                                File
                            </div>
                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                <FontAwesomeIcon className='someIcon' icon={faLink} />

                            </div>
                            <div className='someText'>
                                Liên kết
                            </div>

                        </div>
                    </>
                    :
                    <>
                        <div className='mainFunct' onClick={() => setIsOpenFile(!isOpenFile)}>
                            <div className='someText'>
                                File phương tiện, file và liên kết
                            </div>

                            <FontAwesomeIcon className='iconFunct' icon={faAngleRight} />
                        </div>
                    </>
                }
                {isOpenPersonal === true ?
                    <>
                        <div className='mainFunct' onClick={() => setIsOpenPersonal(!isOpenPersonal)}>
                            <div className='someText'>
                                Quyền riêng tư & hỗ trợ
                            </div>

                            <FontAwesomeIcon className='iconFunct' icon={faAngleDown} />
                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                <FontAwesomeIcon className='someIcon' icon={faBell} />

                            </div>
                            <div className='someText'>
                                Tắt thông báo
                            </div>

                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                <FontAwesomeIcon className='someIcon' icon={faBan} />

                            </div>
                            <div className='someText'>
                                Hạn chế
                            </div>

                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                <FontAwesomeIcon className='someIcon' icon={faCircleMinus} />

                            </div>
                            <div className='someText'>
                                Chặn
                            </div>

                        </div>
                        <div className='someFunct'>
                            <div className='someIconContain'>
                                <FontAwesomeIcon className='someIcon' icon={faTriangleExclamation} />

                            </div>
                            <div className='someText'>
                                Báo cáo
                            </div>

                        </div>
                    </>
                    :
                    <>
                        <div className='mainFunct' onClick={() => setIsOpenPersonal(!isOpenPersonal)}>
                            <div className='someText'>
                                Quyền riêng tư & hỗ trợ
                            </div>

                            <FontAwesomeIcon className='iconFunct' icon={faAngleRight} />
                        </div>
                    </>
                }

            </div>
        </div>
    );
}

export default FrameRight;
