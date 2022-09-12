import * as React from "react"

import  '../styles/main.css'
import logo from "../images/logo.png"
import { Link } from "gatsby"
import Layout from "../components/layout"
import FeatherIcon from 'feather-icons-react'

const IndexPage = () => {
  return (
    <Layout>
            <h1 className="titleSeparate"> <FeatherIcon size="19" icon="pen-tool" /> Publications      </h1>        
            <div className="paperList">
                <ul>
                                <li> 
                                                <span className="rainbow2">
                                                           A Savostianov, A Shapoval, M Shnirman 
                                                </span> &nbsp;
                                                <span className="title">
                                                                Dynamics of Phase Synchronization between Solar Polar Magnetic Fields Assessed with Van Der Pol and Kuramoto Models
                                                </span> &nbsp;
                                                <span className="info">
                                                                Entropy 22 (9), 945,  <b>2020</b>
                                                </span>
                                                <span className="sun">
                                                                ☀ sun
                                                </span>
                                                <span className="oscillators">
                                                                <FeatherIcon icon="git-pull-request" size="12"/> oscillators 
                                                </span>
                                </li>
                                <li> 
                                                <span className="rainbow2">
                                                           A Savostianov, A Shapoval, M Shnirman 
                                                </span> &nbsp;
                                                <span className="title">
                                                                Reconstruction of the coupling between solar proxies: When approaches based on Kuramoto and Van der Pol models agree with each other
                                                </span> &nbsp;
                                                <span className="info">
                                                                Communications in Nonlinear Science and Numerical Simulation 83, 105–149  <b>2020</b>
                                                </span>
                                                <span className="sun">
                                                                ☀ sun
                                                </span>
                                                <span className="oscillators">
                                                                <FeatherIcon icon="git-pull-request" size="12"/> oscillators 
                                                </span>
                                </li>
                                <li> 
                                                <span className="rainbow2">
                                                           A Savostianov, A Shapoval, M Shnirman 
                                                </span> &nbsp;
                                                <span className="title">
                                                                The inverse problem for the Kuramoto model of two nonlinear coupled oscillators driven by applications to solar activity
                                                </span> &nbsp;
                                                <span className="info">
                                                                Physica D: Nonlinear Phenomena 401, 132–160 <b>2020</b>
                                                </span>
                                                <span className="sun">
                                                                ☀ sun
                                                </span>
                                                <span className="oscillators">
                                                                <FeatherIcon icon="git-pull-request" size="12"/> oscillators 
                                                </span>
                                </li>
                                <li> 
                                                <span className="rainbow2">
                                                                V Savinova, A Savostianov, O Tsoy, S Ulyanov, S Razin, M Gelfand, E Khrameeva, A Galitsyna
                                                </span> &nbsp;
                                                <span className="title">
                                                                Prediction of Dictyostelium discoideum chromatin loops from genomic sequence
                                                </span> &nbsp;
                                                <span className="info">
                                                                <b>2019</b>
                                                </span>
                                                <span className="dna">
                                                                🧬 dna
                                                </span>
                                </li>
                                <li> 
                                                <span className="rainbow2">
                                                                AA Nikitin, AS Savost’yanov
                                                </span> &nbsp;
                                                <span className="title">
                                                                Nontrivial stationary points of two-species self-structured communities
                                                </span> &nbsp;
                                                <span className="info">
                                                                Moscow University Computational Mathematics and Cybernetics 41 (3), 122–129 <b>2017</b>
                                                </span>
                                                <span className="bio">
                                                                🐮 bio
                                                </span>
                                </li>
                </ul>
            </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Publications</title>
