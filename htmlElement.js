function HtmlElement() {
  this.click = function () {
    console.log("Click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

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

  this.render = function () {
    return `
    <select>
    ${this.items.map((item) => `<option>${item}</option>`).join("")}
    </select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}"/>`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("abcd"),
];

for (const element of elements) console.log(element.render());
