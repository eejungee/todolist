# To Do List
회원가입, 로그인이 가능하고 to do를 입력하고 삭제할 수 있는 페이지 제작

<br/>


## 실행방법
___

```
$ git clone https://github.com/eejungee/wanted-pre-onboarding-frontend.git
$ npm install
$ npm start
```

<br/>

## 배포링크
___
https://todolist-rho-swart.vercel.app/


<br/>

## 기술스택
___

|JavaScript|React.js|Typescript|Styled-components|
|---|---|---|---|
|<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /></div>|<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /></div>|<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="65" height="65" /></div>|<div style="display: flex; justify-content: center; align-items: center;"><img src="https://blog.kakaocdn.net/dn/l92lK/btqFNFi2V2k/kIYdVhPlhlvoG8ULF0uy61/img.png" alt="icon" width="65" height="65" /></div>|

<br/>

## 구현사항
___

### signup
* 이메일과 비밀번호의 유효성 검사기능
* 회원가입 완료 시 `/signup` 경로로 이동
* 로컬 스토리지에 토큰이 있는 상태로 페이지 접속 시 `/todo` 경로로 리다이렉트 처리 구현
<br/>

---

### signin
* 이메일과 비밀번호의 유효성 검사기능
* 로그인 완료 시 응답받은 JWT 저장 후 `/todo` 경로로 이동
* 로컬 스토리지에 토큰이 있는 상태로 페이지 접속 시 `/todo` 경로로 리다이렉트 처리 구현
<br/>

---

### todo
* 목록에 TODO의 내용과 완료 여부 표시
* 새로운 TODO 입력 가능
* 아무것도 입력하지 않고 추가버튼 클릭 시 입력창 아래에 경고문구 
* TODO의 체크박스를 통해 완료 여부를 수정 가능
* TODO 우측에 수정버튼과 삭제 버튼으로 댓글 수정과 삭제 가능
* 로컬 스토리지에 토큰이 없는 상태로 페이지 접속 시 `/signin` 경로로 리다이렉트 처리 구현
<br/>

---
