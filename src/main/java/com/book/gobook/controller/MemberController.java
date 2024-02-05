package com.book.gobook.controller;

import com.book.gobook.dto.MemberDTO;
import com.book.gobook.entity.Member;
import com.book.gobook.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MemberController {
    @Autowired
    private MemberRepository memberRepository;

    @RequestMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/login")
    public String loginPage() {
        return "/member/login";
    }

    @GetMapping("/join")
    public String joinPage() {
        return "/member/join";
    }

    @PostMapping("/joinfunc")
    public String joinFunc(MemberDTO memberDTO) {
        System.out.println("memberDTO.toString() = " + memberDTO.toString());

        // 1. DTO를 엔티티로 변환
        Member member = memberDTO.toEntity();
        System.out.println("member = " + member.toString());

        // 2. 리파지토리로 엔티티를 DB에 저장
        Member saved = memberRepository.save(member);
        System.out.println("saved = " + saved.toString());
        return "redirect:/";
    }
}
