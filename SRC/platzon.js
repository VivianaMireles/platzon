

export default function platzom(str) /*str es una cadena de caracteres*/
{
  let traslacion = str /*para poder modificar la palabra se ocupa inicializarla*/
  if(str.toLowerCase().endsWith('ar')) /*toLowerCase ponerla en minuscula ,endWith es para ver si termina la pabra*/
  {
    traslacion = str.slice(0, -2) /*slice cortar cararteres. va iniciar del 0 y recortar -2 antes de terminar*/
  }
  if(str.toLowerCase().startsWith('z'))
  {
    traslacion = traslacion +'pe';
  }
  if(traslacion.length >= 10)
  {
    const primeraPalabra = traslacion.slice(0,Math.round(traslacion.length / 2))
    const segundaPalabra =  traslacion.slice(Math.round(traslacion.length / 2))
    traslacion = `${primeraPalabra} - ${segundaPalabra}`
  }

function minMay(str)
{
  const length = str.length
  let traslacion = ''
  let capitalize = true

  for(let i = 0; i<length ; i++)
  {
    const char = str.charAt(i)
    /*.charAt de String devuelve el carácter especificado de una cadena.*/
    traslacion += capitalize ? char.toUpperCase() : char.toLowerCase() /*si es true mayuscula si no minuscula*/
    /*.toUpperCase convierte el texto a mayúscula*/
    /*.toLowerCase convierte el texto en minúsculas*/
    capitalize = !capitalize
  }
  return traslacion
}

  const reverse = (str) => str.split('').reverse().join('')
  /*
   .split convertir los arrays a caracteres con el metodo split diciéndole por cual carácter dividirlo.
   EJEMPLO:
   let str = \'hola\'
   str.split(\'\') == [\'h\',\'o\',\'l\',\'a\']

   .reverse coloca al revés (inversamente) una matriz. El primer elemento pasa a ser el último y el último pasa a ser el primero.

   .join podemos unir un array y convertirlo en un array usando el metodo join.
   EJEMPLO
   let arr = [\'h\',\'o\',\'l\',\'a\']
   arr.join(\'\') == \'hola\'
   */

  if(str == reverse(str)) /*reverse */
  {
    return minMay(str)
  }
  return traslacion
}
