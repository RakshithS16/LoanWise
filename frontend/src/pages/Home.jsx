import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5 fadeIn">
      <div className="row align-items-center min-vh-75 mt-5">
        <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
          <h1 className="display-4 fw-bold mb-3">
            Smart Decisions for <br/>
            <span className="gradient-text">Smarter Loans</span>
          </h1>
          <p className="lead text-muted mb-5">
            Evaluate your loan eligibility instantly with our intelligent decisioning engine. Transparent, fast, and secure.
          </p>
          <button 
            className="btn btn-fintech btn-lg px-4 py-3 d-inline-flex align-items-center"
            onClick={() => navigate('/eligibility')}
          >
            Check Loan Eligibility <ArrowRight className="ms-2" size={20} />
          </button>
        </div>
        <div className="col-lg-6">
          <div className="glass-panel p-4 position-relative overflow-hidden">
            <div className="position-absolute" style={{ top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(15,15,15,0) 70%)'}}></div>
            <div className="position-absolute" style={{ bottom: '-10%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(15,15,15,0) 70%)'}}></div>
            
            <h3 className="mb-4 d-flex align-items-center"><ShieldCheck className="me-2 text-success" /> Why LoanWise?</h3>
            
            <div className="d-flex mb-4 align-items-start">
              <div className="bg-dark p-2 rounded-circle me-3 mt-1" style={{ border: '1px solid #333' }}>
                <Zap size={20} color="#3b82f6" />
              </div>
              <div>
                <h5 className="mb-1 text-white">Instant Results</h5>
                <p className="text-muted small mb-0">Get immediate feedback on your eligibility status without the wait.</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="bg-dark p-2 rounded-circle me-3 mt-1" style={{ border: '1px solid #333' }}>
                <Activity size={20} color="#8b5cf6" />
              </div>
              <div>
                <h5 className="mb-1 text-white">Real-world Precision</h5>
                <p className="text-muted small mb-0">Our engine uses strict DTI and income multiplier rules typical of leading banks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
