export default function Piscina(): JSX.Element {
    return (
        <>
            <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col">
                    <h1 className="text-primary-content text-5xl font-bold leading-tight">
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

                    <form action="" className="mt-6 grid grid-cols-2 gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Digite seu nome
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
                                    Digite seu e-mail
                                </span>
                            </label>
                            <input
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
                                defaultValue={1}
                                className="select select-ghost"
                            >
                                <option value={1} disabled selected>
                                    Pick one
                                </option>
                                <option value={2}>Star Wars</option>
                                <option value={3}>Harry Potter</option>
                                <option value={4}>Lord of the Rings</option>
                                <option value={5}>Planet of the Apes</option>
                                <option value={6}>Star Trek</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Selecione a cidade
                                </span>
                            </label>
                            <select
                                defaultValue={2}
                                className="select select-ghost"
                            >
                                <option value={1} disabled selected>
                                    Pick one
                                </option>
                                <option value={2}>Star Wars</option>
                                <option value={3}>Harry Potter</option>
                                <option value={4}>Lord of the Rings</option>
                                <option value={5}>Planet of the Apes</option>
                                <option value={6}>Star Trek</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-primary-content text-xs">
                                    Tipo de clima
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

                        <div className="form-control gap-2 grid grid-cols-2 justify-end w-full col-span-2">
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
