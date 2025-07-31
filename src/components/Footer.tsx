import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 4rem 0 2rem;
  position: relative;
  font-family: 'Poppins', sans-serif;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #95a5a6, transparent);
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #95a5a6;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 30px;
      height: 2px;
      background: #95a5a6;
    }
  }
`;

const FooterLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  display: block;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  
  &:hover {
    color: #95a5a6;
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 1rem;
  
  p {
    color: #ecf0f1;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(149, 165, 166, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
  
  &:hover {
    background: #95a5a6;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const NewsletterSection = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem 0;
  border-top: 1px solid rgba(149, 165, 166, 0.3);
  margin-top: 2rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 1.5rem auto 0;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NewsletterInput = styled.input`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  min-width: 300px;
  
  &::placeholder {
    color: #bdc3c7;
  }
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    min-width: 250px;
  }
`;

const NewsletterButton = styled.button`
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
  color: #2c3e50;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #bdc3c7 0%, #ecf0f1 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(149, 165, 166, 0.3);
  padding-top: 2rem;
  text-align: center;
  color: #bdc3c7;
  font-size: 0.9rem;
`;

const Copyright = styled.div`
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  
  a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #95a5a6;
    }
  }
`;

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter form işlemi burada yapılacak
    console.log('Newsletter form submitted');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Bilgiç Avukatlık</h3>
          <p style={{ color: '#ecf0f1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            10+ yıllık deneyimimizle, hukuki sorunlarınızı çözmek için buradayız. 
            Uzman ekibimizle size en iyi hizmeti sunuyoruz.
          </p>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              📘
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              🐦
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              💼
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              📷
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Hizmetlerimiz</h3>
          <FooterLink to="/hizmetler">Aile Hukuku</FooterLink>
          <FooterLink to="/hizmetler">İş Hukuku</FooterLink>
          <FooterLink to="/hizmetler">Ticaret Hukuku</FooterLink>
          <FooterLink to="/hizmetler">Ceza Hukuku</FooterLink>
          <FooterLink to="/hizmetler">Gayrimenkul Hukuku</FooterLink>
          <FooterLink to="/hizmetler">Miras Hukuku</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Hızlı Linkler</h3>
          <FooterLink to="/">Ana Sayfa</FooterLink>
          <FooterLink to="/hakkimizda">Hakkımızda</FooterLink>
          <FooterLink to="/ekip">Ekibimiz</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/iletisim">İletişim</FooterLink>
          <FooterLink to="/danismanlik">Ücretsiz Danışmanlık</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>İletişim Bilgileri</h3>
          <ContactInfo>
            <p>📍 Adres: Ümmühan, Tok Cd. No:7/3, 17860 Ayvacık, Çanakkale</p>
            <p>📞 Telefon: +90 (507) 733 44 94</p>
            <p>📧 E-posta: info@bilgicavukatlik.com</p>
            <p>🕒 Çalışma Saatleri: Pazartesi - Cuma 09:00 - 17:00</p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <NewsletterSection>
        <h3>Hukuki Güncellemeler İçin Abone Olun</h3>
        <p style={{ color: '#ecf0f1', marginBottom: '1rem' }}>
          En son hukuki gelişmeler ve yasal değişiklikler hakkında bilgi almak için abone olun.
        </p>
        <NewsletterForm onSubmit={handleNewsletterSubmit}>
          <NewsletterInput 
            type="email" 
            placeholder="E-posta adresinizi girin"
            required
          />
          <NewsletterButton type="submit">
            Abone Ol
          </NewsletterButton>
        </NewsletterForm>
      </NewsletterSection>

      <FooterBottom>
        <Copyright>
          © 2024 Bilgiç Avukatlık ve Hukuk Bürosu. Tüm hakları saklıdır.
        </Copyright>
        <FooterLinks>
          <Link to="/gizlilik">Gizlilik Politikası</Link>
          <Link to="/kullanim-kosullari">Kullanım Koşulları</Link>
          <Link to="/cerez-politikasi">Çerez Politikası</Link>
          <Link to="/kvkk">KVKK</Link>
        </FooterLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 