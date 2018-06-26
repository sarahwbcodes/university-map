

export const getAll = (lat,lng) =>
  fetch(`https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}&categoryId=4bf58dd8d48988d1ae941735&client_id=ASZFT4LNLRCNQQJ1EE5LWPF1HRQCUN5XLF3M4ALZ20DWKOD1&client_secret=PK1NNHTEOTVZKLBFZAKSYHXJJHLJN3MBOCDSZG0MP5AGI35A&v=20180723`)
  .then(res =>  { return res.json()}).catch(err => {console.log(err)})
