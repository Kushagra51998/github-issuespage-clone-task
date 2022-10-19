export const CustomButtonWithIcon = (props:any)=>{

    const {icon,text} = props

    return (
        <>
            <div style={{display:'flex',alignItems:'center'}}>
                {icon}
                <p style={{margin:0,padding:0}}>
                    {text}
                </p>
            </div> 
        </>
    )
}