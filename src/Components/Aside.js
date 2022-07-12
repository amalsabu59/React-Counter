import {useState} from 'react'
import randomColor from 'randomcolor'
function Aside() {
  const [color,setColor] = useState("red")
  const newColor=randomColor()

  const changecolor=()=>{
    setColor(newColor)
  }
  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button onClick={changecolor}>Change Color</button>
    </div>
  );
}

export default Aside;
