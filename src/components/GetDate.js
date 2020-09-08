module.exports = (unixtimestamp) => {
  // Months array
  var months_arr = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  var date = new Date(unixtimestamp * 1000);

  var month = months_arr[date.getMonth()];

  var day = date.getDate();

  var convdataTime = day + " " + month;

  return convdataTime;
};
