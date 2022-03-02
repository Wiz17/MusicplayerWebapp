import { useState } from "react";

const Main=(p)=>{
  
    
    return (
        <>
            <div className="bottom">
              {/* <div className="forMob"> */}
              <div className="rangeBar">
                <div className="forMob">
                  <span id="currentTime1" >0{p.mins}:</span>
                  <span id="currentTime2" >{p.secs}</span>
                </div>
                <audio src={`Music/${p.ID}.mp3`} autoPlay onTimeUpdate={p.Func3} ref={p.player}></audio>
                <input type="range" id="progressBar"  onChange={p.Func2}   min="0" max="100" value={p.Update} />
                <span id="endTime" className="forMob">{p.Endtime}</span>
              </div>    
              <div className="icons">
                <i className="fas fa-2x fa-step-backward" id="backwardButton" onClick={p.Backward}></i>
                <i className={p.Pass} id="playButton" onClick={p.Func}></i>
                <i className="fas fa-2x fa-step-forward"id="forwardButton"onClick={p.Forward}></i>    
              </div>
              {/* </div> */}
              
              <div className="songGif">
                <img src="Images/music.gif" style={{opacity:`${p.Opacity}`}}  width="140px" height="110px" alt="1" id="gifVisiblity"/>
                <div className="songNameCreatorName">
                  <span id="bottomName">{p.SongName}</span>
                  <span id="bottomCreator">{p.creator}</span>
                </div>
              </div>
              <div className="playForMob">
                <i className={p.Pass} id="playButton" onClick={p.Func}></i>
              </div>
            </div>

        </>
    );
}
export default Main;