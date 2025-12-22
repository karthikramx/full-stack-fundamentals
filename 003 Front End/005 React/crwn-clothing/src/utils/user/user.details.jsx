const GetLocation = async () => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    });
  } else {
    return Promise.reject("Geolocation is not supported by this browser.");
  }
};

const GetIpLocation = async () => {
  try {
    const { latitude, longitude } = await GetLocation();
    console.log({ latitude, longitude });
    return { latitude, longitude };
  } catch (error) {
    return Promise.reject("Geolocation is not supported by this browser.");
  }
};

export { GetIpLocation, GetLocation };
