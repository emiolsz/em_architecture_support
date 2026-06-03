interface Props {
  title: string;
  image: string;
  category: string;
}

export default function ArticleCard({
  title,
  image,
  category,
}: Props) {
  return (
    <article className="group cursor-pointer">

      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover group-hover:scale-105 transition"
        />

      </div>

      <div className="mt-4">

        <span className="text-xs uppercase tracking-widest text-zinc-500">
          {category}
        </span>

        <h3 className="text-2xl mt-2">
          {title}
        </h3>

      </div>

    </article>
  );
}
