import Image from "next/image";
import FooterImg from "../../../public/image8.png";
import BF1Img from "../../../public/banners/BF1.svg";
import BF2Img from "../../../public/banners/BF2.svg";
import BF3Img from "../../../public/banners/BF3.svg";
import BF4Img from "../../../public/banners/BF4.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Footer = () => {
    const [showBanner, setShowBanner] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (router.asPath === "/") {
            setShowBanner(true);
        } else {
            setShowBanner(false);
        }
    }, [router]);

    return (
        <div className="py-10 bg-secondary">
            {showBanner == true ? (
                <div className="w-full justify-around gap-5 max-w-7xl mx-auto mb-10 flex">
                    <Image src={BF1Img} layout="fixed"></Image>
                    <Image src={BF2Img} layout="fixed"></Image>
                    <Image src={BF3Img} layout="fixed"></Image>
                    <Image src={BF4Img} layout="fixed"></Image>
                </div>
            ) : (
                ""
            )}

            <div className="max-w-7xl mx-auto flex justify-between items-end pl-10">
                <div>
                    <div>
                        <h1> Solis Solar © Todos os direitos reservados</h1>
                        <p>
                            Horários de Funcionamento: Seg a Sex 07:00–12:00,
                            13:30–17:20
                        </p>
                        <p>
                            {" "}
                            Rua João Galo, 1655 – Bosque da Saúde Birigui – SP –
                            16200-381
                        </p>
                    </div>
                    <div className="w-full h-full flex gap-4 text-white mt-2">
                        <Link
                            href={"https://www.facebook.com/solissolaroficial"}
                        >
                            <a className="contents" target={"_blank"}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </Link>
                        <Link
                            href={
                                "https://www.youtube.com/channel/UCqFPgmLqBS8-ng8xisHudVg"
                            }
                            passHref
                        >
                            <a className="contents" target={"_blank"}>
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </Link>
                        <Link
                            href={
                                "https://www.linkedin.com/in/solis-solar-b8b674149/"
                            }
                            passHref
                        >
                            <a className="contents" target={"_blank"}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </Link>
                        <Link
                            href={
                                "https://www.instagram.com/solissolaroficial/"
                            }
                            passHref
                        >
                            <a className="contents" target={"_blank"}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="w-44 h-20">
                    <Image src={FooterImg} layout="responsive"></Image>
                </div>
            </div>
        </div>
    );
};
export default Footer;
