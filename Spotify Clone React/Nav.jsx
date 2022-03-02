import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Main=()=>{
    return(
        <>
          <div className="nav">
            {/* <ul> */}
             {/* <span className=""></span> */}
             <span className=" offCanvas" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              &#9776;
             </span>


             <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
               <div className="offcanvas-header">
                 <h5 className="offcanvas-title" id="offcanvasExampleLabel"><img className="offImage" src="Images/spotify-download-logo-30.png"/>Spotify</h5>
                 <div className='userIcon availability'>
                  <FontAwesomeIcon icon={faUser} className="userIconMid"/>
                 </div>
                 <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
               <div className="offcanvas-body">
                 <div>
                   <h1>Home</h1>
                   <h1>About</h1>
                   <h1>Sign up/Login</h1>
                 </div>
               </div>
            </div> 
             <div className="pk image" ><img src="Images/spotify-download-logo-30.png"/><span className='spotifyText'>Spotify</span></div>
             <div className="pk home">Home</div>
             <div className="pk about">About</div>

             <div className="srch">
               {/* <div className="d-flex"> */}
                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                 <button className="search btn btn-outline-success" type="submit">Search</button>
               {/* </div> */}
            </div>
           {/* </ul> */}
           <div className='userIcon availability2'>
              <FontAwesomeIcon icon={faUser} className="userIconMid"/>
           </div>
          </div>  
        </>
    );
}
export default Main;
