import * as React from "react"

import  '../styles/main.css'
import logo from "../images/logo.png"

import FeatherIcon from 'feather-icons-react'

const IndexPage = () => {
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
                  
      
            
             
                   
          </div>
                
            
        </div>
        <div className="wrapCenter">
        <h1 className="titleSeparate"> <FeatherIcon size="19" icon="edit-2" /> About Me</h1> 
                     <p>Hello! I'm <span className="rainbow2"> Anton Savostianov</span>. Presently I'm doing my PhD in <mark>Mathematics in Natural Science</mark> at <span className="rainbowGSSI">Gran Sasso Science Institute</span> in <i> L'Aquila, Italy</i>.
                     </p>
                     <p>
                     My current work is focuses on the numerical methods for <mark>Network Science</mark>.  My previous work included:
                     <ul>
                        <li> coupled (nonlinear) oscillators for modelling solar activity</li>
                        <li> detection of 3D structure in chromatine via CV methods</li>
                        <li> quasi stationary points in spatially-heterogeneous models of biocommuinites</li>
                     </ul>
                     
                     </p>

            <h1 className="titleSeparate"> <FeatherIcon size="19" icon="refresh-cw" /> Quick Updates</h1>        
            <div className="newsContainer">
                      
                        <div className="newsDate"> 13 Sep</div>
                        <div className="newsText">
                                Giving a lighting talk on the joint work <mark> Topological Stability of the Simplicial Complex via Matrix Differential Equations</mark> with <a href="https://www.gssi.it/people/professors/lectures-maths/item/545-guglielmi-nicola#VI">Nicola Guglielmi</a> and <a href="ftudisco.gitlab.io">Francesco Tudisco</a> at SIAM Network Science Workshop 2022. 

                                <br/>                                <br/>

                                Slides:  <a href="https://drive.google.com/file/d/1qVojy9iCoryfQnqCscFyoLVo1hJETWdJ/view?usp=sharing">here</a>   &nbsp;&nbsp;&nbsp;&nbsp; Video: TBD
                          </div>

                          <div className="newsDate"> 19 Aug</div>
                           <div className="newsText">
                                The talk with Nicola Guglielmi and Francesco Tudisco on the <b> Toplogical Stability of Simplicial Complexes </b> is accepted as a lightning presentation at <a href="http://dyn.phys.northwestern.edu/ns22.html" >SIAM NS 22</a>. 
                          </div>
                          <div className="newsDate"> 31 Jul – 2 Aug</div>
                           <div className="newsText">
                                Travelling for <a href="https://sites.fct.unl.pt/europt2022/" >EUROPT 22 </a> conference and summer school at Lisbon, Portugal. 
                          </div>
                          <div className="newsDate"> 11–13 May</div>
                           <div className="newsText">
                                Presenting a poster <mark>Gradient Flow Optimisation for Graph Topological Stability</mark> at <b>NUmerical Methods for Compression and Learning, L’Aquila, Italy</b>.

                                <br/><br/>

                                Poster: <a href="https://indico.gssi.it/event/344/contributions/1156/">here</a>
                          </div>
                          <div className="newsDate"> 14–15 Feb</div>
                           <div className="newsText">
                                Giving a contributed talk <mark>Graph Topological Stability via Matrix Differential Equations</mark> at <b>Two Days of Numerical Linear Algebra and Application</b> in Napoli, Italy. Joint work with <a href="https://www.gssi.it/people/professors/lectures-maths/item/545-guglielmi-nicola#VI">Nicola Guglielmi</a> and <a href="frudisco.gitlab.io">Francesco Tudsico</a>.

                                <br/><br/>
                                Abstract: <a href="https://www.dma.unina.it/2ggaln/pdf/Savostianov.pdf">here</a>.
                          </div> 
            </div>
         </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
