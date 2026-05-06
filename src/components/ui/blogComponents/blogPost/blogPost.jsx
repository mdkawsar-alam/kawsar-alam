const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

export default function BlogPost({ id, title, date, author, content, image }) {

  const truncateContent = (text, length) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className="p-4 bg-[#1B2A40] rounded-lg shadow-md">
      <Link href={`/blog/${id}`}>
        <Image
          src={image}
          alt={title}
          className="rounded-lg mb-4"
          width={500}
          height={300}
          layout="responsive"
        />
      </Link>
      <h2 className="text-lg font-bold mb-2 text-gray-100">{title}</h2>
      <p className="text-gray-200 text-base">{truncateContent(content, 150)}</p>
      <Link href={`/blog/${id}`}>
        <p className="text-blue-400 hover:text-blue-600">Read More &rarr;</p>
      </Link>
      <p className="mb-4 text-xs pt-5 text-gray-300">
        {" "}
        {date} by {author}
      </p>
    </div>
  );
}
