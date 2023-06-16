import * as React from "react"

import  '../styles/main.css'
import logo from "../images/logo.png"
import { Link } from "gatsby"
import Layout from "../components/layout"
import FeatherIcon from 'feather-icons-react'

const IndexPage = () => {
  return (
    <Layout>
            <h1 className="titleSeparate"> <FeatherIcon size="19" icon="archive" /> Archive      </h1>        
            <div className="newsContainer">
            <div className="newsDate"> 10-14 Jul </div>
                        <div className="newsText" >
                              I'm travelling to the <b>NetSci 2023</b>, Vienna, Austria.

                              <br/> <br/>

                              Contributed talk: <mark> Quantifying the Topological Stability of a Simplicial Complex </mark>, program TBD.
                        </div>

                        <div className="newsDate"> 12-16 Jun </div>
                        <div className="newsText" >
                              I'm travelling to the <b>25th Conference of the International Linear Algebra Society</b>, Mardid, Spain.

                              <br/> <br/>

                              Contributed talk: <mark> Quantifying the Topological Stability of a Simplicial Complex </mark>, <a href="https://ilas2023.es/program/"> program here </a>.

                              <br/> <br/>
                              Slides: <a href="https://drive.google.com/file/d/1njnQzqRrJT9MnZdP3wCnBO8sIVxjPIy4/view?usp=sharing">here</a> 
                        </div>

                        <div className="newsDate"> 11 Jan </div>
                        <div className="newsText">
                              The <span className="rainbow2"> preprint </span> for <mark> Quantifying the structural stability of simplicial homology </mark> with <i>Francesco Tudisco</i> and <i>Nicola Guglielmi</i> is (finally) online!

                              <br/>  

                              PDF: <a href="https://arxiv.org/abs/2301.03627"> arXiv</a>&nbsp;&nbsp;&nbsp;&nbsp; Code:<a href="https://github.com/COMPiLELab/HOLaGraF"> repository </a>. 
                        </div>

                        <div className="newsDate"> 23 Dec</div>
                        <div className="newsText">
                              The repository with <span className="rainbow2">Julia</span> code for the <mark>HOLaGraF</mark> project is up online: <a href="https://github.com/COMPiLELab/HOLaGraF"> repository </a>.

                              <br/>                                <br/>

                              The full paper will follow soon.
                        </div>
 
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
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Archive of Updates</title>
