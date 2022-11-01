const router = require('express').Router()
const { createBlog, getListOfPublishedBlogs, getPublishedBlog } = require('../controllers/blogs')
const getBearerToken = require('../middleware/getBearerToken')
const getUserFromToken = require('../middleware/getUserFromToken')
const pagination = require('../middleware/pagination')

router.route('/').get(pagination, getListOfPublishedBlogs)
router.route('/:id').get(getPublishedBlog)

// allow only requests with valid tokens
router.use(getBearerToken, getUserFromToken)
router.route('/').post(createBlog)

module.exports = router
