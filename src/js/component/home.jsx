import React, {useState} from "react";



//create your first component
const Home = () => {
	const [color, setColor] = useState("")
	return (
		<div>
			<div className= "post"></div>
			<div className="box">
				<div onClick={()=>setColor("red")} className={color=="red"?"selectedred light red":"light red"}></div>
				<div onClick={()=>setColor("yellow")} className={color=="yellow"?"selectedyellow light yellow":"light yellow"}></div>
				<div onClick={()=>setColor("green")} className={color=="green"?"selectedgreen light green":"light green"}></div>
			</div>
		</div>
	)
}

export default Home;
