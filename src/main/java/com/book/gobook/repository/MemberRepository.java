package com.book.gobook.repository;

import com.book.gobook.entity.Member;
import org.springframework.data.repository.CrudRepository;

public interface MemberRepository extends CrudRepository<Member, Integer> {
    boolean existsById(String id);
    boolean existsByPhone(String phone);
}
