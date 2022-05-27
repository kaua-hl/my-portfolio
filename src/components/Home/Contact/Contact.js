import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer className={`${styles.contact} cn-2`}>
      <div>
        <h2 className="tn-2">Contact</h2>
        <div className={styles.contact__content}>
          <div>
            <a>email@gmail.com</a>
            <a>+55 23 8922-4002</a>
          </div>
          <a>Send Email</a>
          <p>© 2022 - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
