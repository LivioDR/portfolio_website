import React from "react";
import Image from "next/image";
import Badges from "../Badges/Badges";
import CTAButton from "../../HomeScreen/CTAButton";


const cardStyles = {
    container: {
        width: 'fit-content',
        maxWidth: '350px',
        margin: '0% 5%',
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
    imgContainer: {
        margin: '2% auto',

    },
    badgesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        width: 'fit-content',

    },
    btnContainer: {
        display: 'grid',
        positionItems: 'center',
    },
}


const ProjectsCard = ({info}) => {

    const visitWebsite = () => {
        if(window){
            window.open(info.link,'_blank')
        }
    }

    return(
        <div style={cardStyles.container}>
            <h3 style={cardStyles.name}>{info.name}</h3>
            <div style={cardStyles.imgContainer}>
                <Image
                src={info.img}
                width={250}
                height={125}
                alt={info.imgAlt}
                style={{objectFit: 'cover'}}
                />
            </div>
            <p style={cardStyles.desc}>
                {info.desc}
            </p>
            <div style={cardStyles.badgesContainer}>
                {info.features.map(badgeName =><Badges key={badgeName+info.name} name={badgeName}/>)}
            </div>
            <div style={cardStyles.btnContainer}>
                <CTAButton text="Visit" styleToUse={'portrait'} functionToCall={()=>{visitWebsite()}} />
            </div>
        </div>
    )
}
export default ProjectsCard