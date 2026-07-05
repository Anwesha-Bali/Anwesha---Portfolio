import Container from "./Container";

export default function SectionHeading({
  title,
  index,
}: {
  title: string;
  index: string;
}) {
  return (
    <Container className="mb-16 flex flex-wrap items-baseline justify-between gap-5">
      <h2 className="font-serif text-5xl leading-none tracking-tight md:text-7xl">
        {title}
      </h2>
      <span className="eyebrow">{index}</span>
    </Container>
  );
}
