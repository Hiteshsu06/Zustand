import React, {useState} from 'react';
import useStore from './store';

const ComponentForm=()=>{
    const [obj, setObj] = useState({
        name: "",
        description: ""
    });
    const { addData } = useStore((state)=> state);
    
    const submitHandler=(e)=>{
        e.preventDefault();
        addData(obj);
        setObj({
            name: "",
            description: ""
        });
    };

    const changeHandler=(e)=>{
        if(e.target.name === "name"){
            setObj({...obj, name: e?.target?.value})
        }
        if(e.target.name === "description"){
            setObj({...obj, description: e?.target?.value})
        }
    }

    return<>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter Name..." name="name" value={obj?.name} onChange={(e)=>{
            changeHandler(e)
        }}/>
        <br/>
        <input type="text" placeholder="Enter Description..." name="description" value={obj?.description} onChange={(e)=>{
            changeHandler(e)
        }}/>
        <br/>
        <button type="submit">
            SUBMIT
        </button>
    </form>
    </>
};

export default ComponentForm;