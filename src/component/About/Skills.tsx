import { technologies } from "@/resources";
import { SkillEnumComponent, SkillEnumMember } from "./SkillsEnum";

const Skills = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="text-green-800 italic text-sm mb-4">
                {'//'} Not limited to these technologies{' '}
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