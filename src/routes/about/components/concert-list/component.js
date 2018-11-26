let data = require("./data");
module.exports = class {

    onCreate(){
        this.state = {
            concerts:data.concerts
        } 
    }
    

}