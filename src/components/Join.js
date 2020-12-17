import React, { useCallback, useReducer } from "react";

const initState = {
  inputs: {
    id: "",
    name: "",
    pw: "",
    re_pw: ""
  }
};
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    default:
      return state;
  }
}
function Join() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { id, name, pw, re_pw } = state.inputs;

  const changeF = useCallback((e) => {
    const { value, name } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value
    });
  }, []);

  const joinSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      alert("아이디를 입력해주세요");
      return;
    }
    if (!name) {
      alert("이름을 입력해주세요");
      return;
    }
    if (!pw) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if (!re_pw) {
      alert("비밀번호 확인을 입력해주세요");
      return;
    }
  };
  return (
    <>
      <div className="content-box">
        <h2>회원가입</h2>
        <form onSubmit={joinSubmit}>
          <div className="input-box">
            <div className="check">
              <input
                type="text"
                value={id}
                name="id"
                onChange={changeF}
                placeholder="아이디"
              />
              <button type="button">중복확인</button>
            </div>
            <input
              type="text"
              value={name}
              name="name"
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
            <input
              type="password"
              value={re_pw}
              name="re_pw"
              onChange={changeF}
              placeholder="비밀번호 확인"
            />
            <input type="submit" className="btn" value="회원가입" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Join;
