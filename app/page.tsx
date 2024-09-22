import { Card, Hero } from "@/components";

export default function Home() {
  return (
    <div>
      <Hero
        title="Home"
      />
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Characters" imagePath="/image1.jpg" link="/characters" ></Card>
        <Card title="Locations" imagePath="/image2.jpg" link="/locations" ></Card>
        <Card title="Episodes" imagePath="/image5.jpg" link="/episodes" ></Card>
      </div>
    </div>

  );
}
