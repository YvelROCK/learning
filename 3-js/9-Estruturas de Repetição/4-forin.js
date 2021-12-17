// for...in
// Percorre as propriedades de um objeto e os indices de um array

/*
let object = {
    name: 'Isaac',
    age: 19,
    weight: 90
}

let array = [
    'Levy',
    'Isaac',
    'Nathalia'
];

console.log('Object propertys')
for (let property in object) {
    //console.log(object);
    console.log(object[property]); // É possivel também percorrer os atributos;
}

console.log('Array indice')
for (let indice in array) {
    console.log(indice);
}*/

let array = [
    {
        p1: "a1",
        p2: [
            {
                title: "x1?",
                auhor: "Augusto Cury" 
            },
            {
                title: "x2?",
                auhor: "Augusto Cury" 
            },
            {
                title: "x3?",
                auhor: "Augusto Cury"             
            }
            
        ]
    },
    {
        p1: "a1",
        p2: [
            {
                title: "x4?",
                auhor: "Outro autor" 
            },
            {
                title: "x5?",
                auhor: "Outro autor" 
            },
            {
                title: "x5?",
                auhor: "Outro autor"             
            }
            
        ]
    }
]

for (let i1 of array) 
{
    //console.log(i1.p2);
    for (let i2 of i1.p2) 
    {
        //console.log(i2);
        for (let i3 in i2) 
        {
            if (i2[i3] === 'Augusto Cury')
            {
                console.log(i2[i3]);
            }
        }
    }    
}