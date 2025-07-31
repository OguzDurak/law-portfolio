import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 120px 0 80px;
  background: #f8f9fa;
  font-family: 'Poppins', sans-serif;
`;

const ServicesContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ServicesTitle = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ServicesSubtitle = styled.p`
  font-size: 1.3rem;
  color: #7f8c8d;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const ServiceTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    color: #34495e;
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    
    &::before {
      content: '✓';
      color: #95a5a6;
      font-weight: bold;
    }
  }
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 4rem 0;
  border-radius: 20px;
  text-align: center;
  margin-top: 4rem;
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const ContactText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const ContactButton = styled.button`
  background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
  color: #2c3e50;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #bdc3c7 0%, #ecf0f1 100%);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <ServicesContent>
        <ServicesHeader>
          <ServicesTitle>Hizmetlerimiz</ServicesTitle>
          <ServicesSubtitle>
            Geniş hukuki deneyimimizle, her alanda profesyonel çözümler sunuyoruz. 
            Müvekkillerimizin haklarını en etkili şekilde korumak için çalışıyoruz.
          </ServicesSubtitle>
        </ServicesHeader>

        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>👨‍👩‍👧‍👦</ServiceIcon>
            <ServiceTitle>Aile Hukuku</ServiceTitle>
            <ServiceDescription>
              Boşanma, nafaka, velayet, mal paylaşımı ve aile içi anlaşmazlıklar konularında 
              uzman hukuki danışmanlık ve dava takibi hizmetleri.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Boşanma Davaları</li>
              <li>Nafaka İşlemleri</li>
              <li>Velayet Davaları</li>
              <li>Mal Paylaşımı</li>
              <li>Aile İçi Anlaşmazlıklar</li>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>💼</ServiceIcon>
            <ServiceTitle>İş Hukuku</ServiceTitle>
            <ServiceDescription>
              İşçi-işveren uyuşmazlıkları, iş kazaları, sosyal güvenlik ve iş hukuku 
              alanlarında kapsamlı hukuki destek.
            </ServiceDescription>
            <ServiceFeatures>
              <li>İşçi-İşveren Uyuşmazlıkları</li>
              <li>İş Kazası Davaları</li>
              <li>Sosyal Güvenlik Hukuku</li>
              <li>İş Sözleşmeleri</li>
              <li>Toplu İş Hukuku</li>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🏢</ServiceIcon>
            <ServiceTitle>Ticaret Hukuku</ServiceTitle>
            <ServiceDescription>
              Şirket kuruluşu, ticari sözleşmeler, ticari uyuşmazlıklar ve 
              ticaret hukuku alanlarında profesyonel hizmet.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Şirket Kuruluşu</li>
              <li>Ticari Sözleşmeler</li>
              <li>Ticari Uyuşmazlıklar</li>
              <li>Şirket Birleşmeleri</li>
              <li>Ticaret Hukuku Danışmanlığı</li>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>⚖️</ServiceIcon>
            <ServiceTitle>Ceza Hukuku</ServiceTitle>
            <ServiceDescription>
              Ceza davalarında savunma, şikayet ve ceza muhakemesi hukuku 
              alanlarında uzman hukuki danışmanlık.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Ceza Davası Savunması</li>
              <li>Şikayet İşlemleri</li>
              <li>Ceza Muhakemesi Hukuku</li>
              <li>Özel Ceza Davaları</li>
              <li>Ceza Hukuku Danışmanlığı</li>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🏠</ServiceIcon>
            <ServiceTitle>Gayrimenkul Hukuku</ServiceTitle>
            <ServiceDescription>
              Ev sahibi-kiracı uyuşmazlıkları, kat mülkiyeti, imar hukuku ve 
              gayrimenkul hukuku alanlarında hizmet.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Ev Sahibi-Kiracı Davaları</li>
              <li>Kat Mülkiyeti İşlemleri</li>
              <li>İmar Hukuku</li>
              <li>Gayrimenkul Sözleşmeleri</li>
              <li>Gayrimenkul Hukuku Danışmanlığı</li>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>📜</ServiceIcon>
            <ServiceTitle>Miras Hukuku</ServiceTitle>
            <ServiceDescription>
              Miras bırakma, mirasçılık, miras paylaşımı ve miras hukuku 
              alanlarında kapsamlı hukuki danışmanlık.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Miras Bırakma İşlemleri</li>
              <li>Mirasçılık Davaları</li>
              <li>Miras Paylaşımı</li>
              <li>Vasiyetname İşlemleri</li>
              <li>Miras Hukuku Danışmanlığı</li>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>🤝</ServiceIcon>
            <ServiceTitle>Borç Anlaşması</ServiceTitle>
            <ServiceDescription>
              Borç alacak uyuşmazlıkları, borç anlaşmaları ve ödeme planları 
              konularında hukuki danışmanlık ve dava takibi.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Borç-Alacak Davaları</li>
              <li>Borç Anlaşmaları</li>
              <li>Ödeme Planları</li>
              <li>İcra Takibi</li>
              <li>Borç Hukuku Danışmanlığı</li>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>💡</ServiceIcon>
            <ServiceTitle>Fikri Mülkiyet</ServiceTitle>
            <ServiceDescription>
              Telif hakları, patent, marka tescili ve fikri mülkiyet hukuku 
              alanlarında uzman hukuki danışmanlık.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Telif Hakları Davaları</li>
              <li>Patent İşlemleri</li>
              <li>Marka Tescili</li>
              <li>Fikri Mülkiyet Koruma</li>
              <li>Fikri Mülkiyet Danışmanlığı</li>
            </ServiceFeatures>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>📋</ServiceIcon>
            <ServiceTitle>Hukuki Danışmanlık</ServiceTitle>
            <ServiceDescription>
              Genel hukuki danışmanlık, sözleşme hazırlama ve hukuki görüş 
              alma konularında profesyonel hizmet.
            </ServiceDescription>
            <ServiceFeatures>
              <li>Genel Hukuki Danışmanlık</li>
              <li>Sözleşme Hazırlama</li>
              <li>Hukuki Görüş Alma</li>
              <li>Hukuki Mütalaa</li>
              <li>Hukuki Rapor Hazırlama</li>
            </ServiceFeatures>
          </ServiceCard>
        </ServicesGrid>

        <ContactSection>
          <ContactContent>
            <ContactTitle>Hukuki Sorunlarınız İçin Bizimle İletişime Geçin</ContactTitle>
            <ContactText>
              Hangi konuda olursa olsun, hukuki sorunlarınızı çözmek için buradayız. 
              Ücretsiz ilk danışmanlık için hemen iletişime geçin.
            </ContactText>
            <ContactButton>
              Ücretsiz Danışmanlık Al
            </ContactButton>
          </ContactContent>
        </ContactSection>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services; 