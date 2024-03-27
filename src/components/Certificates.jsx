import React from 'react'
import academloBackEndCertificate from '../assets/academloBackEndCertificate.jpg'
import academloFrontEndCertificate from '../assets/academloFrontEndCertificate.jpg'
import academloFullStackCertificate from '../assets/academloFullStackCertificate.jpg'
import academloFoundationsCertificate from '../assets/academloFoundationsCertificate.jpg'
import freeCodeCampCertificate from '../assets/FreeCodeCampCertificate.jpg'
import CertificateItem from './CertificateItem'

const Certificates = ({img, title}) => {
  return (
    <div id='certificates' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Certificates</h1>
        <p className='py-8 text-center'>
            Some of the certificates I have received.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <CertificateItem img={academloFullStackCertificate} title="Full Stack" tech="HTML/CSS/JavaScript/React/NodeJs/Angular"/>
            <CertificateItem img={academloBackEndCertificate} title="Back End" tech="JavaScript/NodeJs/Angular"/>
            <CertificateItem img={academloFrontEndCertificate} title="Front End" tech="HTML/CSS/JavaScript/React"/>
            <CertificateItem img={academloFoundationsCertificate} title="Programming Foundations" tech="HTML/CSS/JavaScript"/>
            <CertificateItem img={freeCodeCampCertificate} title="Web Responsive" tech="HTML/CSS"/>
        </div>
    </div>
  )
}

export default Certificates