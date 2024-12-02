import useStore from "./store";
const ComponentListing=()=>{
    const { data, total, deleteData, updateData, getData, setParticularData} = useStore((state) => state);

    const deleteHandler=(index)=>{
        deleteData(index)
    }

    const editHandler=(index)=>{
        setParticularData(index);
        updateData({name: "updatedName", description:"updatedescription"})
    }
    return<>
    {getData?.name}
    {data?.map((item, index)=>{
        return(<div style={{display: 'flex'}} key={index}>
            <div>{item?.name}</div>
            <div>{item?.description}</div>
            <button onClick={()=>{
                editHandler(index);
            }}>Edit</button>
            <button onClick={()=>{
                deleteHandler(index);
            }}>Delete</button>
        </div>)
    })}
    </>
};

export default ComponentListing;