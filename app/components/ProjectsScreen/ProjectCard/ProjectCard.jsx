import React from "react";
import Image from "next/image";
import Badges from "../Badges/Badges";
import CTAButton from "../../HomeScreen/CTAButton";


const cardStyles = {
    container: {
        width: 'fit-content',
        maxWidth: '350px',
        backgroundColor: 'var(--light-main)',
        color: 'var(--main-color)',
        padding: '2%',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    name: {
        textAlign: 'center',
        fontSize: '1.5em',
    },
    desc: {
        margin: '2% auto',
        textAlign: 'left',
    },
    btnContainer: {
        display: 'grid',
        positionItems: 'center',
    },
}


const ProjectsCard = ({info}) => {

    return(
        <div style={cardStyles.container} className="mx-4">
            <h3 style={cardStyles.name}>{info.name}</h3>
            <div className="min-w-[275px] my-2 justify-center items-center flex">
                <Image
                src={info.img}
                width={250}
                height={125}
                alt={info.imgAlt}
                style={{objectFit: 'cover'}}
                />
            </div>
            <p className="my-4 text-justify">
                {info.desc}
            </p>
            <div className="flex flex-row flex-wrap justify-start w-min-max">
                {info.features.map(badgeName =><Badges key={badgeName+info.name} name={badgeName}/>)}
            </div>
            <div style={cardStyles.btnContainer}>
                <CTAButton text="Visit" styleToUse={'card'} hrefValue={info.link} />
            </div>
        </div>
    )
}
export default ProjectsCard