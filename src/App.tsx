import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { getAllProduct, deleteProduct, addProduct, updateProduct } from './api/product'
import ProductPage from './pages/Product'
import { IProduct } from './types/product'
import ProductDetailPage from './pages/ProductDetail'
import AddProductPage from './pages/admin/AddProduct'
import { addCategory, deleteCategory, getAllCategory, updateCategory } from './api/category'

import UpdateProductPage from './pages/admin/UpdateProduct'
import ProductManagementPage from './pages/admin/ProductManagement'
import Dashboard from './pages/admin/Dashboard'

// import LoginIn from "./login/Login"
import AdminLayout from './pages/layouts/AdminLayout'
import WebSiteLayout from './pages/layouts/WebSiteLayout'
import { ICategory } from './types/Category'
import Signup from './login/Signup'
import Signin from './login/SignIn'
import Category from './pages/Category'
import CategoryManagement from './pages/admin/CategoryMangement'
import AddCategory from './pages/admin/AddCategory'
import UpdateCategory from './pages/admin/UpdateCategory'
import Categories from './pages/Category'


function App() {

  const [products, setProduct] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProduct(products.filter(product => product.id !== id)))
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product)

  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => setProduct(products.map(item => item.id === product.id ? product : item)))
  }
  const [category, setCategory] = useState<ICategory[]>([])
  useEffect(() => {
    getAllCategory().then(({ data }) => setCategory(data))
  }, [])
  const onHandleRemoveCategory = (id: number) => {
    deleteCategory(id).then(() => setCategory(category.filter(category => category.id !== id)))
  }
  const onHandleAddCategory = (category: ICategory) => {
    addCategory(category).then(() => getAllCategory().then(({ data }) => setCategory(data)))
  }
  const onHandleUpdateCategory = (category: ICategory) => {
    updateCategory(category).then(() => getAllCategory().then(({ data }) => setCategory(data)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebSiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='signup' element={<Signup />} />
          <Route path='signin' element={<Signin />} />
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='products/:id' element={<ProductDetailPage products={products} />} />
          <Route path='categories' element={<Category />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
          </Route>


        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='categories'>

            <Route index element={<CategoryManagement onRemove={onHandleRemoveCategory} category={category} />} />
            <Route path='add' element={<AddCategory onAdd={onHandleAddCategory} />} />
            <Route path=':id/update' element={<UpdateCategory category={category} onUpdate={onHandleUpdateCategory} />} />

          </Route>


        </Route>

      </Routes>



    </div >
  )
}

export default App