class Section {
 constructor({ item, renderer, containerSelector }) {
   this._item = item;
   this._renderer = renderer;
   this._container = document.querySelector(containerSelector);
 }

 renderItems() { 
   this._item.forEach(item => {
     this._renderer(item);
   });
 }
 addItem(element) {
   this._item.push(element);
   this._renderer(element);
 }
}

export default Section;