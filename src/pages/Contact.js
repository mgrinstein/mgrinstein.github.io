import { WebsiteNavbar } from "../components";

export function Contact() {
    return (
        <div className="PageContainer">
          <WebsiteNavbar />
          <div className="PageContent">
          {/* Text section with improved formatting */}
          <div className="intro-text">
            <p>
            Please feel free to reach out for any professional inquiries through <a href="https://www.linkedin.com/in/moniquegrinstein/" target="_blank">LinkedIn</a>. <br />
            {/* You can message me on <a href="https://www.linkedin.com/in/moniquegrinstein/" target="_blank">LinkedIn</a> or use the form below: */}
            </p>
          </div>
          </div>
        </div>
      );
}
