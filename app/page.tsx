"use client";

import { useState } from "react";
import { produtos } from "./data/produtos";
import ProductCard from "./components/ProductCard";

export default function Home() {

  const [indiceAtual, setIndiceAtual] = useState(0);

  const produtosDestaque = produtos.slice(0, 3);

  return (
    <main className="min-h-screen">

      {/* Banner */}
      <section className="w-full border-b-2 border-white">

<img
  src="/produtos/banner.png"
  alt="Banner Motorreti"
  className="w-full h-[250px] md:h-[400px] object-cover"
/>

</section>

      

      
{/* Produtos */}
<section className="max-w-6xl mx-auto py-16 px-6">
  <h2 className="text-3xl font-bold mb-8">
    Produtos em Destaque
  </h2>

  {/* Desktop */}
<div className="hidden lg:flex justify-center gap-6">
  {produtosDestaque.map((produto) => (
    <ProductCard
      key={produto.id}
      nome={produto.nome}
      categoria={produto.categoria}
      descricao={produto.descricao}
      aplicacao={produto.aplicacao}
      imagem={produto.imagem}
    />
  ))}
</div>

{/* Tablet */}
<div className="hidden md:flex lg:hidden items-center justify-center gap-4">

  <button
    onClick={() =>
      setIndiceAtual((prev) =>
        Math.max(prev - 1, 0)
      )
    }
    className="text-4xl font-bold px-2"
  >
    ‹
  </button>

  <div className="flex gap-6">
    {produtosDestaque
      .slice(indiceAtual, indiceAtual + 2)
      .map((produto) => (
        <ProductCard
          key={produto.id}
          nome={produto.nome}
          categoria={produto.categoria}
          descricao={produto.descricao}
          aplicacao={produto.aplicacao}
          imagem={produto.imagem}
        />
      ))}
  </div>

  <button
    onClick={() =>
      setIndiceAtual((prev) =>
        Math.min(
          prev + 1,
          produtosDestaque.length - 2
        )
      )
    }
    className="text-4xl font-bold px-2"
  >
    ›
  </button>

</div>

{/* Celular */}
<div className="flex flex-col items-center gap-6 md:hidden">
  {produtosDestaque.map((produto) => (
    <ProductCard
      key={produto.id}
      nome={produto.nome}
      categoria={produto.categoria}
      descricao={produto.descricao}
      aplicacao={produto.aplicacao}
      imagem={produto.imagem}
    />
  ))}
</div>



  <div className="text-center mt-8">
    <a
      href="/produtos"
      className="inline-block bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-800"
    >
      Ver Todos os Produtos
    </a>
  </div>
</section>

{/* Hero */}
<section className="bg-zinc-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">
            Cilindros e Cabeçotes para Motos
          </h1>

          <p className="text-xl text-zinc-300 mb-8">
            Fabricação, preparação e venda de peças para motos.
          </p>

          <a
            href="https://wa.me/5518999999999"
            className="bg-green-600 px-6 py-3 rounded-lg font-semibold"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>



      {/* Serviços */}
<section className="bg-black py-16 text-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold mb-8 text-white">
      Serviços
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="bg-zinc-900 p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-xl mb-2">
          Retífica de Cilindros
        </h3>
        <p className="text-zinc-300">
          Recuperação e usinagem de cilindros para máxima durabilidade.
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-xl mb-2">
          Preparação de Cabeçotes
        </h3>
        <p className="text-zinc-300">
          Melhor fluxo e desempenho para motores de rua e competição.
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-xl mb-2">
          Montagem de Motores
        </h3>
        <p className="text-zinc-300">
          Montagem completa com precisão técnica.
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-xl mb-2">
          Preparação de Cabeçotes
        </h3>
        <p className="text-zinc-300">
          Melhor fluxo e desempenho para motores de rua e competição.
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-xl mb-2">
          Montagem de Motores
        </h3>
        <p className="text-zinc-300">
          Montagem completa com precisão técnica.
        </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-lg shadow-sm">
        <h3 className="font-bold text-xl mb-2">
          Montagem de Motores
        </h3>
        <p className="text-zinc-300">
          Montagem completa com precisão técnica.
        </p>
      </div>

    </div>

  </div>
</section>
    </main>
  );
}