import { ContentElement, WebsiteNavbar, Footer } from "../components";
import * as images from "../images/speaking";

export function Speaking() {
    return (
        <div className="PageContainer">
            <WebsiteNavbar />
            <div className="PageContent">
                <div className="intro-text">
                    <p>
                        I am passionate about sharing knowledge with the developer community
                        and have had the opportunity to speak at local and international
                        events in the past year:
                    </p>
                </div>

                <div className="content-grid">
                                        <ContentElement
                        title={
                            <>
                                Space Studies Program - International Space University
                                <br />
                                <i>South Korea, 21 August 2025</i>
                            </>
                        }
                        description="Sustainable Lunar Infrastructure Development"
                        image={images.lunar}
                        hashtags={["Space", "Research"]}
                    />
                    <ContentElement
                        title={
                            <>
                                AWS re:Invent
                                <br />
                                <i>Las Vegas, 02 - 06 December 2024</i>
                            </>
                        }
                        description="All Builders Welcome Mentoring Sessions"
                        image={images.reinvent2}
                        hashtags={["AWS", "TechLeadership", "Mentoring", "CloudComputing"]}
                    />
                    <ContentElement
                        title={
                            <>
                                AWS Cloud Day Dublin
                                <br />
                                <i>Dublin, 10 October 2024</i>
                            </>
                        }
                        description="GenAI Made Easy for Devs - with AWS CDK Constructs"
                        image={images.talkcdk}
                        hashtags={["GenAI", "AWS", "CDK", "InfrastructureAsCode"]}
                    />

                    <ContentElement
                        title={
                            <>
                                LEGO® DevCon
                                <br />
                                <i>London, 1 - 2 October 2024</i>
                            </>
                        }
                        description={
                            <>
                                <i>Keynote:</i> Making Promotions Awesome - Our InnerSource Journey
                            </>
                        } image={images.devcon}
                        hashtags={["OpenSource", "InnerSource", "TechStorytelling"]}
                    />

<ContentElement
                        title={
                            <>
                                LEGO® DevCon
                                <br />
                                <i>London, 1 - 2 October 2024</i>
                            </>
                        }
                        description={
                            <>
                                <i>Creators Track:</i> Making Tech Presentations Memorable - A Guide to Structured Storytelling
                            </>
                        } image={images.devcon2}
                        hashtags={["OpenSource", "InnerSource", "TechStorytelling"]}
                    />
                    <ContentElement
                        title={
                            <>
                                AI Hackathon by Encode Club
                                <br />
                                <i>London, 9 March 2024</i>
                            </>
                        }
                        description="Pitch Perfect: Crafting Success Through Storytelling"
                        image={images.aihackathon2}
                        hashtags={["TechStorytelling", "DemoPitch", "GenAISolutions",]}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
