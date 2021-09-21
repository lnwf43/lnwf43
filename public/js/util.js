/**
 * Devuelve la fecha actual formateada dd/mm/yyy
 */

function getDate() {
  let dateFormat = '';
  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (month < 10) {
    dateFormat = `${day}-0${month}-${year}`;
  } else {
    dateFormat = `${day}-${month}-${year}`;
  }
  return dateFormat;
}
