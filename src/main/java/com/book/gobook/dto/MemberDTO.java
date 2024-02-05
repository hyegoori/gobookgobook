package com.book.gobook.dto;

import com.book.gobook.entity.Member;
import lombok.Data;

import java.sql.Date;

@Data
public class MemberDTO {
    private String name;
    private String phone;
    private String id;
    private String pwd;

    public Member toEntity() {
        return new Member(null, name, phone, id, pwd, new Date(System.currentTimeMillis()));
    }
}
