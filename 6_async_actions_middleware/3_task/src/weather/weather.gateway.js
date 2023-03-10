const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

const getWeatherGateway = () =>
  fetch(baseUrl).then(res => {
    if (res.ok) return res.json();
    throw new Error('Error!');
  });

export default getWeatherGateway;
