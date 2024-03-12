import News from './News'
import NewSlider from './NewSlider'
export default function NewsPenha() {
  return (
    <div className="flex w-[100vw]  flex-col items-center    justify-center bg-transparent">
      <NewSlider />
      <News />
    </div>
  )
}
