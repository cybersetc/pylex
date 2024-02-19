import React from 'react';
import styles from '../../styles/FAQ.module.css'; // Import CSS module

const FaqSection = () => {
  return (
    <div className={styles.Maincontainer}>
    <div className={styles.faqmain}>
    <div className={styles.faqContainer}> {/* Note: using styles.faqContainer */}
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>What is plexa node</h3>
        <p className={styles.faqAnswer}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, ipsa.
        </p>
      </div>
    </div>
</div>
      <div className={styles.faqmain}>
    <div className={styles.faqContainer}> {/* Note: using styles.faqContainer */}
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>What is plexa node</h3>
        <p className={styles.faqAnswer}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, autem.
        </p>
      </div>
      </div>
      </div>

    <div className={styles.faqmain}>
    <div className={styles.faqContainer}> {/* Note: using styles.faqContainer */}
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      <div className={styles.faqItem}>
        <h3 className={styles.faqQuestion}>What is plexa node</h3>
        <p className={styles.faqAnswer}>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quidem.
        </p>
      </div>
      </div>
    </div>
    </div>

    
  );
};

export default FaqSection;
