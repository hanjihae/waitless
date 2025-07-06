package com.waitless.user.presentation.dto;

import com.waitless.user.domain.entity.Role;
import com.waitless.user.domain.entity.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Builder;

@Builder
public record SignupRequestDto(
	@NotBlank(message = "이메일은 필수 입력 항목입니다.")
	@Email(message = "유효한 이메일 형식을 입력해주세요.")
	String email,

	@NotBlank(message = "비밀번호는 필수 입력 항목입니다.")
	@Size(min = 8, max = 20, message = "비밀번호는 8자 이상, 20자 이하로 입력해주세요.")
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$",
		message = "비밀번호는 대소문자, 숫자, 특수문자를 포함해야 합니다.")
	String password,

	String name,

	@NotBlank(message = "전화번호는 필수 입력 항목입니다.")
	String phone,
	Role role,
	String slackId
) {
}
