import { fauna } from "../services/db";
import { query as q } from "faunadb";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/styles.module.scss";

export default function Banho({ data }: any) {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [state, setState] = useState<string>();
    const [city, setCity] = useState<any>();
    const [climate, setClimate] = useState<string>();
    const [person, setPerson] = useState<any>();
    const [numberBaths, setNumberBaths] = useState<any>();
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (event: any) => {
        setShowModal(!showModal);
        //exibir modal se ocorrer tudo bem
    };

    useEffect(() => {
        const GetCitys = async () => {
            const { data }: any = await fauna.query(
                q.Get(q.Ref(q.Collection("citys"), "342616789934408273"))
            );
            switch (state) {
                case "Acre":
                    setCity(data.data[0]);
                    break;
                case "Alagoas":
                    setCity(data.data[1]);
                    break;
                case "Amapá":
                    setCity(data.data[2]);
                    break;
                case "Amazonas":
                    setCity(data.data[3]);
                    break;
                case "Bahia":
                    setCity(data.data[4]);
                    break;
                case "Ceará":
                    setCity(data.data[5]);
                    break;
                case "Distrito Federal":
                    setCity(data.data[6]);
                    break;
                case "Espírito Santo":
                    setCity(data.data[7]);
                    break;
                case "Goiás":
                    setCity(data.data[8]);
                    break;
                case "Maranhão":
                    setCity(data.data[9]);
                    break;
                case "Mato Grosso":
                    setCity(data.data[10]);
                    break;
                case "Mato Grosso do Sul":
                    setCity(data.data[11]);
                    break;
                case "Minas Gerais":
                    setCity(data.data[12]);
                    break;
                case "Pará":
                    setCity(data.data[13]);
                    break;
                case "Paraíba":
                    setCity(data.data[14]);
                    break;
                case "Paraná":
                    setCity(data.data[15]);
                    break;
                case "Pernanbuco":
                    setCity(data.data[16]);
                    break;
                case "Piauí":
                    setCity(data.data[17]);
                    break;
                case "Rio de Janeiro":
                    setCity(data.data[18]);
                    break;
                case "Rio Grande do Norte":
                    setCity(data.data[19]);
                    break;
                case "Rio Grande do Sul":
                    setCity(data.data[20]);
                    break;
                case "Rondônia":
                    setCity(data.data[21]);
                    break;
                case "Roraima":
                    setCity(data.data[22]);
                    break;
                case "Santa Catarina":
                    setCity(data.data[23]);
                    break;
                case "São Paulo":
                    setCity(data.data[24]);
                    break;
                case "Sergipe":
                    setCity(data.data[25]);
                    break;
                case "Tocantins":
                    setCity(data.data[26]);
                    break;
                case "Distrito Federal":
                    setCity(data.data[27]);
                    break;
            }
        };

        GetCitys();
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
                                        className="input input-ghost w-full"
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
                                        className="input input-ghost w-full"
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
                                        className="select select-ghost"
                                        onChange={(e) =>
                                            setState(e.target.value)
                                        }
                                    >
                                        <option value={1} disabled>
                                            ...
                                        </option>

                                        {data?.data.map((response: any) => {
                                            return (
                                                <option
                                                    key={response.state}
                                                    value={response.state}
                                                >
                                                    {response.state}
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
                                        className="select select-ghost"
                                    >
                                        <option value="1" disabled>
                                            ...
                                        </option>
                                        {city?.state.map((res: any) => {
                                            return (
                                                <option key={res} value={res}>
                                                    {res}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-3 w-full">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Tipo de clima
                                        </span>
                                    </label>
                                    <input
                                        onChange={(event) =>
                                            setClimate(event.target.value)
                                        }
                                        type="text"
                                        className="input input-ghost w-full"
                                    />
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
                                        className="input input-ghost w-full"
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
                                        className="input input-ghost w-full"
                                    />
                                </div>
                            </div>
                            <h1 className="text-primary-content text-2xl font-bold">
                                Onde haverá consumo de água quente?
                            </h1>
                            <div className="flex justify-between flex-col md:flex-row">
                                <div className="flex gap-3 w-full justify-start">
                                    <div>
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
                                    </div>
                                    <div>
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
                                <div className="form-control gap-2 grid grid-cols-1">
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
        const { data }: any = await fauna.query(
            q.Get(q.Ref(q.Collection("states"), "342447823857386065"))
        );
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
