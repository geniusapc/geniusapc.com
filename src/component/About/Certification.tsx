import {  CertOfCompletion } from './CertOfCompletion';
import { MajorCert } from './MajorCert';

const CertHeader = ({ text }: { text: string }) => {
    return (
        <h2 className="text-center md:text-right underline decoration-wavy underline-offset-4 text-gray400  mb-6 mt-12">
            {text}
        </h2>
    );
};

const Certification = () => {
    return (
        <div>
            <CertHeader text={'Certification'} />
            <MajorCert />
            <CertHeader text={'Certificate of Completion'} />
            <CertOfCompletion />

        </div>
    );
};

export default Certification;
