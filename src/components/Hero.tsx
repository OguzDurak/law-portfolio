import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 120px 0 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
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
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: #ffd700;
  color: #1e3c72;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #fff;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #1e3c72;
    transform: translateY(-3px);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffd700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.8;
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>
          Hukuki Çözümleriniz İçin
          <br />
          <span style={{ color: '#ffd700' }}>Güvenilir Adres</span>
        </HeroTitle>
        
        <HeroSubtitle>
          20 yılı aşkın deneyimimizle, hukuki sorunlarınızı çözmek için buradayız. 
          Uzman ekibimizle size en iyi hizmeti sunuyoruz.
        </HeroSubtitle>
        
        <HeroButtons>
          <PrimaryButton>
            Ücretsiz Danışmanlık
          </PrimaryButton>
          <SecondaryButton>
            Hizmetlerimizi İnceleyin
          </SecondaryButton>
        </HeroButtons>
        
        <StatsContainer>
          <StatItem>
            <StatNumber>500+</StatNumber>
            <StatLabel>Başarılı Dava</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>20+</StatNumber>
            <StatLabel>Yıl Deneyim</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>1000+</StatNumber>
            <StatLabel>Mutlu Müvekkil</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Hukuki Destek</StatLabel>
          </StatItem>
        </StatsContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 