'use strict';

var List = require("../../lib/js/list.js");
var $$Array = require("../../lib/js/array.js");
var Curry = require("../../lib/js/curry.js");
var Caml_option = require("../../lib/js/caml_option.js");
var Ext_string_test = require("./ext_string_test.js");

function filter_map(f, _xs) {
  while(true) {
    var xs = _xs;
    if (!xs) {
      return /* [] */0;
    }
    var ys = xs._1;
    var z = Curry._1(f, xs._0);
    if (z !== undefined) {
      return /* :: */{
              _0: Caml_option.valFromOption(z),
              _1: filter_map(f, ys)
            };
    }
    _xs = ys;
    continue ;
  };
}

function excludes(p, l) {
  var excluded = {
    contents: false
  };
  var aux = function (_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (!param) {
        return List.rev(accu);
      }
      var l = param._1;
      var x = param._0;
      if (Curry._1(p, x)) {
        excluded.contents = true;
        _param = l;
        continue ;
      }
      _param = l;
      _accu = /* :: */{
        _0: x,
        _1: accu
      };
      continue ;
    };
  };
  var v = aux(/* [] */0, l);
  if (excluded.contents) {
    return [
            true,
            v
          ];
  } else {
    return [
            false,
            l
          ];
  }
}

function exclude_with_fact(p, l) {
  var excluded = {
    contents: undefined
  };
  var aux = function (_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (!param) {
        return List.rev(accu);
      }
      var l = param._1;
      var x = param._0;
      if (Curry._1(p, x)) {
        excluded.contents = Caml_option.some(x);
        _param = l;
        continue ;
      }
      _param = l;
      _accu = /* :: */{
        _0: x,
        _1: accu
      };
      continue ;
    };
  };
  var v = aux(/* [] */0, l);
  return [
          excluded.contents,
          excluded.contents !== undefined ? v : l
        ];
}

function exclude_with_fact2(p1, p2, l) {
  var excluded1 = {
    contents: undefined
  };
  var excluded2 = {
    contents: undefined
  };
  var aux = function (_accu, _param) {
    while(true) {
      var param = _param;
      var accu = _accu;
      if (!param) {
        return List.rev(accu);
      }
      var l = param._1;
      var x = param._0;
      if (Curry._1(p1, x)) {
        excluded1.contents = Caml_option.some(x);
        _param = l;
        continue ;
      }
      if (Curry._1(p2, x)) {
        excluded2.contents = Caml_option.some(x);
        _param = l;
        continue ;
      }
      _param = l;
      _accu = /* :: */{
        _0: x,
        _1: accu
      };
      continue ;
    };
  };
  var v = aux(/* [] */0, l);
  return [
          excluded1.contents,
          excluded2.contents,
          excluded1.contents !== undefined && excluded2.contents !== undefined ? v : l
        ];
}

function same_length(_xs, _ys) {
  while(true) {
    var ys = _ys;
    var xs = _xs;
    if (!xs) {
      if (ys) {
        return false;
      } else {
        return true;
      }
    }
    if (!ys) {
      return false;
    }
    _ys = ys._1;
    _xs = xs._1;
    continue ;
  };
}

function filter_mapi(f, xs) {
  var aux = function (_i, _xs) {
    while(true) {
      var xs = _xs;
      var i = _i;
      if (!xs) {
        return /* [] */0;
      }
      var ys = xs._1;
      var z = Curry._2(f, i, xs._0);
      if (z !== undefined) {
        return /* :: */{
                _0: Caml_option.valFromOption(z),
                _1: aux(i + 1 | 0, ys)
              };
      }
      _xs = ys;
      _i = i + 1 | 0;
      continue ;
    };
  };
  return aux(0, xs);
}

