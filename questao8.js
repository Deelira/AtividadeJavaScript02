let idades = [12, 18, 25, 30, 15];

let maiores = idades.filter(idades => (idades >= 18));

console.log(maiores);

let dobro = maiores.map(idade => idade * 2);

console.log(dobro);
