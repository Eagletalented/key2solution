import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import thunderbrawl from "../../Assets/Projects/thunderbrawl.png";
import psydoge from "../../Assets/Projects/psydode.png";
import goongye from "../../Assets/Projects/goongye .png";
import Splassive from "../../Assets/Projects/splassive.png";
import center from "../../Assets/Projects/center.png";
import berryClub from "../../Assets/Projects/berry-culb.jpeg";
import SAVAGE from "../../Assets/Projects/SAVAGE.png";
import bnbStake from "../../Assets/Projects/bnbStake.png";
import falafel from "../../Assets/Projects/falafel.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Splassive}
              isBlog={false}
              title="Splassive"
              description="Splash Network is the latest project developed by Splassive Team.The official token of the Splash Network is Splash (SPLASH) on the Avalanche Chain (AVAX) that captures value by being scarce, deflationary, censorship resistant, and by being built on a robust, truly decentralized blockchain.The recommended exchange for trading Splash is The Well contract which can be found directly on the platform's website under. The Well tab provides the lowest prices and highest liquidity, resulting in less slippage for larger trades."
              // ghLink="https://github.com/ArbitechSolution/drip-community"
              demoLink="https://splassive.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={berryClub}
              isBlog={false}
              title="Berry Club"
              description="Join Metaverse World that you create with celebrities in every field. Berry Club publishes the celebrity's 10,000 PFP stars based on klaytn, And comprises community membership form creating with both celebrity and NFT holder. Join us on a new journey which begins on Berry Club, and enjoy the various benefit!"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://berry.club/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goongye}
              isBlog={false}
              title="Goongye"
              description="The Goongye, the ruthless founder of the country, has transcended humanity and has become a higher being. He has transformed into the Crazy Ape Goongye, with knowledge beyond the fathomable concepts of man. Through his teachings, the Ape Goongye aims to create a new civilization that is efficient and prioritizes reason more than emotions"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://crazyapegoongyeclub.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thunderbrawl}
              isBlog={false}
              title="ThunderBrwal"
              description="Mint NFTs , and Play and earn reward tokens by playing game.Supporting real crypto payouts for battle mode. The competition is fierce.Blockchain technology is powering the future of gaming, allowing players to trade, sell, and play to earn."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://thunderbrawl.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={center}
              isBlog={false}
              title="Center Coin"
              description="A FINANCIAL SYSTEM BUILT ON SMART CONTRACT TECHNOLOGY. OPEN TO ALL, TRANSPARENT TO ALL."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.centercoin.farm/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={psydoge}
              isBlog={false}
              title="Psydoge on binance blockchain"
              description="6 level card can be selected with random game.All card have different token reward value.Min Bet is 100 PSYD Token, Max Bet is 40,000 PSYD Token."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://psydoge.live/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SAVAGE}
              isBlog={false}
              title="SAVAGE WOLVES"
              description="Savage Wolves are a limited collection of 2000 Genesis, high-quality, pixelated and randomly generated NFTs. Each NFT has specific attributes and variables which make them unique and exclusive. Savage Wolves will yield Savage Tokens ($SVG) per day. You will be able to collect your $SVG Tokens right after your mint. Utility of the $SVG token will include the following but will not be limited to Legendary Wolves Breeding, Launchpad Access, Digital Collectibles, and grant access to the metaverse."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://musing-goodall-6b0c08.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bnbStake}
              isBlog={false}
              title="BNB Stake"
              description="Plans return are float and daily profit for a new deposit will increase by 0.5% daily.Minimum deposit amount is 0.05 BNB and you can have multiple deposits.Earnings every moment, withdraw instantly any time (if you did not use capitalization of interest in Plan 4, Plan 5 and Plan 6)."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://hardcore-bhaskara-f04579.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={falafel}
              isBlog={false}
              title="FALAFEL"
              description="Stable & Profitable Yield Farming Dapp on Binance Smart Chain Stake Falafel-LP And Earn it with A Higher Profit Range."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://dreamy-albattani-865b06.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
