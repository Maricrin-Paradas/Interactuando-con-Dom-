let pruebaTejido = 0

class crochet {
  constructor(material, hilos, accesorios) {
    this.material = material;
    this.hilos = hilos;
    this.accesorios = accesorios;
  }

}

const getMaterial = document.getElementById("inputMaterial").value;
const getHilo = document.getElementById("inputHilo").value;
const getAccesorio = document.getElementById("inputAccesorio").value;

const tejido1 = new crochet("2 rollo", "lana", "ganchillo");
const tejido2 = new crochet("1 rollo", "algodon", "palillo");
const tejido3 = new crochet("24 rollo", "sintetico", "ganchillo");
const tejido4 = {
  material:undefined,
  hilo:undefined,
  accesorios:undefined
}

const copyTejido4 = {
  ...tejido4
}

console.log(copyTejido4);

let misTejidos = [];

misTejidos.push(tejido1, tejido2, tejido3, tejido4);

console.table(misTejidos)

/*const agregarTejidos = (material, hilo, accesorio) => {
  const tejido4 = new crochet(material, hilo, accesorio);
  misTejidos.push(tejido4);
  console.log(misTejidos);
};*/

console.table(getMaterial, getHilo, getAccesorio);

let {material, hilos, accesorios} = tejido1
console.log(material)
console.log(hilos)
console.log(accesorios)

pruebaTejido += tejido4.hilo ?? 0
pruebaTejido += tejido4.material ?? 0
pruebaTejido += tejido4.accesorios ?? 0

console.log(pruebaTejido)

/*const divCrochet = document.getElementById("divCrochet");

misTejidos.forEach((crochet) => {
  divCrochet.innerHTML += `
    <div>
    <p>material: ${crochet.material} </p>
    <p>hilos: ${crochet.hilos} </p>
    <p>accesorios: ${crochet.accesorios} </p>
    </div>
  `;
});*/
