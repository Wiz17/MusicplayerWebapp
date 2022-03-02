import Nav from './Nav' 
import Card from './Song Card'
// import Empty from './Empty div'
import Login from './Facebook Login'
import Data from './Songs Data'
import Bottom from './Bottom Bar'
import { useRef, useState } from 'react'
import { createContext } from 'react'


const Main=()=>{
  const audioPlayer = useRef();
  const [playButton , setplayButton]=useState('fas fa-2x fa-play-circle');
  const [time1 , setTime1] = useState('');
  const [time2 , setTime2] = useState('');
  const [opacity , passOpacity]=useState(0);
  const [bottomCreator , setBottomCreator] = useState('');
  const [bottomSongName , setBottomSongName] = useState('');
  const [id , setId] = useState();
  const [barUpdate , setBarUpdate] = useState();
  const [endTime , setEndTime] = useState();
  // const [listPlayPause , setListPlayPause] = useState('far fa-2x fa-play-circle');
  // const [ind , setInd] = useState(0);
  const listPlay=(l)=>{
      setplayButton(`fas fa-2x fa-pause-circle`);
      setId(Data[l.target.id].id);
      audioPlayer.current.play();
      setBottomCreator(Data[l.target.id].Creator);
      setBottomSongName(Data[l.target.id].Name);
      passOpacity(1);
      setEndTime(Data[l.target.id].Duration);
      // document.getElementById(`${l.target.id}`).classList='fas fa-2x fa-pause-circle';
      console.log(l.target);
  }
  const bottomPlay=()=>{
      if(audioPlayer.current.paused){
          setplayButton('fas fa-2x fa-pause-circle');
          passOpacity(1);
          audioPlayer.current.play();
      }else{
          setplayButton('fas fa-2x fa-play-circle');
          passOpacity(0);
          audioPlayer.current.pause();
          
      }
  }
  const bottomBar=(p)=>{
      audioPlayer.current.currentTime = ((p.target.value)*(audioPlayer.current.duration))/100;
  }
   const updateBar=(k)=>{
    //  console.log("hi");
     setTime1(parseInt(audioPlayer.current.currentTime/60));
     if(audioPlayer.current.currentTime%60>=0 && audioPlayer.current.currentTime%60<=10){
       setTime2(`0${parseInt(audioPlayer.current.currentTime%60)}`);
     }else{
       setTime2(`${parseInt(audioPlayer.current.currentTime%60)}`);
     }
     setBarUpdate((audioPlayer.current.currentTime/audioPlayer.current.duration)*100);
   }
   const ForwardButton=()=>{
     if(id==7){
       setId(0);
      // console.log(Data[id].Creator);
      setBottomCreator(Data[0].Creator);
      setBottomSongName(Data[0].Name);
      setEndTime(Data[0].Duration);
     }else{
      // console.log(Data[id]);
      setId(parseInt(id)+1);
      setBottomCreator(Data[id+1].Creator);
      setBottomSongName(Data[id+1].Name);
      setEndTime(Data[id+1].Duration);
     }
    
   }
   const BackwardButton=()=>{
     if(id==0){
       setId(7);
       setBottomCreator(Data[7].Creator);
       setBottomSongName(Data[7].Name);
       setEndTime(Data[7].Duration);
     }else{
     
      setId(parseInt(id)-1);
      setBottomCreator(Data[id-1].Creator);
      setBottomSongName(Data[id-1].Name);
      setEndTime(Data[id-1].Duration);
      // console.log(id);
     }
     
    
  }  
  return(
        <>
        
          <Nav/>
          
          <div className='main'>
            <div className="main-2">
              <h2 className="heading">My Playlist</h2>
              {Data.map((val , ind)=>{
                  return(
                    <Card 
                      Name={val.Name}
                      Creator={val.Creator}
                      Duration={val.Duration}
                      ID={val.id}
                      // Opacity={opacity}
                      Func={listPlay}
                    />
                  );
              })}
                
            </div>
              {/* <Empty/> */}
              <Login/>-
          </div>
          
          <Bottom 
          // RunningSong={songList}
          Pass={playButton}
          Func={bottomPlay}
          Func2={bottomBar}
          Func3={updateBar}
          Update={barUpdate}
          Opacity={opacity}
          creator={bottomCreator}
          SongName={bottomSongName}
          ID={id}
          player={audioPlayer}
          mins={time1}
          secs={time2}
          Endtime={endTime}
          Forward={ForwardButton}
          Backward={BackwardButton}
          // PlayPause={listPlayPause}
          />
        </>
    );
}
export default Main;
