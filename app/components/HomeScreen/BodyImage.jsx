import React from "react";
import Image from "next/image";

const styles = {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
}

const BodyImage = () => {

    const imgWidth = 500

    return(
        <Image
            className="w-10/12 mx-auto mt-[10%] mb-[20%] rounded-4xl"
            src={'/LivioPhoto.JPG'}
            alt={'photo of Livio Reinoso'}
            width={imgWidth}
            height={imgWidth * 1.5}
            unoptimized
            priority
            style={styles}
        />
    )
}
export default BodyImage