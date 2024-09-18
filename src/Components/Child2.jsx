 const GreatGrandChild1 = () =>{
    return <h1>Great Grand child1</h1>
 }

 const GreatGrandChild2 = () =>{
    return <h1>Great Grand child2</h1>
 }
 
 
 const GrandChild2 = () =>{
    return <h1>Grand child2</h1>
 }

function Class2(){
    return(
        <div>
            <p>Function name child2</p>
            <GrandChild2/>
            <GreatGrandChild1/>
            <GreatGrandChild2/>
        </div>
    )
}

export default Class2;