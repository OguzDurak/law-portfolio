import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(45, 100, 155, 0.9) 0%, rgba(52, 73, 94, 0.9) 100%), 
              url('/hero_background.png') center/cover no-repeat;
  color: white;
  padding: 140px 0 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
    animation: shimmer 3s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
  animation: fadeInUp 1s ease-out;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3rem;
  opacity: 0.95;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 1s ease-out 0.3s both;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.6s both;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
  color: #2c3e50;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: linear-gradient(135deg, #bdc3c7 0%, #ecf0f1 100%);
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    
    &::before {
      left: 100%;
    }
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: white;
    transition: left 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: #2c3e50;
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    
    &::before {
      left: 0;
    }
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 5rem;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.9s both;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #95a5a6;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 500;
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>
          Hukuki Sorularınız İçin
          <br />
          <span style={{ color: '#95a5a6' }}>Uzman Çözümler</span>
        </HeroTitle>
        
        <HeroSubtitle>
          10+ yılı aşkın deneyimimizle, hukuki sorunlarınızı çözmek için buradayız. 
          Uzman ekibimizle size en iyi hizmeti sunuyoruz.
        </HeroSubtitle>
        
        <HeroButtons>
          <PrimaryButton>
            Danışmanlık Al
          </PrimaryButton>
          <SecondaryButton>
            Hizmetlerimizi İnceleyin
          </SecondaryButton>
        </HeroButtons>
        
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 