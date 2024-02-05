CREATE TABLE IF NOT EXISTS member (
    num INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    phone VARCHAR(50) UNIQUE,
    id VARCHAR(50) UNIQUE,
    pwd VARCHAR(50),
    joindate DATE
);

-- AUTO_INCREMENT 초기화
ALTER TABLE member AUTO_INCREMENT = 1;

-- 데이터 삽입
INSERT INTO member (num, name, phone, id, pwd, joindate) VALUES (1, '가가가', '010-1111-1111', 'aaaa', '1234', '2024-02-04');
INSERT INTO member (num, name, phone, id, pwd, joindate) VALUES (2, '나나나', '010-2222-2222', 'bbbb', '1234', '2024-02-04');
INSERT INTO member (num, name, phone, id, pwd, joindate) VALUES (3, '다다다', '010-3333-3333', 'cccc', '1234', '2024-02-04');