function filter_map2(f, _xs, _ys) {
  while(true) {
    var ys = _ys;
    var xs = _xs;
    if (xs) {
      if (ys) {
        var vs = ys._1;
        var us = xs._1;
        var z = Curry._2(f, xs._0, ys._0);
        if (z !== undefined) {
          return /* :: */{
                  _0: Caml_option.valFromOption(z),
                  _1: filter_map2(f, us, vs)
                };
        }
        _ys = vs;
        _xs = us;
        continue ;
      }
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Ext_list_test.filter_map2",
            Error: new Error()
          };
    }
    if (!ys) {
      return /* [] */0;
    }
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Ext_list_test.filter_map2",
          Error: new Error()
        };
  };
}

function filter_map2i(f, xs, ys) {
  var aux = function (_i, _xs, _ys) {
    while(true) {
      var ys = _ys;
      var xs = _xs;
      var i = _i;
      if (xs) {
        if (ys) {
          var vs = ys._1;
          var us = xs._1;
          var z = Curry._3(f, i, xs._0, ys._0);
          if (z !== undefined) {
            return /* :: */{
                    _0: Caml_option.valFromOption(z),
                    _1: aux(i + 1 | 0, us, vs)
                  };
          }
          _ys = vs;
          _xs = us;
          _i = i + 1 | 0;
          continue ;
        }
        throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "Ext_list_test.filter_map2i",
              Error: new Error()
            };
      }
      if (!ys) {
        return /* [] */0;
      }
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Ext_list_test.filter_map2i",
            Error: new Error()
          };
    };
  };
  return aux(0, xs, ys);
}

function rev_map_append(f, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (!l1) {
      return l2;
    }
    _l2 = /* :: */{
      _0: Curry._1(f, l1._0),
      _1: l2
    };
    _l1 = l1._1;
    continue ;
  };
}

function flat_map2(f, lx, ly) {
  var _acc = /* [] */0;
  var _lx = lx;
  var _ly = ly;
  while(true) {
    var ly$1 = _ly;
    var lx$1 = _lx;
    var acc = _acc;
    if (lx$1) {
      if (ly$1) {
        _ly = ly$1._1;
        _lx = lx$1._1;
        _acc = List.rev_append(Curry._2(f, lx$1._0, ly$1._0), acc);
        continue ;
      }
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Ext_list_test.flat_map2",
            Error: new Error()
          };
    }
    if (ly$1) {
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Ext_list_test.flat_map2",
            Error: new Error()
          };
    }
    return List.rev(acc);
  };
}

function flat_map_aux(f, _acc, append, _lx) {
  while(true) {
    var lx = _lx;
    var acc = _acc;
    if (!lx) {
      return List.rev_append(acc, append);
    }
    _lx = lx._1;
    _acc = List.rev_append(Curry._1(f, lx._0), acc);
    continue ;
  };
}

function flat_map(f, lx) {
  return flat_map_aux(f, /* [] */0, /* [] */0, lx);
}

function flat_map_acc(f, append, lx) {
  return flat_map_aux(f, /* [] */0, append, lx);
}

function map2_last(f, l1, l2) {
  if (l1) {
    var l1$1 = l1._1;
    var u = l1._0;
    if (!l1$1) {
      if (l2) {
        if (!l2._1) {
          return /* :: */{
                  _0: Curry._3(f, true, u, l2._0),
                  _1: /* [] */0
                };
        }
        
      } else {
        throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "List.map2_last",
              Error: new Error()
            };
      }
    }
    if (l2) {
      var r = Curry._3(f, false, u, l2._0);
      return /* :: */{
              _0: r,
              _1: map2_last(f, l1$1, l2._1)
            };
    }
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.map2_last",
          Error: new Error()
        };
  }
  if (!l2) {
    return /* [] */0;
  }
  throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "List.map2_last",
        Error: new Error()
      };
}

function map_last(f, l1) {
  if (!l1) {
    return /* [] */0;
  }
  var l1$1 = l1._1;
  var u = l1._0;
  if (!l1$1) {
    return /* :: */{
            _0: Curry._2(f, true, u),
            _1: /* [] */0
          };
  }
  var r = Curry._2(f, false, u);
  return /* :: */{
          _0: r,
          _1: map_last(f, l1$1)
        };
}

