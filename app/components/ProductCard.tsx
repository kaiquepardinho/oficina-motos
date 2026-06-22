import Image from "next/image";

type ProductCardProps = {
  nome: string;
  categoria: string;
  descricao: string;
  aplicacao: string;
  imagem: string;
};

export default function ProductCard({
  nome,
  categoria,
  descricao,
  aplicacao,
  imagem,
}: ProductCardProps) {
  return (
    <div className="border-2 border-white rounded-lg overflow-hidden shadow-md hover:shadow-red-600/50 hover:border-red-500 hover:-translate-y-1 transition-all duration-300 flex flex-col w-[350px]">

<Image
  src={imagem}
  alt={nome}
  width={500}
  height={300}
  className="w-full aspect-[5/3] object-cover"
/>

      <div className="p-4">
      <h2 className="text-xl font-bold text-white">
          {nome}
        </h2>

        <p className="text-white-500">
          {categoria}
        </p>

        <p className="mt-2 text-zinc-200">
          {descricao}
        </p>

        <p className="mt-2 text-sm text-zinc-400">
          Aplicação: {aplicacao}
        </p>

        <a
  href={`https://wa.me/5518999999999?text=Olá,%20tenho%20interesse%20em%20${nome}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
>
  Solicitar orçamento
</a>
      </div>
    </div>
  );
}