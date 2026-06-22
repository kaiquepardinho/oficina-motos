"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-black text-white border-b-2 border-white">
      <div className="max-w-6xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          <Link
            href="/"
            className="text-2xl font-bold tracking-wide"
          >
            Motorreti
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex gap-6 font-semibold">
            <Link className="hover:text-red-500 transition" href="/">Home</Link>
            <Link className="hover:text-red-500 transition" href="/produtos">Produtos</Link>
            <Link className="hover:text-red-500 transition" href="/servicos">Serviços</Link>
            <Link className="hover:text-red-500 transition" href="/sobre">Sobre</Link>
            <Link className="hover:text-red-500 transition" href="/contato">Contato</Link>
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden text-3xl font-bold"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            ☰
          </button>

        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <nav className="flex flex-col mt-4 md:hidden bg-zinc-950 rounded-lg overflow-hidden">

            <Link className="px-4 py-3 font-semibold hover:bg-zinc-900" href="/">
              Home
            </Link>

            <div className="h-px bg-zinc-800" />

            <Link className="px-4 py-3 font-semibold hover:bg-zinc-900" href="/produtos">
              Produtos
            </Link>

            <div className="h-px bg-zinc-800" />

            <Link className="px-4 py-3 font-semibold hover:bg-zinc-900" href="/servicos">
              Serviços
            </Link>

            <div className="h-px bg-zinc-800" />

            <Link className="px-4 py-3 font-semibold hover:bg-zinc-900" href="/sobre">
              Sobre
            </Link>

            <div className="h-px bg-zinc-800" />

            <Link className="px-4 py-3 font-semibold hover:bg-zinc-900" href="/contato">
              Contato
            </Link>

          </nav>
        )}

      </div>
    </header>
  );
}