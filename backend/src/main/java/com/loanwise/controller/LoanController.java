package com.loanwise.controller;

import com.loanwise.model.LoanRequest;
import com.loanwise.model.LoanResponse;
import com.loanwise.service.EligibilityService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/loan")
public class LoanController {

    @Autowired
    private EligibilityService eligibilityService;

    @PostMapping("/check")
    public ResponseEntity<LoanResponse> checkEligibility(@Valid @RequestBody LoanRequest request) {
        LoanResponse response = eligibilityService.evaluateEligibility(request);
        return ResponseEntity.ok(response);
    }
}
