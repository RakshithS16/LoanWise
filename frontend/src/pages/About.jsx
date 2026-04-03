import React from 'react';

const About = () => {
  return (
    <div className="container py-5 fadeIn mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="glass-panel p-5">
            <h2 className="mb-4 gradient-text">About LoanWise</h2>
            <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
              LoanWise is a fintech simulation platform designed to demonstrate modern lending evaluation rules. 
              By utilizing a robust Spring Boot backend paired with a dynamic React front-end, the platform provides 
              instant verification of a user's eligibility for various loan products.
            </p>
            
            <h4 className="mb-3 text-white">Technology Stack</h4>
            <div className="row mb-5">
              <div className="col-md-6 mb-3">
                <div className="p-3" style={{ background: 'var(--surface-color)', borderRadius: '8px' }}>
                  <h6 className="text-white mb-2">Frontend</h6>
                  <ul className="text-muted small mb-0 ps-3">
                    <li>React (Functional Components + Hooks)</li>
                    <li>Vite</li>
                    <li>Bootstrap 5</li>
                    <li>Vanilla CSS & Glassmorphism</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="p-3" style={{ background: 'var(--surface-color)', borderRadius: '8px' }}>
                  <h6 className="text-white mb-2">Backend & Database</h6>
                  <ul className="text-muted small mb-0 ps-3">
                    <li>Java Spring Boot (REST API)</li>
                    <li>Spring Data JPA</li>
                    <li>H2 Database (Persistent File)</li>
                    <li>Jakarta Validations</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="mb-3 text-white">Eligibility Logic</h4>
            <ul className="text-muted" style={{ lineHeight: '1.8' }}>
              <li><strong>Basic Criteria:</strong> Age between 21-60, Credit Score &ge; 650, Monthly Income &ge; &#8377;25,000.</li>
              <li><strong>Debt-to-Income (DTI):</strong> Must be under 40%.</li>
              <li><strong>Max Affordability:</strong> Loan amount capped at 20x Monthly Income.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
