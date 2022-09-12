import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (
        <div className="navbar p-0 pt-2 flex-col h-20 md:h-28 fixed z-50 bg-primary">
            <div className="max-w-7xl px-6 mx-auto w-full justify-between">
                <div className="self-baseline w-44 md:w-60">
                    <Link href={"/"}>
                        <a>
                            <Image
                                src={logo}
                                alt="Logo Dimensolis"
                                quality={100}
                            />
                        </a>
                    </Link>
                </div>
                <div>
                    <div className="hidden sm:flex gap-3">
                        <Link href={"/"} passHref>
                            <a className="btn btn-ghost normal-case text-sm font-semibold text-gray-500">
                                Fotovoltaico
                            </a>
                        </Link>
                        <Link href={"/banho"} passHref>
                            <a className="btn btn-ghost normal-case text-sm font-semibold text-gray-500">
                                Banho
                            </a>
                        </Link>
                        <Link href={"/piscina"} passHref>
                            <a className="btn btn-ghost normal-case text-sm font-semibold text-gray-500">
                                Piscina
                            </a>
                        </Link>
                        <Link
                            href={
                                "https://api.whatsapp.com/send?phone=5518996241104"
                            }
                            passHref
                        >
                            <a className="btn btn-warning normal-case text-sm font-semibold text-primary">
                                Solicite um orçamento
                            </a>
                        </Link>
                    </div>

                    <div className="dropdown dropdown-end sm:hidden">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-white rounded-box w-52 z-50"
                        >
                            <Link href={"/"} passHref>
                                <a className="btn btn-ghost normal-case text-sm font-semibold text-gray-500">
                                    Fotovoltaico
                                </a>
                            </Link>

                            <Link href={"/banho"} passHref>
                                <a className="btn btn-ghost normal-case text-sm font-semibold text-gray-500">
                                    Banho
                                </a>
                            </Link>
                            <Link href={"/piscina"} passHref>
                                <a className="btn btn-ghost normal-case text-sm font-semibold text-gray-500">
                                    Piscina
                                </a>
                            </Link>
                            <Link
                                href={
                                    "https://api.whatsapp.com/send?phone=5518996241104"
                                }
                                passHref
                            >
                                <a className="btn btn-warning normal-case text-sm font-semibold text-primary">
                                    Solicite um orçamento
                                </a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-9 mt-2 w-full bg-secondary">
                <div className="max-w-7xl w-full h-full py-[10px] mx-auto flex px-6 sm:pr-10 sm:justify-end gap-4 text-white">
                    <Link href={"https://www.facebook.com/solissolaroficial"}>
                        <a className="contents" target={"_blank"}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </Link>
                    <Link
                        href={
                            "https://www.youtube.com/channel/UCqFPgmLqBS8-ng8xisHudVg"
                        }
                    >
                        <a className="contents" target={"_blank"}>
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </Link>
                    <Link
                        href={
                            "https://www.linkedin.com/in/solis-solar-b8b674149/"
                        }
                    >
                        <a className="contents" target={"_blank"}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </Link>
                    <Link
                        href={"https://www.instagram.com/solissolaroficial/"}
                        target={"_blank"}
                    >
                        <a className="contents" target={"_blank"}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
