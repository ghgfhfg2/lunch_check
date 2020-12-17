import React, { useState } from "react";

function Content() {
  const [radio, setRadio] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(radio);
  };
  const onchange = (e) => {
    setRadio(e.target.value);
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
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
        </form>
      </div>
    </>
  );
}

export default Content;
