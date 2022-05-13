const express = require('express')
const router = express.Router()
const {addpost,findAllPosts,findPostById,UpdatePostById,stats,percent,findPostByIdHost} = require('../controllers/post')
const {addrating,addcomment} = require('../controllers/rating')

router.post('/findPostByIdHost',findPostByIdHost)
router.get('/stats',stats)
router.get('/percent',percent)
router.put('/addrating',addrating)
router.put('/addcomment',addcomment)
router.post('/addpost', addpost)
router.get('/findAllPosts',findAllPosts)
router.get('/findPostById/:id',findPostById)
router.patch('/UpdatePostById/:id',UpdatePostById)
module.exports = router
