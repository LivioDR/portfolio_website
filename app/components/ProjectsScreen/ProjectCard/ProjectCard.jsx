import React from "react";
import Image from "next/image";
import Badges from "../Badges/Badges";
import CTAButton from "../../HomeScreen/CTAButton";


const cardStyles = {
    container: {
        width: 'fit-content',
        backgroundColor: 'var(--light-main)',
        color: 'var(--main-color)',
    },
    btnContainer: {
        positionItems: 'center',
    },
}


const ProjectsCard = ({info}) => {

    return(
        <div style={cardStyles.container} className="flex flex-col min-w-[350px] max-w-min md:max-w-screen-md md:w-10/12 h-[600px] md:h-[550px] justify-between rounded-lg py-4 px-2 mx-auto">

            <h3 className="text-center text-xl my-2">{info.name}</h3>

            <div className="md:flex md:flex-row md:w-full md:min-w-[650px] md:mx-auto">

                <div className="mx-auto md:w-2/3">
                    <div className="min-w-[275px] md:w-full mx-auto justify-center items-center flex">
                        <Image
                        src={info.img}
                        width={250}
                        height={125}
                        alt={info.imgAlt}
                        className="aspect-video w-10/12"
                        />
                    </div>
                    <p className="my-4 px-2 w-10/12 mx-auto text-justify block">
                        {info.desc}
                    </p>
                </div>

                {/* BADGES */}
                {/* MOBILE */}
                <div className="flex flex-row flex-wrap justify-start w-min-max md:hidden">
                    {info.features.map(badgeName =><Badges key={badgeName+info.name} name={badgeName}/>)}
                </div>
                {/* DESKTOP */}
                <div className="w-1/3 max-h-min flex-row flex-wrap justify-start mx-auto mt-2 hidden md:flex">
                    {info.features.map(badgeName =><Badges key={badgeName+info.name} name={badgeName}/>)}
                </div>

            </div>
            <div style={cardStyles.btnContainer} className="md:hidden grid">
                <CTAButton text="Visit" styleToUse={'card'} hrefValue={info.link} />
            </div>
            <div style={cardStyles.btnContainer} className="hidden md:grid">
                <CTAButton text="Visit" styleToUse={'form'} hrefValue={info.link} />
            </div>
        </div>
    )
}
export default ProjectsCard