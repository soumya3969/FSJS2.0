const object = {
    rocket: '🚀',
    home:'🏠'

}
for (k in object) {
    console.log(k);
}
// String,Number,BigInt,Boolean,null,undefined,Symbol

let object1 = {
    rocket: '🚀',
    fuel: 2,
    config: {
        name: 'mars'
    }
}
object1.fuel =200
object1['year'] =2000