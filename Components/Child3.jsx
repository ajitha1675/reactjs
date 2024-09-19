
const GrandChild3 = () =>{
    return (
        <div>
            <h1>GrandChild3</h1>
        </div>
    )
}

const GrandChild4 = () =>{
    return (
        <div>
            <h1>GrandChild4</h1>
        </div>
    )
}


function Class3(){
    return(
        <div>
            <p>Function name child3</p>
            <GrandChild3/>
            <GrandChild4/>
        </div>
    )
}

export default Class3;