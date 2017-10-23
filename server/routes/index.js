import Express from 'express'
import Users from './users'

const router = Express.Router()

router.use(Users)

router.all('/', (req, res, done) => {
  return res.json({
    status: 'ok',
    message: 'FinMob Private API is running'
  })
})

export default router
