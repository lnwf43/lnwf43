const getLocation = async () => {
  try {
    const response = await fetch(
      'https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0'
    );
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    console.log(error.message);
  }
};
