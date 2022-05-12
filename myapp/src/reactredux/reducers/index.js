const { combineReducers } = require("redux");
const { default: counterReducer } = require("./counterReducer");



const appreducer= combineReducers({
    cntr : counterReducer
})
export default appreducer
