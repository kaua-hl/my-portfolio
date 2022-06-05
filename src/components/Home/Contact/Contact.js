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
            <a href="mailto:kauahortiz8@gmail.com">kauahortiz8@gmail.com</a>
          </div>
          <a href="mailto:kauahortiz8@gmail.com">Send Email</a>
          <p>© 2022 - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
