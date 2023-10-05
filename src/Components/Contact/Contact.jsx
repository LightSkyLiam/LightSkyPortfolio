import styles from "./Contact.module.css";
import SectionHeading from "../global/SectionHeading";
import SecondaryLink from "../Global/SecondaryLink";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";

function Contact() {
  return (
    <div
      id="contact"
      className={`${styles.contactSection} container text-center `}
    >
      <SectionHeading
        heading="Contact"
        subHeading="Have any exciting projects ? Let's Chat ;)"
      />
      <Form />
      <div className="mt-4">
        <SecondaryLink
          fontSize="1.7rem"
          newTab={false}
          href="tel:0556625291"
          message="Call Now - 055-662-5291"
          icon={faPhone}
        />
      </div>
    </div>
  );
}

export default Contact;
