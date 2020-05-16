function HtmlElement() {
  this.click = function () {
    console.log("Click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

const h = new HtmlElement();
console.log(h);

function HtmlSelectElement(items = []) {
  this.addItem = function (item) {
    this.items.push(item);
  };

  this.items = items;

  this.removeItem = function (item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
