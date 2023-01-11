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

                        <div className="newsDate"> 11 Jan </div>
                        <div className="newText">
                              The <span className="rainbow2"> preprint </span> for <b> Quantifying the structural stability of simplicial homology </b> with <i>Francesco Tudisco</i> and <i>Nicola Guglielmi</i> is (finally) online!

                              <br/>                                <br/>

                              <a href="https://arxiv.org/abs/2301.03627"> arXiv</a>
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
