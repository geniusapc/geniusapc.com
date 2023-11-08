import { certifications } from "@/resources";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface Icert {
    name: string;
    link: string;
}

const CertOfCompletion = ({ certs, certProvider }: { certs: Icert[]; certProvider: string }) => {
    return (
        <div className="shadow-xl px-2 py-8">
            <div className="text-blue200 text-left md:text-right mb-4 text-sm mt-8  ">{certProvider}</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
                {certs.map((item) => (
                    <a key={item.name} className='cursor-pointer' href={item.link}>
                        <span className='text-sm'>{item.name}</span>
                        <FontAwesomeIcon icon={faExternalLink} className="text-blue200 ml-2  text-xs " />
                    </a>
                ))}
            </div>
        </div>
    );
};

const CertWithExternalLink = ({
    title,
    imgSrc,
    href,
}: {
    title: string;
    imgSrc: string;
    href: string;
}) => {
    return (
        <a href={href} target={'_blank'} className="flex flex-row  text-sm items-center gap-4 cursor-pointer shadow-xl py-8 px-4">
            <Image alt={title} src={imgSrc} className="rounded-2xl" width={30} height={30} />
            <span>{title}</span>
            <FontAwesomeIcon icon={faExternalLink} className="text-blue200 -ml-2  " />
        </a>
    );
};


const Certification = () => {
    return (
        <>

            <h2 className="text-center md:text-right underline decoration-wavy underline-offset-4 text-gray400  mb-6"> Certification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certifications.majorCert.map((cert) => (
                    <CertWithExternalLink
                        key={cert.title}
                        title={cert.title}
                        imgSrc={cert.imgSrc}
                        href={cert.href}
                    />
                ))}
            </div>

            <h2 className="text-center md:text-right underline  decoration-wavy  underline-offset-4 mt-12 text-gray400  mb-4"> Certificate of Completion </h2>

            <CertOfCompletion
                certProvider={'AWS Skill Builder'}
                certs={certifications.minor.awsSkillBuilder}
            />
            <CertOfCompletion
                certProvider={'Udemy'}
                certs={certifications.minor.udemy}
            />
            <CertOfCompletion
                certProvider={'Pluralsite'}
                certs={certifications.minor.pluralsite}
            />
        </>
    );
};

export default Certification
