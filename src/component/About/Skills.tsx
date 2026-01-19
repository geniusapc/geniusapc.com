import { technologies } from "@/resources";
import { SkillEnumComponent, SkillEnumMember } from "./SkillsEnum";

const Skills = () => {
    return (
        <div className="flex flex-col gap-2">
            {/* File header comment */}
            <div className="font-mono text-sm mb-4">
                <span className="text-gray-500">{'/**'}</span>
                <div className="text-gray-500 pl-1">{'*'} <span className="text-green-400">@file</span> skills.ts</div>
                <div className="text-gray-500 pl-1">{'*'} <span className="text-green-400">@description</span> Technical skills and expertise</div>
                <div className="text-gray-500 pl-1">{'*'} <span className="text-yellow-400">@note</span> Not limited to these technologies</div>
                <span className="text-gray-500">{' */'}</span>
            </div>

            <SkillEnumComponent title="Backend">
                <SkillEnumMember list={technologies.backend} />
            </SkillEnumComponent>

            <SkillEnumComponent title="Frontend">
                <SkillEnumMember list={technologies.frontend} />
            </SkillEnumComponent>

            <SkillEnumComponent title="DevOps">
                <SkillEnumMember list={technologies.devOps} />
            </SkillEnumComponent>
        </div>
    );
};
export default Skills