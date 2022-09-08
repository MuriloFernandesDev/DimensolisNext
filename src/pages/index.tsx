import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Fotovoltaico(): JSX.Element {
    return (
        <>
            <Navbar className="fixed z-50 bg-white" />
            <div className="flex flex-col gap-4 items-center w-full px-6">
                <div className="w-full max-w-7xl relative mt-28 sm:mt-32">
                    <img
                        src="/banners/01.png"
                        className="w-full rounded-xl"
                        alt="banner"
                    />
                </div>

                <div className="flex w-full max-w-7xl mt-6">
                    <div className="flex flex-col w-2/3">
                        <h1 className="text-primary text-5xl font-bold leading-tight">
                            Calculadora de Energia Solar Fotovoltaica
                        </h1>
                        <p className="text-sm text-gray-400 mt-4">
                            A Calculadora de Energia Solar Fotovoltáica é que
                            uma ferramenta virtual para a simulação do custo e
                            tamanho de um sistema de energia solar. Preencha os
                            campos abaixo com todos os dados para simular o
                            consumo mensal e os equipamentos necessários.
                        </p>

                        <form action="" className="mt-6 grid grid-cols-2 gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-primary text-xs">
                                        Digite seu nome
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-primary text-xs">
                                        Digite seu e-mail
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-primary text-xs">
                                        Selecione o estado
                                    </span>
                                </label>
                                <select className="select select-bordered">
                                    <option disabled selected>
                                        Pick one
                                    </option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-primary text-xs">
                                        Selecione a cidade
                                    </span>
                                </label>
                                <select className="select select-bordered">
                                    <option disabled selected>
                                        Pick one
                                    </option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-primary text-xs">
                                        Tarifa (R$/kWh)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-primary text-xs">
                                        Fatura (R$/mês)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-primary text-xs">
                                        Selecione o inversor
                                    </span>
                                </label>
                                <select className="select select-bordered">
                                    <option disabled selected>
                                        Pick one
                                    </option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>
                            </div>

                            <div className="form-control gap-2 grid grid-cols-2 items-end w-full">
                                <button className="btn btn-warning text-xs">
                                    Calcular
                                </button>
                                <button className="btn btn-warning text-xs">
                                    Solicitar Orçamento
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
