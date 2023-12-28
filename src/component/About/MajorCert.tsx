import React from 'react'
import { CertItem } from './CertOfCompletion'
import { certifications } from '@/resources'

export const MajorCert = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.majorCert.map((cert) => (
                <CertItem key={cert.title} title={cert.title} link={cert.href} imgSrc={cert.imgSrc} />
            ))}
        </div>
    )
}
