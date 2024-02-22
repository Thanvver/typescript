var biriyani = /** @class */ (function () {
    function biriyani(name) {
        this.name = name;
    }
    biriyani.prototype.having = function () {
        console.log("having", this.name);
    };
    return biriyani;
}());
var mandhi = /** @class */ (function () {
    function mandhi(name) {
        this.name = name;
    }
    mandhi.prototype.having = function () {
        console.log("having", this.name);
    };
    return mandhi;
}());
var customer = /** @class */ (function () {
    function customer(foodObject) {
        this.dish = foodObject;
    }
    customer.prototype.eating = function () {
        this.dish.having();
    };
    return customer;
}());
var biriyaniObj = new biriyani("chicken biriyani");
var mandhiObj = new mandhi("chicken mandhi");
var customer1 = new customer(mandhiObj);
customer1.eating();
