import { ContentElement, WebsiteNavbar, Footer } from "../components";
import * as images from "../images/articles";

export function TechArticles() {
  return (
    <div className="PageContainer">
      <WebsiteNavbar />
      <div className="PageContent">
      {/* Text section with improved formatting */}
      <div className="intro-text">
        <p>
          I often write about Software Engineering topics, in particular Software Architecture, Cloud Computing, AI, Infrastructure as Code, and emerging technologies. Here are some of my recent articles:
        </p>
      </div>

      {/* Grid layout for ContentElements */}
            <div className="content-grid">
        <ContentElement
          title="Sustainable Lunar Infrastructure Development"
          description={`Study of the design and infrastructure for a sustainable lunar spaceport. Presented at IAF\’s International Astronautical Congress - IAC 2025.`}
          image={images.lunar}
          link="https://dl.iafastro.directory/event/IAC-2025/paper/99090/"
          hashtags={["Space", "Research"]}
        />
        <ContentElement
          title="DevTools from AWS re:Invent 2024 to Kickstart 2025"
          description="In this post, I share the three DevTools that stood out for me from AWS re:Invent 2024 to kickstart your 2025 development journey."
          image={images.devtools}
          link="https://medium.com/@grinsteinmonique/devtools-from-aws-re-invent-2024-to-kickstart-2025-c3c8aecbb97c?source=friends_link&sk=297cbd127b7b9c2deb4ff339a5e016ac"
          hashtags={["AWS", "DevTools", "AIAgents"]}
        />
        <ContentElement
          title="Building a GenAI Solution — A Hackathon Success Story!"
          description="Learn about Generative AI, Large Language Models, Prompt Engineering, and a winning AI-driven description generation tool for LEGO sets."
          image={images.lego}
          link="https://medium.com/lego-engineering/a-hackathon-success-story-using-generative-ai-f99ae4f09d88?source=friends_link&sk=02487fca5eb53a6997dd0a448b3386a2"
          hashtags={["GenAI", "Hackathon", "ImageLabeling"]}
        />
        <ContentElement
          title="Building a GenAI Solution — Architecture & Development"
          description="How to get started with a proof of concept GenAI project, including service architecture and code implementation."
          image={images.genaiarchitecture}
          link="https://medium.com/@grinsteinmonique/building-a-genai-solution-architecture-development-c4d4652c8e82?source=friends_link&sk=78725f9a304b2ecec25f5f190263023b"
          hashtags={["GenAI", "AmazonBedrock", "AmazonSageMaker"]}
        />
        <ContentElement
          title="Build GenAI Apps With PartyRock in 5 Simple Steps (Code-Free)"
          description="It's now easy to build your own Generative AI app quickly, with no code involved!"
          image={images.partyrock}
          link="https://medium.com/@grinsteinmonique/partyrock-generative-ai-app-builder-0ccf87fb3f5b?source=friends_link&sk=8d6ba731f316578b5dfd6a33ac1d74ee"
          hashtags={["GenAI", "NoCode", "AWS", "PartyRock"]}
        />
        <ContentElement
          title="Cloudy with a chance of Event Storming"
          description="Using a Domain-Driven Design approach to our serverless architecture."
          image={images.eventstorming}
          link="https://medium.com/lego-engineering/cloudy-with-a-chance-of-event-storming-73817afe10c2?source=friends_link&sk=14a4c37bc72e8965ff9372b238db2bb1"
          hashtags={["EventStorming", "DomainDrivenDesign", "Serverless"]}
        />
      </div>
      </div>
      <Footer />
    </div>
  );
}
