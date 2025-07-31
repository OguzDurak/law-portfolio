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
  width: 45px;
  height: 45px;
  background: rgba(149, 165, 166, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #95a5a6;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
    transition: fill 0.3s ease;
  }
  
  /* Facebook hover */
  &[aria-label="Facebook"]:hover {
    background: #1877f2;
    svg {
      fill: white;
    }
  }
  
  /* Twitter hover */
  &[aria-label="Twitter"]:hover {
    background: #1da1f2;
    svg {
      fill: white;
    }
  }
  
  /* LinkedIn hover */
  &[aria-label="LinkedIn"]:hover {
    background: #0077b5;
    svg {
      fill: white;
    }
  }
  
  /* Instagram hover */
  &[aria-label="Instagram"]:hover {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    svg {
      fill: white;
    }
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
              <svg viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
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
          <FooterLink to="/danismanlik">Danışmanlık</FooterLink>
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