import  { boot } from 'quasar/wrappers'

import axios from 'axios'

import { apply } from 'core-js/fn/reflect'




const api = axios.create({ baseURL: })

boot(({ app }) => {

app.config.globalProperties.$axios = axios


app.config.globalProperties.$api = api
})

export {api}