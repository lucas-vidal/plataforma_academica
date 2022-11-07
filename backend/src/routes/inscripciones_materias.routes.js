
import {Router} from 'express'
import { insertAProductToBuys, getBuys, getProductsByIdSaleOfTheSale , getProductByCodeOfTheSale, deleteProductByCodeOfTheSale, deleteAllProductOfTheSale, countTotalItemsOfTheSale, updateProductsByCode
        } from '../controllers/buys.controller.js'

const router = Router()
//Consulta ventas
router.get('/buys', getBuys)
//Consulta una compra por ID
router.get('/buys/:id_buy', getProductsByIdSaleOfTheSale)
//Consulta una venta por ID
router.get('/buys/:id_buys/:code', getProductByCodeOfTheSale)
//Contar total de productos
router.post('/buys/count/:id_buy', countTotalItemsOfTheSale)
//Insertar un producto a la venta
router.post('/buys', insertAProductToSale)
//Borrar producto de una venta
router.delete('/buys/:id_buys/:code', deleteProductByCodeOfTheSale)
//Borrar todos los productos de una venta
router.delete('/buys/:id_buys', deleteAllProductOfTheSale)
//Actualizar productos
router.put('/buys/:id_buys/:code', updateProductsByCode)

export default router