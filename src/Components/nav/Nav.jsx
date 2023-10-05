import { useRef, useEffect, useState } from "react";
import styles from "./Nav.module.css";
import Logo from "./Logo";
import SocialLink from "./SocialLink";
import PrimaryButton from "../Global/PrimaryButton";
import { useScroll } from "../hooks/useScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";

function Nav({ isMobile }) {
  const [yOffSet] = useScroll();
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(null);
  const navEl = useRef(null);

  useEffect(() => {
    !isMobile && setIsSticky(yOffSet > navHeight);
  }, [yOffSet, setIsSticky, isMobile, navHeight]);

  useEffect(() => {
    setNavHeight(navEl.current.clientHeight);
  }, [navEl]);

  const handleMobileMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileLinkSelected = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`container-fluid ${isMobile ? styles.stickyMobile : ``} ${
        styles.navWrap
      }`}
    >
      <div ref={navEl} className={`${styles.nav} container`}>
        <Logo />
        {!isMobile && (
          <>
            <div className={`${isSticky ? styles.sticky : ``} ${styles.links}`}>
              <NavLinks className={`link`} />
              <div className={`ms-5 ${styles.socialLinks}`}>
                <SocialLink
                  link="https://linkedin.com/in/liamlasry"
                  className="margin-left-medium"
                  name="Linkedin"
                />
                <SocialLink
                  link="https://github.com/LightSkyLiam"
                  name="GitHub"
                />
              </div>
            </div>
            <PrimaryButton href="contact" message={`Get in touch`} />
          </>
        )}
        {isMobile && (
          <>
            <FontAwesomeIcon
              onClick={() => {
                handleMobileMenuClick();
              }}
              className={`${styles.icon}
              `}
              icon={isOpen ? faClose : faBars}
            />
          </>
        )}
      </div>
      {isMobile && (
        <div
          className={` ${isOpen && styles.showMobileMenu} ${styles.mobileMenu}`}
        >
          <NavLinks
            isMobile={isMobile}
            color="#000"
            className="mobileLink"
            onNav={handleMobileLinkSelected}
          />
        </div>
      )}
    </nav>
  );
}

export default Nav;
