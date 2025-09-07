class Section {
 constructor({ items, renderer, containerSelector }) {
   this._items = items;
   this._renderer = renderer;
   this._container = document.querySelector(containerSelector);
 }

 renderItems() { 
   this._items.forEach(item => {
     this._renderer(item);
   });
 }
 addItem(element) {
   this._items.push(element);
   this._renderer(element);
 }
}

export default Section;