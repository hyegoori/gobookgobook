package com.book.gobook.apiController;

import com.book.gobook.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private MemberRepository memberRepository;

    @GetMapping("/checkDuplicateId/{userId}")
    public ResponseEntity<Boolean> checkDuplicateId(@PathVariable String userId) {
        boolean isDuplicate = memberRepository.existsById(userId);
        return ResponseEntity.ok(isDuplicate);
    }

    @GetMapping("/checkDuplicatePhone/{phone}")
    public ResponseEntity<Boolean> checkDuplicatePhone(@PathVariable String phone) {
        boolean isDuplicate = memberRepository.existsByPhone(phone);
        return ResponseEntity.ok(isDuplicate);
    }
}
