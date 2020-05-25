'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Curry = require("../../lib/js/curry.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var CamlinternalLazy = require("../../lib/js/camlinternalLazy.js");

var x = {};

x._0 = 1;

x._1 = x;

var x0 = {};

Caml_obj.update_dummy(x0, {
      HASH: /* Cons */748545553,
      value: [
        1,
        x0
      ]
    });

var y0 = {};

Caml_obj.update_dummy(y0, {
      HASH: /* Cons */748545553,
      value: y0
    });

var a = {};

var b = {};

var c = {};

Caml_obj.update_dummy(a, /* :: */{
      _0: 2,
      _1: b
    });

Caml_obj.update_dummy(b, /* :: */{
      _0: 3,
      _1: c
    });

Caml_obj.update_dummy(c, /* :: */{
      _0: 3,
      _1: a
    });

var xx = {};

xx._0 = 1;

xx._1 = xx;

function naive(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return (n + naive(n - 1 | 0) | 0) + naive(n - 2 | 0) | 0;
  }
}

var four = {
  contents: 2
};

var three = {
  contents: 3
};

var h = {
  RE_LAZY_DONE: true,
  value: fib
};

var v = {
  contents: (function (param) {
      throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "rec_value_test.ml",
              28,
              24
            ],
            Error: new Error()
          };
    })
};

function fib(n) {
  switch (n) {
    case 0 :
        return four.contents;
    case 1 :
        return 1;
    case 2 :
        return three.contents;
    case 3 :
        v.contents = CamlinternalLazy.force(h);
        return 1;
    default:
      return fib(n - 1 | 0) + fib(n - 2 | 0) | 0;
  }
}

function zs(param) {
  return List.hd(xs[0]);
}

var xs_0 = /* :: */{
  _0: 2,
  _1: /* [] */0
};

var xs = [
  xs_0,
  zs
];

function fib2(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fib2(n - 1 | 0) + fib2(n - 2 | 0) | 0;
  }
}

var two = 2;

function fib3(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fib3(n - 1 | 0) + fib3(n - 2 | 0) | 0;
  }
}

function even(n) {
  if (n === 0) {
    return true;
  } else {
    var n$1 = n - 1 | 0;
    if (n$1 === 1) {
      return true;
    } else {
      return even(n$1 - 1 | 0);
    }
  }
}

function even2(_n) {
  while(true) {
    var n = _n;
    if (n === 0) {
      return true;
    }
    _n = n - 1 | 0;
    continue ;
  };
}

var lazy_v = {
  RE_LAZY_DONE: true,
  value: (function (param) {
      CamlinternalLazy.force(lazy_v);
      
    })
};

function sum(_acc, _n) {
  while(true) {
    var n = _n;
    var acc = _acc;
    if (n <= 0) {
      return acc;
    }
    _n = n - 1 | 0;
    _acc = acc + n | 0;
    continue ;
  };
}

var fake_v = /* :: */{
  _0: 1,
  _1: /* :: */{
    _0: 2,
    _1: /* [] */0
  }
};

var fake_y = /* :: */{
  _0: 2,
  _1: /* :: */{
    _0: 3,
    _1: /* [] */0
  }
};

var fake_z = /* :: */{
  _0: 1,
  _1: fake_y
};

var fake_y2 = /* :: */{
  _0: 2,
  _1: /* :: */{
    _0: 3,
    _1: /* [] */0
  }
};

var fake_z2_1 = /* :: */{
  _0: sum(0, 10),
  _1: fake_y2
};

var fake_z2 = /* :: */{
  _0: 1,
  _1: fake_z2_1
};

function rec_variant_b_1(param) {
  return rec_variant_a;
}

var rec_variant_b = {
  TAG: /* B */0,
  _0: "gho",
  _1: rec_variant_b_1
};

function rec_variant_a_1(param) {
  return rec_variant_b;
}

var rec_variant_a = {
  TAG: /* A */1,
  _0: 3,
  _1: rec_variant_a_1
};

