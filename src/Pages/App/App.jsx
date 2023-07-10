import './App.css'
import { Layout } from '../../Componets/Layout'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { Home } from '../Home'
import { NavBar } from '../../Componets/NavBar'
import ImgMain from '../../assets/mainLogo.jpg'
import { NotFound } from '../NotFound'

const AppRoutes = () =>{

  let routes = useRoutes([
    {path:'/', element:<Home imgMain={ImgMain}/>},
    {path:'/*', element:<NotFound />},

  ])

  return routes

}  

const App = () => {
  



  return (
    <BrowserRouter>
      <NavBar img={ImgMain}/>
      <Layout >
       <AppRoutes/>
      </Layout>
    </BrowserRouter>
  )
}

export {App}
