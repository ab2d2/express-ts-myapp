import './common/env'
import Server from './common/server'
import routes from './routes'

const port = process.env.NODE_ENV === 'test' ? 3001 : parseInt(process.env.PORT)
export default new Server().router(routes).listen(port)
