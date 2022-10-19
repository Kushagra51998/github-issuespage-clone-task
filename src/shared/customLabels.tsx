export const CustomLabels =(props:any) =>{

    const {color,name,key,border}= props

    const customLableContainer:React.CSSProperties = {
        backgroundColor: `#${color}`,
        borderRadius:'12px',
        height:'max-content',
        display:'flex',
        alignItems:'center',
        border:`${border}`,
        width:'max-content',
    }

    const customLableText:React.CSSProperties = {
        margin:0,
        padding:'5px 10px',
        fontSize:'14px',
        fontWeight:600
        
    }  
    
    

    return (
        <>
            <div key={key} style={customLableContainer}>
                <p style={customLableText}>
                    {name}
                </p>
            </div>
        </>
    )
}