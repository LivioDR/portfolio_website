import React from "react";
import Image from "next/image";

const styles = {
    borderRadius: 50,
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
}

const BodyImage = ({viewportSize = {width: 20}}) => {
    const imgWidth = viewportSize.width * 0.3
    return(
        <Image
            src={'/LivioPhoto.jpg'}
            alt={'test image'}
            width={imgWidth}
            height={imgWidth * 1.5}
            priority
            style={styles}
        />
    )
}
export default BodyImage