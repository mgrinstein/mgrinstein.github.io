import { ContentElement, WebsiteNavbar } from "../components";
import cat from "../images/cat.jpeg";

export function SpaceProjects() {
  return (
    <div className="PageContainer">
      <WebsiteNavbar />
      <div className="PageContent">
      <div className="intro-text">
        <h1>space is a w e s o m e</h1>
        <p>
        As a Software Engineer with an academic background in
        Telecommunications, I have developed projects in the Satellite and Space
        domain for midstream and downstream applications
        </p>
      </div>

      <div className="content-grid">
        <ContentElement
          title="Understanding React Props"
          description="Learn how to pass and use props in React components."
          image={cat}
          link="https://example.com/react-props"
          hashtags={["react", "props", "javascript"]}
        />
        <ContentElement
          title="Mastering JavaScript"
          description="Learn the fundamentals of JavaScript, from variables to advanced topics."
          image={cat}
          link="https://example.com/javascript"
          hashtags={["javascript", "programming", "frontend"]}
        />
        <ContentElement
          title="Introduction to DevOps"
          description="Discover the basics of DevOps and how it can improve collaboration between developers and operations teams."
          image={cat}
          link="https://example.com/devops"
          hashtags={["devops", "infrastructure", "automation"]}
        />
        <ContentElement
          title="Understanding React State"
          description="Learn how to manage state in React applications effectively."
          image={cat}
          link="https://example.com/react-state"
          hashtags={["react", "state", "javascript"]}
        />
      </div>

    </div>
    </div>
  );
}
