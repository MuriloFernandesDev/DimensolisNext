import { formatarMoeda } from "../utils/masks";
import toast from "react-hot-toast";
import { useState } from "react";
import { api } from "../services/apiconfig";

export default function Piscina({ data }: any): JSX.Element {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [state, setState] = useState<string>();
    const [city, setCity] = useState<any>();
    const [citySelected, setCitySelected] = useState<any>();
    const [tariff, setTariff] = useState<string | number>();
    const [invoice, setInvoice] = useState<string | number>();
    const [inverter, setInverter] = useState<string | number>();
    const [showModal, setShowModal] = useState(false);

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
        if (name && email && state && city && tariff && invoice && inverter) {
            setShowModal(!showModal);
        }

        //exibir modal se ocorrer tudo bem
    };

    return (
        <>
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
                                defaultValue={1}
                                className="select select-ghost"
                                onChange={(e) =>
                                    setCitySelected(e.target.value)
                                }
                            >
                                <option value={1} disabled>
                                    ...
                                </option>
                                {!state ? (
                                    <option value="2" disabled>
                                        Selecione um estado antes
                                    </option>
                                ) : (
                                    city?.state.map((res: any) => {
                                        return (
                                            <option key={res} value={res}>
                                                {res}
                                            </option>
                                        );
                                    })
                                )}
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Tipo de clima
                                </span>
                            </label>
                            <input
                                onChange={(event: any) =>
                                    setTariff(event.target.value)
                                }
                                type="tel"
                                className="input input-ghost w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Condição da piscina
                                </span>
                            </label>
                            <input
                                type="text"
                                className="input input-ghost w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Aplicação
                                </span>
                            </label>
                            <input
                                type="text"
                                className="input input-ghost w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Área da piscina (m²)
                                </span>
                            </label>
                            <input
                                type="text"
                                className="input input-ghost w-full"
                            />
                        </div>
                    </form>
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

                    <div className="mt-10">
                        <span className="w-full text-sm text-black">
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
