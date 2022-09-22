import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/styles.module.scss";
import toast from "react-hot-toast";
import { api } from "../services/apiconfig";
import { soNumerosInput } from "../utils/masks";
import Image from "next/image";
import WaterImg from "../assets/images/water.png";
import GeneratorImg from "../assets/images/generator.png";
import Link from "next/link";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Banho({ data }: any) {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [state, setState] = useState<any>();
    const [city, setCity] = useState<any>();
    const [citySelected, setCitySelected] = useState<any>();
    const [climate, setClimate] = useState<any>();
    const [person, setPerson] = useState<any>();
    const [numberBaths, setNumberBaths] = useState<any>();
    const [consumer, setConsumer] = useState<any>([]);
    const [showModal, setShowModal] = useState(false);
    const [volumeModal, setVolumeModal] = useState();
    const [areaModal, setAreaModal] = useState();
    const [producModal, setProductModal] = useState<any>([]);
    const [cityClimate, setCityClimate] = useState<any>();

    const handleSubmit = async (event: any) => {
        if (!name) {
            toast.error("insira o campo nome!");
            return;
        }
        if (!consumer) {
            toast.error("Selecione o local de maior consumo de água!");
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
            toast.error("Insira um clima!");
            return;
        }
        if (!person) {
            toast.error("Insira o número de pessoas!");
            return;
        }
        if (!numberBaths) {
            toast.error("Selecione o número de banhos!");
            return;
        }
        if (
            name &&
            email &&
            state &&
            citySelected &&
            climate &&
            person &&
            numberBaths &&
            consumer
        ) {
            var newConsumer = consumer.filter(function (este: any, i: any) {
                return consumer.indexOf(este) === i;
            }); //remove os consumers repetidos

            const data = {
                weather: parseInt(climate),
                city: parseInt(citySelected),
                people: parseInt(person),
                bath: parseInt(numberBaths),
                usage: newConsumer,
            };

            try {
                const response = await api.post(`bath`, data);

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
                    setVolumeModal(response.data.volume);
                    setAreaModal(response.data.area);
                    setProductModal(response.data.product);
                    setShowModal(!showModal);
                }
            } catch (error) {
                toast.error("erro no sevidor");
            }
        }
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
                            className="modal-box w-[450px] bg-white flex flex-col gap-4 p-10 relative"
                            htmlFor=""
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={GeneratorImg}
                                    width={250}
                                    height={150}
                                    layout="fixed"
                                ></Image>
                            </div>
                            <div className="w-full flex justify-between">
                                <div className="flex flex-col justify-center">
                                    <span className="sm:text-4xl text-3xl font-extrabold text-primary-content">
                                        Demanda{" "}
                                    </span>
                                    <span className="text-xl text-primary-content font-light">
                                        litros de água
                                    </span>
                                </div>

                                <div className="flex items-center justify-end sm:justify-between gap-5">
                                    <div className="hidden sm:block">
                                        <Image
                                            src={WaterImg}
                                            width={40}
                                            height={40}
                                            layout="fixed"
                                        ></Image>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="sm:text-6xl text-4xl text-primary-content font-bold">
                                            {volumeModal}
                                        </span>
                                        <span className="text-xl font-semibold text-primary-content">
                                            Litros
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex">
                                <div className="flex flex-col items-start justify-center w-1/2">
                                    <span className="text-4xl font-extrabold text-[#00c1ff]">
                                        {producModal[0].model}
                                    </span>
                                    <span className="text-base text-primary-content font-normal">
                                        <span className="text-[#00c1ff] font-medium">
                                            Reservátorio
                                        </span>{" "}
                                        Termico Solis
                                    </span>
                                </div>

                                <div className="flex flex-col items-end w-1/2">
                                    <span className="sm:text-6xl text-4xl font-extrabold text-primary-content text-end">
                                        {areaModal}
                                    </span>
                                    <span className="text-base text-primary-content font-normal text-end">
                                        Coletor Solar Trópicos V150 (1,5m²)
                                    </span>
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
                <div className="flex w-full">
                    <div className="flex flex-col">
                        <h1 className="text-primary-content text-2xl font-bold leading-tight md:text-5xl">
                            Calculadora de Aquecedor solar Residencial
                        </h1>
                        <p className="text-sm text-gray-400 mt-4">
                            Para simular o tamanho de um sistema de aquecimento
                            solar, utilize a Calculadora de Aquecedor Solar
                            Dimensolis. Basta preencher os campos abaixo,
                            informar seu nome e email e clicar em calcular. Para
                            solicitar um orçamento, clique no botão do whats app
                            no rodapé da página. Preencha os campos abaixo com
                            todos os dados para simular o consumo mensal e os
                            equipamentos necessários.
                        </p>

                        <form
                            onSubmit={(event) => event.preventDefault()}
                            className="mt-6 flex flex-col gap-8"
                        >
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                                        className="input input-ghost bg-gray-100"
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
                                        className="input input-ghost bg-gray-100"
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
                                        onChange={(e) =>
                                            setState(e.target.value)
                                        }
                                    >
                                        <option value="DEFAULT" disabled>
                                            ...
                                        </option>

                                        {data.map((response: any) => (
                                            <option
                                                key={
                                                    response.id + response.name
                                                }
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
                                        onChange={(e) =>
                                            setCitySelected(e.target.value)
                                        }
                                    >
                                        <option value="DEFAULT" selected>
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
                            </div>
                            <div className="grid-cols-1 md:grid-cols-2 grid gap-3 w-full">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Tipo de clima
                                        </span>
                                    </label>
                                    <select
                                        defaultValue={"DEFAULT"}
                                        className="select select-ghost bg-gray-100"
                                        onChange={(e) =>
                                            setClimate(e.target.value)
                                        }
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
                                                <option value="DEFAULT">
                                                    ...
                                                </option>
                                                <option value={1}>
                                                    Muito frio
                                                </option>
                                                <option value={2}>Frio</option>
                                                <option value={3}>
                                                    Quente
                                                </option>
                                                <option value={4}>
                                                    Muito quente
                                                </option>
                                            </>
                                        )}
                                    </select>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Número de pessoas
                                        </span>
                                    </label>
                                    <select
                                        defaultValue={"DEFAULT"}
                                        className="select select-ghost bg-gray-100"
                                        onChange={(e) =>
                                            setPerson(e.target.value)
                                        }
                                    >
                                        <option value="DEFAULT" disabled>
                                            ...
                                        </option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </select>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Número de banhos / pessoa / dia
                                        </span>
                                    </label>
                                    <input
                                        onChange={(event) =>
                                            setNumberBaths(event.target.value)
                                        }
                                        onKeyUp={(e) => soNumerosInput(e)}
                                        maxLength={2}
                                        type="tel"
                                        className="input input-ghost bg-gray-100"
                                    />
                                </div>
                            </div>
                            <h1 className="text-primary-content text-2xl font-bold">
                                Onde haverá consumo de água quente?
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-5">
                                <div className="flex gap-3 w-full md:justify-start col-span-3">
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="form-control ">
                                            <label className="label justify-start gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                    onClick={() =>
                                                        setConsumer([
                                                            ...consumer,
                                                            "ducha",
                                                        ])
                                                    }
                                                />
                                                <span className="label-text text-xl ">
                                                    Ducha
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label justify-start gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                    onClick={() =>
                                                        setConsumer([
                                                            ...consumer,
                                                            "ducha higiênica",
                                                        ])
                                                    }
                                                />
                                                <span className="label-text text-xl ">
                                                    Ducha higiênica
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-control ">
                                            <label className="label justify-start  gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                    onClick={() =>
                                                        setConsumer([
                                                            ...consumer,
                                                            "cozinha",
                                                        ])
                                                    }
                                                />
                                                <span className="label-text text-xl ">
                                                    Cozinha
                                                </span>
                                            </label>
                                        </div>

                                        <div className="form-control ">
                                            <label className="label justify-start gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                    onClick={() =>
                                                        setConsumer([
                                                            ...consumer,
                                                            "lavatório",
                                                        ])
                                                    }
                                                />
                                                <span className="label-text text-xl ">
                                                    Lavatório
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-control ">
                                            <label className="label justify-start gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                    onClick={() =>
                                                        setConsumer([
                                                            ...consumer,
                                                            "banheira",
                                                        ])
                                                    }
                                                />
                                                <span className="label-text text-xl ">
                                                    Banheira
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-control">
                                            <label className="label justify-start gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
                                                    onClick={() =>
                                                        setConsumer([
                                                            ...consumer,
                                                            "lavanderia",
                                                        ])
                                                    }
                                                />
                                                <span className="label-text text-xl ">
                                                    Lavanderia
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control gap-2 grid grid-cols-1 col-span-2">
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
                            </div>
                            <div className="mt-10">
                                <span className="w-full text-xs text-black">
                                    Observações: <br /> 1 - O dimensionamento
                                    acima é uma sugestão e pode sofrer
                                    alterações dependendo do perfil de consumo
                                    de água quente, condições climáticas e
                                    condições de instalação; <br /> 2 - O
                                    dimensionamento acima levou em consideração
                                    as condições ideais de instalação conforme
                                    ABNT NBR 15569/2020.
                                </span>
                            </div>
                        </form>
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
