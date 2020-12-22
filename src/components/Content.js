import React, { useState } from "react";

function Content() {
  const [check, setCheck] = useState(false);
  const [radio, setRadio] = useState("");
  const [checked, setChecked] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!check) {
      alert("식단을 선택해 주세요");
    } else {
      setChecked(true);
    }
  };
  const onchange = (e) => {
    setRadio(e.target.value);
    setCheck(true);
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          {checked === false ? (
            <div className="lunch-check-input">
              <input
                type="radio"
                name="lubchCehck"
                id="lunchType1"
                value="일반식"
                checked={radio === "일반식" ? true : false}
                onChange={onchange}
              />
              <label htmlFor="lunchType1">type1</label>
              <input
                type="radio"
                name="lubchCehck"
                id="lunchType2"
                value="다식"
                checked={radio === "다식" ? true : false}
                onChange={onchange}
              />
              <label htmlFor="lunchType2">type2</label>
              <input type="submit" className="btn" value="확인" />
            </div>
          ) : (
            <div>checked</div>
          )}
        </form>
      </div>
    </>
  );
}

export default Content;