function phd(l) {
  if (typeof l === "number") {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "rec_value_test.ml",
            105,
            9
          ],
          Error: new Error()
        };
  }
  if (l.HASH !== 748545553) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "rec_value_test.ml",
            105,
            9
          ],
          Error: new Error()
        };
  }
  return l.value[0];
}

function ptl(l) {
  if (typeof l === "number") {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "rec_value_test.ml",
            110,
            9
          ],
          Error: new Error()
        };
  }
  if (l.HASH !== 748545553) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "rec_value_test.ml",
            110,
            9
          ],
          Error: new Error()
        };
  }
  return l.value[1];
}

var y00 = {};

Caml_obj.update_dummy(y00, {
      TAG: /* C1 */1,
      hd: 1,
      tail: y00
    });

function xhd(h) {
  return h.hd;
}

function xtl(h) {
  return h.tail;
}

var suites_0 = [
  "File \"rec_value_test.ml\", line 126, characters 2-9",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: 1,
              _1: phd(ptl(ptl(x0)))
            };
    })
];

var suites_1 = /* :: */{
  _0: [
    "File \"rec_value_test.ml\", line 128, characters 2-9",
    (function (param) {
        return {
                TAG: /* Eq */0,
                _0: 1,
                _1: 1
              };
      })
  ],
  _1: /* :: */{
    _0: [
      "hd",
      (function (param) {
          return {
                  TAG: /* Eq */0,
                  _0: 1,
                  _1: List.hd(List.tl(x))
                };
        })
    ],
    _1: /* :: */{
      _0: [
        "mutual",
        (function (param) {
            var tmp;
            if (a) {
              var match = a._1;
              if (match) {
                tmp = match._0;
              } else {
                throw {
                      RE_EXN_ID: "Assert_failure",
                      _1: [
                        "rec_value_test.ml",
                        140,
                        2
                      ],
                      Error: new Error()
                    };
              }
            } else {
              throw {
                    RE_EXN_ID: "Assert_failure",
                    _1: [
                      "rec_value_test.ml",
                      140,
                      2
                    ],
                    Error: new Error()
                  };
            }
            return {
                    TAG: /* Eq */0,
                    _0: 3,
                    _1: tmp
                  };
          })
      ],
      _1: /* :: */{
        _0: [
          "rec_sum",
          (function (param) {
              return {
                      TAG: /* Eq */0,
                      _0: 55,
                      _1: sum(0, 10)
                    };
            })
        ],
        _1: /* :: */{
          _0: [
            "File \"rec_value_test.ml\", line 143, characters 2-9",
            (function (param) {
                return {
                        TAG: /* Eq */0,
                        _0: /* :: */{
                          _0: 1,
                          _1: /* :: */{
                            _0: 2,
                            _1: /* [] */0
                          }
                        },
                        _1: fake_v
                      };
              })
          ],
          _1: /* :: */{
            _0: [
              "File \"rec_value_test.ml\", line 146, characters 2-9",
              (function (param) {
                  return {
                          TAG: /* Eq */0,
                          _0: /* :: */{
                            _0: 2,
                            _1: /* :: */{
                              _0: 3,
                              _1: /* [] */0
                            }
                          },
                          _1: fake_y
                        };
                })
            ],
            _1: /* :: */{
              _0: [
                "File \"rec_value_test.ml\", line 149, characters 2-9",
                (function (param) {
                    return {
                            TAG: /* Eq */0,
                            _0: /* :: */{
                              _0: 1,
                              _1: /* :: */{
                                _0: 2,
                                _1: /* :: */{
                                  _0: 3,
                                  _1: /* [] */0
                                }
                              }
                            },
                            _1: fake_z
                          };
                  })
              ],
              _1: /* :: */{
                _0: [
                  "File \"rec_value_test.ml\", line 152, characters 2-9",
                  (function (param) {
                      return {
                              TAG: /* Eq */0,
                              _0: /* :: */{
                                _0: 1,
                                _1: /* :: */{
                                  _0: 55,
                                  _1: /* :: */{
                                    _0: 2,
                                    _1: /* :: */{
                                      _0: 3,
                                      _1: /* [] */0
                                    }
                                  }
                                }
                              },
                              _1: fake_z2
                            };
                    })
                ],
                _1: /* :: */{
                  _0: [
                    "File \"rec_value_test.ml\", line 155, characters 2-9",
                    (function (param) {
                        return {
                                TAG: /* Eq */0,
                                _0: /* :: */{
                                  _0: 2,
                                  _1: /* :: */{
                                    _0: 3,
                                    _1: /* [] */0
                                  }
                                },
                                _1: fake_y2
                              };
                      })
                  ],
                  _1: /* :: */{
                    _0: [
                      "File \"rec_value_test.ml\", line 158, characters 2-9",
                      (function (param) {
                          return {
                                  TAG: /* Eq */0,
                                  _0: 3,
                                  _1: 3
                                };
                        })
                    ],
                    _1: /* :: */{
                      _0: [
                        "File \"rec_value_test.ml\", line 161, characters 2-9",
                        (function (param) {
                            if (!rec_variant_b.TAG) {
                              return {
                                      TAG: /* Eq */0,
                                      _0: Curry._1(rec_variant_b_1, undefined),
                                      _1: rec_variant_a
                                    };
                            }
                            throw {
                                  RE_EXN_ID: "Assert_failure",
                                  _1: [
                                    "rec_value_test.ml",
                                    164,
                                    11
                                  ],
                                  Error: new Error()
                                };
                          })
                      ],
                      _1: /* :: */{
                        _0: [
                          "File \"rec_value_test.ml\", line 166, characters 2-9",
                          (function (param) {
                              if (rec_variant_a.TAG) {
                                return {
                                        TAG: /* Eq */0,
                                        _0: Curry._1(rec_variant_a_1, undefined),
                                        _1: rec_variant_b
                                      };
                              }
                              throw {
                                    RE_EXN_ID: "Assert_failure",
                                    _1: [
                                      "rec_value_test.ml",
                                      169,
                                      11
                                    ],
                                    Error: new Error()
                                  };
                            })
                        ],
                        _1: /* [] */0
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

var suites = /* :: */{
  _0: suites_0,
  _1: suites_1
};

function fake_minus(n) {
  console.log(n);
  return n + 1 | 0;
}

var fake_odd = fake_minus;

function fake_inline_minus(n) {
  return n + 1 | 0;
}

var fake_inline = fake_inline_minus;

var fake_inline_inlie2 = fake_inline_minus(3);

Mt.from_pair_suites("Rec_value_test", suites);

var v$1 = 3;

exports.x = x;
exports.x0 = x0;
exports.y0 = y0;
exports.a = a;
exports.b = b;
exports.c = c;
exports.xx = xx;
exports.naive = naive;
exports.fib = fib;
exports.xs = xs;
exports.fib2 = fib2;
exports.two = two;
exports.fib3 = fib3;
exports.even = even;
exports.even2 = even2;
exports.lazy_v = lazy_v;
exports.sum = sum;
exports.fake_v = fake_v;
exports.fake_y = fake_y;
exports.fake_z = fake_z;
exports.fake_z2 = fake_z2;
exports.fake_y2 = fake_y2;
exports.v = v$1;
exports.rec_variant_b = rec_variant_b;
exports.rec_variant_a = rec_variant_a;
exports.phd = phd;
exports.ptl = ptl;
exports.y00 = y00;
exports.xhd = xhd;
exports.xtl = xtl;
exports.suites = suites;
exports.fake_odd = fake_odd;
exports.fake_minus = fake_minus;
exports.fake_inline = fake_inline;
exports.fake_inline_minus = fake_inline_minus;
exports.fake_inline_inlie2 = fake_inline_inlie2;
/* fake_z2 Not a pure module */
