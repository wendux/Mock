/**
 * Created by du on 2017/8/15.
 */
var Mock = require('./src/mock')
var t= {
    "name":"@string()",
    "motion":"@string()",
    "age|0-100":1,
    "male|1":true,
    "range|1":[2,4],
    "type|0-1000":8,
    "address":"@county(true)"

}

// console.error(JSON.stringify(Mock.toJSONSchema(t)))

var mock= {
    name: 5,
    motion: "xx",
    age: 1,
    male: false,
    range: 6,
    type: 8,
    address: 5
}
console.log(Mock.valid(t,mock));
