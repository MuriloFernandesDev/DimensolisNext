import { formatarMoeda, soNumerosInput } from "../utils/masks";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { api } from "../services/apiconfig";
import Image from "next/image";
import styles from "../styles/styles.module.scss";
import AbracadeiraImg from "../assets/images/abracadeira.png";
import AdaptadorImg from "../assets/images/adaptador.png";
import QuebraVacuoImg from "../assets/images/quebra_vacuo.png";
import TampaoImg from "../assets/images/tampao.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import PiscinaImg from "../assets/images/piscina.svg";
import Head from "next/head";
import FrameImg from "../assets/images/Frame.svg";
import SolarImg from "../assets/images/solar.svg";

export default function Piscina({ data }: any): JSX.Element {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [state, setState] = useState<any>();
    const [city, setCity] = useState<any>();
    const [citySelected, setCitySelected] = useState<any>();
    const [climate, setClimate] = useState<any>();
    const [conditions, setConditions] = useState<any>();
    const [aplication, setAplication] = useState<any>();
    const [area, setArea] = useState<any>();
    const [showModal, setShowModal] = useState(false);
    const [areaModal, setAreaModal] = useState();
    const [qtdAbracadeiraModal, setQtdAbracadeiraModal] = useState();
    const [qtdAdaptadorModal, setQtdAdaptadorModal] = useState();
    const [qtdTampaModal, setQtdTampaModal] = useState();
    const [qtdVacuoModal, setQtdVacuoModal] = useState();
    const [coletoresModal, setColetoresModal] = useState();
    const [temperaturaModal, setTemperaturaModal] = useState();
    const [cityClimate, setCityClimate] = useState<any>();

    const handleSubmit = async (event: any) => {
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
        if (!climate) {
            toast.error("Selecione o tipo de clima!");
            return;
        }
        if (!conditions) {
            toast.error("Selecione uma condição!");
            return;
        }
        if (!aplication) {
            toast.error("Selecione uma aplicação!");
            return;
        }
        if (
            name &&
            email &&
            state &&
            citySelected &&
            climate &&
            conditions &&
            aplication
        ) {
            const data = {
                weather: parseInt(climate),
                city: parseInt(citySelected),
                area: parseInt(area),
                application: aplication,
                conditions: conditions,
            };

            try {
                const response = await api.post(`pool`, data);

                if (response.data.error) {
                    toast.custom((t) => (
                        <div
                            className={`${
                                t.visible ? "animate-enter" : "animate-leave"
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
                                            passHref
                                        >
                                            <a>
                                                {" "}
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
                } else {
                    //seta estados do modal
                    setAreaModal(response.data.area_necessaria);
                    setQtdAbracadeiraModal(response.data.qtd_abracadeira);
                    setQtdAdaptadorModal(response.data.qtd_adaptador);
                    setQtdTampaModal(response.data.qtd_tampao);
                    setQtdVacuoModal(response.data.qtd_quebravacuo);
                    setColetoresModal(response.data.qtd_coletores_piscina);
                    setTemperaturaModal(response.data.temperatura_alcancada);
                    //abre modal
                    setShowModal(!showModal);
                }
            } catch (error) {
                toast.error("erro no sevidor");
            }
        }

        //exibir modal se ocorrer tudo bem
    };

    useEffect(() => {
        data?.map((res: any) => {
            return res.id === parseInt(state) ? setCity(res.cities) : null;
        });
    }, [state]);

    useEffect(() => {
        const GetClimate = async () => {
            if (citySelected !== undefined && citySelected !== "DEFAULT") {
                try {
                    const { data } = await api.get(`cities/${citySelected}`);
                    setClimate(data.weather_id);
                    setCityClimate(data.weather_id);
                } catch (error) {
                    return;
                }
                return;
            }
            return;
        };
        GetClimate();
    }, [citySelected]);

    return (
        <>
            <Head>
                <title>
                    Piscina | Dimensolis - Calculadora de Energia Solar
                    Fotovoltaica da Solis
                </title>
            </Head>
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
                            (showModal !== true ? " modal-toggle" : "")
                        }
                    >
                        <label
                            className="modal-box w-[500px] bg-white flex flex-col gap-6 p-10 relative"
                            htmlFor=""
                        >
                            <div className="flex justify-center">
                                <h1 className="md:text-4xl text-2xl font-extrabold text-primary-content">
                                    Kit de instalação
                                </h1>
                            </div>
                            <div className="flex flex-col text-center md:flex-row">
                                <div className="flex gap-5 flex-wrap justify-center">
                                    <div className="flex flex-col items-center justify-center gap-1 relative">
                                        <span className="badge badge-warning absolute font-semibold -mt-24 -ml-14">
                                            {qtdAbracadeiraModal}X
                                        </span>
                                        <Image
                                            src={AbracadeiraImg}
                                            layout="fixed"
                                            width={50}
                                            height={50}
                                            alt="Abracadeira Dimensolis"
                                        ></Image>
                                        <span className="font-bold text-black">
                                            Abraçadeira
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-1 relative">
                                        <span className="badge badge-warning absolute font-semibold -mt-24 -ml-20">
                                            {qtdAdaptadorModal}X
                                        </span>
                                        <Image
                                            alt="Adaptador Dimensolis"
                                            src={AdaptadorImg}
                                            layout="fixed"
                                            width={50}
                                            height={50}
                                        ></Image>
                                        <span className="font-bold text-black">
                                            Adaptador
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-1 relative">
                                        <span className="badge badge-warning absolute font-semibold -mt-24 -ml-16">
                                            {qtdVacuoModal}X
                                        </span>
                                        <Image
                                            alt="Vacuo Dimensolis"
                                            src={QuebraVacuoImg}
                                            layout="fixed"
                                            width={50}
                                            height={50}
                                        ></Image>
                                        <span className="font-bold text-black">
                                            Quebra-vácuo
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-1 relative">
                                        <span className="badge badge-warning absolute font-semibold -mt-24 -ml-16">
                                            {qtdTampaModal}X
                                        </span>
                                        <Image
                                            alt="Tampao Dimensolis"
                                            src={TampaoImg}
                                            layout="fixed"
                                            width={50}
                                            height={50}
                                        ></Image>
                                        <span className="font-bold text-black">
                                            Tampão
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src={PiscinaImg}
                                        layout="fixed"
                                    ></Image>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col items-start text-primary-content">
                                        <span className="md:text-lg font-normal">
                                            Faixa de temperatura
                                        </span>
                                        <span className="md:text-4xl font-extrabold">
                                            Da Piscina
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="md:text-3xl font-extrabold text-warning">
                                            {temperaturaModal}
                                        </span>
                                        <span className="md:text-lg font-normal  text-primary-content">
                                            Graus Celsius
                                        </span>
                                    </div>
                                </div>
                                <div className="divider lg:divider-horizontal" />
                                <div className="flex flex-col gap-4 text-primary-content">
                                    <div className="flex flex-col items-center ">
                                        <span className="md:text-4xl font-extrabold">
                                            {areaModal}
                                        </span>
                                        <span className="md:text-lg font-normal">
                                            Área Coletora (m²)
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="md:text-4xl font-extrabold">
                                            {coletoresModal}
                                        </span>
                                        <span className="md:text-lg font-normal text-center">
                                            Coletores necessários
                                        </span>
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
                        Calculadora de Aquecedor Solar para Piscina
                    </h1>
                    <p className="text-sm text-gray-400 mt-4">
                        Para simular o tamanho de um sistema de aquecimento
                        solar, utilize a Calculadora de Aquecedor Solar
                        Dimensolis. Basta preencher os campos abaixo, informar
                        seu nome e email e clicar em calcular. Para solicitar um
                        orçamento, clique no botão do whats app no rodapé da
                        página. Preencha os campos abaixo com todos os dados
                        para simular o consumo mensal e os equipamentos
                        necessários.
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
                                className="input input-ghost w-full bg-gray-100"
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
                                defaultValue={"DEFAULT"}
                                className="select select-ghost bg-gray-100"
                                onChange={(e) => setState(e.target.value)}
                            >
                                <option value="DEFAULT" disabled>
                                    ...
                                </option>

                                {data?.map((response: any) => (
                                    <option
                                        key={response.id + response.name}
                                        value={response.id}
                                    >
                                        {response.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Selecione a cidade
                                </span>
                            </label>
                            <select
                                defaultValue={"DEFAULT"}
                                className="select select-ghost bg-gray-100"
                                onChange={(event) =>
                                    setCitySelected(event.target.value)
                                }
                            >
                                <option value="DEFAULT" disabled>
                                    ...
                                </option>
                                {city?.map((res: any) => (
                                    <option
                                        key={res.id + res.name}
                                        value={res.id}
                                    >
                                        {res.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Tipo de clima
                                </span>
                            </label>
                            <select
                                defaultValue={"DEFAULT"}
                                className="select select-ghost bg-gray-100"
                                onChange={(e) => setClimate(e.target.value)}
                            >
                                {cityClimate === 1 ? (
                                    <option value={1} selected>
                                        Muito frio
                                    </option>
                                ) : cityClimate === 2 ? (
                                    <option value={2} selected>
                                        Frio
                                    </option>
                                ) : cityClimate === 3 ? (
                                    <option value={3} selected>
                                        Quente
                                    </option>
                                ) : cityClimate === 4 ? (
                                    <option value={4} selected>
                                        Muito quente
                                    </option>
                                ) : (
                                    <>
                                        <option value="DEFAULT">...</option>
                                        <option value={1}>Muito frio</option>
                                        <option value={2}>Frio</option>
                                        <option value={3}>Quente</option>
                                        <option value={4}>Muito quente</option>
                                    </>
                                )}
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Condição da piscina
                                </span>
                            </label>
                            <select
                                defaultValue={"DEFAULT"}
                                className="select select-ghost bg-gray-100"
                                onChange={(e) => setConditions(e.target.value)}
                            >
                                <option value="DEFAULT" selected>
                                    ...
                                </option>
                                <option value={"aberta"}>Aberta</option>
                                <option value={"fechada"}>Fechada</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Aplicação
                                </span>
                            </label>
                            <select
                                defaultValue={"DEFAULT"}
                                className="select select-ghost bg-gray-100"
                                onChange={(e) => setAplication(e.target.value)}
                            >
                                <option value="DEFAULT" selected>
                                    ...
                                </option>
                                <option value={"clube"}>Clube</option>
                                <option value={"residencial"}>
                                    Residencial
                                </option>
                                <option value={"academia"}>Academia</option>
                                <option value={"spa"}>SPA</option>
                                <option value={"fisioterapia"}>
                                    Fisioterapia
                                </option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Área da piscina (m²)
                                </span>
                            </label>
                            <input
                                onChange={(e) => setArea(e.target.value)}
                                type="tel"
                                maxLength={2}
                                onKeyUp={(e) => soNumerosInput(e)}
                                className="input input-ghost w-full bg-gray-100"
                            />
                        </div>
                        <div></div>
                        <div className="form-control gap-2 grid grid-cols-2  items-end w-full">
                            <button
                                onClick={handleSubmit}
                                className="btn btn-warning text-xs"
                            >
                                Calcular
                            </button>
                            <button className="btn btn-warning text-xs">
                                Solicitar Orçamento
                            </button>
                        </div>
                    </form>

                    <div className="mt-10">
                        <span className="w-full text-xs text-black">
                            Observações: <br />1 - O dimensionamento acima
                            considera o uso obrigatório de capa térmica na
                            piscina por no mínimo 12 horas/dia no período
                            noturno; <br />2 - Autonomia de aquecimento da
                            piscina de até 8 meses por ano na faixa de
                            temperatura apresentada; <br />3 - Dimensionamento
                            dos coletores solares considera ausência de
                            sombreamento, orientação norte geográfico e
                            inclinação máxima de 15°.
                        </span>
                    </div>
                    <div className="grid grid-cols-1 gap-5 my-10 md:grid-cols-2">
                        <div>
                            <p className="text-primary-content font-bold text-2xl">
                                Conheça nossos produtos
                            </p>
                            <div className="bg-none rounded-xl transition-all duration-300 md:hover:scale-105">
                                <Link
                                    href={
                                        "https://solissolar.com.br/sistema-fotovoltaico/"
                                    }
                                >
                                    <a target={"_blank"}>
                                        <Image
                                            src={FrameImg}
                                            layout="responsive"
                                            alt="Inversor Dimensolis"
                                        ></Image>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p className="text-primary-content font-bold text-2xl">
                                Catálogo digital
                            </p>
                            <div className="bg-none rounded-xl transition-all duration-300 md:hover:scale-105">
                                <Link
                                    href={
                                        "https://solissolar.com.br/sistema-fotovoltaico/"
                                    }
                                >
                                    <a target={"_blank"}>
                                        <Image
                                            alt="Catalogo Dimensolis"
                                            src={SolarImg}
                                            layout="responsive"
                                        ></Image>
                                    </a>
                                </Link>
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
