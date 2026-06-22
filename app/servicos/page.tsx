export default function Servicos() {
  const servicos = [
    {
      id: 1,
      nome: "Retífica de Cilindros",
      descricao:
        "Recuperação e usinagem de cilindros para restaurar o desempenho do motor.",
    },
    {
      id: 2,
      nome: "Preparação de Cabeçotes",
      descricao:
        "Melhorias no fluxo e desempenho para motores de rua e competição.",
    },
    {
      id: 3,
      nome: "Montagem de Motores",
      descricao:
        "Montagem completa com ajuste técnico e componentes de qualidade.",
    },
    {
      id: 4,
      nome: "Troca de Pistões",
      descricao:
        "Substituição e instalação de pistões para manutenção ou preparação.",
    },
    {
      id: 5,
      nome: "Diagnóstico de Motores",
      descricao:
        "Análise de falhas mecânicas e identificação de problemas.",
    },
    {
      id: 6,
      nome: "Preparação para Competição",
      descricao:
        "Projetos personalizados focados em desempenho e alta performance.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-4">
        Serviços
      </h1>

      <p className="text-white mb-10">
        Conheça os principais serviços oferecidos pela Motorreti.
      </p>

      <div className="flex flex-wrap justify-center gap-6">

        {servicos.map((servico) => (
          <div
            key={servico.id}
            className="border rounded-lg shadow-sm hover:shadow-lg transition w-[350px] flex flex-col"
          >
            <div className="p-6 flex flex-col h-full">

              <h2 className="text-2xl font-bold mb-3">
                {servico.nome}
              </h2>

              <p className="text-zinc-300 flex-grow">
                {servico.descricao}
              </p>

              <a
                href={`https://wa.me/5518999999999?text=Olá,%20tenho%20interesse%20no%20serviço:%20${encodeURIComponent(
                  servico.nome
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-green-600 text-white px-4 py-2 rounded text-center hover:bg-green-700 transition"
              >
                Solicitar orçamento
              </a>

            </div>
          </div>
        ))}

      </div>

    </main>
  );
}