function fold_right2_last(f, l1, l2, accu) {
  if (l1) {
    var l1$1 = l1._1;
    var last1 = l1._0;
    if (!l1$1) {
      if (l2) {
        if (!l2._1) {
          return Curry._4(f, true, last1, l2._0, accu);
        }
        
      } else {
        throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "List.fold_right2",
              Error: new Error()
            };
      }
    }
    if (l2) {
      return Curry._4(f, false, last1, l2._0, fold_right2_last(f, l1$1, l2._1, accu));
    }
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.fold_right2",
          Error: new Error()
        };
  }
  if (l2) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.fold_right2",
          Error: new Error()
        };
  }
  return accu;
}

function init(n, f) {
  return $$Array.to_list($$Array.init(n, f));
}

function take(n, l) {
  var arr = $$Array.of_list(l);
  var arr_length = arr.length;
  if (arr_length < n) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Ext_list_test.take",
          Error: new Error()
        };
  }
  return [
          $$Array.to_list($$Array.sub(arr, 0, n)),
          $$Array.to_list($$Array.sub(arr, n, arr_length - n | 0))
        ];
}

function try_take(n, l) {
  var arr = $$Array.of_list(l);
  var arr_length = arr.length;
  if (arr_length <= n) {
    return [
            l,
            arr_length,
            /* [] */0
          ];
  } else {
    return [
            $$Array.to_list($$Array.sub(arr, 0, n)),
            n,
            $$Array.to_list($$Array.sub(arr, n, arr_length - n | 0))
          ];
  }
}

function length_compare(_l, _n) {
  while(true) {
    var n = _n;
    var l = _l;
    if (n < 0) {
      return /* Gt */15949;
    }
    if (!l) {
      if (n === 0) {
        return /* Eq */15500;
      } else {
        return /* Lt */17064;
      }
    }
    _n = n - 1 | 0;
    _l = l._1;
    continue ;
  };
}

function length_larger_than_n(n, _xs, _ys) {
  while(true) {
    var ys = _ys;
    var xs = _xs;
    if (!ys) {
      return length_compare(xs, n) === /* Eq */15500;
    }
    if (!xs) {
      return false;
    }
    _ys = ys._1;
    _xs = xs._1;
    continue ;
  };
}

function exclude_tail(x) {
  var _acc = /* [] */0;
  var _x = x;
  while(true) {
    var x$1 = _x;
    var acc = _acc;
    if (x$1) {
      var ys = x$1._1;
      var x$2 = x$1._0;
      if (!ys) {
        return [
                x$2,
                List.rev(acc)
              ];
      }
      _x = ys;
      _acc = /* :: */{
        _0: x$2,
        _1: acc
      };
      continue ;
    }
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Ext_list_test.exclude_tail",
          Error: new Error()
        };
  };
}

function group(cmp, lst) {
  if (lst) {
    return aux(cmp, lst._0, group(cmp, lst._1));
  } else {
    return /* [] */0;
  }
}

function aux(cmp, x, xss) {
  if (!xss) {
    return /* :: */{
            _0: /* :: */{
              _0: x,
              _1: /* [] */0
            },
            _1: /* [] */0
          };
  }
  var ys = xss._1;
  var y = xss._0;
  if (Curry._2(cmp, x, List.hd(y))) {
    return /* :: */{
            _0: /* :: */{
              _0: x,
              _1: y
            },
            _1: ys
          };
  } else {
    return /* :: */{
            _0: y,
            _1: aux(cmp, x, ys)
          };
  }
}

function stable_group(cmp, lst) {
  return List.rev(group(cmp, lst));
}

function drop(_n, _h) {
  while(true) {
    var h = _h;
    var n = _n;
    if (n < 0) {
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Ext_list_test.drop",
            Error: new Error()
          };
    }
    if (n === 0) {
      return h;
    }
    if (h === /* [] */0) {
      throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Ext_list_test.drop",
            Error: new Error()
          };
    }
    _h = List.tl(h);
    _n = n - 1 | 0;
    continue ;
  };
}

