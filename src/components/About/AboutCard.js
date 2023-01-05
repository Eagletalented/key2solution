import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Talha Khan </span>
            from <span className="purple"> United Arab Emirates.</span>
            <br />I am a MERN & Solidity DEVELOPER in Arbitech Solution.
            <br />
            <br />
            My area of expertise ar:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Coin Listing
            </li>
            <li className="about-activity">
              <ImPointRight /> Coin Depolyment
            </li>
            <li className="about-activity">
              <ImPointRight /> Swap Platform
            </li>
            <li className="about-activity">
              <ImPointRight /> Airdrop Services
            </li>
            <li className="about-activity">
              <ImPointRight /> Centerlize Exchange
            </li>
            <li className="about-activity">
              <ImPointRight /> DEX Exchange
            </li>
            <li className="about-activity">
              <ImPointRight /> NFT Marketplace
            </li>
            <li className="about-activity">
              <ImPointRight /> Play to Earn Gaming Platform
            </li>
            <li className="about-activity">
              <ImPointRight /> CMC & CG Listing
            </li>
            <li className="about-activity">
              <ImPointRight /> Exchange Listing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Talha_khan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
