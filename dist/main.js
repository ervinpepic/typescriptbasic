var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SweetSweetBasil = (function () {
    function SweetSweetBasil() {
    }
    SweetSweetBasil.prototype.getcolor = function () {
        console.log(this.color);
    };
    return SweetSweetBasil;
}());
var Basil = (function (_super) {
    __extends(Basil, _super);
    function Basil(name, startcolor) {
        var _this = _super.call(this) || this;
        _this.nameNew = name;
        _this.color = startcolor;
        return _this;
    }
    Basil.prototype.setNewColor = function (newColor) {
        this.color = newColor;
        _super.prototype.getcolor.call(this);
    };
    return Basil;
}(SweetSweetBasil));
var ervin1 = new Basil("hej", "o");
ervin1.getcolor();
ervin1.setNewColor("roza");
