import { WebsiteNavbar, HomeComponent } from "../components";
import myPhoto from "../images/about/myPhoto.jpg";
import myPhoto2 from "../images/about/myPhoto2.jpg";

export function Home() {
    return (
        <div className="PageContainer">
            <WebsiteNavbar />
            <div className="PageContent">
                <div className="intro-text">
                    <HomeComponent image={myPhoto2} title={<h2>&gt; &nbsp;Hello, World!</h2>}
                        text={`\nI am a Software Engineer specialized in backend services and cloud technologies. Deeply committed to technical excellence and continuous learning.
                    \n Beyond my professional work, I am an active speaker and community builder within the AWS ecosystem. Focus areas include Software Architecture, AI, Infrastructure as Code, and emerging technologies. 
Interested in broadening my contributions to open-source projects, particularly for Satellite and Space applications.`} />
                </div>
            </div>{" "}
        </div>
    );
}
