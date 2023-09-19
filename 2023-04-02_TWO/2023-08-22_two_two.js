const Clothes =   []
const Basket = []

Clothes.push({id:0,name:'ONE', description: 'dONE', sizes:[40,42,44,46,58,60], price:100, available: true});
Clothes.push({id:1,name:'TWO', description: 'dTWO', sizes:[40,42,44,46,58,60], price:200, available: false});
Clothes.push({id:2,name:'THREE', description: 'dTHREE', sizes:[40,42,44,46,58,60], price:300, available: true});
Clothes.push({id:3,name:'FOUR', description: 'dFOUR', sizes:[40,42,44,46,58,60], price:400, available: false});
Clothes.push({id:4,name:'FIVE', description: 'dFIVE', sizes:[40,42,44,46,58,60], price:500, available: true});

Basket.push ({good: Clothes[0], count: 5});
Basket.push ({good: Clothes[3], count: 4});

console.log(Basket[0]);
// let myArr = Object.values(Clothes);
// console.log(myArr);
// document.getElementById("demo").innerHTML = Clothes;

// let varName = prompt ('Тест');
// document.write(varName);

function addBasket(addClothes, addCount){
    if (Basket.good.id != addClothes.id)
        {Basket.push ({good: addClothes, count: addCount})}
    else
        {alert('Такой товар уже есть в корзине')}
}

function delBasket(delClothes)
        {
        let indBasket;
        let delId;
        delId = delClothes.id;
        console.log(delId);
        indBasket = Basket.findIndex(item => item.good.id === delId);
        console.log (indBasket);
        delete Basket[indBasket];
        }

// addBasket(Clothes[0], 10)
// console.log(Basket)
delBasket(Clothes[3])
console.log(Basket)


