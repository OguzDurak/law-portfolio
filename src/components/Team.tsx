import React from 'react';
import styled from 'styled-components';

const TeamContainer = styled.div`
  padding: 120px 0 80px;
  background: #f8f9fa;
  font-family: 'Poppins', sans-serif;
`;

const TeamContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const TeamTitle = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TeamSubtitle = styled.p`
  font-size: 1.3rem;
  color: #7f8c8d;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.12);
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(44, 62, 80, 0.18);
  }
`;

const TeamPhoto = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  box-shadow: 0 4px 20px rgba(44, 62, 80, 0.15);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const TeamPosition = styled.p`
  font-size: 1.1rem;
  color: #95a5a6;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TeamDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TeamStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #ecf0f1;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #7f8c8d;
`;

const ExpertiseSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.12);
  margin-bottom: 4rem;
`;

const ExpertiseTitle = styled.h2`
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
  text-align: center;
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ExpertiseItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(44, 62, 80, 0.15);
  }
`;

const ExpertiseIcon = styled.div`
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
`;

const ExpertiseContent = styled.div`
  flex: 1;
`;

const ExpertiseName = styled.h4`
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
`;

const ExpertiseDescription = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const Team: React.FC = () => {
  return (
    <TeamContainer>
      <TeamContent>
        <TeamHeader>
          <TeamTitle>Ekibimiz</TeamTitle>
          <TeamSubtitle>
            Deneyimli ve uzman avukatlarımızla hukuki sorunlarınızı çözüyoruz. 
            Her birimiz kendi alanında uzmanlaşmış profesyoneller olarak hizmet veriyoruz.
          </TeamSubtitle>
        </TeamHeader>

        <TeamGrid>
          <TeamCard>
            <TeamPhoto>
              <img src="/gulumser.png" alt="Av. Gülümser Bilgiç" />
            </TeamPhoto>
            <TeamName>Av. Gülümser Bilgiç</TeamName>
            <TeamPosition>Kurucu Ortak & Baş Avukat</TeamPosition>
            <TeamDescription>
            Borç Anlaşması, Ev Sahibi ve Kiracı Davaları, Fikri Mülkiyet Davaları, Ceza Davası Savunma Avukatı
            </TeamDescription>
          </TeamCard>

          <TeamCard>
            <TeamPhoto>
              <img src="/duygu.png" alt="Av. Duygu Gedikoğlu" />
            </TeamPhoto>
            <TeamName>Av. Duygu Gedikoğlu</TeamName>
            <TeamPosition>Avukat</TeamPosition>
            <TeamDescription>
            Gedikoğlu Diri Hukuk Bürosu Kurucusu ve İş Ortağımız
            </TeamDescription>
            <TeamStats>
           
            </TeamStats>
          </TeamCard>

          <TeamCard>
            <TeamPhoto>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="#95a5a6"/>
                <ellipse cx="30" cy="25" rx="12" ry="13" fill="#fff"/>
                <ellipse cx="30" cy="48" rx="18" ry="10" fill="#fff"/>
              </svg>
            </TeamPhoto>
            <TeamName>Av. Ali Demir</TeamName>
            <TeamPosition>Gayrimenkul Hukuku Uzmanı</TeamPosition>
            <TeamDescription>
              Gayrimenkul hukuku ve kat mülkiyeti konularında uzman. 
              Emlak projeleri ve gayrimenkul uyuşmazlıklarında deneyimli.
            </TeamDescription>
            <TeamStats>
              
            </TeamStats>
          </TeamCard>

          <TeamCard>
            <TeamPhoto>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="#95a5a6"/>
                <ellipse cx="30" cy="25" rx="12" ry="13" fill="#fff"/>
                <ellipse cx="30" cy="48" rx="18" ry="10" fill="#fff"/>
              </svg>
            </TeamPhoto>
            <TeamName>Av. Fatma Kaya</TeamName>
            <TeamPosition>Ceza Hukuku Uzmanı</TeamPosition>
            <TeamDescription>
              Ceza hukuku ve ceza muhakemesi hukuku alanlarında uzman. 
              Savunma hakkının en iyi şekilde kullanılması için çalışıyor.
            </TeamDescription>
            <TeamStats>
              
            </TeamStats>
          </TeamCard>
        </TeamGrid>

        <ExpertiseSection>
          <ExpertiseTitle>Uzmanlık Alanlarımız</ExpertiseTitle>
          <ExpertiseGrid>
            <ExpertiseItem>
              <ExpertiseIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </ExpertiseIcon>
              <ExpertiseContent>
                <ExpertiseName>Aile Hukuku</ExpertiseName>
                <ExpertiseDescription>Boşanma, nafaka, velayet ve miras davaları</ExpertiseDescription>
              </ExpertiseContent>
            </ExpertiseItem>

            <ExpertiseItem>
              <ExpertiseIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </ExpertiseIcon>
              <ExpertiseContent>
                <ExpertiseName>İş Hukuku</ExpertiseName>
                <ExpertiseDescription>İşçi-işveren uyuşmazlıkları ve sosyal güvenlik</ExpertiseDescription>
              </ExpertiseContent>
            </ExpertiseItem>

            <ExpertiseItem>
              <ExpertiseIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </ExpertiseIcon>
              <ExpertiseContent>
                <ExpertiseName>Ticaret Hukuku</ExpertiseName>
                <ExpertiseDescription>Şirketler hukuku ve ticari uyuşmazlıklar</ExpertiseDescription>
              </ExpertiseContent>
            </ExpertiseItem>

            <ExpertiseItem>
              <ExpertiseIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </ExpertiseIcon>
              <ExpertiseContent>
                <ExpertiseName>Gayrimenkul Hukuku</ExpertiseName>
                <ExpertiseDescription>Emlak hukuku ve kat mülkiyeti davaları</ExpertiseDescription>
              </ExpertiseContent>
            </ExpertiseItem>

            <ExpertiseItem>
              <ExpertiseIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </ExpertiseIcon>
              <ExpertiseContent>
                <ExpertiseName>Ceza Hukuku</ExpertiseName>
                <ExpertiseDescription>Ceza davaları ve savunma hizmetleri</ExpertiseDescription>
              </ExpertiseContent>
            </ExpertiseItem>

            <ExpertiseItem>
              <ExpertiseIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </ExpertiseIcon>
              <ExpertiseContent>
                <ExpertiseName>İdari Hukuk</ExpertiseName>
                <ExpertiseDescription>İdari işlemler ve idari yargı davaları</ExpertiseDescription>
              </ExpertiseContent>
            </ExpertiseItem>

            <ExpertiseItem>
              <ExpertiseIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </ExpertiseIcon>
              <ExpertiseContent>
                <ExpertiseName>Fikri Mülkiyet</ExpertiseName>
                <ExpertiseDescription>Patent, marka, telif hakkı ve ticari sır davaları</ExpertiseDescription>
              </ExpertiseContent>
            </ExpertiseItem>

            <ExpertiseItem>
              <ExpertiseIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </ExpertiseIcon>
              <ExpertiseContent>
                <ExpertiseName>Borç Anlaşması</ExpertiseName>
                <ExpertiseDescription>Alacak davaları, sözleşme uyuşmazlıkları ve borç takibi</ExpertiseDescription>
              </ExpertiseContent>
            </ExpertiseItem>
          </ExpertiseGrid>
        </ExpertiseSection>
      </TeamContent>
    </TeamContainer>
  );
};

export default Team; 