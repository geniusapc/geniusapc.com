import Image from "next/image";
import DefaultBtn from "../Buttons/DefaultButton";
import { about } from "@/resources";

const Profile = () => {
    const goToExternalLink = (url: string, target = '_blank') => window.open(url, target);

    const { linkedIn, twitter } = about.socailLinks;
    return (
        <div className="h-full p-4  gap-8 lg:flex flex-col items-center justify-center">
            <div className="w-60 mx-auto ">
                <Image
                    src="/img/profile.jpg"
                    className="rounded-2xl"
                    alt="Prince Arthur"
                    width={240}
                    height={240}
                />
            </div>
            <div className="flex gap-4 w-full justify-center">
                <DefaultBtn Text={linkedIn.name} onClick={() => goToExternalLink(linkedIn.link)} />
                <DefaultBtn Text={twitter.name} onClick={() => goToExternalLink(twitter.link)} />
                <DefaultBtn
                    Text="Email"
                    onClick={() => goToExternalLink(`mailto: ${about.email}`, '_self')}
                />
            </div>
        </div>

    )
}
export default Profile