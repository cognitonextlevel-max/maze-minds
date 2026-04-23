import { notFound } from "next/navigation";
import { getLocationData, getLocationSlugs } from "@/lib/data/locations";
import { LocationView } from "@/components/location/LocationView";

export function generateStaticParams() {
  const slugs = getLocationSlugs();
  return slugs.map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }) {
  const data = getLocationData(params.city);
  if (!data) return {};

  return {
    title: `${data.hero.h1} | Maze Minds`,
    description: data.problem.p1,
  };
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const data = getLocationData(params.city);

  if (!data) {
    notFound();
  }

  return <LocationView data={data} />;
}
