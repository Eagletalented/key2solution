import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import Ethereum from "../../Assets/ethereum.png";
import Hyperledger from "../../Assets/hyperledger.png";
import Multichain from "../../Assets/multichain.png";
import AzureBlockchain from "../../Assets/azure-blockchain.png";
import Corda from "../../Assets/corda.png";
import OpenChain from "../../Assets/open-chain.png";
import Startis from "../../Assets/startis.png";
import Stellar from "../../Assets/stellar.png";

function TechExperties() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <Image fluid src={Ethereum} alt="ethereum" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Image fluid src={Hyperledger} alt="ethereum" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Image fluid src={Multichain} alt="ethereum" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Image fluid src={AzureBlockchain} alt="ethereum" />
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <Image fluid  src={Corda} alt="ethereum" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Image fluid src={OpenChain} alt="ethereum" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <Image fluid src={Startis} alt="ethereum" />
        </Col>
        <Col xs={4} md={2}  className="tech-icons">
          <Image src={Stellar}  alt="ethereum" />
        </Col>
      </Row>
    </>
  );
}

export default TechExperties;
