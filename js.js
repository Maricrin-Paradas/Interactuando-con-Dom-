class crochet {
  constructor(material, hilos, accesorios) {
    this.material = material;
    this.hilos = hilos;
    this.accesorios = accesorios;
  }
}

let getMaterial = prompt("indica que material");
let getHilo = prompt("indica el hilo");
let getAccesorio = prompt("indica cual accesorio a usar");

const tejido1 = new crochet("2 rollo", "lana", "ganchillo");
const tejido2 = new crochet("1 rollo", "algodon", "palillo");
const tejido3 = new crochet("24 rollo", "sintetico", "ganchillo");

let misTejidos = [];

misTejidos.push(tejido1, tejido2, tejido3);

const agregarTejidos = (material, hilo, accesorio) => {
  const tejido4 = new crochet(material, hilo, accesorio);
  misTejidos.push(tejido4);
  console.log(misTejidos);
};

agregarTejidos(getMaterial, getHilo, getAccesorio);

const divCrochet = document.getElementById("divCrochet");

misTejidos.forEach((crochet) => {
  divCrochet.innerHTML += `
    <div>
    <p>material: ${crochet.material} </p>
    <p>hilos: ${crochet.hilos} </p>
    <p>accesorios: ${crochet.accesorios} </p>
    </div>
  `;
});
