import { useState } from "react";
import styles from "./Header.module.css";
import piggy from "../../assets/piggy.png";
import Button from "../Button/Button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  }; 

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* основная таблетка-хедер (десктоп + круглая кнопка на мобиле) */}
      <div className={styles.shell}>
        {/* логотип слева — только десктоп */}
        <div className={styles.logoGroup}>
          <img src={piggy} alt="Logo" className={styles.logoIcon} />
        </div>

        {/* навигация по центру — только десктоп */}
        <nav className={styles.nav}>
          <a href="#hero" className={styles.link}>
            MOLANDAK
          </a>
          <a
            href="https://x.com/MOLANDAKmon"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            href="https://t.me/monaldak"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            TG
          </a>
          <a href="#tokenomics" className={styles.link}>
            TOKENOMICS
          </a>
          <a
            href="https://www.kuru.io/swap?from=0x0000000000000000000000000000000000000000&to=0x6358288eef7a497c6791c777ab9180ca551e1a55"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            DEX
          </a>
        </nav>

        {/* BUY — только десктоп */}
        <div className={styles.desktopButton}>
          <Button link="https://www.kuru.io/swap?from=0x0000000000000000000000000000000000000000&to=0x6358288eef7a497c6791c777ab9180ca551e1a55" />
        </div>

        {/* круглая кнопка с пигги + бургер — только мобилка */}
        <button
          type="button"
          className={styles.mobileTrigger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <img src={piggy} alt="" className={styles.mobileIcon} />
          <span className={styles.mobileBurger}>
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* выпадающее мобильное меню */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav className={styles.mobileNav} onClick={closeMobileMenu}>
          <a href="#hero" className={styles.mobileLink}>
            MOLANDAK
          </a>
          <a
            href="https://x.com/MOLANDAKmon"
            className={styles.mobileLink}
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            href="https://t.me/monaldak"
            className={styles.mobileLink}
            target="_blank"
            rel="noreferrer"
          >
            TG
          </a>
          <a href="#tokenomics" className={styles.mobileLink}>
            TOKENOMICS
          </a>
          <a
            href="https://www.kuru.io/swap?from=0x0000000000000000000000000000000000000000&to=0x6358288eef7a497c6791c777ab9180ca551e1a55"
            className={styles.mobileLink}
            target="_blank"
            rel="noreferrer"
          >
            DEX
          </a>

          <div className={styles.mobileButtonWrapper}>
            <Button link="https://www.kuru.io/swap?from=0x0000000000000000000000000000000000000000&to=0x6358288eef7a497c6791c777ab9180ca551e1a55" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
