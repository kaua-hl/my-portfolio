import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer
      data-scroll-section
      className={`${styles.contact} cn-2`}
      id="contact"
    >
      <div>
        <h2 className="tn-2">Contact</h2>
        <div className={styles.contact__content}>
          <div>
            <a href="mailto:email@gmail.com">email@gmail.com</a>
            <a href="tel:+55 23 8922-4002">+55 23 8922-4002</a>
          </div>
          <a href="mailto:email@gmail.com">Send Email</a>
          <p>© 2022 - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
