//упорядкування кошика товарів

// const products = [
//   {
//     id: "sku1",
//     qty: 1,
//   },
//   {
//     id: "sku2",
//     qty: 2,
//   },
//   {
//     id: "sku3",
//     qty: 3,
//   },
//   {
//     id: "sku1",
//     qty: 6,
//   },
//   {
//     id: "sku1",
//     qty: 8,
//   },
//   {
//     id: "sku2",
//     qty: 19,
//   },
//   {
//     id: "sku4",
//     qty: 1,
//   }, 
// ];

//при кожній ітерації вирізається об'єкт і на його 
              //місце піднімається наступний, а отже при наступній
              // ітерації його просто не перевірять на співпадіння 
              
              //тому вказуємо що при наступній ітерації обов'язково 
              //перевірити попередній елемент на співпадіння (рядок48)
// function sortProducts(arr) {
//     for (let i = 0; i < arr.length; i += 1) {
//         // console.log('поточний', arr[i])
//         for (let j = i + 1; j < arr.length; j += 1) {
//             // console.log('наступний', arr[j])
//             if (arr[i].id === arr[j].id) {
//                 arr[i].qty += arr[j].qty;
//                 arr.splice(j, 1);              
//                 j -= 1;
//             }
//         }
//     }
    
// }

// sortProducts(products)
// console.log(products)


//у масиві, якщо не днакові літери, то вивести цей рядок
function findUniq(arr) {
    for (let i = 0; i < arr.length; i += 1) {

        const result = arr[i].split('').every((item) => {
            for (let j = 0; j < arr.length; j += 1) {
                if (i !== j) {
                    // console.log('поточне', arr[i])
                    // console.log('порівнюю з', arr[j])
                    if (!arr[j].includes(item)) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        })
        if (result) {
            return arr[i]
        }
    }
}


console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']))

