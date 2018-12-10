class Api{
  static url(){
    if (process.env.NODE_ENV === 'development')
      return "http://localhost:3001";
    else {
        return "https://dtrac2.herokuapp.com";
      }
  }
}
export default Api;
