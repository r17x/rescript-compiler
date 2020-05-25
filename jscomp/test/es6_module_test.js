'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");

function length(param) {
  return 3;
}

Mt.from_pair_suites("Es6_module_test", /* :: */{
      _0: [
        "list_length",
        (function (param) {
            return {
                    TAG: /* Eq */0,
                    _0: List.length(/* :: */{
                          _0: 1,
                          _1: /* :: */{
                            _0: 2,
                            _1: /* [] */0
                          }
                        }),
                    _1: 2
                  };
          })
      ],
      _1: /* :: */{
        _0: [
          "length",
          (function (param) {
              return {
                      TAG: /* Eq */0,
                      _0: 3,
                      _1: 3
                    };
            })
        ],
        _1: /* [] */0
      }
    });

exports.length = length;
/*  Not a pure module */
