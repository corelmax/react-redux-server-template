import nconf from 'nconf'
import path from 'path'

const env = process.env.NODE_ENV || 'development'

export default nconf.argv().env().file({
    file: path.join(__dirname, '..', 'configs', `${env}.json}`)
})