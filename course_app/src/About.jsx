import React from 'react';
import './About.css';
import Nav from './components/nav';

function About() {
return (
  <div>

<head>
    <title>Mindful Market - About Us</title>
</head>
<body>
    <header>
        <Nav />
    </header>
    <section class="about-section">
        <div class="container">
            <h1>About Mindful Market</h1>
            <p>Welcome to Mindful Market, a purpose-driven online platform that aims to reshape the way we shop and interact with products. Our vision is to create a global community of conscious consumers, sustainable businesses, and change-makers, all united by the common goal of driving positive impact.</p><br/>
            <p>At Mindful Market, we understand that every purchase we make can have far-reaching consequences, influencing people's lives and our planet's health. That's why we've built a platform that goes beyond traditional online marketplaces. We're on a mission to empower individuals like you to make informed choices and contribute to a better world.</p><br/>
            <p>Our curated marketplace brings together products from small sustainable businesses that prioritize ethical practices, fair trade, and environmental responsibility. By shopping here, you're not just buying a product – you're supporting artisans, craftsmen, and entrepreneurs who are committed to creating a positive impact on society.</p><br/>
            <p>But we're more than just a marketplace. We're a community-driven platform that believes in the power of collaboration and shared knowledge. Our integrated forum provides a space for discussions, networking, and learning. Whether you're an investor, a small business owner, or simply someone who cares about sustainability, you'll find a place to connect and engage with like-minded individuals.</p><br/>
        </div>
    </section>
    <section class="problem-statements">
        <div class="container">
        <p>As we strive to address global challenges, we're guided by the United Nations Sustainable Development Goals. We're passionate about fostering transparency, economic growth, partnerships, and inclusivity – all while leveraging the potential of technology for positive change.</p>< br />
            <h2>Problem Statements</h2>
            <ul>
              <li><h4>Lack of Transparency in Supply Chains</h4></li>
              <li>   <h4>Lack of Transparency in Supply Chains</h4></li>
              <li><h4>Underrepresentation of Small Sustainable Businesses </h4></li>
              <li><h4>Digital Divide and Accessibility Challenges </h4></li>
            </ul>
            
        </div>
    </section>
    <section class="our-approach">
        <div class="container">
            <h2>Our Approach</h2>
            <p>We have designed Mindful Market to address these challenges...</p>
        </div>
    </section>
    <footer>
    <p>Join us on this transformative journey as we build a more mindful and sustainable world, one purchase and one conversation at a time.</p>
    </footer>
</body>

  </div>
)
}

export default About;

