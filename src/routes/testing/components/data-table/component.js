module.exports = class {
    onCreate() {
        this.state = {
            rajat_age: 32,
            amrita_age: 31,
            sana_age: 19
        };
    }

    incrementrajat() {
        this.state.rajat_age++;
    }   
    incrementamrita() {
        this.state.amrita_age++;
    }
    incrementsana() {
        this.state.sana_age++;
    }
}