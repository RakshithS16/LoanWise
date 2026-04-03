package com.loanwise.model;

public class LoanResponse {
    private String status;
    private String reason;
    private int eligibilityScore;

    public LoanResponse() {}

    public LoanResponse(String status, String reason, int eligibilityScore) {
        this.status = status;
        this.reason = reason;
        this.eligibilityScore = eligibilityScore;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public int getEligibilityScore() {
        return eligibilityScore;
    }

    public void setEligibilityScore(int eligibilityScore) {
        this.eligibilityScore = eligibilityScore;
    }
}
