export const nameAsteroid = function(item) {
  const regExp = /\(([^)]+)\)/;
  const Name = item.name && regExp.exec(item.name);

  return Name[1]
};

export const dateAsteroid = function(item) {
  const dateAster = item.close_approach_data[0]["close_approach_date"].replace(",");

  const date = new Date(dateAster);
  const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  const numberDate = date.getDate();
  const monthDate = monthNames[date.getMonth()];
  const yearDate = date.getFullYear();

  return `${numberDate} ${monthDate} ${yearDate}`
};

export const distanceAsteroidLunar = (item) => (
  Math.round(item.close_approach_data[0].miss_distance["lunar"])
);

export const absoluteMagnitudeAsteroid = (item) => (
  Math.round(item.absolute_magnitude_h)
);

export const idAsteroid = (item) => (
  item.id
);

export const distanceAsteroidKillometr = (item) => (
  Math.round(item.close_approach_data[0].miss_distance["kilometers"])
);  

export const sizeAsteroid = (item) => (
  Math.round(item.estimated_diameter["meters"].estimated_diameter_max / 2 + 
  item.estimated_diameter["meters"].estimated_diameter_min / 2)
);

export const styleAsteroidDangerous = (item) => (
  item.is_potentially_hazardous_asteroid
);

export const sizeAsteroidSvg = function(size) {
  if (size < 200 ) { 
    return 1
  }
  if (size < 500 ) { 
    return 2
  }
  if (size < 1000 ) { 
    return 3
  }
  if (size > 1000 ) { 
    return 4
  }
};

export const orbitBody = (item) => (
  item.orbiting_body
);

export const distanceKillometr = (item) => (
  Math.round(item.miss_distance.kilometers)
);

export const velocityKillometr = (item) => (
  Math.round(item.relative_velocity.kilometers_per_hour)
);

export const dateConverge = function(item) {
  const dateAster = item["close_approach_date"].replace(",");

  const date = new Date(dateAster);
  const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  const numberDate = date.getDate();
  const monthDate = monthNames[date.getMonth()];
  const yearDate = date.getFullYear(); 

  return `${numberDate} ${monthDate} ${yearDate}`
};

export const nameAsteroidBasket = function(item) {
  const regExp = /\(([^)]+)\)/;
  const Name = item.arrayBasket.name && regExp.exec(item.arrayBasket.name);

  return Name[1]
};

 