import Image from "next/image";
import InversoresImg from "../../public/inversores.svg";
import { fauna } from "../services/db";
import { query as q } from "faunadb";
import { useState } from "react";
import styles from "../styles/styles.module.scss";

export default function Fotovoltaico({ data }: any): JSX.Element {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [state, setState] = useState<string>();
    const [city, setCity] = useState<string>();
    const [tariff, setTariff] = useState<string | number>();
    const [invoice, setInvoice] = useState<string | number>();
    const [inverter, setInverter] = useState<string>();
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (event: any) => {
        console.log(state);
        event.preventDefault();
        setShowModal(!showModal);
    };

    return (
        <>
            {showModal === true ? (
                <div className={styles.modal}>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">
                            Congratulations random Internet user!
                        </h3>
                        <p className="py-4">
                            You've been selected for a chance to get one year of
                            subscription to use Wikipedia for free!
                        </p>
                        <div className="modal-action">
                            <a
                                onClick={() => setShowModal(!showModal)}
                                className="btn"
                            >
                                Yay!
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
            <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col">
                    <h1 className="text-primary-content text-5xl font-bold leading-tight">
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
                        onSubmit={handleSubmit}
                        className="mt-6 grid grid-cols-2 gap-4"
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
                                onChange={(e) => setState(e.target.value)}
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
                                <option value="1">Pick one</option>
                                <option value="2">Star Wars</option>
                                <option value="3">Harry Potter</option>
                                <option value="4">Lord of the Rings</option>
                                <option value="5">Planet of the Apes</option>
                                <option value="6">Star Trek</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Tarifa (R$/kWh)
                                </span>
                            </label>
                            <input
                                onChange={(event) =>
                                    setTariff(event.target.value)
                                }
                                type="text"
                                className="input input-ghost w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Fatura (R$/mês)
                                </span>
                            </label>
                            <input
                                onChange={(event) =>
                                    setInvoice(event.target.value)
                                }
                                type="text"
                                className="input input-ghost w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Selecione o inversor
                                </span>
                            </label>
                            <select
                                defaultValue="1"
                                className="select select-ghost"
                            >
                                <option value="1">Pick one</option>
                                <option value="2">Star Wars</option>
                                <option value="3">Harry Potter</option>
                                <option value="4">Lord of the Rings</option>
                                <option value="5">Planet of the Apes</option>
                                <option value="6">Star Trek</option>
                            </select>
                        </div>

                        <div className="form-control gap-2 grid grid-cols-2 items-end w-full">
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
                        <span className="w-full text-sm text-black">
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
                        <div className="grid grid-cols-2 gap-5 mt-10">
                            <div>
                                <p className="text-primary-content font-bold text-2xl">
                                    Conheça nossos inversores
                                </p>
                                <div className="p-5 rounded-xl shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                    <Image
                                        src={InversoresImg}
                                        layout="responsive"
                                    ></Image>
                                </div>
                            </div>
                            <div>
                                <p className="text-primary-content font-bold text-2xl">
                                    Conheça nossos inversores
                                </p>
                                <div className="p-5 rounded-xl shadow-xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                    <Image
                                        src={InversoresImg}
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
