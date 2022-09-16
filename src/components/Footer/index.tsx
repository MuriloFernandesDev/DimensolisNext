import Image from "next/image";
import FooterImg from "../../assets/images/image8.png";
import BF1Img from "../../assets/images/banners/BF1.svg";
import BF2Img from "../../assets/images/banners/BF2.svg";
import BF3Img from "../../assets/images/banners/BF3.svg";
import BF4Img from "../../assets/images/banners/BF4.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const NameStart = ({ title }: any) => {
    return (
        <div className="flex justify-between items-center w-full">
            <FontAwesomeIcon icon={faStar} className="w-10 h-10 text-warning" />
            <span className="text-2xl font-normal text-slate-700">{title}</span>
            {title}
        </div>
    );
};

const Footer = () => {
    return (
        <div className="py-10 bg-secondary px-5">
            <div className="w-full justify-around gap-5 max-w-7xl mx-auto mb-10 grid grid-cols-2 md:grid-cols-4">
                <Link href={"https://solissolar.com.br"} passHref>
                    <a>
                        <Image
                            className="cursor-pointer"
                            src={BF1Img}
                            layout="responsive"
                        ></Image>
                    </a>
                </Link>
                <Link href={"https://shoppingsolis.com.br"} passHref>
                    <a>
                        <Image
                            className="cursor-pointer"
                            src={BF2Img}
                            layout="responsive"
                        ></Image>
                    </a>
                </Link>
                <Link href={"https://solissolar.com.br/blog/"} passHref>
                    <a>
                        <Image
                            className="cursor-pointer"
                            src={BF3Img}
                            layout="responsive"
                        ></Image>
                    </a>
                </Link>
                <Link
                    href={"https://api.whatsapp.com/send?phone=5518996241104"}
                    passHref
                >
                    <a>
                        <Image
                            className="cursor-pointer"
                            src={BF4Img}
                            layout="responsive"
                        ></Image>
                    </a>
                </Link>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col justify-between items-center gap-4 md:items-end md:flex-row">
                <div className="grid gap-4 text-center md:text-start text-primary">
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
                    <div className="w-full h-full flex gap-4 text-primary mt-2 justify-center md:justify-start">
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
                <div>
                    <Image src={FooterImg} layout="fixed"></Image>
                </div>
            </div>
        </div>
    );
};
export default Footer;
