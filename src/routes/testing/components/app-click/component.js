module.exports = class {
    onCreate() {
        this.state = {
            count: 0,
            name:"rajat"
        }
    }

    increment() {
        this.state.count++;
    }

}