function find_first_not(p, _param) {
  while(true) {
    var param = _param;
    if (!param) {
      return ;
    }
    var a = param._0;
    if (!Curry._1(p, a)) {
      return Caml_option.some(a);
    }
    _param = param._1;
    continue ;
  };
}

function for_all_opt(p, _param) {
  while(true) {
    var param = _param;
    if (!param) {
      return ;
    }
    var v = Curry._1(p, param._0);
    if (v !== undefined) {
      return v;
    }
    _param = param._1;
    continue ;
  };
}

function fold(f, l, init) {
  return List.fold_left((function (acc, i) {
                return Curry._2(f, i, init);
              }), init, l);
}

function rev_map_acc(acc, f, l) {
  var _accu = acc;
  var _param = l;
  while(true) {
    var param = _param;
    var accu = _accu;
    if (!param) {
      return accu;
    }
    _param = param._1;
    _accu = /* :: */{
      _0: Curry._1(f, param._0),
      _1: accu
    };
    continue ;
  };
}

function map_acc(acc, f, l) {
  if (l) {
    return /* :: */{
            _0: Curry._1(f, l._0),
            _1: map_acc(acc, f, l._1)
          };
  } else {
    return acc;
  }
}

function rev_iter(f, xs) {
  if (xs) {
    rev_iter(f, xs._1);
    return Curry._1(f, xs._0);
  }
  
}

function for_all2_no_exn(p, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (!l1) {
      if (l2) {
        return false;
      } else {
        return true;
      }
    }
    if (!l2) {
      return false;
    }
    if (!Curry._2(p, l1._0, l2._0)) {
      return false;
    }
    _l2 = l2._1;
    _l1 = l1._1;
    continue ;
  };
}

function find_no_exn(p, _param) {
  while(true) {
    var param = _param;
    if (!param) {
      return ;
    }
    var x = param._0;
    if (Curry._1(p, x)) {
      return Caml_option.some(x);
    }
    _param = param._1;
    continue ;
  };
}

function find_opt(p, _param) {
  while(true) {
    var param = _param;
    if (!param) {
      return ;
    }
    var v = Curry._1(p, param._0);
    if (v !== undefined) {
      return v;
    }
    _param = param._1;
    continue ;
  };
}

function split_map(f, xs) {
  var _bs = /* [] */0;
  var _cs = /* [] */0;
  var _xs = xs;
  while(true) {
    var xs$1 = _xs;
    var cs = _cs;
    var bs = _bs;
    if (!xs$1) {
      return [
              List.rev(bs),
              List.rev(cs)
            ];
    }
    var match = Curry._1(f, xs$1._0);
    _xs = xs$1._1;
    _cs = /* :: */{
      _0: match[1],
      _1: cs
    };
    _bs = /* :: */{
      _0: match[0],
      _1: bs
    };
    continue ;
  };
}

function reduce_from_right(fn, lst) {
  var match = List.rev(lst);
  if (match) {
    return List.fold_left((function (x, y) {
                  return Curry._2(fn, y, x);
                }), match._0, match._1);
  }
  throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "Ext_list_test.reduce",
        Error: new Error()
      };
}

function reduce_from_left(fn, lst) {
  if (lst) {
    return List.fold_left(fn, lst._0, lst._1);
  }
  throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "Ext_list_test.reduce_from_left",
        Error: new Error()
      };
}

function create_ref_empty(param) {
  return {
          contents: /* [] */0
        };
}

function ref_top(x) {
  var match = x.contents;
  if (match) {
    return match._0;
  }
  throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "Ext_list_test.ref_top",
        Error: new Error()
      };
}

function ref_empty(x) {
  var match = x.contents;
  if (match) {
    return false;
  } else {
    return true;
  }
}

function ref_push(x, refs) {
  refs.contents = /* :: */{
    _0: x,
    _1: refs.contents
  };
  
}

