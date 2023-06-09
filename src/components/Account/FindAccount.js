import React, { useState, useEffect } from "react";
import '../../styles/FindAccount.css';

const FindUserIdPw = () => {

    // 아이디 패스워드 찾기 키보드 입력
    const [idUserName, setIdUserName] = useState("");
    const [idUserEmail, setIdUserEmail] = useState("");
    const [pwUserId, setPwUserId] = useState("");
    const [pwUserName, setPwUserName] = useState("");
    const [pwUserEmail, setPwUserEmail] = useState("");

    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isName, setIsName] = useState(false);

    const onChangeIdUserName = (e) => {
        const idUserNameNow = e.target.value;
        setIdUserName(idUserNameNow);
    }

    const onChangeIdUserEmail = (e) => {
        const idUserEmailNow = e.target.value;
        setIdUserEmail(idUserEmailNow);
    }

    const onChangePwUserId = (e) => {
        const pwUserIdNow = e.target.value;
        setPwUserId(pwUserIdNow);
    }

    const onChangePwUserName = (e) => {
        const pwUserNameNow = e.target.value;
        setPwUserName(pwUserNameNow);
    }

    const onChangePwUserEmail = (e) => {
        const pwUserEmailNow = e.target.value;
        setPwUserEmail(pwUserEmailNow);
    }

    // 이름과 메일 입력 값을 axios로 회원조회 접근 코드

    return (
        <>
        <h2>아이디 / 패스워드 찾기</h2>
        <div className="find">
        {/* FORM SECTION */}
        <div className="find-section">
        <div className="section-id"><h3>아이디</h3></div>
        <div className="section-pw"><h3>패스워드</h3></div>
        </div>
            <div className="find-form">
            {/* FIND ID */}
                <div className="id-container">
                    <div className="find-id">
                        <div>
                            <i></i>
                            <input type="text" placeholder="User Name" value={idUserName} onChange={onChangeIdUserName} />
                        </div>
                        <div>
                            <i></i>
                            <input type="text" placeholder="User Email" value={idUserEmail} onChange={onChangeIdUserEmail} />
                        </div>
                        <button>아이디 찾기</button>
                    </div>
                </div>
            {/* FIND ID */}
            {/* FIND PW */}
                <div className="pw-container">
                    <div className="find-pw">
                        <div>
                            <div>
                                <i></i>
                                <input type="text" placeholder="User ID" value={pwUserId} onChange={onChangePwUserId}/>
                            </div>
                            <div>
                                <i></i>
                                <input type="text" placeholder="User name" value={pwUserName} onChange={onChangePwUserName}/>
                            </div>
                            <div>
                                <i className="bx bxs-mail-send"></i>
                                <input type="email" placeholder="Email" value={pwUserEmail} onChange={onChangePwUserEmail}/>
                                <div>
                                <button>인증</button>
                                <button>패스워드 찾기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* END FIND PW */}
            </div>
        </div>
        </>
    );
};
export default FindUserIdPw;