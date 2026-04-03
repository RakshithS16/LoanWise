package com.loanwise.service;

import com.loanwise.model.LoanRequest;
import com.loanwise.model.LoanResponse;
import com.loanwise.repository.LoanRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EligibilityService {

    @Autowired
    private LoanRequestRepository repository;

    public LoanResponse evaluateEligibility(LoanRequest request) {
        String status = "Eligible";
        StringBuilder reason = new StringBuilder();
        int score = 100;

        // Basic Rules
        if (request.getAge() < 21 || request.getAge() > 60) {
            status = "Not Eligible";
            reason.append("Age must be between 21 and 60. ");
            score -= 30;
        }

        if (request.getCreditScore() < 650) {
            status = "Not Eligible";
            reason.append("Credit score is below the minimum requirement of 650. ");
            score -= 40;
        }

        if (request.getIncome() < 25000) {
            status = "Not Eligible";
            reason.append("Monthly income is below the minimum requirement of ₹25,000. ");
            score -= 30;
        }

        // Debt-to-Income Ratio (DTI)
        double dti = (request.getExistingEmi() / request.getIncome()) * 100;
        if (dti >= 40) {
            status = "Not Eligible";
            reason.append("Debt-to-Income Ratio (DTI) is too high (>=40%). ");
            score -= 20;
        }

        // Loan Affordability
        double maxEligibility = request.getIncome() * 20;
        if (request.getLoanAmount() > maxEligibility) {
            status = "Not Eligible";
            reason.append(String.format("Requested loan amount exceeds maximum eligibility (₹%.2f). ", maxEligibility));
            score -= 20;
        }

        // Adjust score to be within 0-100
        score = Math.max(0, Math.min(100, score));

        if (status.equals("Eligible")) {
            reason.append("Meets all eligibility criteria.");
        }

        // Save to Database
        request.setStatus(status);
        request.setReason(reason.toString().trim());
        request.setScore(score);
        repository.save(request);

        return new LoanResponse(status, reason.toString().trim(), score);
    }
}
