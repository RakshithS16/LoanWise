import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EligibilityForm = () => {
  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm({ mode: 'onChange' });
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError('');
    try {
      // payload matches LoanRequest.java model
      const payload = {
        name: data.name,
        age: parseInt(data.age),
        employmentType: data.employmentType,
        income: parseFloat(data.income),
        creditScore: parseInt(data.creditScore),
        existingEmi: parseFloat(data.existingEmi),
        loanAmount: parseFloat(data.loanAmount),
        tenureYears: parseInt(data.tenureYears),
        loanType: data.loanType
      };

      const response = await axios.post('http://localhost:8080/api/loan/check', payload);
      navigate('/results', { state: { data: response.data } });
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.message) {
        setServerError(err.response.data.message);
      } else {
        setServerError('Cannot connect to server. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5 fadeIn mt-2">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="glass-panel p-4 p-md-5">
            <h2 className="mb-2 text-white">Loan Application</h2>
            <p className="text-muted mb-4 pb-2 border-bottom border-secondary">Fill in your details to check eligibility instantly.</p>
            
            {serverError && <div className="alert alert-danger" role="alert">{serverError}</div>}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })} />
                  {errors.name && <div className="invalid-feedback text-danger small mt-1">{errors.name.message}</div>}
                </div>
                
                <div className="col-md-6 mb-3">
                  <label className="form-label">Age</label>
                  <input type="number" className={`form-control ${errors.age ? 'is-invalid' : ''}`} placeholder="25"
                    {...register('age', { 
                      required: 'Age is required',
                      min: { value: 21, message: 'Minimum age is 21' },
                      max: { value: 60, message: 'Maximum age is 60' }
                    })} />
                  {errors.age && <div className="invalid-feedback text-danger small mt-1">{errors.age.message}</div>}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Employment Type</label>
                  <select className={`form-select ${errors.employmentType ? 'is-invalid' : ''}`}
                    {...register('employmentType', { required: 'Please select employment type' })}>
                    <option value="">Select Option</option>
                    <option value="SALARIED">Salaried</option>
                    <option value="SELF_EMPLOYED">Self-employed</option>
                  </select>
                  {errors.employmentType && <div className="invalid-feedback text-danger small mt-1">{errors.employmentType.message}</div>}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Monthly Income (₹)</label>
                  <input type="number" step="0.01" className={`form-control ${errors.income ? 'is-invalid' : ''}`} placeholder="50000"
                    {...register('income', { 
                      required: 'Income is required',
                      min: { value: 1, message: 'Income must be greater than 0' }
                    })} />
                  {errors.income && <div className="invalid-feedback text-danger small mt-1">{errors.income.message}</div>}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Credit Score</label>
                  <input type="number" className={`form-control ${errors.creditScore ? 'is-invalid' : ''}`} placeholder="750"
                    {...register('creditScore', { 
                      required: 'Credit Score is required',
                      min: { value: 300, message: 'Minimum score is 300' },
                      max: { value: 900, message: 'Maximum score is 900' }
                    })} />
                  {errors.creditScore && <div className="invalid-feedback text-danger small mt-1">{errors.creditScore.message}</div>}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Existing EMIs (₹)</label>
                  <input type="number" step="0.01" className={`form-control ${errors.existingEmi ? 'is-invalid' : ''}`} placeholder="5000"
                    {...register('existingEmi', { 
                      required: 'Field is required. Enter 0 if none.',
                      min: { value: 0, message: 'Cannot be negative' }
                    })} />
                  {errors.existingEmi && <div className="invalid-feedback text-danger small mt-1">{errors.existingEmi.message}</div>}
                </div>

                <div className="col-md-4 mb-4">
                  <label className="form-label">Loan Type</label>
                  <select className={`form-select ${errors.loanType ? 'is-invalid' : ''}`}
                    {...register('loanType', { required: 'Select loan type' })}>
                    <option value="">Select Type</option>
                    <option value="PERSONAL">Personal Loan</option>
                    <option value="BUSINESS">Business Loan</option>
                    <option value="HOME">Home Loan</option>
                    <option value="CAR">Car Loan</option>
                  </select>
                  {errors.loanType && <div className="invalid-feedback text-danger small mt-1">{errors.loanType.message}</div>}
                </div>

                <div className="col-md-4 mb-4">
                  <label className="form-label">Loan Amount (₹)</label>
                  <input type="number" step="0.01" className={`form-control ${errors.loanAmount ? 'is-invalid' : ''}`} placeholder="500000"
                    {...register('loanAmount', { 
                      required: 'Amount is required',
                      min: { value: 1, message: 'Must be greater than 0' }
                    })} />
                  {errors.loanAmount && <div className="invalid-feedback text-danger small mt-1">{errors.loanAmount.message}</div>}
                </div>

                <div className="col-md-4 mb-4">
                  <label className="form-label">Tenure (Years)</label>
                  <input type="number" className={`form-control ${errors.tenureYears ? 'is-invalid' : ''}`} placeholder="5"
                    {...register('tenureYears', { 
                      required: 'Tenure is required',
                      min: { value: 1, message: 'Must be at least 1 year' }
                    })} />
                  {errors.tenureYears && <div className="invalid-feedback text-danger small mt-1">{errors.tenureYears.message}</div>}
                </div>
              </div>

              <div className="mt-4 pt-3 border-top border-secondary text-end">
                <button type="submit" className="btn btn-fintech w-100" disabled={!isValid || loading}>
                  {loading ? 'Evaluating...' : 'Check Eligibility'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityForm;
