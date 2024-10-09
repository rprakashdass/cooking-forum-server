// controllers
const { UserSignup, UserLogin } = require('../Controllers/UserAuthController')

// middlewares
// const { userVerification } = require('../Middlewares/UserAuthMiddleware')

const router = require('express').Router()

router.post('/signup', UserSignup)
router.post('/login', UserLogin)

// router.post('/', userVerification)

module.exports = router