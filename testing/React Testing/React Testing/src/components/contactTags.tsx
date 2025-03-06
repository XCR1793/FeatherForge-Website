import React from "react";
import styles from "./contactTags.module.css";

// Define TypeScript interface for contact data
interface Contact {
  SiteName: string;
  SiteLogo: string;
  SiteLink: string;
  UserName: string;
  ProfilePic: string;
}

// Sample JSON data
const contactData: Contact[] = [
  {
    SiteName: "Github",
    SiteLogo: "../assets/GithubLogo.svg",
    SiteLink: "https://github.com",
    UserName: "Userlogo",
    ProfilePic: "../assets/GithubProfile.png"
  },
  {
    SiteName: "Twitter",
    SiteLogo: "../assets/TwitterLogo.svg",
    SiteLink: "https://twitter.com",
    UserName: "Userlogo",
    ProfilePic: "../assets/TwitterProfile.png"
  },
  {
    SiteName: "Discord",
    SiteLogo: "../assets/DiscordLogo.svg",
    SiteLink: "https://discord.com",
    UserName: "Userlogo",
    ProfilePic: "../assets/DiscordProfile.png"
  }
];

const ContactTags: React.FC = () => {
  return (
    <div className={styles.container}>
      {contactData.map((contact, index) => (
        <div key={index} className={styles.card}>
          <img src={contact.ProfilePic} alt={`${contact.UserName} profile`} className={styles.profilePic} />
          <div className={styles.info}>
            <img src={contact.SiteLogo} alt={`${contact.SiteName} logo`} className={styles.siteLogo} />
            <a href={contact.SiteLink} target="_blank" rel="noopener noreferrer">
              {contact.SiteName}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactTags;