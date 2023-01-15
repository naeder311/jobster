import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Small batch air plant humblebrag vaporware activated charcoal irony
            waistcoat, franzen post-ironic tattooed banjo intelligentsia. Next
            level flexitarian affogato kale chips, aesthetic kogi keffiyeh blue
            bottle heirloom chia kombucha. Photo booth +1 typewriter deep v
            heirloom, mustache yr marfa. Vice microdosing offal biodiesel
            forage, echo park polaroid praxis gentrify swag raw denim bodega
            boys sus ethical DSA. Live-edge chambray scenester sartorial shabby
            chic hella, squid edison bulb af everyday carry. Irony food truck
            small batch cred vinyl post-ironic ramps. Mlkshk truffaut hoodie art
            party.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
