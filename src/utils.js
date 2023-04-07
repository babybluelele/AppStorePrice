const axios = require('axios')
const SCKEY = 'SCT204601TOarzFg0ZhhAGpf0v6k6UUpHY'
axios.post(`https://sctapi.ftqq.com/${SCKEY}.send`, {
  text: '价格发生了变化哦！',
  desp: "111"
}).then(result => {
  console.log(result.data);
})

