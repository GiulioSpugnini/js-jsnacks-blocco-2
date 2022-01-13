//Generatore di “nomi cognomi” casuali: 
//prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const fakeInvites = [];
const nomi = ['ciccio', 'caio', 'sempronio'];
const cognomi = ['rossi', 'verdi', 'neri'];

//#WHILE

while (fakeInvites.length < 3) {
    const randNum1 = Math.floor(Math.random() * nomi.length);
    const randNum2 = Math.floor(Math.random() * cognomi.length);
    const name = nomi[randNum1];
    const lastName = cognomi[randNum2];
    const fakePerson = `${name} ${lastName} `;
    if (!fakeInvites.includes(fakePerson)) {
        fakeInvites.push(fakePerson);

    }
    console.log(fakePerson);
}