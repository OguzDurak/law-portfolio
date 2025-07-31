import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 120px 0 80px;
  background: #f8f9fa;
  font-family: 'Poppins', sans-serif;
`;

const ContactContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactTitle = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactSubtitle = styled.p`
  font-size: 1.3rem;
  color: #7f8c8d;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.12);
`;

const FormTitle = styled.h2`
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #2c3e50;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid #ecf0f1;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #95a5a6;
    box-shadow: 0 0 0 3px rgba(149, 165, 166, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid #ecf0f1;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #95a5a6;
    box-shadow: 0 0 0 3px rgba(149, 165, 166, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
  color: #2c3e50;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    background: linear-gradient(135deg, #bdc3c7 0%, #ecf0f1 100%);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.12);
`;

const InfoTitle = styled.h2`
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(44, 62, 80, 0.15);
  }
`;

const InfoIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h3`
  color: #2c3e50;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const InfoText = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
`;

const AddressLink = styled.a`
  color: #7f8c8d;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #95a5a6;
    text-decoration: underline;
  }
`;

const MapSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.12);
  margin-bottom: 4rem;
`;

const MapTitle = styled.h2`
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
  text-align: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(44, 62, 80, 0.15);
`;

const SocialSection = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.12);
`;

const SocialTitle = styled.h2`
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
  text-align: center;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const SocialCard = styled.a.attrs({ className: 'social-card' })`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(44, 62, 80, 0.15);
    background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
    color: white;
  }
`;

const SocialIcon = styled.div<{ brand?: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  margin-right: 1rem;
  flex-shrink: 0;
  transition: background 0.3s, color 0.3s;

  /* Tüm sosyal ikonlar için soluk görünüm */
  svg {
    opacity: 0.6;
    filter: grayscale(0.5) brightness(1.2);
    transition: opacity 0.3s, filter 0.3s;
  }

  /* Hover'da orijinal renk */
  .social-card:hover & svg {
    opacity: 1;
    filter: none;
  }

  ${props => props.brand === 'facebook' && `
    .social-card:hover & {
      background: #1877F3;
      color: #fff;
    }
  `}
  ${props => props.brand === 'twitter' && `
    .social-card:hover & {
      background: #1DA1F2;
      color: #fff;
    }
  `}
  ${props => props.brand === 'linkedin' && `
    .social-card:hover & {
      background: #0077B5;
      color: #fff;
    }
  `}
  ${props => props.brand === 'instagram' && `
    .social-card:hover & {
      background: #E4405F;
      color: #fff;
    }
  `}
`;

const SocialContent = styled.div`
  flex: 1;
`;

const SocialName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const SocialHandle = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
    alert('Mesajınız başarıyla gönderildi!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <ContactContent>
        <ContactHeader>
          <ContactTitle>İletişim</ContactTitle>
          <ContactSubtitle>
            Hukuki sorunlarınız için bizimle iletişime geçin. 
            Uzman ekibimiz size en kısa sürede dönüş yapacaktır.
          </ContactSubtitle>
        </ContactHeader>

        <ContactGrid>
          <ContactForm>
            <FormTitle>Mesaj Gönderin</FormTitle>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Ad Soyad *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">E-posta *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="subject">Konu *</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Mesajınız *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit">
                Mesaj Gönder
              </SubmitButton>
            </form>
          </ContactForm>

          <ContactInfo>
            <InfoTitle>İletişim Bilgileri</InfoTitle>
            
            <InfoItem>
              <InfoIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Adres</InfoLabel>
                <AddressLink 
                  href="https://www.google.com/maps?q=Ümmühan,+Tok+Cd.+No:7/3,+17860+Ayvacık,+Çanakkale,+Türkiye" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ümmühan, Tok Caddesi No:7/3<br />
                  17860 Ayvacık, Çanakkale<br />
                  Türkiye
                </AddressLink>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Telefon</InfoLabel>
                <InfoText>
                  +90 (507) 733 44 94
                </InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoLabel>E-posta</InfoLabel>
                <InfoText>
                  info@bilgicavukatlik.com<br />
                  danismanlik@bilgicavukatlik.com
                </InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Çalışma Saatleri</InfoLabel>
                <InfoText>
                  Pazartesi - Cuma: 09:00 - 17:00<br />
                  Cumartesi - Pazar: Kapalı
                </InfoText>
              </InfoContent>
            </InfoItem>
          </ContactInfo>
        </ContactGrid>

        <MapSection>
          <MapTitle>Ofisimizin Konumu</MapTitle>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps?q=%C3%9Cmm%C3%BChan,+Tok+Cd.+No:7/3,+17860+Ayvac%C4%B1k,+%C3%87anakkale,+T%C3%BCrkiye&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bilgiç Avukatlık Ofisi - Ayvacık, Çanakkale"
            ></iframe>
          </MapContainer>
        </MapSection>

        <SocialSection>
          <SocialTitle>Sosyal Medyada Bizi Takip Edin</SocialTitle>
          <SocialGrid>
            <SocialCard href="#" target="_blank">
              <SocialIcon brand="facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialIcon>
              <SocialContent>
                <SocialName>Facebook</SocialName>
              </SocialContent>
            </SocialCard>
            
            <SocialCard href="#" target="_blank">
              <SocialIcon brand="twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </SocialIcon>
              <SocialContent>
                <SocialName>X (Twitter)</SocialName>
              </SocialContent>
            </SocialCard>
            
            <SocialCard href="#" target="_blank">
              <SocialIcon brand="linkedin">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialIcon>
              <SocialContent>
                <SocialName>LinkedIn</SocialName>
              </SocialContent>
            </SocialCard>
            
            <SocialCard href="#" target="_blank">
              <SocialIcon brand="instagram">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="ig1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#fdf497"/>
                      <stop offset="50%" stop-color="#fd5949"/>
                      <stop offset="100%" stop-color="#d6249f"/>
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig1)"/>
                  <circle cx="12" cy="12" r="5" fill="white"/>
                  <circle cx="12" cy="12" r="3.5" fill="url(#ig1)"/>
                  <circle cx="17.2" cy="6.8" r="1.2" fill="white"/>
                </svg>
              </SocialIcon>
              <SocialContent>
                <SocialName>Instagram</SocialName>
              </SocialContent>
            </SocialCard>
          </SocialGrid>
        </SocialSection>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact; 