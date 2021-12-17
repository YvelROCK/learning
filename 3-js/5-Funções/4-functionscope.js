// function scope

let subject = 'create video';

function createThink(subject) {
    subject = 'study';
    return subject; // obs: Toda função sem return é Undefined;
}

console.log(subject);
console.log(createThink(subject));
console.log(subject);



// outra forma



