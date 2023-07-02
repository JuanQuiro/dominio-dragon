import DetailsProject from "@/components/DetailsProject"

export async function generateMetadata({ params }: { params: { id: number } }) {
  const { id } = params
  return { title: `Portfolio - Proyecto ${id}` }
}

export default async function page({ params }: { params: { id: number } }) {
  const { id } = params

  return (
    <div className="min-h-[calc(110vh+80px)] relative">
      <DetailsProject id={id} />
    </div>
  )
}