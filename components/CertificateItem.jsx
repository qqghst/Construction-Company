import React from "react";
import Image from "next/image";
import Link from "next/link";

const CertificateItem = ({ id }) => {
    return (
        <div>
            <Image
                src={`/assets/certificates/certificate_${id}.jpg`}
                alt='certificate'
                width={270}
                height={340}
            />
        </div>
    )
}

export default CertificateItem;