function ref_pop(refs) {
  var match = refs.contents;
  if (match) {
    refs.contents = match._1;
    return match._0;
  }
  throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "Ext_list_test.ref_pop",
        Error: new Error()
      };
}

function rev_except_last(xs) {
  var _acc = /* [] */0;
  var _xs = xs;
  while(true) {
    var xs$1 = _xs;
    var acc = _acc;
    if (xs$1) {
      var xs$2 = xs$1._1;
      var x = xs$1._0;
      if (!xs$2) {
        return [
                acc,
                x
              ];
      }
      _xs = xs$2;
      _acc = /* :: */{
        _0: x,
        _1: acc
      };
      continue ;
    }
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Ext_list_test.rev_except_last",
          Error: new Error()
        };
  };
}

function sort_via_array(cmp, lst) {
  var arr = $$Array.of_list(lst);
  $$Array.sort(cmp, arr);
  return $$Array.to_list(arr);
}

function last(_xs) {
  while(true) {
    var xs = _xs;
    if (xs) {
      var tl = xs._1;
      if (!tl) {
        return xs._0;
      }
      _xs = tl;
      continue ;
    }
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Ext_list_test.last",
          Error: new Error()
        };
  };
}

function assoc_by_string(def, k, _lst) {
  while(true) {
    var lst = _lst;
    if (lst) {
      var match = lst._0;
      if (match[0] === k) {
        return match[1];
      }
      _lst = lst._1;
      continue ;
    }
    if (def !== undefined) {
      return Caml_option.valFromOption(def);
    }
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "ext_list_test.ml",
            399,
            14
          ],
          Error: new Error()
        };
  };
}

function assoc_by_int(def, k, _lst) {
  while(true) {
    var lst = _lst;
    if (lst) {
      var match = lst._0;
      if (match[0] === k) {
        return match[1];
      }
      _lst = lst._1;
      continue ;
    }
    if (def !== undefined) {
      return Caml_option.valFromOption(def);
    }
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "ext_list_test.ml",
            409,
            14
          ],
          Error: new Error()
        };
  };
}

exports.filter_map = filter_map;
exports.excludes = excludes;
exports.exclude_with_fact = exclude_with_fact;
exports.exclude_with_fact2 = exclude_with_fact2;
exports.same_length = same_length;
exports.filter_mapi = filter_mapi;
exports.filter_map2 = filter_map2;
exports.filter_map2i = filter_map2i;
exports.rev_map_append = rev_map_append;
exports.flat_map2 = flat_map2;
exports.flat_map_aux = flat_map_aux;
exports.flat_map = flat_map;
exports.flat_map_acc = flat_map_acc;
exports.map2_last = map2_last;
exports.map_last = map_last;
exports.fold_right2_last = fold_right2_last;
exports.init = init;
exports.take = take;
exports.try_take = try_take;
exports.length_compare = length_compare;
exports.length_larger_than_n = length_larger_than_n;
exports.exclude_tail = exclude_tail;
exports.group = group;
exports.aux = aux;
exports.stable_group = stable_group;
exports.drop = drop;
exports.find_first_not = find_first_not;
exports.for_all_opt = for_all_opt;
exports.fold = fold;
exports.rev_map_acc = rev_map_acc;
exports.map_acc = map_acc;
exports.rev_iter = rev_iter;
exports.for_all2_no_exn = for_all2_no_exn;
exports.find_no_exn = find_no_exn;
exports.find_opt = find_opt;
exports.split_map = split_map;
exports.reduce_from_right = reduce_from_right;
exports.reduce_from_left = reduce_from_left;
exports.create_ref_empty = create_ref_empty;
exports.ref_top = ref_top;
exports.ref_empty = ref_empty;
exports.ref_push = ref_push;
exports.ref_pop = ref_pop;
exports.rev_except_last = rev_except_last;
exports.sort_via_array = sort_via_array;
exports.last = last;
exports.assoc_by_string = assoc_by_string;
exports.assoc_by_int = assoc_by_int;
/* Ext_string_test Not a pure module */
