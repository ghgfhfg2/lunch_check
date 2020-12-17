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
          <input
            type="radio"
            name="lubchCehck"
            id="lunchType1"
            value="일반식"
            cheched={radio === "일반식" ? true : false}
            onChange={onchange}
          />
          <label htmlFor="lunchType1">type1</label>
          <input
            type="radio"
            name="lubchCehck"
            id="lunchType2"
            value="다식"
            cheched={radio === "다식" ? true : false}
            onChange={onchange}
          />
          <label htmlFor="lunchType2">type2</label>
          <input type="submit" value="확인" />
        </form>
      </div>
    </>
  );
}

export default Content;
