const Clothes =   []

console.log(Clothes);
Clothes.push({id:1,name:'ONE', description: 'dONE', sizes:[40,42,44,46,58,60], price:100, available: true});
Clothes.push({id:2,name:'TWO', description: 'dTWO', sizes:[40,42,44,46,58,60], price:200, available: false});
Clothes.push({id:3,name:'THREE', description: 'dTHREE', sizes:[40,42,44,46,58,60], price:300, available: true});
Clothes.push({id:4,name:'FOUR', description: 'dFOUR', sizes:[40,42,44,46,58,60], price:400, available: false});
Clothes.push({id:5,name:'FIVE', description: 'dFIVE', sizes:[40,42,44,46,58,60], price:500, available: true});

document.write((Clothes));

let varName = prompt ('Тест');
document.write(varName);