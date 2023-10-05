import { Link } from "react-scroll";
import styles from "./NavLinks.module.css";

function NavLinks({ className, onNav, isMobile }) {
  return (
    <>
      {[`Home`, `About`, `Projects`, `Contact`].map((link) => (
        <Link
          onClick={() => {
            if (onNav) onNav();
          }}
          to={link.toLowerCase()}
          href="#"
          className={styles[className]}
          spy={true}
          offset={link === `Home` ? -100 : -70}
          activeClass={styles.active}
          key={link}
        >
          {link}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
