import Element from "../constructor/Element.js";
import content from "./content.js";
import contentMini from "./contentMini.js";

const position = new Element('main', 'contenPosition', [content.get(),  
  contentMini.get()]);

export default position;