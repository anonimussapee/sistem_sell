const Layout = (props) => {
  return (
    <section className='relative w-[100%] h-[100vh] flex flex-col items-center justify-center gap-5 py-[100px] bg-gray-100 '>
      {props.children}
    </section>
  )
}

export {Layout}