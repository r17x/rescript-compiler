

import * as Foo_class from "xx/foo_class";

function f(param) {
  return new Foo_class(3);
}

function v(param) {
  return Foo_class.ff(3);
}

export {
  f ,
  v ,
  
}
/* xx/foo_class Not a pure module */
