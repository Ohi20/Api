const user = {id: 11 , name: 'gorib-Amir',job:'actor'};
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
    name: 'Alia Stor' ,
    address : '32 baker street',
    profit : 15000,
    owner : {
        name: 'alia bhat',
        profession: 'actor',
    }, 
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive: false 
}
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

const converted = JSON.parse(shopStringified);

console.log(converted);
