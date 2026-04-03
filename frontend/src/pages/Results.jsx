import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const responseData = location.state?.data;

  if (!responseData) {
    return (
      <div className="container py-5 text-center">
        <h3 className="text-muted">No result data found. Please submit an application first.</h3>
        <button className="btn btn-fintech mt-4" onClick={() => navigate('/eligibility')}>
          Go to Form
        </button>
      </div>
    );
  }

  const isEligible = responseData.status === 'Eligible';

  return (
    <div className="container py-5 fadeIn mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 text-center">
          <div className="glass-panel p-5">
            <div className="mb-4">
              {isEligible ? (
                <CheckCircle size={80} className="text-success mx-auto" />
              ) : (
                <XCircle size={80} className="text-danger mx-auto" />
              )}
            </div>
            
            <h2 className={`mb-3 ${isEligible ? 'text-success' : 'text-danger'}`}>
              {responseData.status}
            </h2>
            
            <p className="text-muted mb-4 lead">
              {responseData.reason}
            </p>

            <div className="p-3 mb-4 d-inline-block rounded-3" style={{ background: 'var(--surface-color)' }}>
              <span className="text-muted d-block small mb-1">Eligibility Score</span>
              <span className="fs-3 fw-bold gradient-text">{responseData.eligibilityScore} / 100</span>
            </div>

            <div className="mt-2">
              <button className="btn btn-outline-light d-inline-flex align-items-center" onClick={() => navigate('/eligibility')}>
                <ArrowLeft className="me-2" size={18} /> New Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
