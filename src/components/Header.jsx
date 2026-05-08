import { useState } from "react"


function Header() {

  const [colorSwitch, setColorSwitch] = useState(true);

  function changeColor() {
    setColorSwitch(!colorSwitch);
  };

  return (
    <div onClick={changeColor}>
      {colorSwitch ?
        <h1 className="purpleHeader">Gallery of Horns</h1>
        :
        <h1 className="blueHeader">Gallery of Horns!! (but cooler)</h1>
      }
    </div>
  );
}

export default Header