import { WebsiteNavbar, HomeComponent } from "../components";
import * as images from "../images/about";

export function Home() {
    return (
        <div className="PageContainer">
            <WebsiteNavbar />
            <div className="PageContent">
                <div className="intro-text">
                    <HomeComponent image={images.myPhoto2024} title={<h2>&gt; &nbsp;Hello, World!</h2>} text={<>
                        I am a Software Engineer specialized in backend services and cloud technologies. Deeply committed to technical excellence and continuous learning.
                        <br /><br />Beyond my professional work, I am an active speaker and community builder within the AWS ecosystem. Focus areas include Software Architecture, AI, Infrastructure as Code, and emerging technologies.
                        <br /><br />Interested in broadening my contributions to open-source projects, particularly for Satellite and Space applications.
                    </>}
                    />
                </div>
            </div>{" "}
        </div>
    );
}
