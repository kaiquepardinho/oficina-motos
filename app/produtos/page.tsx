"use client";

import { useState } from "react";
import { produtos } from "../data/produtos";
import ProductCard from "../components/ProductCard";

export default function Produtos() {
  const categorias = [...new Set(produtos.map((p) => p.categoria))];
  const [categoriaSelecionada, setCategoriaSelecionada] =
  useState("Todos");

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Produtos
      </h1>

      {/* Categorias */}
      <div className="flex flex-wrap gap-3 mb-8">

  <button
    onClick={() => setCategoriaSelecionada("Todos")}
    className="border px-4 py-2 rounded hover:bg-zinc-100"
  >
    Todos
  </button>

  {categorias.map((categoria) => (
    <button
      key={categoria}
      onClick={() => setCategoriaSelecionada(categoria)}
      className="border px-4 py-2 rounded hover:bg-zinc-100"
    >
      {categoria}
    </button>
  ))}

</div>

      {/* Produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {produtos
  .filter((produto) =>
    categoriaSelecionada === "Todos"
      ? true
      : produto.categoria === categoriaSelecionada
  )
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
    </main>
  );
}