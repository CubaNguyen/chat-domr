
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faVideo, faPhone, faCirclePlus, faImage, faNoteSticky, faGift, faFaceSmile, faThumbsUp, faBell, faAngleRight, faThumbTack, faCircle, faImages, faFileLines, faLink, faBan, faCircleMinus, faTriangleExclamation, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './FrameMiddle.scss'

import React, { useEffect, useState } from 'react';

function FrameMiddle(props) {
    // Khai báo các state với useState
    const [isClick, setIsClick] = useState(false);
    const [text, setText] = useState('');
    // const [messReceive, setMessReceive] = useState('');


    //looi fix sau
    const handleExtendFrameMiddle = () => {
        setIsClick(!isClick);
        // props.handleExtend(isClick);
    }

    // useEffect(() => {
    //     props.handleExtend(isClick);
    // }, []);


    return (
        <div className='frameMiddleContainer'>

            <div className='iconContainer'>

                <div className='avatarContain'>
                    avatar
                </div>

                <div className='name'>
                    nameưadsffffffffff
                </div>

                <div className='functionsContain'>
                    <div className='call'>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className='facetime'>
                        <FontAwesomeIcon icon={faVideo} />

                    </div>
                    <div className={isClick === true ? 'moreInfor Active' : 'moreInfor'}
                        onClick={() => handleExtendFrameMiddle()}
                    >

                        <div className={isClick === true ? 'contain Active' : 'contain'}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>

                    </div>
                </div>

            </div>

            <div className='chat'>


            </div>
            <div className='texting'>
                <div className='fourIcon'>
                    <div className='anotherAction'>
                        <FontAwesomeIcon icon={faCirclePlus} />
                    </div>
                    <div className='image'>
                        <FontAwesomeIcon icon={faImage} />
                    </div>
                    <div className='sticker'>
                        <FontAwesomeIcon icon={faNoteSticky} />
                    </div>
                    <div className='gif'>
                        <FontAwesomeIcon icon={faGift} />
                    </div>
                </div>
                <div className='textingAndLike'>
                    <div className='text'>
                        <form className='searchForm' >
                            <input className='input'
                                value={text}
                                type="text" placeholder="Aa.." name="search"
                                onChange={(e) => setText(e.target.value)}
                            />

                            <div className='iconSmile'>
                                <FontAwesomeIcon icon={faFaceSmile} />
                            </div>
                        </form>
                    </div>
                    <div className='like'>
                        {!text ?
                            <FontAwesomeIcon icon={faThumbsUp} />
                            :
                            <FontAwesomeIcon
                                // onClick={sendMess}
                                icon={faPaperPlane} />

                        }

                    </div>
                </div>

            </div>
        </div >
    )
}

export default FrameMiddle;