import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  font-family: 'Poppins', sans-serif;
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '⚖️';
    font-size: 1.5rem;
  }
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
  
  span {
    color: #95a5a6;
    font-weight: 300;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(44, 62, 80, 0.95);
    backdrop-filter: blur(10px);
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    gap: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #95a5a6;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #95a5a6;
    
    &::after {
      width: 100%;
    }
  }
`;

const ContactButton = styled.button`
  background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
  color: #2c3e50;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #bdc3c7 0%, #ecf0f1 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #95a5a6;
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <LogoContainer>
          <LogoIcon />
          <Logo>
            Bilgiç Avukatlık ve Hukuk Bürosu
          </Logo>
        </LogoContainer>
        
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Ana Sayfa
          </NavLink>
          <NavLink to="/hakkimizda" onClick={() => setIsMenuOpen(false)}>
            Hakkımızda
          </NavLink>
          <NavLink to="/hizmetler" onClick={() => setIsMenuOpen(false)}>
            Hizmetler
          </NavLink>
          <NavLink to="/ekip" onClick={() => setIsMenuOpen(false)}>
            Ekibimiz
          </NavLink>
          <NavLink to="/iletisim" onClick={() => setIsMenuOpen(false)}>
            İletişim
          </NavLink>
          <ContactButton 
            onClick={() => {
              setIsMenuOpen(false);
                             const phoneNumber = "905317209425"; // +90 5317209425
              const message = "Merhaba, hukuki danışmanlık almak istiyorum.";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
           Danışmanlık Al
          </ContactButton>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 