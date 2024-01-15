import React, { Fragment } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import OrderPage from './pages/OrderPage/OrderPage'
import ProductPage from './pages/ProductsPage/ProductPage'
import {routes} from './routes'
import DefaultComponent from './component/DefaultComponent/DefaultComponent'


 function App() {
  return (
    <div>
      <Router>
        
        <Routes>
          {
            // console.log(routes)
            routes.map((route)=>{
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
                return(
                  <Route path={route.path} element={
                    <>
                    <Layout>
                      <Page/>
                    </Layout>
                    </>
                  
                }/>
                )
            })
          }
        </Routes>
      </Router>
    </div>
  )
}
export default App