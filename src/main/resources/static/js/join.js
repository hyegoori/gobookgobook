function validateForm() {
    // 1. 각 입력 항목의 값을 가져오기
    var userName = document.getElementById("user-name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var userId = document.getElementById("user-id").value.trim();
    var userPassword = document.getElementById("user-password").value.trim();
    var userPasswordChk = document.getElementById("user-password-").value.trim();

    // 2. 데이터 유효성 체크
    if (userName === "") {
        alert("고객 이름이 입력되지 않았습니다.");
        document.getElementById("user-name").focus();
        return false;
    }
    if (phone === "") {
        alert("전화번호가 입력되지 않았습니다.");
        document.getElementById("phone").focus();
        return false;
    }
    if (userId === "") {
        alert("아이디가 입력되지 않았습니다.");
        document.getElementById("user-id").focus();
        return false;
    }
    if (userPassword === "") {
        alert("비밀번호가 입력되지 않았습니다.");
        document.getElementById("user-password").focus();
        return false;
    }
    if (userPasswordChk === "") {
        alert("비밀번호 확인란이 입력되지 않았습니다.");
        document.getElementById("user-password-").focus();
        return false;
    }

    // 전화번호 유효성 체크
    if (!isValidPhone(phone)) {
        alert("올바른 전화번호 형식이 아닙니다.");
        document.getElementById("phone").value = "";
        document.getElementById("phone").focus();
        return false;
    }

    // 중복된 아이디 체크
    var isDuplicateId = checkDuplicateIdSync();
    if (isDuplicateId) {
        alert("이미 사용 중인 아이디입니다.");
        document.getElementById("user-id").focus();
        return false;
    }

    // 중복된 전화번호 체크
    var isDuplicatePhone = checkDuplicatePhoneSync();
    if (isDuplicatePhone) {
        alert("이미 사용 중인 전화번호입니다.");
        document.getElementById("phone").focus();
        return false;
    }

    // 비밀번호와 비밀번호 확인값 비교
    if (userPassword !== userPasswordChk) {
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        document.getElementById("user-password").value = "";
        document.getElementById("user-password-").value = "";
        document.getElementById("user-password").focus();
        return false;
    }

    if(confirm("입력한 값을 제대로 확인하셨나요?")) {
        alert("정상적으로 등록되었습니다.");
    } else {
        return false;
    }
}

function isValidPhone(phone) {
    // 전화번호 유효성 체크 로직을 구현 (예시: 10자리 또는 11자리 숫자)
    var phoneRegex = /^\d{3}-\d{4}-\d{4}$/;

    // 주어진 문자열이 정규표현식에 맞으면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
    return phoneRegex.test(phone);
}

// 중복된 아이디 체크 (동기적으로 처리)
function checkDuplicateIdSync() {
    var userId = document.getElementById("user-id").value.trim();
    var isDuplicate = false;

    // Ajax를 사용하여 서버에 중복 체크 요청
    $.ajax({
        type: "GET",
        url: "/api/checkDuplicateId/" + userId,
        async: false,  // 요청을 동기적으로 처리
        success: function (result) {
            isDuplicate = result;
        },
        error: function (error) {
            console.error("중복된 아이디 확인 중 오류 발생: " + error);
        }
    });

    return isDuplicate;
}

// 중복된 전화번호 체크 (동기적으로 처리)
function checkDuplicatePhoneSync() {
    var phone = document.getElementById("phone").value.trim();
    var isDuplicate = false;

    // Ajax를 사용하여 서버에 중복 체크 요청
    $.ajax({
        type: "GET",
        url: "/api/checkDuplicatePhone/" + phone,
        async: false,  // 요청을 동기적으로 처리
        success: function (result) {
            isDuplicate = result;
        },
        error: function (error) {
            console.error("중복된 전화번호 확인 중 오류 발생: " + error);
        }
    });

    return isDuplicate;
}