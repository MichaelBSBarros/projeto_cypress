
export default class Factory {

    static usuario(type, admin = true) {
        switch (type) {
            case 'valid':
                return { 
                    "usuario": "standard_user",
                    "password": "secret_sauce"
                }
            case 'locked':
                return {
                    "usuario": "locked_out_user",
                    "password": "secret_sauce"      
                }
            case 'problem':
                    return {
                        "usuario": "problem_user",
                        "password": "secret_sauce"      
                    }
            case 'performance_glitch':
                    return {
                        "usuario": "performance_glitch_user",
                        "password": "secret_sauce"      
                        }
            case 'empty':
                return {
                    "usuario": "",
                    "password": ""     
                }
                
            default:
                return { notfound:"The user type was not found, please verify!" }
      }
  }
}