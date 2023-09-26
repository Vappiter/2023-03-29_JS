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
    let addIndex;
    let indBasket;
    console.log(addClothes.id)
    if (Basket.length === 0)
     {
     Basket.push ({good: addClothes, count: addCount})
     }
    else
        { 
        indBasket = Basket.findIndex(item => item.good.id === addClothes.id);
        if (indBasket === -1)
            {Basket.push ({good: addClothes, count: addCount})
            }
        else
            {console.log("Такой товар уже есть в корзине");
            }
        }
}

function delBasket(delClothes)
        {
        let indBasket;
        let delId;
        delId = delClothes.id;
        console.log(delId);
        indBasket = Basket.findIndex(item => item.good.id === delId);
        if (indBasket === -1)
            {
            console.log("Такого товара нет в корзине");   
            }
        Basket.splice([indBasket],1);
        console.log ("Массив после удаления");
        console.log(Basket);
        }

function clearBasket()
    {
    Basket.length = 0;
    }

function totalBasket(Basket)
    {
    let varAmount = 0;
    let varSum = 0;
    for(const goodInBasket of Basket)
        {
        varAmount += goodInBasket.count
        varSum += goodInBasket.good.price * goodInBasket.count
        }

    return {totalAmount: varAmount, totalSum: varSum};   
    }

addBasket(Clothes[1], 10);
console.log(Basket);
delBasket(Clothes[3]);
console.log(Basket);
clearBasket();
console.log("Очищенный массив " + Basket.length);
addBasket(Clothes[2], 20);
console.log(Basket);
addBasket(Clothes[4], 40);
console.log(Basket);
addBasket(Clothes[0], 99);
console.log(Basket);
const values = totalBasket(Basket);
// console.log(values);
console.log("Общее количество товара " +  values.totalAmount);
console.log("Общая сумма товара в корзине " + values.totalSum);