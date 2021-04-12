export const nameAsteroid = function(item) {
  const regExp = /\(([^)]+)\)/;
  const Name = regExp.exec(item.name);

  return Name[1]
};

export const dateAsteroid = function(item) {
  const dateAster = item.close_approach_data[0]["close_approach_date"].replace(/\-/g, ",");

  const date = new Date(dateAster);
  const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  const numberDate = date.getDate();
  const monthDate = monthNames[date.getMonth() - 1];
  const yearDate = date.getFullYear();

  return `${numberDate} ${monthDate} ${yearDate}`
};

export const distanceAsteroidLunar = (item) => (
  Math.round(item.close_approach_data[0].miss_distance["lunar"])
);

export const sizeAsteroid = (item) => (
  Math.round(item.estimated_diameter["meters"].estimated_diameter_max / 2 + 
  item.estimated_diameter["meters"].estimated_diameter_min / 2)
);





