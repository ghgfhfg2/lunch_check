import React, { useState } from "react";

function Login() {
  const [inputs, setInputs] = useState({
    id: "",
    pw: ""
  });
  const { id, pw } = inputs;
  const changeF = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      alert("아이디를 입력해주세요");
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력해주세요");
      return;
    }
  };
  return (
    <>
      <div className="content-box">
        <h2>회원가입</h2>
        <form onSubmit={loginSubmit}>
          <div className="input-box">
            <input
              type="text"
              value={id}
              name="id"
              onChange={changeF}
              placeholder="이름"
            />
            <input
              type="password"
              value={pw}
              name="pw"
              onChange={changeF}
              placeholder="비밀번호"
            />
            <input type="submit" className="btn" value="로그인" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
