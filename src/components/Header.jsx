import { useState } from "react"


function Header() {

  const [colorSwitch, setColorSwitch] = useState(true);

  function changeColor() {
    setColorSwitch(!colorSwitch);
  };

  return (
    <div onClick={(changeColor)}>
      {colorSwitch ?
        <h1 className="purpleHeader">Gallery of Horns!</h1>
        :
        <h1 className="blueheader">Gallery of Horns!</h1>
      }
    </div>
  );
}

export default Header