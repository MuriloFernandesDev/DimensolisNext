export default function Banho() {
    return (
        <>
            <div className="flex flex-col gap-4 items-center">
                <div className="flex w-full">
                    <div className="flex flex-col">
                        <h1 className="text-primary-content text-5xl font-bold leading-tight">
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

                        <form action="" className="mt-6 flex flex-col gap-8">
                            <div className="grid grid-cols-2 gap-4">
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
                            </div>
                            <div className="flex gap-3 w-full">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-primary-content text-xs">
                                            Tipo de clima
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
                                            Número de pessoas
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
                                            Número de banhos / pessoa / dia
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
                            </div>
                            <h1 className="text-primary-content text-2xl font-bold">
                                Onde haverá consumo de água quente?
                            </h1>
                            <div className="flex justify-between">
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
                                <div className="form-control gap-2 grid grid-cols-1 items-end">
                                    <button className="btn btn-warning text-xs">
                                        Calcular
                                    </button>
                                    <button className="btn btn-warning text-xs">
                                        Solicitar Orçamento
                                    </button>
                                </div>
                            </div>
                            <div className="mt-10">
                                <span className="w-full text-sm text-black">
                                    Observações: <br />1 - 1 - O dimensionamento
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
