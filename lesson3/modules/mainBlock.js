import Element from "../constructor/Element.js";
import position from "./positionContent.js";
import footer from "./footer.js";
import header from "./header.js";


const mainBlock = new Element('main', 'position', [header.get(), 
  position.get(), 
  footer.get()]);

export default mainBlock;