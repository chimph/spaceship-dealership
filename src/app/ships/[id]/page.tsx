import { notFound } from "next/navigation";
import { spaceships } from "@/data/spaceships";
import ShipDetailClient from "./ShipDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return spaceships.map((ship) => ({
    id: ship.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const ship = spaceships.find((s) => s.id === id);
  if (!ship) return { title: "Ship Not Found" };

  return {
    title: `${ship.name} - ${ship.model} | STARLINE SPACECRAFT CO.`,
    description: ship.description,
  };
}

export default async function ShipDetailPage({ params }: Props) {
  const { id } = await params;
  const ship = spaceships.find((s) => s.id === id);

  if (!ship) {
    notFound();
  }

  return <ShipDetailClient ship={ship} />;
}
