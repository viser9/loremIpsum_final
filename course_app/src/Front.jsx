import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import './frontApp.css';

function Front() {
  const sections = [
    {
      title: 'Transparent Supply Chains',
      content: 'Discover the stories behind your favorite products...',
    },
    {
      title: 'Empowering Small Sustainable Businesses',
      content: 'Uncover hidden gems and support artisans...',
    },
    {
      title: 'Collaborative Sustainability Communities',
      content: 'Join a vibrant community of change-makers...',
    },
  ];
  return (
    <div className="app-container">
      <section>
        <div className="nav_left">
          <div className="nav-link" style={{display:'flex',marginInline:"auto"}}>
            <a href='/'>Home</a>
            <a href='/courses'>Market Place</a>
            <a href='https://rougedoll.000webhostapp.com/index.php'>Forum</a>
            <a href='/about'>About</a>
          </div>
        </div>
      </section>
      <div className="parallax-container">
        <Parallax pages={5}>

          <ParallaxLayer
            offset={0}
            factor={1}
            style={{
              backgroundImage: 'url(https://wallpaperaccess.com/full/3819108.jpg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'darken',
              display: 'flex',
              justifyContent: 'space-between', // Arrange the two containers
            }}
          >
            {/* First Container */}
            <div className="flex-container">
              <div className="flex-content">
                <h1>Welcome to Our Sustainable Platform</h1>
                <p>Your gateway to responsible commerce and collaboration.</p>
              </div>
            </div>

            {/* Second Container */}
            <div className="flex-container">
              <div className="flex-content">
                <h2 className="interactive-text" style={{color:"black",fontSize:"30px"}}>Explore Our Initiatives</h2>
                <p>Discover innovative solutions for a better future.</p>
              </div>
            </div>
          </ParallaxLayer>

          <div className="layer-container">          
            <ParallaxLayer offset={1} factor={2} speed={0.1} className='layer'
            style={{
              backgroundImage:'url(https://i.pinimg.com/564x/d8/59/14/d85914ac28c0434fcf427f1ae08a677a.jpg)',
              backgroundSize: 'cover',
              backdropFilter: 'blur(20px)',
            }}>
              <div className="section-content">
                <h2 className="interactive-text" style={{fontSize:"45px"}}>Empowering Small Sustainable Businesses</h2>
                <p style={{color:"white"}}>Uncover hidden gems and support artisans...</p>
              </div>
            </ParallaxLayer>
              <ParallaxLayer offset={3} speed={0.1} factor={2} className='layer'
              style={{
                backgroundImage:'url(https://i.pinimg.com/originals/3d/c5/b3/3dc5b36b964eafcfd58fe3685d6c7ff9.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'bottom',
                placeContent:'bottom',
                placeItems:'center',
              }}>
                <div className="section-content">
                  <h2 className="interactive-text" >Collaborative Sustainable communities</h2>
                  <p>Join a vibrant community of change makers...</p>
                </div>
              </ParallaxLayer>
          </div>
        </Parallax>
      </div>
      <div class="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Front;
