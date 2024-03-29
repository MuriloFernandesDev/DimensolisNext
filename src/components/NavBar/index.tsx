import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faYoutube,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

interface NavProps {
    children: any;
}

const Navbar = ({ children }: NavProps) => {
    const router = useRouter();
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="navbar p-0 pt-3 flex-col h-20 md:h-28 fixed z-20 bg-primary">
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
                            <div className="hidden md:flex gap-3">
                                <Link href={"/"} passHref>
                                    <a className="btn btn-ghost normal-case text-sm font-semibold text-secondary">
                                        Fotovoltaico
                                    </a>
                                </Link>
                                <Link href={"/banho"} passHref>
                                    <a className="btn btn-ghost normal-case text-sm font-semibold text-secondary">
                                        Banho
                                    </a>
                                </Link>
                                <Link href={"/piscina"} passHref>
                                    <a className="btn btn-ghost normal-case text-sm font-semibold text-secondary">
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
                        </div>

                        <label
                            className="swap inline-grid md:hidden"
                            htmlFor="my-drawer-4"
                        >
                            <input type="checkbox" />

                            <svg
                                className="swap-off fill-current text-secondary"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                            >
                                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                            </svg>
                        </label>
                    </div>
                    <div className="h-9 mt-2 w-full bg-secondary">
                        <div className="max-w-7xl w-full h-full py-[10px] mx-auto flex px-6 md:pr-10 md:justify-end gap-4 text-primary">
                            <Link
                                href={
                                    "https://www.facebook.com/solissolaroficial"
                                }
                            >
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
                                href={
                                    "https://www.instagram.com/solissolaroficial/"
                                }
                                target={"_blank"}
                            >
                                <a className="contents" target={"_blank"}>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </Link>
                            <Link
                                href={
                                    "https://api.whatsapp.com/send?phone=5518996241104"
                                }
                                target={"_blank"}
                            >
                                <a className="contents" target={"_blank"}>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                {children}
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-2/3 bg-base-100 text-secondary">
                    <label
                        htmlFor="my-drawer-4"
                        className="flex w-full justify-end"
                    >
                        <svg
                            className="swap-off fill-current text-secondary"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512"
                        >
                            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>

                    <label
                        onClick={() => router.push("/")}
                        className="btn btn-ghost normal-case w-full text-sm font-semibold text-secondary"
                        htmlFor="my-drawer-4"
                    >
                        Fotovoltaico
                    </label>

                    <label
                        onClick={() => router.push("/banho")}
                        className="btn btn-ghost normal-case w-full text-sm font-semibold text-secondary"
                        htmlFor="my-drawer-4"
                    >
                        Banho
                    </label>

                    <label
                        onClick={() => router.push("/piscina")}
                        className="btn btn-ghost normal-case w-full text-sm font-semibold text-secondary"
                        htmlFor="my-drawer-4"
                    >
                        Piscina
                    </label>

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
    );
};
export default Navbar;
