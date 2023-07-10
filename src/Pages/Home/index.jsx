import { CardGetData } from '../../Componets/CardGetData'

const Home = (props) => {
  return (
    <section className='relative w-[90%] h-auto flex flex-col gap-10 justify-center items-center'>
      <CardGetData img={props.imgMain} />
    </section>
  )
}
export {Home}