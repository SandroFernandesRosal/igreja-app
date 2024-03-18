import { api } from '@/lib/api'
import LiderQuemSomos from '@/components/LiderQuemSomos'
import ContentQuemSomos from '@/components/ContentQuemSomos'

export default async function QuemSomos() {
  const response = await api.get('/sobre')
  const dataSobre = response.data

  const responseLider = await api.get('/sobre/lider')
  const dataSobreLider = responseLider.data

  return (
    <main className="flex min-h-screen flex-col  items-center pt-24 md:pt-[165px]">
      <article className="mb-5 flex w-full flex-col items-center rounded-[35px]  bg-bglightsecundary pb-5 shadow-light dark:bg-bgdarksecundary dark:shadow-dark md:w-[90vw]">
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold text-primary">Nossa história</h1>
          <p className="mb-5 text-xl">A vondede de Deus</p>
        </div>
        <LiderQuemSomos dataSobreLider={dataSobreLider} />
        <ContentQuemSomos dataSobre={dataSobre} />
      </article>
    </main>
  )
}
