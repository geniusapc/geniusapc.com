'use client';
import React from 'react'
import { CertItem } from './CertOfCompletion'
import { certifications } from '@/resources'

export const MajorCert = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 border-l-2 border-blue200">
            {certifications.majorCert.map((cert, index) => (
                <CertItem key={cert.title} title={cert.title} link={cert.href} imgSrc={cert.imgSrc} index={index} />
            ))}
        </div>
    )
}
