export default function Contato() {
  return (
    <main className="max-w-4xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-4">
        Contato
      </h1>

      <p className="text-white mb-10">
        Entre em contato conosco para solicitar um orçamento ou tirar dúvidas.
      </p>

      <div className="flex flex-wrap gap-6">

        {/* WhatsApp */}
        <div className="border rounded-lg p-6 shadow-sm flex-1 min-w-[300px]">
          <h2 className="text-2xl font-bold mb-3">
            WhatsApp
          </h2>

          <p className="mb-4 text-white">
            Atendimento rápido e direto.
          </p>

          <a
            href="https://wa.me/5518999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Conversar no WhatsApp
          </a>
        </div>

        {/* Endereço */}
        <div className="border rounded-lg p-6 shadow-sm flex-1 min-w-[300px]">
          <h2 className="text-2xl font-bold mb-3">
            Endereço
          </h2>

          <p>
            Presidente Prudente - SP
          </p>

          <p className="mt-2 text-white">
            Rua XXXXX, Nº XXX
          </p>
        </div>

      </div>

      {/* Horários */}
      <section className="mt-10 border rounded-lg p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-4">
          Horário de Atendimento
        </h2>

        <ul className="space-y-2">
          <li>Segunda a Sexta: 08:00 às 18:00</li>
          <li>Sábado: 08:00 às 12:00</li>
          <li>Domingo: Fechado</li>
        </ul>

      </section>

      {/* CTA */}
      <section className="bg-zinc-900 text-white rounded-lg p-10 text-center mt-10">

        <h2 className="text-3xl font-bold mb-4">
          Precisa de um orçamento?
        </h2>

        <p className="text-zinc-300 mb-6">
          Envie uma mensagem agora mesmo e receba atendimento rápido.
        </p>

        <a
          href="https://wa.me/5518999999999?text=Olá,%20gostaria%20de%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Solicitar orçamento
        </a>

      </section>

    </main>
  );
}