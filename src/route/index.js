import Hello from '../components/views/hello'
import Test from '../components/views/test'
import inventory from '../components/views/inventory'
import itemDetails from '../components/views/itemDetails'
export const routes = [
    {
        path:'',
        component:inventory
    },
    {
        path:'/productDetails/:id',
        component:itemDetails
    }
]