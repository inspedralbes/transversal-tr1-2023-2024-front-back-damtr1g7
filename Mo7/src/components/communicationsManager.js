//import { io } from "socket.io-client";
//const socket = io('http://localhost:3001');
/*
//Funcion para coger todas las comandas
export async function getComandas() {
  const response = await fetch(`http://localhost:3001/getComandes`);
  const comandas = await response.json();
  return comandas;
}

//Funcion para coger todas las aceptadas
export async function getComandasAceptadas() {
  const response = await fetch(`http://localhost:3001/getComandesAceptadas`);
  const comandas = await response.json();
  return comandas;
}

//Funcion para coger todas las comandas finalizadas
export async function getComandasFinalizadas() {
  const response = await fetch(`http://localhost:3001/getComandasFinalizadas`);
  const comandas = await response.json();
  return comandas;
}*/

/*
// Función para enviar al servidor que la comanda está aceptada o rechazada para socket
export function estatComanda(id, estat) {
  return new Promise((resolve, reject) => {
    socket.emit('comandaAceptada', { id, estat }, (info) => {
      resolve(info);
    });
  });
}*/

/*Funcion para enviar al server que la comanda esta aceptada o rechazada
export async function estatComanda(id,estat) {  
  const response = await fetch(`http://localhost:3001/${id},${estat}`);
  const info = await response.json();
  return info;
}

//Funcion para enviar la comanda que este finalizada
export async function comandaFinalitzada(id, finalitzada) {
  const response = await fetch(`http://localhost:3001/${id},${finalitzada}`);
  const info = await response.json();
  return info;
}

//Funcion para enviar al servidor la comanda que este recogida
export async function comandaRecogida(id, recollida) {
  const response = await fetch(`http://localhost:3001/${id},${recollida}`);
  const info = await response.json();
  return info;
}*/

//Funcion para coger los productos del servidor
export async function getProductos() {
  const response = await fetch('http://pfcgrup7.dam.inspedralbes.cat:3044/getProductos');
  const productos = await response.json();
  return productos
}

//Funcion para borrar los productos
export async function deleteProducte(id) {
  //console.log("eliminar producte: " + id)
  const response = await fetch(`http://pfcgrup7.dam.inspedralbes.cat:3044/eliminarProducte/${id}`,
    { method: 'DELETE' });
  console.log(response);

}
//Funcion para agregar productos
export async function addProducte(dadesProducte) {
  //console.log(dadesProducte)
  const response = await fetch(`http://pfcgrup7.dam.inspedralbes.cat:3044/agregarProducte`,
    {
      method: 'POST', headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(dadesProducte),
      mode: "cors"
    },);

}
//Funcion para modificar productos
export async function updateProducte(id,dadesProductemodificar) {
  console.log(dadesProductemodificar)
  console.log(id)
  const response = await fetch(`http://pfcgrup7.dam.inspedralbes.cat:3044/modificarProducte/${id}`,
  //const response = await fetch(`http://localhost:3044/modificarProducte/${id}`,
    {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadesProductemodificar),
      mode: "cors"
    },);

}

export async function updateEstatProducte(id,estat) {
  console.log("producte a updatear estado: " + id)
  console.log("estado: " + estat)
  const requestBody = JSON.stringify({ estat });
  
  const response = await fetch(`http://pfcgrup7.dam.inspedralbes.cat:3044/updateEstatProducte/${id}`,
  
    {
      method: 'PUT', headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
      mode: "cors"
    },);

}

//Funcion para coger las estadisticas del servidor
export async function getPython() {
  const response = await fetch('http://pfcgrup7.dam.inspedralbes.cat:3044/getPython');
  const grafics = await response.json();
  return grafics
}


