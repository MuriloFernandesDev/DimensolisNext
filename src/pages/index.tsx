import Image from "next/image";
import InversoresImg from "../../public/inversores.svg";

export default function Fotovoltaico(): JSX.Element {
    return (
        <>
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

                    <form action="" className="mt-6 grid grid-cols-2 gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
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
                                <span className="label-text text-primary-content text-xs">
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
                                <span className="label-text text-primary-content text-xs">
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
                                <span className="label-text text-primary-content text-xs">
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
                                <span className="label-text text-primary-content text-xs">
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
                                <span className="label-text text-primary-content text-xs">
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
                                <span className="label-text text-primary-content text-xs">
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
