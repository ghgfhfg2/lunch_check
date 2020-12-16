import React from "react";

function Content() {
  return (
    <>
      <div>
        <input type="radio" name="lubchCehck" id="lunchType1" />
        <label for="lunchType1">type1</label>
        <input type="radio" name="lubchCehck" id="lunchType2" />
        <label for="lunchType2">type2</label>
        <input type="submit" value="확인" />
      </div>
    </>
  );
}

export default Content;
