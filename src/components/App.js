import React, { useCallback, useState } from "react";
import UseCallbackComp from "./UseCallbackComp.js";

const App = () => {
    const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
    let [add, setAdd] = useState("")


    let x = useCallback(() => {

        if (add != "") {
            setSkills((prev => [...prev, add]))
        }

    }, [skills, add])

    return (
        <>

<h1 id="heading">Skill_List</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                x()
            }}>
                <input type="text" id="skill-input" onChange={(e) => {
                    setAdd(e.target.value)
                }} />
                <button id="skill-add-btn" type="submit" >add</button>
            </form>
            <ul id="skill-number-idx" >

                {skills && skills.map((v) => {
                    return < li onClick={() => {
                        setSkills(skills.filter((v2)=>{
                            return v2 !==v
                        }))
                    }} >{v}</li>
                })}
            </ul>
            
        </>
    )
}

export default App