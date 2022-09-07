import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

interface INavbar {
    className?: string;
}
export default function Navbar(props: INavbar) {
    const { className } = props;
    return (
        <div className={"navbar h-20 md:h-28 " + className}>
            <div className="max-w-7xl mx-auto w-full justify-between">
                <div className="self-baseline">
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
                    <div className="hidden sm:flex">
                        <Link href="#">
                            <a className="btn btn-ghost normal-case text-sm">
                                Fotovoltaico
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="btn btn-ghost normal-case text-sm">
                                Banho
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="btn btn-ghost normal-case text-sm">
                                Piscina
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="btn btn-ghost normal-case text-sm text-primary">
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
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
                        >
                            <li>
                                <a>Fotovoltaico</a>
                            </li>
                            <li>
                                <a>Banho</a>
                            </li>
                            <li>
                                <a>Piscina</a>
                            </li>
                            <li>
                                <a>Solicite um orçamento</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
