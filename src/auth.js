
class Auth{
  authenticated ;
    user;
    constructor(){
        this.authenticated = false;
    }

    login(userEmail ){
        this.authenticated = true;
        this.user = userEmail.slice(0,-10).toUpperCase();
    }

    logout(){
        this.authenticated = false ;
    }

    isAutheticated(){
        return this.authenticated;
    }
    
    getuser(){
        return this.user;
    }
}

export default new Auth();