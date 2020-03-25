import pino from 'pino'

const l = pino({
  name: process.env.APP_ID,
  level:
    process.env.NODE_ENV === 'test'
      ? process.env.LOG_LEVEL_TEST
      : process.env.LOG_LEVEL,
})

export default l
