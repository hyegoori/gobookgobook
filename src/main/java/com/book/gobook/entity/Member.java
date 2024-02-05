package com.book.gobook.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Data
@NoArgsConstructor
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer num;
    @Column
    private String name;
    @Column(unique = true)
    private String phone;
    @Column(unique = true)
    private String id;
    @Column
    private String pwd;
    @Column
    private Date joindate;

    public Member(Integer num, String name, String phone, String id, String pwd, Date joindate) {
        this.num = num;
        this.name = name;
        this.phone = phone;
        this.id = id;
        this.pwd = pwd;
        this.joindate = joindate;
    }

}
