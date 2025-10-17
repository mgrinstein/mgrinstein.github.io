import { ContentElement, WebsiteNavbar } from "../components";
import * as images from "../images/projects";

export function Projects() {
  return (
    <div className="PageContainer">
      <WebsiteNavbar />
      <div className="PageContent">
        <div className="intro-text">
          <p>
            Here I showcase projects I have worked on recently.<br /> Other projects, contributions, and stats can be found on <a href="https://github.com/mgrinstein" target="_blank">my GitHub page</a>. <br />
          </p>
        </div>

        <div className="content-grid">
                    <ContentElement
            title="Jawstronauts | sharksfrom.space"
            description="AI-powered knowledge base for shark behaviour, habitats, and conservation. NASA Space Apps Challenge 2025."
            image={images.sharks}
            link="https://github.com/sharks-from-space/sharks-from-space"
            hashtags={["GenAI", "MachineLearning", "Python", "JavaScript", "EarthSciences"]}
            buttonText="Source Code"

          />
        <ContentElement
            title="Sustainable Lunar Infrastructure Development | sustainablelunar.space"
            description="Knowledge portal on developing sustainable infrastructure for lunar exploration and habitation"
            image={images.lunar}
            link="https://github.com/ISU-SSP25/isu-ssp25.github.io"
            hashtags={["Space", "Research", "JavaScript", "React"]}
            buttonText="Source Code"

          />
          <ContentElement
            title="SETTLE: Satellite Element Tracking via TLE"
            description="A satellite tracker using Celestrak TLE data with SGP4 orbit propagation and interactive map visualisations"
            image={images.settle}
            link="https://github.com/mgrinstein/SETTLE"
            hashtags={["Python", "CelesTrak", "sgp4"]}
            buttonText="Source Code"
          />
          <ContentElement
            title="GROUNDSTER: Ground Station Telemetry Receiver"
            description="A simulated ground station that receives telemetry data from a satellite via TCP socket connection"
            image={images.groundster}
            link="https://github.com/mgrinstein/GROUNDSTER"
            hashtags={["C++", "Python", "FASTAPI"]}
            buttonText="Source Code"
          />
          <ContentElement
            title="KILAUEA-EO: Earth Observation Study"
            description="An analysis of a recent volcanic eruption using Sentinel-2 imagery in the NIR band from Google Earth Engine"
            image={images.volcano}
            link="https://github.com/mgrinstein/KILAUEA-EO"
            hashtags={["Python", "JupyterNotebook", "GeoTIFF", "EarthObservation"]}
            buttonText="Source Code"
          />
          <ContentElement
            title="HDF4 Processor"
            description="A tool to parse, process, and visualise satellite data stored in HDF4 format"
            image={images.hdf4}
            link="https://github.com/mgrinstein/HDF4_processor"
            hashtags={["Python", "HDF4", "cartopy", "EarthObservation"]}
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
