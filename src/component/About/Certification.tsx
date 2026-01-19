import { CertOfCompletion } from './CertOfCompletion';
import { MajorCert } from './MajorCert';

const CertHeader = ({ text, level = 2 }: { text: string; level?: number }) => {
    const hashes = '#'.repeat(level);
    return (
        <h2 className="font-mono mb-4 xs:mb-6 mt-6 xs:mt-10 flex items-center gap-2 xs:gap-3">
            <span className="text-purple-400 text-sm xs:text-base">{hashes}</span>
            <span className="text-white text-sm xs:text-base md:text-lg">{text}</span>
            <span className="flex-1 h-px bg-gradient-to-r from-gray300 to-transparent ml-2 xs:ml-4"></span>
        </h2>
    );
};

const Certification = () => {
    return (
        <div className="font-mono">
            {/* Markdown file header */}
            <div className="text-gray-500 text-xs xs:text-sm mb-4 xs:mb-6 border-b border-gray300 pb-3 xs:pb-4">
                <span className="text-gray-600">---</span>
                <div className="pl-2">
                    <div className="truncate"><span className="text-blue-400">title</span>: <span className="text-green-400">&quot;Certifications & Achievements&quot;</span></div>
                    <div><span className="text-blue-400">author</span>: <span className="text-green-400">&quot;Prince Arthur&quot;</span></div>
                </div>
                <span className="text-gray-600">---</span>
            </div>

            <CertHeader text="Professional Certifications" />
            <MajorCert />
            <CertHeader text="Certificates of Completion" />
            <CertOfCompletion />
        </div>
    );
};

export default Certification;
