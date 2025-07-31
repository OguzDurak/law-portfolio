import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 120px 0 80px;
  background: #f8f9fa;
  font-family: 'Poppins', sans-serif;
`;

const AboutContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AboutSubtitle = styled.p`
  font-size: 1.3rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutSection = styled.div`
  h2 {
    color: #2c3e50;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  p {
    color: #34495e;
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const StatsSection = styled.div`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 4rem 0;
  margin: 4rem 0;
  border-radius: 20px;
`;

const StatsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const StatsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
`;

const StatItem = styled.div`
  text-align: center;
  
  .stat-number {
    font-size: 3rem;
    font-weight: bold;
    color: #95a5a6;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const ValuesSection = styled.div`
  padding: 4rem 0;
`;

const ValuesTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h3 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  p {
    color: #7f8c8d;
    line-height: 1.6;
  }
`;

const TeamSection = styled.div`
  padding: 4rem 0;
  background: white;
`;

const TeamTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 15px;
  background: #f8f9fa;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .team-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, #95a5a6 0%, #bdc3c7 100%);
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: white;
  }
  
  h3 {
    color: #2c3e50;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  
  .position {
    color: #95a5a6;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .description {
    color: #7f8c8d;
    line-height: 1.6;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutHeader>
          <AboutTitle>Hakkımızda</AboutTitle>
          <AboutSubtitle>
            10+ yıllık deneyimimizle, hukuki sorunlarınızı çözmek için buradayız. 
            Uzman ekibimizle size en iyi hizmeti sunuyoruz.
          </AboutSubtitle>
        </AboutHeader>

        <AboutGrid>
          <AboutSection>
            <h2 style={{textAlign: 'center'}}>Bizim Hikayemiz</h2>
            <p>
              2025 yılında Çanakkale'de Avukat Gülümser Bilgiç tarafından kurulan Bilgiç Avukatlık ve Hukuk Bürosu, 
              müvekkillerimize en yüksek kalitede hukuki hizmet sunma misyonuyla yola çıktı.
            </p>
            <p>
              Yıllar içinde edindiğimiz deneyim ve uzmanlıkla, aile hukukundan ticaret hukukuna, 
              ceza hukukundan iş hukukuna kadar geniş bir yelpazede hizmet vermekteyiz.
            </p>
            <p>
              Her müvekkilimizin hikayesini önemser, kişiselleştirilmiş çözümler sunarız. 
              Adaletin herkes için erişilebilir olması gerektiğine inanıyoruz.
            </p>
          </AboutSection>

          <AboutSection>
            <h2 style={{textAlign: 'center'}}>Misyonumuz</h2>
            <p>
              Müvekkillerimizin hukuki haklarını en etkili şekilde korumak ve 
              adalete erişimlerini kolaylaştırmak için çalışıyoruz.
            </p>
            <p>
              Şeffaf, dürüst ve profesyonel yaklaşımımızla, her davanın 
              başarıyla sonuçlandırılması için elimizden gelenin en iyisini yapıyoruz.
            </p>
            <p>
              Sürekli gelişim ve yenilikçi hukuki çözümlerle, 
              müvekkillerimizin güvenini kazanmaya devam ediyoruz.
            </p>
          </AboutSection>
        </AboutGrid>

     

        <ValuesSection>
          <ValuesTitle>Değerlerimiz</ValuesTitle>
          <ValuesGrid>
            <ValueCard>
              <h3>⚖️ Adalet</h3>
              <p>
                Her müvekkilimizin hakkını en etkili şekilde savunmak ve 
                adaletin yerini bulması için çalışıyoruz.
              </p>
            </ValueCard>
            <ValueCard>
              <h3>🤝 Güven</h3>
              <p>
                Müvekkillerimizle güvene dayalı ilişkiler kurar, 
                şeffaf ve dürüst iletişim sağlarız.
              </p>
            </ValueCard>
            <ValueCard>
              <h3>💼 Profesyonellik</h3>
              <p>
                En yüksek etik standartlarda çalışır, 
                sürekli gelişim ve yenilikçilikle hizmet veririz.
              </p>
            </ValueCard>
            <ValueCard>
              <h3>🎯 Başarı</h3>
              <p>
                Her davanın başarıyla sonuçlandırılması için 
                elimizden gelenin en iyisini yapıyoruz.
              </p>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>

        <TeamSection>
          <TeamTitle>Ekibimiz</TeamTitle>
          <TeamGrid>
            <TeamCard>
              <div className="team-photo">👨‍💼</div>
              <h3>Av. Gülümser Bilgiç</h3>
              <div className="position">Kurucu</div>
              <div className="description">
                Borç Anlaşması, Ev Sahibi ve Kiracı Davaları, Fikri Mülkiyet Davaları, Ceza Davası Savunma Avukatı
              </div>
            </TeamCard>
            <TeamCard>
              <div className="team-photo">👩‍💼</div>
              <h3>Av. Duygu Gedikoğlu</h3>
              <div className="position">Avukat</div>
              <div className="description">
                Gedikoğlu Diri Hukuk Bürosu Kurucusu ve İş Ortağımız
              </div>
            </TeamCard>
            <TeamCard>
              <div className="team-photo">👨‍💼</div>
              <h3>Av. Ali Demir</h3>
              <div className="position">Ceza Hukuku Uzmanı</div>
              <div className="description">
                Ceza hukuku ve ceza muhakemesi hukuku alanlarında 6 yıl deneyim.
              </div>
            </TeamCard>
            <TeamCard>
              <div className="team-photo">👩‍💼</div>
              <h3>Av. Fatma Kaya</h3>
              <div className="position">Gayrimenkul Hukuku Uzmanı</div>
              <div className="description">
                Gayrimenkul hukuku ve miras hukuku konularında 5 yıl deneyim.
              </div>
            </TeamCard>
          </TeamGrid>
        </TeamSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 