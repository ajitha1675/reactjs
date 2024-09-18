import React, { useState } from "react";

const VirtualDom = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);

    const handleAdd = () => {
        setData((prevData) => [...prevData, text]);
        setText('');
    };

    return (
        <div>
            <div>
                <input 
                    placeholder="Enter the text here"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                {data.map((val, id) => (
                    <h1 key={id} onClick={()=> setData(prevState =>
                         prevState.filter((val, index)=> index !== id)
                        )
                    }>{val}
                    </h1>
                ))}
            </div>
        </div>
    );
};

export default VirtualDom;
