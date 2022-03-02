import { useEffect, useState } from "react";

const Main=(p)=>{

    return(
        <>
            <div className="songs">
                <img src={`Images/${p.ID}.jpg`} className="songImage"/>
                <span className="songName">{p.Name}</span>
                <span className="songCreator">{p.Creator}</span>  
                <span className="songDuration">{p.Duration}</span> 
                {/* <img src="Images/green_dancing_bar_white_bg.gif"  alt="" className="barGif"/> */}
                <i className='far fa-2x listButton fa-play-circle' id={p.ID} onClick={p.Func}></i>
            </div>    
        </>
    );
}

export default Main;
// {opacity:`${p.Opacity}`}