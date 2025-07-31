import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  padding-top: 80px; /* Header'ın yüksekliği kadar padding */
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/hakkimizda" element={<div>Hakkımızda Sayfası</div>} />
            <Route path="/hizmetler" element={<div>Hizmetler Sayfası</div>} />
            <Route path="/ekip" element={<div>Ekibimiz Sayfası</div>} />
            <Route path="/iletisim" element={<div>İletişim Sayfası</div>} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
