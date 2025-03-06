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

// Use import.meta.glob to dynamically import images from the assets folder
const imageImports = import.meta.glob('../assets/*.{svg,png,jpeg,jpg}', { eager: true });

// Sample JSON data
const contactData: Contact[] = [
  {
    SiteName: "Github",
    SiteLogo: "GithubLogo.svg",
    SiteLink: "https://github.com",
    UserName: "Userlogo0",
    ProfilePic: "GithubProfile.png"
  },
  {
    SiteName: "Twitter",
    SiteLogo: "TwitterLogo.svg",
    SiteLink: "https://twitter.com",
    UserName: "Userlogo1",
    ProfilePic: "TwitterProfile.png"
  },
  {
    SiteName: "Discord",
    SiteLogo: "DiscordLogo.svg",
    SiteLink: "https://discord.com",
    UserName: "Userlogo2",
    ProfilePic: "DiscordProfile.png"
  }
];

const ContactTags: React.FC = () => {
  return (
    <div className={styles.container}>
      {contactData.map((contact, index) => {
        // Safely access the imported images
        const siteLogo = imageImports[`../assets/${contact.SiteLogo}`] as { default: string } | undefined;
        const profilePic = imageImports[`../assets/${contact.ProfilePic}`] as { default: string } | undefined;

        // Fallback to a default image or placeholder if the image is missing
        const siteLogoUrl = siteLogo ? siteLogo.default : '/path/to/default/logo.svg';
        const profilePicUrl = profilePic ? profilePic.default : '/path/to/default/profile.png';

        return (
          <div key={index} className={styles.card}>
            <img src={profilePicUrl} alt={`${contact.UserName} profile`} className={styles.profilePic} />
            <div className={styles.info}>
              <img src={siteLogoUrl} alt={`${contact.SiteName} logo`} className={styles.siteLogo} />
              <a href={contact.SiteLink} target="_blank" rel="noopener noreferrer">
                {contact.SiteName}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactTags;
