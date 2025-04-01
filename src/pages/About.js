import { WebsiteNavbar, AboutMe } from "../components";

export function About() {
  return (
    <div className="PageContainer">
      <WebsiteNavbar />
      <div className="PageContent">
      <div className="intro-text">
      <AboutMe />
      </div>
      </div>
    </div>
  );
}
