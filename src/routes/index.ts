import { Router } from 'express'
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router()

router.get('/',PageController.home)
router.get('/carrinho',PageController.carrinho)
router.get('/sobre',PageController.sobre)
router.get('/home',PageController.home)
router.get('/cardapio',PageController.cardapio)

router.get('/search',SearchController.search)

export default router
