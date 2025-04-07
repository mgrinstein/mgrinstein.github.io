import { ContentElement, WebsiteNavbar } from "../components";
import * as images from "../images/projects";

export function Projects() {
  return (
    <div className="PageContainer">
      <WebsiteNavbar />
      <div className="PageContent">
      <div className="intro-text">
        <p>
        Here I showcase projects I have worked on recently.<br/> Other projects, contributions, and stats can be found on <a href="https://github.com/mgrinstein" target="_blank">my GitHub page</a>. <br />
        </p>
      </div>

      <div className="content-grid">
        <ContentElement
          title="SETTLE - Satellite Element Tracking via TLE"
          description="Visualising calculated satellite positions on an interactive map"
          image={images.settle}
          link="https://github.com/mgrinstein/SETTLE"
          hashtags={["Python", "CelesTrack", "sgp4"]}
          buttonText="Source Code"
        />
        <ContentElement
          title="Satellite Image Analysis"
          description="Processing and analyzing satellite images using the 2024 Kīlauea volcano eruption as an example"
          image={images.volcano}
          link="https://github.com/mgrinstein/volcano-image-processing"
          hashtags={["Python", "JupyterNotebook", "GeoTIFF", "EarthObservation"]}
          buttonText="Source Code"
        />
        <ContentElement
          title="Portfolio Website"
          description="Déjà vu? Building this webpage"
          image={images.website}
          link="https://github.com/mgrinstein/mgrinstein.github.io"
          hashtags={["JavaScript", "React", "GitHubActions", "CustomDomain"]}
          buttonText="Source Code"

        />
      </div>
    </div>
    </div>
  );
}
