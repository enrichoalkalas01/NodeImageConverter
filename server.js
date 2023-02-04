const Express = require('express')
const App = Express()
const PORT = 7777
const Morgan = require('morgan')

App.use(Morgan('dev'))
App.use(Express.json())
App.use(Express.urlencoded({ extended: false }))
App.use(Express.static('Public'))
App.set('view engine', 'ejs')

App.listen(PORT, () => console.log(`Server is running in port : ${ PORT }`))

const Router = require('./Routes/Router')
App.use(Router)