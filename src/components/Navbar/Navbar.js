import React, { useState } from "react";
<<<<<<< HEAD
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
function Navbar({ isLogin, userInfo, handleResponseSuccess, handleLogOut }) {
  const [click, setClick] = useState(false);
  //   const [navbar, setNavbar] = useState(false)
  //   css position: sticky를 적용하면 navbar 상단 고정 가능
  //   const changeBackground = () => {
  //       if (window.scrollY >= 80) {
  //           setNavbar(true);
  //         } else {
  //           setNavbar(false);
  //         }
  //     }
  // window.addEventListener('scroll', changeBackground)
  const handleClick = () => setClick(!click);
  const history = useHistory();
=======
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  const [click, setClick] = useState(false);


//   const [navbar, setNavbar] = useState(false)
//   css position: sticky를 적용하면 navbar 상단 고정 가능
//   const changeBackground = () => {
//       if (window.scrollY >= 80) {
//           setNavbar(true);
//         } else {
//           setNavbar(false);
//         }
//     }

    // window.addEventListener('scroll', changeBackground)

  const handleClick = () => setClick(!click);
>>>>>>> 4494bca704cfabcfa00506f82e4a1dbb02528777
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            
          <i class="fas fa-laugh-wink"></i>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
<<<<<<< HEAD
            {isLogin ? (
              <div>{userInfo.nickName}님 환영합니다</div>
            ) : (
              <div>확인작업중</div>
            )}
=======
>>>>>>> 4494bca704cfabcfa00506f82e4a1dbb02528777
            <li className="nav-item">
              <Link
                exact
                to="/mainpage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                감정기록
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/list"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                감정리스트
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/modified"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                회원정보수정
              </Link>
            </li>
<<<<<<< HEAD
            {isLogin ? (
              <li className="nav-item">
                <Link
                  to="/landingpage"
                  onClick={handleLogOut}
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => {
                    handleClick();
                    handleLogOut();
                    history.push("/mainpage");
                  }}
                >
                  로그아웃
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  to="/landingpage"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  로그인
                </Link>
              </li>
            )}
=======
            <li className="nav-item">
              <Link
                exact
                to="/landingpage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                로그인
              </Link>
            </li>
>>>>>>> 4494bca704cfabcfa00506f82e4a1dbb02528777
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
