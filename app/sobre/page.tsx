export default function Sobre() {
  return (
    <main className="max-w-6xl mx-auto p-6">

      {/* Título */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Sobre a Motorreti
        </h1>

        <p className="text-lg text-white">
          Especialistas em retífica, preparação e manutenção de motores de motos.
        </p>
      </section>

      {/* História */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Nossa História
        </h2>

        <p className="text-white leading-relaxed">
          A Motorreti nasceu com o objetivo de oferecer serviços de qualidade
          para motociclistas que buscam desempenho, confiabilidade e durabilidade.
          Trabalhamos com retífica de cilindros, preparação de cabeçotes,
          montagem de motores e venda de peças para diversas aplicações.
        </p>
      </section>

      {/* Diferenciais */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8">
          Por que escolher a Motorreti?
        </h2>

        <div className="flex flex-wrap justify-center gap-6">

          <div className="border rounded-lg p-6 w-[350px] shadow-sm">
            <h3 className="text-xl font-bold mb-3">
              Experiência
            </h3>

            <p>
              Conhecimento técnico em motores, preparação e retífica.
            </p>
          </div>

          <div className="border rounded-lg p-6 w-[350px] shadow-sm">
            <h3 className="text-xl font-bold mb-3">
              Qualidade
            </h3>

            <p>
              Utilização de processos e componentes de alta qualidade.
            </p>
          </div>

          <div className="border rounded-lg p-6 w-[350px] shadow-sm">
            <h3 className="text-xl font-bold mb-3">
              Atendimento
            </h3>

            <p>
              Suporte personalizado para cada cliente e projeto.
            </p>
          </div>

        </div>
      </section>

      {/* Missão */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Nossa Missão
        </h2>

        <p className="text-white leading-relaxed">
          Entregar soluções confiáveis para motociclistas, oferecendo
          serviços especializados e peças de qualidade para melhorar o
          desempenho e a vida útil dos motores.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 text-white rounded-lg p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Precisa de ajuda com sua moto?
        </h2>

        <p className="mb-6 text-zinc-300">
          Entre em contato e solicite um orçamento sem compromisso.
        </p>

        <a
          href="https://wa.me/5518999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Falar no WhatsApp
        </a>
      </section>

    </main>
  );
}