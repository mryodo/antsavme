import * as React from "react"

import  '../styles/main.css'
import logo from "../images/logo.png"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import FeatherIcon from 'feather-icons-react'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="mainWrapper">
    <div  className="side">
       <div className="sidecontent">
         
             <div class="grid-container">

                 <div class="grid-child">
                       <div className='sayHi'> 
                                     <span className="rainbow">Hi! </span> <br/> 
                                       My name is <span className="rainbow">Anton Savostianov</span>.
                       </div> 
                 </div>

                 <div class="grid-child">
                           <div class="sideImgWrap">
                                              <img  src = {logo} alt="my stupid face"     />
                           </div>
                 </div>
                 <div className="name">
                   <span className="rainbow"> Anton Savostianov</span>
                 </div>

             </div>

             <div class="nametag">
                 Applied Math Researcher
             </div>

             <div className="soc2">
                       <div className="soc-item2">
                               <FeatherIcon size="20" icon="calendar"/> &nbsp; 26/04/95
                       </div>
                     <div className="soc-item2">
                           <FeatherIcon size="20" icon="thermometer"/>  PhD Student
                     </div>
                     <div className="soc-item2">
                             <FeatherIcon size="20" icon="map-pin"/>  GSSI, Italy
                     </div>
             </div>

             <div className="emailSection">
                         <div class="quickWrap"><span className="rainbow"> <FeatherIcon size="15" icon="mail"/> <span className="shortener"/></span>: </div>
                         <div className="emailHider">@<div className="emailCatch">botblocker@heartinternet.uk</div></div>
                         <br/>
                         <div class="quickWrap"><span className="rainbow"> <FeatherIcon size="15" icon="users"/> COMPiLE group </span>: </div> 
                         <a href="num-gssi.github.io">num-gssi.github.io </a>
                         <br/>
                         <div class="quickWrap"><span className="rainbow"> <FeatherIcon size="15" icon="hash"/> Mastodon </span>: </div> 
                         <a rel="me" href="https://mathstodon.xyz/@mryodo">here</a>
               </div> 

             <div className="soc">
                         <div className="soc-item"> 
                                   <a href="https://github.com/mryodo"><FeatherIcon size="26" icon="github" /></a>
                         </div>
                         <div className="soc-item">
                                 <a href="https://twitter.com/mryodo"><FeatherIcon size="26" icon="twitter" /> </a> 
                         </div>
                         <div className="soc-item">
                                   <a href="https://t.me/mryodo"><FeatherIcon size="26" icon="send" />  </a>
                         </div>
                         <div className="soc-item">
                                   <a href="https://scholar.google.com/citations?user=E0nt-XYAAAAJ&hl=en"><FeatherIcon size="26" icon="award" />  </a>
                         </div>


                         
               </div>
               
               <br/>
               
   
        <div className="menu">
                            <Link to="/" activeClassName="active"><FeatherIcon size="15" icon="home"/> Home</Link>
                            <Link to="/archive" activeClassName="active"><FeatherIcon size="15" icon="archive"/> Archive</Link>
                            <Link to="/publications" activeClassName="active"><FeatherIcon size="15" icon="pen-tool"/>Papers</Link> 
                            <Link to="https://drive.google.com/file/d/1bRNbDoTSECoxUq71sGCa1Q8lkDisfCzN/view?usp=sharing" activeClassName="active"><FeatherIcon size="15" icon="paperclip"/>CV</Link>
          </div>  
          
                
       </div>
             
         
     </div>
     <div className="wrapCenter">
          {children}
      </div>
 </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
