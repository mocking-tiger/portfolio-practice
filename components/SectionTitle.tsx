export default function SectionTitle({
  title,
  dark = false,
}: {
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="w-full">
      <h2
        className={`inline-block mx-auto mb-20 text-[77px] border-b border-b-black ${
          dark ? "text-white border-b-white" : ""
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
