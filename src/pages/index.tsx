import Image from "next/image";
import InversoresImg from "../assets/images/inversores.svg";
import CatalogoImg from "../assets/images/fotosolis.svg";
import { api } from "../services/apiconfig";
import { useEffect, useState } from "react";
import styles from "../styles/styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { apenasNumeros, apenasString, formatarMoeda } from "../utils/masks";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Inversor1Img from "../assets/images/inversor1.svg";
import Inversor2Img from "../assets/images/inversor2.svg";

export default function Fotovoltaico({ data }: any): JSX.Element {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [state, setState] = useState<any>();
    const [city, setCity] = useState<any>([{}]);
    const [citySelected, setCitySelected] = useState<any>();
    const [tariff, setTariff] = useState<any>(0.7);
    const [invoice, setInvoice] = useState<any>();
    const [inverter, setInverter] = useState<string | number>();
    const [showModal, setShowModal] = useState(false);
    const [inverterModal, setInverterModal] = useState();
    const [moduleModal, setModuleModal] = useState();
    const [descriptionModal, setDescriptionModal] = useState();
    const [generationModal, setGenerationModal] = useState();

    const handleSubmit = async () => {
        if (!name) {
            toast.error("insira o campo nome!");
            return;
        }
        if (!email) {
            toast.error("insira o campo email!");
            return;
        }
        if (!state) {
            toast.error("Selecione um estado!");
            return;
        }
        if (!citySelected) {
            toast.error("Selecione uma cidade!");
            return;
        }
        if (!tariff) {
            toast.error("Insira a tarifa!");
            return;
        }
        if (!invoice) {
            toast.error("Insira sua fatura!");
            return;
        }
        if (!inverter) {
            toast.error("Selecione seu inversor!");
            return;
        }
        if (
            name &&
            email &&
            state &&
            citySelected &&
            tariff &&
            invoice &&
            inverter
        ) {
            const data = {
                inversor: inverter,
                city: citySelected,
                invoice: invoice
                    .replace("R$", "")
                    .replace(/,/g, "")
                    .replace(/ /g, "")
                    .replace("00", ""),
                tax: tariff,
            };

            try {
                const response = await api.post(`photovoltaic`, data);

                if (response.data.error) {
                    if (
                        response.data.error ==
                        "Para Kits acima de 40 módulos fotovoltaicos, consultar a Solis"
                    ) {
                        toast.custom((t) => (
                            <div
                                className={`${
                                    t.visible
                                        ? "animate-enter"
                                        : "animate-leave"
                                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                            >
                                <div className="flex-1 w-0 p-4">
                                    <div className="flex items-start">
                                        <div className="ml-3 flex flex-row-reverse items-center justify-center gap-3">
                                            <p className="text-sm font-medium text-info-content">
                                                {response.data.error}
                                            </p>
                                            <Link
                                                href={`https://wa.me/5518996241104?text=Tentei%20usar%20a%20calculadora%20online%20e%20recebi%20essa%20mensagem:%20${response.data.error}`}
                                                target={"_blank"}
                                            >
                                                <a
                                                    className="contents"
                                                    target={"_blank"}
                                                >
                                                    <FontAwesomeIcon
                                                        className="w-10 h-10 text-warning"
                                                        icon={faWhatsapp}
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex border-l border-gray-200">
                                    <button
                                        onClick={() => toast.dismiss(t.id)}
                                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-info-content"
                                    >
                                        Fechar
                                    </button>
                                </div>
                            </div>
                        ));

                        return;
                    }
                    toast.error(response.data.error);
                    return;
                }
                setDescriptionModal(response.data.description);
                setGenerationModal(response.data.generation);
                setModuleModal(response.data.modules);
                setInverterModal(response.data.inversors);
                setShowModal(!showModal);
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        data.map((res: any) => {
            return res.id === parseInt(state) ? setCity(res.cities) : null;
        });
    }, [state]);

    return (
        <>
            {showModal === true ? (
                <>
                    <input
                        type="checkbox"
                        id="my-modal-4"
                        className="modal-toggle"
                        onClick={() => setShowModal(!showModal)}
                    />
                    <label
                        htmlFor="my-modal-4"
                        className={
                            styles.modal +
                            (showModal !== true ? " modal-toggle " : "")
                        }
                    >
                        <label
                            className="modal-box w-[450px] bg-white flex flex-col gap-4 relative"
                            htmlFor=""
                        >
                            {/* <div className="w-full flex gap-3 pb-28">
                                <div className="w-20 h-8">
                                    <Image
                                        src={Inversor1Img}
                                        layout="responsive"
                                    ></Image>
                                </div>
                                <div className="w-14 h-8">
                                    <Image
                                        src={Inversor2Img}
                                        layout="fixed"
                                    ></Image>
                                </div>
                            </div> */}
                            <div className="flex items-center flex-col text-center w-full md:text-start md:flex-row gap-3 md:gap-0">
                                <div className="flex w-full justify-center md:justify-start">
                                    {" "}
                                    <h1 className="text-3xl font-extrabold text-primary-content">
                                        Gasto médio
                                        <br />
                                        <span className="font-medium">
                                            de energia elétrica
                                        </span>
                                    </h1>
                                </div>

                                <div className="flex">
                                    <FontAwesomeIcon
                                        icon={faBolt}
                                        className="h-16 text-warning"
                                    ></FontAwesomeIcon>
                                    <div className="flex flex-col items-center">
                                        {" "}
                                        <p className="text-6xl font-bold text-primary-content">
                                            {generationModal}
                                        </p>
                                        <p className="text-primary-content text-base">
                                            kWh/mês
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex flex-col w-1/2">
                                    <h1 className="text-warning text-5xl font-bold">
                                        {apenasNumeros(descriptionModal)}
                                    </h1>
                                    <p className="text-sm text-primary-content">
                                        <span className="text-warning font-semibold">
                                            kWp -{" "}
                                        </span>{" "}
                                        {apenasString(descriptionModal)}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 w-1/2">
                                    <div className="flex flex-col items-center">
                                        <p className="text-6xl font-bold text-primary-content">
                                            {moduleModal}
                                        </p>
                                        <p className="text-base text-primary-content">
                                            Módulos
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p className="text-6xl font-bold text-primary-content">
                                            {inverterModal}
                                        </p>
                                        <p className="text-base text-primary-content">
                                            Inversores
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-3">
                                <a
                                    onClick={() => setShowModal(!showModal)}
                                    className="btn btn-warning w-full font-bold text-black"
                                >
                                    Calcular novamente
                                </a>
                                <a
                                    href="https://api.whatsapp.com/send?phone=5518996241104"
                                    rel="noopener"
                                    className="btn btn-warning w-full font-bold text-black"
                                >
                                    Orçamento
                                </a>
                            </div>
                        </label>
                    </label>
                </>
            ) : (
                ""
            )}
            <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col">
                    <h1 className="text-primary-content text-2xl font-bold leading-tight md:text-5xl">
                        Calculadora de Energia Solar Fotovoltaica
                    </h1>

                    <p className="text-sm text-gray-400 mt-4">
                        A Calculadora de Energia Solar Fotovoltáica é que uma
                        ferramenta virtual para a simulação do custo e tamanho
                        de um sistema de energia solar. Preencha os campos
                        abaixo com todos os dados para simular o consumo mensal
                        e os equipamentos necessários.
                    </p>

                    <form
                        onSubmit={(event) => event.preventDefault()}
                        className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
                    >
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Digite seu nome
                                </span>
                            </label>
                            <input
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                type="text"
                                className="input input-ghost bg-gray-100 w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Digite seu e-mail
                                </span>
                            </label>
                            <input
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                type="email"
                                className="input input-ghost w-full bg-gray-100"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Selecione o estado
                                </span>
                            </label>

                            <select
                                defaultValue="00"
                                className="select select-ghost bg-gray-100"
                                onChange={(e) => setState(e.target.value)}
                            >
                                <option value="00" selected>
                                    ...
                                </option>

                                {data.map((response: any) => {
                                    return (
                                        <option
                                            key={response.id}
                                            value={response.id}
                                        >
                                            {response.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Selecione a cidade
                                </span>
                            </label>
                            <select
                                defaultValue="1"
                                className="select select-ghost bg-gray-100"
                                onChange={(event) =>
                                    setCitySelected(event.target.value)
                                }
                            >
                                <option selected value="1">
                                    ...
                                </option>
                                {city?.map((res: any) => {
                                    return (
                                        <option key={res.id} value={res.id}>
                                            {res.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Tarifa (R$/kWh)
                                </span>
                            </label>
                            <input
                                onKeyUp={(e) => formatarMoeda(e)}
                                onChange={(event: any) =>
                                    setTariff(event.target.value)
                                }
                                type="tel"
                                className="input input-ghost w-full bg-gray-100"
                                value={tariff}
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Fatura (R$/mês)
                                </span>
                            </label>
                            <input
                                onKeyUp={(e) => formatarMoeda(e)}
                                onChange={(event) =>
                                    setInvoice(event.target.value)
                                }
                                type="tel"
                                className="input input-ghost w-full bg-gray-100"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Selecione o inversor
                                </span>
                            </label>
                            <select
                                defaultValue="0"
                                className="select select-ghost bg-gray-100"
                                onChange={(e) => {
                                    setInverter(e.target.value);
                                }}
                            >
                                <option value="0" selected>
                                    ...
                                </option>
                                <option value="1" selected>
                                    Afore
                                </option>
                                <option value="2">SMA</option>
                            </select>
                        </div>

                        <div className="form-control gap-2 grid grid-cols-2 items-end w-full">
                            <button
                                onClick={handleSubmit}
                                className="btn btn-warning text-xs"
                            >
                                Calcular
                            </button>
                            <Link
                                href={
                                    "https://api.whatsapp.com/send?phone=5518996241104"
                                }
                                passHref
                            >
                                <button className="btn btn-warning text-xs">
                                    Solicitar Orçamento
                                </button>
                            </Link>
                        </div>
                    </form>
                    <div className="mt-10">
                        <span className="w-full text-xs text-black">
                            Observações: <br /> 1 - Geração de energia elétrica
                            para módulos de 2 m², 405 Wp e 144 células,
                            inclinados em 15°, sem desvio do norte e sem sombra;{" "}
                            <br />2 - Geração de energia elétrica varia com o
                            recurso solar e as condições de instalação;
                            <br /> 3 – Quantidade de módulos poderá variar
                            conforme condições climáticas e de instalação;{" "}
                            <br />4 – Soluções com inversores da Growatt e
                            inversor Alemão SMA;
                        </span>
                        <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
                            <div>
                                <p className="text-primary-content font-bold text-2xl">
                                    Conheça nossos inversores
                                </p>
                                <div className="p-5 rounded-xl shadow-xl shadow-black/20 transition-all duration-300 md:hover:scale-105 md:hover:shadow-2xl">
                                    <Image
                                        src={InversoresImg}
                                        layout="responsive"
                                    ></Image>
                                </div>
                            </div>
                            <div>
                                <p className="text-primary-content font-bold text-2xl">
                                    Catálogo digital
                                </p>
                                <div className="relative -m-2 mt-1 rounded-xl shadow-xl shadow-black/20 transition-all duration-300 md:hover:scale-105 md:hover:shadow-2xl">
                                    <Image
                                        src={CatalogoImg}
                                        layout="responsive"
                                    ></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    try {
        const { data }: any = await api.get("/states");
        return {
            props: {
                data,
            },
            revalidate: 60 * 60 * 24 * 30,
        };
    } catch (error) {
        return {
            props: {
                data: null,
            },
        };
    }
}
