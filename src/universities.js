
//fetching API 
export const getAll = () =>
  fetch(`https://api.foursquare.com/v2/lists/499268126/universities?&client_id=ASZFT4LNLRCNQQJ1EE5LWPF1HRQCUN5XLF3M4ALZ20DWKOD1&client_secret=PK1NNHTEOTVZKLBFZAKSYHXJJHLJN3MBOCDSZG0MP5AGI35A&v=20180723&v=20180628`)
  .then(res =>  { return res.json()}).catch(err => {window.alert(err)})
  
 
  export const apiSearch = ()=>{
    fetch(`https://api.foursquare.com/v2/lists/499268126/universities?&client_id=ASZFT4LNLRCNQQJ1EE5LWPF1HRQCUN5XLF3M4ALZ20DWKOD1&client_secret=PK1NNHTEOTVZKLBFZAKSYHXJJHLJN3MBOCDSZG0MP5AGI35A&v=20180723&v=20180628`)
   .then(res => res.json())
   .then(data =>{
     this.setState({
      query: data
     });
   })
   .catch(err=> {
     window.alert(err);
   })
  }