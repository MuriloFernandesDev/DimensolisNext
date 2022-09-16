import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/styles.module.scss";
import toast from "react-hot-toast";
import { api } from "../services/apiconfig";

export default function Banho({ data }: any) {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [state, setState] = useState<any>();
    const [city, setCity] = useState<any>();
    const [citySelected, setCitySelected] = useState<any>();
    const [climate, setClimate] = useState<number | string>();
    const [person, setPerson] = useState<any>();
    const [numberBaths, setNumberBaths] = useState<any>();
    const [showModal, setShowModal] = useState(false);
    const [inverterModal, setInverterModal] = useState();
    const [moduleModal, setModuleModal] = useState();
    const [descriptionModal, setDescriptionModal] = useState();
    const [generationModal, setGenerationModal] = useState();

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
            numberBaths
        ) {
            setShowModal(!showModal);
        }

        //exibir modal se ocorrer tudo bem
    };

    useEffect(() => {
        data.map((res: any) => {
            return res.id === parseInt(state) ? setCity(res.cities) : null;
        });
        if (city) {
            setClimate(city[0].weather_id);
        }
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
                            (showModal !== true ? " modal-toggle" : "")
                        }
                    >
                        <label
                            className="modal-box w-[450px] bg-white flex flex-col gap-4 relative"
                            htmlFor=""
                        >
                            <div className="flex items-center w-full">
                                <div className="flex w-full">
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
                                            785
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
                                        7,695
                                    </h1>
                                    <p className="text-sm text-primary-content">
                                        <span className="text-warning font-semibold">
                                            kWp
                                        </span>{" "}
                                        - Sistemas
                                        <br /> fotovoltaicos Solis
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 w-1/2">
                                    <div className="flex flex-col items-center">
                                        <p className="text-6xl font-bold text-primary-content">
                                            19
                                        </p>
                                        <p className="text-base text-primary-content">
                                            Módulos
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p className="text-6xl font-bold text-primary-content">
                                            01
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
                                        defaultValue="1"
                                        className="select select-ghost bg-gray-100"
                                        onChange={(e) =>
                                            setState(e.target.value)
                                        }
                                    >
                                        <option value={1} disabled>
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
                                    >
                                        {city?.map((res: any) => {
                                            return (
                                                <option
                                                    key={res.id}
                                                    value={res.id}
                                                >
                                                    {res.name}
                                                </option>
                                            );
                                        })}
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
                                        defaultValue="1"
                                        className="select select-ghost bg-gray-100"
                                        // onChange={(e) =>
                                        //     setValue(e.target.value)
                                        // }
                                    >
                                        <option value="1">
                                            {climate === 1
                                                ? "Muito frio"
                                                : climate === 2
                                                ? "Frio"
                                                : climate === 3
                                                ? "Quente"
                                                : climate === 4
                                                ? "Muito quente"
                                                : ""}
                                        </option>
                                    </select>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Número de pessoas
                                        </span>
                                    </label>
                                    <input
                                        onChange={(event) =>
                                            setPerson(event.target.value)
                                        }
                                        type="text"
                                        className="input input-ghost bg-gray-100"
                                    />
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
                                                />
                                                <span className="label-text text-xl ">
                                                    Ducha
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-control ">
                                            <label className="label justify-start gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-accent"
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
                                <span className="w-full text-sm text-black">
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
