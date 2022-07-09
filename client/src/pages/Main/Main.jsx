import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  Instagram,
  Twitter,
  Facebook,
  Copyright,
  LinkedIn,
} from "@mui/icons-material";
import logo from "../../images/white_logo.svg";

const navLinks = [
  { name: "Premium", link: "#" },
  { name: "Support", link: "#" },
  { name: "Download", link: "#" },
  { name: "Sign up", link: "/signup" },
  { name: "Log in", link: "/login" },
];

const companyLinks = ["About", "Jobs", "For the record"];

const communitiesLinks = [
  "For Artists",
  "Developers",
  "Advertising",
  "Investors",
  "Vendors",
];

const usefulLinks = ["Support", "Web Player", "Free Mobile App"];

const footerLinks = [
  "legal",
  "privacy center",
  "privacy policy",
  "Cookies",
  "About ads",
  "Additional CA Privacy Disclosures",
];

const footerIcons = [<Instagram />, <Twitter />, <Facebook />, <LinkedIn />];

const Main = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar_container}>
        <Link to="/" className="styles.nav_logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.nav_links}>
          {navLinks.map((link, i) => (
            <Link key={i} to={link.link} className={styles.links}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      <main className={styles.main_container}>
        <div className={styles.main}>
          <h1>Listening is everything</h1>
          <p>Millions of songs and podcasts. No credit card needed.</p>
          <Link to="/signup">
            <Button
              label="GET SPOTIFY FREE"
              style={{ color: "#2941ab", width: "18rem", fontSize: "1.4rem" }}
            />
          </Link>
        </div>
      </main>
      <footer className={styles.footer_container}>
        <div className={styles.footer_1}>
          <Link to="/" className={styles.footer_logo}>
            <img src={logo} alt="logo" />
          </Link>
          <div className={styles.footer_1_links}>
            <div className={styles.footer_heading}>Company</div>
            {companyLinks.map((link, i) => (
              <div className={styles.links} key={i}>
                {link}
              </div>
            ))}
          </div>

          <div className={styles.footer_1_links}>
            <div className={styles.footer_heading}>Communities</div>
            {communitiesLinks.map((link, i) => (
              <div className={styles.links} key={i}>
                {link}
              </div>
            ))}
          </div>

          <div className={styles.footer_1_links}>
            <div className={styles.footer_heading}>Useful links</div>
            {usefulLinks.map((link, i) => (
              <div className={styles.links} key={i}>
                {link}
              </div>
            ))}
          </div>

          <div className={styles.footer_icons}>
            {footerIcons.map((icon, i) => (
              <div className={styles.icon} key={i}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer_2}>
          <div className={styles.footer_2_links}>
            {footerLinks.map((link, i) => (
              <div className={styles.links} key={i}>
                {link}
              </div>
            ))}
          </div>
          <div className={styles.copy_right}>
            <Copyright />
            <span>2022 Spotify</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
