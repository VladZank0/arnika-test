(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
})(this, (function (exports) { 'use strict';

    function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
            writable: false
        });
        return Constructor;
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true
            }
        });
        Object.defineProperty(subClass, "prototype", {
            writable: false
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;

        for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }

        return target;
    }

    function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};

        var target = _objectWithoutPropertiesLoose(source, excluded);

        var key, i;

        if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
                key = sourceSymbolKeys[i];
                if (excluded.indexOf(key) >= 0) continue;
                if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                target[key] = source[key];
            }
        }

        return target;
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }

    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
        } else if (call !== void 0) {
            throw new TypeError("Derived constructors may only return object or undefined");
        }

        return _assertThisInitialized(self);
    }

    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
                result;

            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;

                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }

            return _possibleConstructorReturn(this, result);
        };
    }

    function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
        }

        return object;
    }

    function _get() {
        if (typeof Reflect !== "undefined" && Reflect.get) {
            _get = Reflect.get.bind();
        } else {
            _get = function _get(target, property, receiver) {
                var base = _superPropBase(target, property);

                if (!base) return;
                var desc = Object.getOwnPropertyDescriptor(base, property);

                if (desc.get) {
                    return desc.get.call(arguments.length < 3 ? target : receiver);
                }

                return desc.value;
            };
        }

        return _get.apply(this, arguments);
    }

    function set(target, property, value, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.set) {
            set = Reflect.set;
        } else {
            set = function set(target, property, value, receiver) {
                var base = _superPropBase(target, property);

                var desc;

                if (base) {
                    desc = Object.getOwnPropertyDescriptor(base, property);

                    if (desc.set) {
                        desc.set.call(receiver, value);
                        return true;
                    } else if (!desc.writable) {
                        return false;
                    }
                }

                desc = Object.getOwnPropertyDescriptor(receiver, property);

                if (desc) {
                    if (!desc.writable) {
                        return false;
                    }

                    desc.value = value;
                    Object.defineProperty(receiver, property, desc);
                } else {
                    _defineProperty(receiver, property, value);
                }

                return true;
            };
        }

        return set(target, property, value, receiver);
    }

    function _set(target, property, value, receiver, isStrict) {
        var s = set(target, property, value, receiver || target);

        if (!s && isStrict) {
            throw new Error('failed to set property');
        }

        return value;
    }

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }

    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }

    function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;

        var _s, _e;

        try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }

        return _arr;
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    /**
     Provides details of changing model value
     @param {Object} [details]
     @param {string} [details.inserted] - Inserted symbols
     @param {boolean} [details.skip] - Can skip chars
     @param {number} [details.removeCount] - Removed symbols count
     @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
     */
    var ChangeDetails = /*#__PURE__*/function () {
        /** Inserted symbols */

        /** Can skip chars */

        /** Additional offset if any changes occurred before tail */

        /** Raw inserted is used by dynamic mask */
        function ChangeDetails(details) {
            _classCallCheck(this, ChangeDetails);

            Object.assign(this, {
                inserted: '',
                rawInserted: '',
                skip: false,
                tailShift: 0
            }, details);
        }
        /**
         Aggregate changes
         @returns {ChangeDetails} `this`
         */


        _createClass(ChangeDetails, [{
            key: "aggregate",
            value: function aggregate(details) {
                this.rawInserted += details.rawInserted;
                this.skip = this.skip || details.skip;
                this.inserted += details.inserted;
                this.tailShift += details.tailShift;
                return this;
            }
            /** Total offset considering all changes */

        }, {
            key: "offset",
            get: function get() {
                return this.tailShift + this.inserted.length;
            }
        }]);

        return ChangeDetails;
    }();

    /** Checks if value is string */

    function isString(str) {
        return typeof str === 'string' || str instanceof String;
    }
    /**
     Direction
     @prop {string} NONE
     @prop {string} LEFT
     @prop {string} FORCE_LEFT
     @prop {string} RIGHT
     @prop {string} FORCE_RIGHT
     */

    var DIRECTION = {
        NONE: 'NONE',
        LEFT: 'LEFT',
        FORCE_LEFT: 'FORCE_LEFT',
        RIGHT: 'RIGHT',
        FORCE_RIGHT: 'FORCE_RIGHT'
    };
    /** */

    function forceDirection(direction) {
        switch (direction) {
            case DIRECTION.LEFT:
                return DIRECTION.FORCE_LEFT;

            case DIRECTION.RIGHT:
                return DIRECTION.FORCE_RIGHT;

            default:
                return direction;
        }
    }
    /** Escapes regular expression control chars */

    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    }
    function normalizePrepare(prep) {
        return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
    } // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

    function objectIncludes(b, a) {
        if (a === b) return true;
        var arrA = Array.isArray(a),
            arrB = Array.isArray(b),
            i;

        if (arrA && arrB) {
            if (a.length != b.length) return false;

            for (i = 0; i < a.length; i++) {
                if (!objectIncludes(a[i], b[i])) return false;
            }

            return true;
        }

        if (arrA != arrB) return false;

        if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
            var dateA = a instanceof Date,
                dateB = b instanceof Date;
            if (dateA && dateB) return a.getTime() == b.getTime();
            if (dateA != dateB) return false;
            var regexpA = a instanceof RegExp,
                regexpB = b instanceof RegExp;
            if (regexpA && regexpB) return a.toString() == b.toString();
            if (regexpA != regexpB) return false;
            var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

            for (i = 0; i < keys.length; i++) {
                // $FlowFixMe ... ???
                if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
            }

            for (i = 0; i < keys.length; i++) {
                if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
            }

            return true;
        } else if (a && b && typeof a === 'function' && typeof b === 'function') {
            return a.toString() === b.toString();
        }

        return false;
    }
    /** Selection range */

    /** Provides details of changing input */

    var ActionDetails = /*#__PURE__*/function () {
        /** Current input value */

        /** Current cursor position */

        /** Old input value */

        /** Old selection */
        function ActionDetails(value, cursorPos, oldValue, oldSelection) {
            _classCallCheck(this, ActionDetails);

            this.value = value;
            this.cursorPos = cursorPos;
            this.oldValue = oldValue;
            this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

            while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
                --this.oldSelection.start;
            }
        }
        /**
         Start changing position
         @readonly
         */


        _createClass(ActionDetails, [{
            key: "startChangePos",
            get: function get() {
                return Math.min(this.cursorPos, this.oldSelection.start);
            }
            /**
             Inserted symbols count
             @readonly
             */

        }, {
            key: "insertedCount",
            get: function get() {
                return this.cursorPos - this.startChangePos;
            }
            /**
             Inserted symbols
             @readonly
             */

        }, {
            key: "inserted",
            get: function get() {
                return this.value.substr(this.startChangePos, this.insertedCount);
            }
            /**
             Removed symbols count
             @readonly
             */

        }, {
            key: "removedCount",
            get: function get() {
                // Math.max for opposite operation
                return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
                    this.oldValue.length - this.value.length, 0);
            }
            /**
             Removed symbols
             @readonly
             */

        }, {
            key: "removed",
            get: function get() {
                return this.oldValue.substr(this.startChangePos, this.removedCount);
            }
            /**
             Unchanged head symbols
             @readonly
             */

        }, {
            key: "head",
            get: function get() {
                return this.value.substring(0, this.startChangePos);
            }
            /**
             Unchanged tail symbols
             @readonly
             */

        }, {
            key: "tail",
            get: function get() {
                return this.value.substring(this.startChangePos + this.insertedCount);
            }
            /**
             Remove direction
             @readonly
             */

        }, {
            key: "removeDirection",
            get: function get() {
                if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right

                return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
                this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
            }
        }]);

        return ActionDetails;
    }();

    /** Provides details of continuous extracted tail */
    var ContinuousTailDetails = /*#__PURE__*/function () {
        /** Tail value as string */

        /** Tail start position */

        /** Start position */
        function ContinuousTailDetails() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var stop = arguments.length > 2 ? arguments[2] : undefined;

            _classCallCheck(this, ContinuousTailDetails);

            this.value = value;
            this.from = from;
            this.stop = stop;
        }

        _createClass(ContinuousTailDetails, [{
            key: "toString",
            value: function toString() {
                return this.value;
            }
        }, {
            key: "extend",
            value: function extend(tail) {
                this.value += String(tail);
            }
        }, {
            key: "appendTo",
            value: function appendTo(masked) {
                return masked.append(this.toString(), {
                    tail: true
                }).aggregate(masked._appendPlaceholder());
            }
        }, {
            key: "state",
            get: function get() {
                return {
                    value: this.value,
                    from: this.from,
                    stop: this.stop
                };
            },
            set: function set(state) {
                Object.assign(this, state);
            }
        }, {
            key: "unshift",
            value: function unshift(beforePos) {
                if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
                var shiftChar = this.value[0];
                this.value = this.value.slice(1);
                return shiftChar;
            }
        }, {
            key: "shift",
            value: function shift() {
                if (!this.value.length) return '';
                var shiftChar = this.value[this.value.length - 1];
                this.value = this.value.slice(0, -1);
                return shiftChar;
            }
        }]);

        return ContinuousTailDetails;
    }();

    /**
     * Applies mask on element.
     * @constructor
     * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
     * @param {Object} opts - Custom mask options
     * @return {InputMask}
     */
    function IMask(el) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // currently available only for input-like elements
        return new IMask.InputMask(el, opts);
    }

    /** Supported mask type */

    /** Provides common masking stuff */
    var Masked = /*#__PURE__*/function () {
        // $Shape<MaskedOptions>;

        /** @type {Mask} */

        /** */
        // $FlowFixMe no ideas

        /** Transforms value before mask processing */

        /** Validates if value is acceptable */

        /** Does additional processing in the end of editing */

        /** Format typed value to string */

        /** Parse strgin to get typed value */

        /** Enable characters overwriting */

        /** */

        /** */
        function Masked(opts) {
            _classCallCheck(this, Masked);

            this._value = '';

            this._update(Object.assign({}, Masked.DEFAULTS, opts));

            this.isInitialized = true;
        }
        /** Sets and applies new options */


        _createClass(Masked, [{
            key: "updateOptions",
            value: function updateOptions(opts) {
                if (!Object.keys(opts).length) return; // $FlowFixMe

                this.withValueRefresh(this._update.bind(this, opts));
            }
            /**
             Sets new options
             @protected
             */

        }, {
            key: "_update",
            value: function _update(opts) {
                Object.assign(this, opts);
            }
            /** Mask state */

        }, {
            key: "state",
            get: function get() {
                return {
                    _value: this.value
                };
            },
            set: function set(state) {
                this._value = state._value;
            }
            /** Resets value */

        }, {
            key: "reset",
            value: function reset() {
                this._value = '';
            }
            /** */

        }, {
            key: "value",
            get: function get() {
                return this._value;
            },
            set: function set(value) {
                this.resolve(value);
            }
            /** Resolve new value */

        }, {
            key: "resolve",
            value: function resolve(value) {
                this.reset();
                this.append(value, {
                    input: true
                }, '');
                this.doCommit();
                return this.value;
            }
            /** */

        }, {
            key: "unmaskedValue",
            get: function get() {
                return this.value;
            },
            set: function set(value) {
                this.reset();
                this.append(value, {}, '');
                this.doCommit();
            }
            /** */

        }, {
            key: "typedValue",
            get: function get() {
                return this.doParse(this.value);
            },
            set: function set(value) {
                this.value = this.doFormat(value);
            }
            /** Value that includes raw user input */

        }, {
            key: "rawInputValue",
            get: function get() {
                return this.extractInput(0, this.value.length, {
                    raw: true
                });
            },
            set: function set(value) {
                this.reset();
                this.append(value, {
                    raw: true
                }, '');
                this.doCommit();
            }
            /** */

        }, {
            key: "isComplete",
            get: function get() {
                return true;
            }
            /** */

        }, {
            key: "isFilled",
            get: function get() {
                return this.isComplete;
            }
            /** Finds nearest input position in direction */

        }, {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos, direction) {
                return cursorPos;
            }
            /** Extracts value in range considering flags */

        }, {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                return this.value.slice(fromPos, toPos);
            }
            /** Extracts tail in range */

        }, {
            key: "extractTail",
            value: function extractTail() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
            }
            /** Appends tail */
            // $FlowFixMe no ideas

        }, {
            key: "appendTail",
            value: function appendTail(tail) {
                if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                return tail.appendTo(this);
            }
            /** Appends char */

        }, {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                if (!ch) return new ChangeDetails();
                this._value += ch;
                return new ChangeDetails({
                    inserted: ch,
                    rawInserted: ch
                });
            }
            /** Appends char */

        }, {
            key: "_appendChar",
            value: function _appendChar(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var checkTail = arguments.length > 2 ? arguments[2] : undefined;
                var consistentState = this.state;
                var details;

                var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));

                var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

                ch = _normalizePrepare2[0];
                details = _normalizePrepare2[1];
                details = details.aggregate(this._appendCharRaw(ch, flags));

                if (details.inserted) {
                    var consistentTail;
                    var appended = this.doValidate(flags) !== false;

                    if (appended && checkTail != null) {
                        // validation ok, check tail
                        var beforeTailState = this.state;

                        if (this.overwrite === true) {
                            consistentTail = checkTail.state;
                            checkTail.unshift(this.value.length);
                        }

                        var tailDetails = this.appendTail(checkTail);
                        appended = tailDetails.rawInserted === checkTail.toString(); // not ok, try shift

                        if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
                            this.state = beforeTailState;
                            consistentTail = checkTail.state;
                            checkTail.shift();
                            tailDetails = this.appendTail(checkTail);
                            appended = tailDetails.rawInserted === checkTail.toString();
                        } // if ok, rollback state after tail


                        if (appended && tailDetails.inserted) this.state = beforeTailState;
                    } // revert all if something went wrong


                    if (!appended) {
                        details = new ChangeDetails();
                        this.state = consistentState;
                        if (checkTail && consistentTail) checkTail.state = consistentTail;
                    }
                }

                return details;
            }
            /** Appends optional placeholder at end */

        }, {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                return new ChangeDetails();
            }
            /** Appends optional eager placeholder at end */

        }, {
            key: "_appendEager",
            value: function _appendEager() {
                return new ChangeDetails();
            }
            /** Appends symbols considering flags */
            // $FlowFixMe no ideas

        }, {
            key: "append",
            value: function append(str, flags, tail) {
                if (!isString(str)) throw new Error('value should be string');
                var details = new ChangeDetails();
                var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
                if (flags !== null && flags !== void 0 && flags.tail) flags._beforeTailState = this.state;

                for (var ci = 0; ci < str.length; ++ci) {
                    details.aggregate(this._appendChar(str[ci], flags, checkTail));
                } // append tail but aggregate only tailShift


                if (checkTail != null) {
                    details.tailShift += this.appendTail(checkTail).tailShift;
                    // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
                    // this._resetBeforeTailState();
                }

                if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
                    details.aggregate(this._appendEager());
                }

                return details;
            }
            /** */

        }, {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
                return new ChangeDetails();
            }
            /** Calls function and reapplies current value */

        }, {
            key: "withValueRefresh",
            value: function withValueRefresh(fn) {
                if (this._refreshing || !this.isInitialized) return fn();
                this._refreshing = true;
                var rawInput = this.rawInputValue;
                var value = this.value;
                var ret = fn();
                this.rawInputValue = rawInput; // append lost trailing chars at end

                if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
                    this.append(value.slice(this.value.length), {}, '');
                }

                delete this._refreshing;
                return ret;
            }
            /** */

        }, {
            key: "runIsolated",
            value: function runIsolated(fn) {
                if (this._isolated || !this.isInitialized) return fn(this);
                this._isolated = true;
                var state = this.state;
                var ret = fn(this);
                this.state = state;
                delete this._isolated;
                return ret;
            }
            /**
             Prepares string before mask processing
             @protected
             */

        }, {
            key: "doPrepare",
            value: function doPrepare(str) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.prepare ? this.prepare(str, this, flags) : str;
            }
            /**
             Validates if value is acceptable
             @protected
             */

        }, {
            key: "doValidate",
            value: function doValidate(flags) {
                return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
            }
            /**
             Does additional processing in the end of editing
             @protected
             */

        }, {
            key: "doCommit",
            value: function doCommit() {
                if (this.commit) this.commit(this.value, this);
            }
            /** */

        }, {
            key: "doFormat",
            value: function doFormat(value) {
                return this.format ? this.format(value, this) : value;
            }
            /** */

        }, {
            key: "doParse",
            value: function doParse(str) {
                return this.parse ? this.parse(str, this) : str;
            }
            /** */

        }, {
            key: "splice",
            value: function splice(start, deleteCount, inserted, removeDirection) {
                var flags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
                    input: true
                };
                var tailPos = start + deleteCount;
                var tail = this.extractTail(tailPos);
                var oldRawValue;

                if (this.eager) {
                    removeDirection = forceDirection(removeDirection);
                    oldRawValue = this.extractInput(0, tailPos, {
                        raw: true
                    });
                }

                var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? DIRECTION.NONE : removeDirection);
                var details = new ChangeDetails({
                    tailShift: startChangePos - start // adjust tailShift if start was aligned

                }).aggregate(this.remove(startChangePos));

                if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
                    if (removeDirection === DIRECTION.FORCE_LEFT) {
                        var valLength;

                        while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
                            details.aggregate(new ChangeDetails({
                                tailShift: -1
                            })).aggregate(this.remove(valLength - 1));
                        }
                    } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
                        tail.unshift();
                    }
                }

                return details.aggregate(this.append(inserted, flags, tail));
            }
        }, {
            key: "maskEquals",
            value: function maskEquals(mask) {
                return this.mask === mask;
            }
        }, {
            key: "typedValueEquals",
            value: function typedValueEquals(value) {
                var tval = this.typedValue;
                return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || this.doFormat(value) === this.doFormat(this.typedValue);
            }
        }]);

        return Masked;
    }();
    Masked.DEFAULTS = {
        format: function format(v) {
            return v;
        },
        parse: function parse(v) {
            return v;
        }
    };
    Masked.EMPTY_VALUES = [undefined, null, ''];
    IMask.Masked = Masked;

    /** Get Masked class by mask type */

    function maskedClass(mask) {
        if (mask == null) {
            throw new Error('mask property should be defined');
        } // $FlowFixMe


        if (mask instanceof RegExp) return IMask.MaskedRegExp; // $FlowFixMe

        if (isString(mask)) return IMask.MaskedPattern; // $FlowFixMe

        if (mask instanceof Date || mask === Date) return IMask.MaskedDate; // $FlowFixMe

        if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber; // $FlowFixMe

        if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic; // $FlowFixMe

        if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask; // $FlowFixMe

        if (mask instanceof IMask.Masked) return mask.constructor; // $FlowFixMe

        if (mask instanceof Function) return IMask.MaskedFunction;
        console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
        // $FlowFixMe

        return IMask.Masked;
    }
    /** Creates new {@link Masked} depending on mask type */

    function createMask(opts) {
        // $FlowFixMe
        if (IMask.Masked && opts instanceof IMask.Masked) return opts;
        opts = Object.assign({}, opts);
        var mask = opts.mask; // $FlowFixMe

        if (IMask.Masked && mask instanceof IMask.Masked) return mask;
        var MaskedClass = maskedClass(mask);
        if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
        return new MaskedClass(opts);
    }
    IMask.createMask = createMask;

    var _excluded$4 = ["mask"];
    var DEFAULT_INPUT_DEFINITIONS = {
        '0': /\d/,
        'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        // http://stackoverflow.com/a/22075070
        '*': /./
    };
    /** */

    var PatternInputDefinition = /*#__PURE__*/function () {
        /** */

        /** */

        /** */

        /** */

        /** */

        /** */

        /** */
        function PatternInputDefinition(opts) {
            _classCallCheck(this, PatternInputDefinition);

            var mask = opts.mask,
                blockOpts = _objectWithoutProperties(opts, _excluded$4);

            this.masked = createMask({
                mask: mask
            });
            Object.assign(this, blockOpts);
        }

        _createClass(PatternInputDefinition, [{
            key: "reset",
            value: function reset() {
                this.isFilled = false;
                this.masked.reset();
            }
        }, {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                if (fromPos === 0 && toPos >= 1) {
                    this.isFilled = false;
                    return this.masked.remove(fromPos, toPos);
                }

                return new ChangeDetails();
            }
        }, {
            key: "value",
            get: function get() {
                return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
            }
        }, {
            key: "unmaskedValue",
            get: function get() {
                return this.masked.unmaskedValue;
            }
        }, {
            key: "isComplete",
            get: function get() {
                return Boolean(this.masked.value) || this.isOptional;
            }
        }, {
            key: "_appendChar",
            value: function _appendChar(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (this.isFilled) return new ChangeDetails();
                var state = this.masked.state; // simulate input

                var details = this.masked._appendChar(ch, flags);

                if (details.inserted && this.doValidate(flags) === false) {
                    details.inserted = details.rawInserted = '';
                    this.masked.state = state;
                }

                if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
                    details.inserted = this.placeholderChar;
                }

                details.skip = !details.inserted && !this.isOptional;
                this.isFilled = Boolean(details.inserted);
                return details;
            }
        }, {
            key: "append",
            value: function append() {
                var _this$masked;

                return (_this$masked = this.masked).append.apply(_this$masked, arguments);
            }
        }, {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                var details = new ChangeDetails();
                if (this.isFilled || this.isOptional) return details;
                this.isFilled = true;
                details.inserted = this.placeholderChar;
                return details;
            }
        }, {
            key: "_appendEager",
            value: function _appendEager() {
                return new ChangeDetails();
            }
        }, {
            key: "extractTail",
            value: function extractTail() {
                var _this$masked2;

                return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
            }
        }, {
            key: "appendTail",
            value: function appendTail() {
                var _this$masked3;

                return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
            }
        }, {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var flags = arguments.length > 2 ? arguments[2] : undefined;
                return this.masked.extractInput(fromPos, toPos, flags);
            }
        }, {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos) {
                var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
                var minPos = 0;
                var maxPos = this.value.length;
                var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

                switch (direction) {
                    case DIRECTION.LEFT:
                    case DIRECTION.FORCE_LEFT:
                        return this.isComplete ? boundPos : minPos;

                    case DIRECTION.RIGHT:
                    case DIRECTION.FORCE_RIGHT:
                        return this.isComplete ? boundPos : maxPos;

                    case DIRECTION.NONE:
                    default:
                        return boundPos;
                }
            }
        }, {
            key: "doValidate",
            value: function doValidate() {
                var _this$masked4, _this$parent;

                return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
            }
        }, {
            key: "doCommit",
            value: function doCommit() {
                this.masked.doCommit();
            }
        }, {
            key: "state",
            get: function get() {
                return {
                    masked: this.masked.state,
                    isFilled: this.isFilled
                };
            },
            set: function set(state) {
                this.masked.state = state.masked;
                this.isFilled = state.isFilled;
            }
        }]);

        return PatternInputDefinition;
    }();

    var PatternFixedDefinition = /*#__PURE__*/function () {
        /** */

        /** */

        /** */

        /** */

        /** */

        /** */
        function PatternFixedDefinition(opts) {
            _classCallCheck(this, PatternFixedDefinition);

            Object.assign(this, opts);
            this._value = '';
            this.isFixed = true;
        }

        _createClass(PatternFixedDefinition, [{
            key: "value",
            get: function get() {
                return this._value;
            }
        }, {
            key: "unmaskedValue",
            get: function get() {
                return this.isUnmasking ? this.value : '';
            }
        }, {
            key: "reset",
            value: function reset() {
                this._isRawInput = false;
                this._value = '';
            }
        }, {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
                this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
                if (!this._value) this._isRawInput = false;
                return new ChangeDetails();
            }
        }, {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos) {
                var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
                var minPos = 0;
                var maxPos = this._value.length;

                switch (direction) {
                    case DIRECTION.LEFT:
                    case DIRECTION.FORCE_LEFT:
                        return minPos;

                    case DIRECTION.NONE:
                    case DIRECTION.RIGHT:
                    case DIRECTION.FORCE_RIGHT:
                    default:
                        return maxPos;
                }
            }
        }, {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
                var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
            }
        }, {
            key: "isComplete",
            get: function get() {
                return true;
            }
        }, {
            key: "isFilled",
            get: function get() {
                return Boolean(this._value);
            }
        }, {
            key: "_appendChar",
            value: function _appendChar(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var details = new ChangeDetails();
                if (this._value) return details;
                var appended = this.char === ch;
                var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !this.eager) && !flags.tail;
                if (isResolved) details.rawInserted = this.char;
                this._value = details.inserted = this.char;
                this._isRawInput = isResolved && (flags.raw || flags.input);
                return details;
            }
        }, {
            key: "_appendEager",
            value: function _appendEager() {
                return this._appendChar(this.char, {
                    tail: true
                });
            }
        }, {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                var details = new ChangeDetails();
                if (this._value) return details;
                this._value = details.inserted = this.char;
                return details;
            }
        }, {
            key: "extractTail",
            value: function extractTail() {
                arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                return new ContinuousTailDetails('');
            } // $FlowFixMe no ideas

        }, {
            key: "appendTail",
            value: function appendTail(tail) {
                if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                return tail.appendTo(this);
            }
        }, {
            key: "append",
            value: function append(str, flags, tail) {
                var details = this._appendChar(str[0], flags);

                if (tail != null) {
                    details.tailShift += this.appendTail(tail).tailShift;
                }

                return details;
            }
        }, {
            key: "doCommit",
            value: function doCommit() {}
        }, {
            key: "state",
            get: function get() {
                return {
                    _value: this._value,
                    _isRawInput: this._isRawInput
                };
            },
            set: function set(state) {
                Object.assign(this, state);
            }
        }]);

        return PatternFixedDefinition;
    }();

    var _excluded$3 = ["chunks"];

    var ChunksTailDetails = /*#__PURE__*/function () {
        /** */
        function ChunksTailDetails() {
            var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            _classCallCheck(this, ChunksTailDetails);

            this.chunks = chunks;
            this.from = from;
        }

        _createClass(ChunksTailDetails, [{
            key: "toString",
            value: function toString() {
                return this.chunks.map(String).join('');
            } // $FlowFixMe no ideas

        }, {
            key: "extend",
            value: function extend(tailChunk) {
                if (!String(tailChunk)) return;
                if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
                var lastChunk = this.chunks[this.chunks.length - 1];
                var extendLast = lastChunk && ( // if stops are same or tail has no stop
                    lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
                    tailChunk.from === lastChunk.from + lastChunk.toString().length;

                if (tailChunk instanceof ContinuousTailDetails) {
                    // check the ability to extend previous chunk
                    if (extendLast) {
                        // extend previous chunk
                        lastChunk.extend(tailChunk.toString());
                    } else {
                        // append new chunk
                        this.chunks.push(tailChunk);
                    }
                } else if (tailChunk instanceof ChunksTailDetails) {
                    if (tailChunk.stop == null) {
                        // unwrap floating chunks to parent, keeping `from` pos
                        var firstTailChunk;

                        while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
                            firstTailChunk = tailChunk.chunks.shift();
                            firstTailChunk.from += tailChunk.from;
                            this.extend(firstTailChunk);
                        }
                    } // if tail chunk still has value


                    if (tailChunk.toString()) {
                        // if chunks contains stops, then popup stop to container
                        tailChunk.stop = tailChunk.blockIndex;
                        this.chunks.push(tailChunk);
                    }
                }
            }
        }, {
            key: "appendTo",
            value: function appendTo(masked) {
                // $FlowFixMe
                if (!(masked instanceof IMask.MaskedPattern)) {
                    var tail = new ContinuousTailDetails(this.toString());
                    return tail.appendTo(masked);
                }

                var details = new ChangeDetails();

                for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
                    var chunk = this.chunks[ci];

                    var lastBlockIter = masked._mapPosToBlock(masked.value.length);

                    var stop = chunk.stop;
                    var chunkBlock = void 0;

                    if (stop != null && ( // if block not found or stop is behind lastBlock
                        !lastBlockIter || lastBlockIter.index <= stop)) {
                        if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
                            masked._stops.indexOf(stop) >= 0) {
                            details.aggregate(masked._appendPlaceholder(stop));
                        }

                        chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
                    }

                    if (chunkBlock) {
                        var tailDetails = chunkBlock.appendTail(chunk);
                        tailDetails.skip = false; // always ignore skip, it will be set on last

                        details.aggregate(tailDetails);
                        masked._value += tailDetails.inserted; // get not inserted chars

                        var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                        if (remainChars) details.aggregate(masked.append(remainChars, {
                            tail: true
                        }));
                    } else {
                        details.aggregate(masked.append(chunk.toString(), {
                            tail: true
                        }));
                    }
                }
                return details;
            }
        }, {
            key: "state",
            get: function get() {
                return {
                    chunks: this.chunks.map(function (c) {
                        return c.state;
                    }),
                    from: this.from,
                    stop: this.stop,
                    blockIndex: this.blockIndex
                };
            },
            set: function set(state) {
                var chunks = state.chunks,
                    props = _objectWithoutProperties(state, _excluded$3);

                Object.assign(this, props);
                this.chunks = chunks.map(function (cstate) {
                    var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

                    chunk.state = cstate;
                    return chunk;
                });
            }
        }, {
            key: "unshift",
            value: function unshift(beforePos) {
                if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
                var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
                var ci = 0;

                while (ci < this.chunks.length) {
                    var chunk = this.chunks[ci];
                    var shiftChar = chunk.unshift(chunkShiftPos);

                    if (chunk.toString()) {
                        // chunk still contains value
                        // but not shifted - means no more available chars to shift
                        if (!shiftChar) break;
                        ++ci;
                    } else {
                        // clean if chunk has no value
                        this.chunks.splice(ci, 1);
                    }

                    if (shiftChar) return shiftChar;
                }

                return '';
            }
        }, {
            key: "shift",
            value: function shift() {
                if (!this.chunks.length) return '';
                var ci = this.chunks.length - 1;

                while (0 <= ci) {
                    var chunk = this.chunks[ci];
                    var shiftChar = chunk.shift();

                    if (chunk.toString()) {
                        // chunk still contains value
                        // but not shifted - means no more available chars to shift
                        if (!shiftChar) break;
                        --ci;
                    } else {
                        // clean if chunk has no value
                        this.chunks.splice(ci, 1);
                    }

                    if (shiftChar) return shiftChar;
                }

                return '';
            }
        }]);

        return ChunksTailDetails;
    }();

    var PatternCursor = /*#__PURE__*/function () {
        function PatternCursor(masked, pos) {
            _classCallCheck(this, PatternCursor);

            this.masked = masked;
            this._log = [];

            var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? // first
                {
                    index: 0,
                    offset: 0
                } : // last
                {
                    index: this.masked._blocks.length,
                    offset: 0
                }),
                offset = _ref.offset,
                index = _ref.index;

            this.offset = offset;
            this.index = index;
            this.ok = false;
        }

        _createClass(PatternCursor, [{
            key: "block",
            get: function get() {
                return this.masked._blocks[this.index];
            }
        }, {
            key: "pos",
            get: function get() {
                return this.masked._blockStartPos(this.index) + this.offset;
            }
        }, {
            key: "state",
            get: function get() {
                return {
                    index: this.index,
                    offset: this.offset,
                    ok: this.ok
                };
            },
            set: function set(s) {
                Object.assign(this, s);
            }
        }, {
            key: "pushState",
            value: function pushState() {
                this._log.push(this.state);
            }
        }, {
            key: "popState",
            value: function popState() {
                var s = this._log.pop();

                this.state = s;
                return s;
            }
        }, {
            key: "bindBlock",
            value: function bindBlock() {
                if (this.block) return;

                if (this.index < 0) {
                    this.index = 0;
                    this.offset = 0;
                }

                if (this.index >= this.masked._blocks.length) {
                    this.index = this.masked._blocks.length - 1;
                    this.offset = this.block.value.length;
                }
            }
        }, {
            key: "_pushLeft",
            value: function _pushLeft(fn) {
                this.pushState();

                for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
                    var _this$block;

                    if (fn()) return this.ok = true;
                }

                return this.ok = false;
            }
        }, {
            key: "_pushRight",
            value: function _pushRight(fn) {
                this.pushState();

                for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
                    if (fn()) return this.ok = true;
                }

                return this.ok = false;
            }
        }, {
            key: "pushLeftBeforeFilled",
            value: function pushLeftBeforeFilled() {
                var _this = this;

                return this._pushLeft(function () {
                    if (_this.block.isFixed || !_this.block.value) return;
                    _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
                    if (_this.offset !== 0) return true;
                });
            }
        }, {
            key: "pushLeftBeforeInput",
            value: function pushLeftBeforeInput() {
                var _this2 = this;

                // cases:
                // filled input: 00|
                // optional empty input: 00[]|
                // nested block: XX<[]>|
                return this._pushLeft(function () {
                    if (_this2.block.isFixed) return;
                    _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
                    return true;
                });
            }
        }, {
            key: "pushLeftBeforeRequired",
            value: function pushLeftBeforeRequired() {
                var _this3 = this;

                return this._pushLeft(function () {
                    if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
                    _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
                    return true;
                });
            }
        }, {
            key: "pushRightBeforeFilled",
            value: function pushRightBeforeFilled() {
                var _this4 = this;

                return this._pushRight(function () {
                    if (_this4.block.isFixed || !_this4.block.value) return;
                    _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
                    if (_this4.offset !== _this4.block.value.length) return true;
                });
            }
        }, {
            key: "pushRightBeforeInput",
            value: function pushRightBeforeInput() {
                var _this5 = this;

                return this._pushRight(function () {
                    if (_this5.block.isFixed) return; // const o = this.offset;

                    _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE); // HACK cases like (STILL DOES NOT WORK FOR NESTED)
                    // aa|X
                    // aa<X|[]>X_    - this will not work
                    // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;

                    return true;
                });
            }
        }, {
            key: "pushRightBeforeRequired",
            value: function pushRightBeforeRequired() {
                var _this6 = this;

                return this._pushRight(function () {
                    if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return;

                    _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
                    return true;
                });
            }
        }]);

        return PatternCursor;
    }();

    /** Masking by RegExp */

    var MaskedRegExp = /*#__PURE__*/function (_Masked) {
        _inherits(MaskedRegExp, _Masked);

        var _super = _createSuper(MaskedRegExp);

        function MaskedRegExp() {
            _classCallCheck(this, MaskedRegExp);

            return _super.apply(this, arguments);
        }

        _createClass(MaskedRegExp, [{
            key: "_update",
            value:
                /**
                 @override
                 @param {Object} opts
                 */
                function _update(opts) {
                    if (opts.mask) opts.validate = function (value) {
                        return value.search(opts.mask) >= 0;
                    };

                    _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
                }
        }]);

        return MaskedRegExp;
    }(Masked);
    IMask.MaskedRegExp = MaskedRegExp;

    var _excluded$2 = ["_blocks"];

    /**
     Pattern mask
     @param {Object} opts
     @param {Object} opts.blocks
     @param {Object} opts.definitions
     @param {string} opts.placeholderChar
     @param {boolean} opts.lazy
     */
    var MaskedPattern = /*#__PURE__*/function (_Masked) {
        _inherits(MaskedPattern, _Masked);

        var _super = _createSuper(MaskedPattern);

        /** */

        /** */

        /** Single char for empty input */

        /** Show placeholder only when needed */
        function MaskedPattern() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, MaskedPattern);

            opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
            return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
        }
        /**
         @override
         @param {Object} opts
         */


        _createClass(MaskedPattern, [{
            key: "_update",
            value: function _update() {
                var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                opts.definitions = Object.assign({}, this.definitions, opts.definitions);

                _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

                this._rebuildMask();
            }
            /** */

        }, {
            key: "_rebuildMask",
            value: function _rebuildMask() {
                var _this = this;

                var defs = this.definitions;
                this._blocks = [];
                this._stops = [];
                this._maskedBlocks = {};
                var pattern = this.mask;
                if (!pattern || !defs) return;
                var unmaskingBlock = false;
                var optionalBlock = false;

                for (var i = 0; i < pattern.length; ++i) {
                    if (this.blocks) {
                        var _ret = function () {
                            var p = pattern.slice(i);
                            var bNames = Object.keys(_this.blocks).filter(function (bName) {
                                return p.indexOf(bName) === 0;
                            }); // order by key length

                            bNames.sort(function (a, b) {
                                return b.length - a.length;
                            }); // use block name with max length

                            var bName = bNames[0];

                            if (bName) {
                                // $FlowFixMe no ideas
                                var maskedBlock = createMask(Object.assign({
                                    parent: _this,
                                    lazy: _this.lazy,
                                    eager: _this.eager,
                                    placeholderChar: _this.placeholderChar,
                                    overwrite: _this.overwrite
                                }, _this.blocks[bName]));

                                if (maskedBlock) {
                                    _this._blocks.push(maskedBlock); // store block index


                                    if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                                    _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                                }

                                i += bName.length - 1;
                                return "continue";
                            }
                        }();

                        if (_ret === "continue") continue;
                    }

                    var char = pattern[i];
                    var isInput = (char in defs);

                    if (char === MaskedPattern.STOP_CHAR) {
                        this._stops.push(this._blocks.length);

                        continue;
                    }

                    if (char === '{' || char === '}') {
                        unmaskingBlock = !unmaskingBlock;
                        continue;
                    }

                    if (char === '[' || char === ']') {
                        optionalBlock = !optionalBlock;
                        continue;
                    }

                    if (char === MaskedPattern.ESCAPE_CHAR) {
                        ++i;
                        char = pattern[i];
                        if (!char) break;
                        isInput = false;
                    }

                    var def = isInput ? new PatternInputDefinition({
                        parent: this,
                        lazy: this.lazy,
                        eager: this.eager,
                        placeholderChar: this.placeholderChar,
                        mask: defs[char],
                        isOptional: optionalBlock
                    }) : new PatternFixedDefinition({
                        char: char,
                        eager: this.eager,
                        isUnmasking: unmaskingBlock
                    });

                    this._blocks.push(def);
                }
            }
            /**
             @override
             */

        }, {
            key: "state",
            get: function get() {
                return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
                    _blocks: this._blocks.map(function (b) {
                        return b.state;
                    })
                });
            },
            set: function set(state) {
                var _blocks = state._blocks,
                    maskedState = _objectWithoutProperties(state, _excluded$2);

                this._blocks.forEach(function (b, bi) {
                    return b.state = _blocks[bi];
                });

                _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
            }
            /**
             @override
             */

        }, {
            key: "reset",
            value: function reset() {
                _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

                this._blocks.forEach(function (b) {
                    return b.reset();
                });
            }
            /**
             @override
             */

        }, {
            key: "isComplete",
            get: function get() {
                return this._blocks.every(function (b) {
                    return b.isComplete;
                });
            }
            /**
             @override
             */

        }, {
            key: "isFilled",
            get: function get() {
                return this._blocks.every(function (b) {
                    return b.isFilled;
                });
            }
        }, {
            key: "isFixed",
            get: function get() {
                return this._blocks.every(function (b) {
                    return b.isFixed;
                });
            }
        }, {
            key: "isOptional",
            get: function get() {
                return this._blocks.every(function (b) {
                    return b.isOptional;
                });
            }
            /**
             @override
             */

        }, {
            key: "doCommit",
            value: function doCommit() {
                this._blocks.forEach(function (b) {
                    return b.doCommit();
                });

                _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
            }
            /**
             @override
             */

        }, {
            key: "unmaskedValue",
            get: function get() {
                return this._blocks.reduce(function (str, b) {
                    return str += b.unmaskedValue;
                }, '');
            },
            set: function set(unmaskedValue) {
                _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
            }
            /**
             @override
             */

        }, {
            key: "value",
            get: function get() {
                return this._blocks.reduce(function (str, b) {
                    return str += b.value;
                }, '');
            },
            set: function set(value) {
                _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
            }
            /**
             @override
             */

        }, {
            key: "appendTail",
            value: function appendTail(tail) {
                return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
            }
            /**
             @override
             */

        }, {
            key: "_appendEager",
            value: function _appendEager() {
                var _this$_mapPosToBlock;

                var details = new ChangeDetails();
                var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
                if (startBlockIndex == null) return details;

                if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;

                for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
                    var d = this._blocks[bi]._appendEager();

                    if (!d.inserted) break;
                    details.aggregate(d);
                }

                return details;
            }
            /**
             @override
             */

        }, {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                var blockIter = this._mapPosToBlock(this.value.length);

                var details = new ChangeDetails();
                if (!blockIter) return details;

                for (var bi = blockIter.index;; ++bi) {
                    var _flags$_beforeTailSta, _flags$_beforeTailSta2;

                    var _block = this._blocks[bi];
                    if (!_block) break;

                    var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
                        _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : (_flags$_beforeTailSta2 = _flags$_beforeTailSta._blocks) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2[bi]
                    }));

                    var skip = blockDetails.skip;
                    details.aggregate(blockDetails);
                    if (skip || blockDetails.rawInserted) break; // go next char
                }

                return details;
            }
            /**
             @override
             */

        }, {
            key: "extractTail",
            value: function extractTail() {
                var _this2 = this;

                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var chunkTail = new ChunksTailDetails();
                if (fromPos === toPos) return chunkTail;

                this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
                    var blockChunk = b.extractTail(bFromPos, bToPos);
                    blockChunk.stop = _this2._findStopBefore(bi);
                    blockChunk.from = _this2._blockStartPos(bi);
                    if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
                    chunkTail.extend(blockChunk);
                });

                return chunkTail;
            }
            /**
             @override
             */

        }, {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                if (fromPos === toPos) return '';
                var input = '';

                this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
                    input += b.extractInput(fromPos, toPos, flags);
                });

                return input;
            }
        }, {
            key: "_findStopBefore",
            value: function _findStopBefore(blockIndex) {
                var stopBefore;

                for (var si = 0; si < this._stops.length; ++si) {
                    var stop = this._stops[si];
                    if (stop <= blockIndex) stopBefore = stop;else break;
                }

                return stopBefore;
            }
            /** Appends placeholder depending on laziness */

        }, {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder(toBlockIndex) {
                var _this3 = this;

                var details = new ChangeDetails();
                if (this.lazy && toBlockIndex == null) return details;

                var startBlockIter = this._mapPosToBlock(this.value.length);

                if (!startBlockIter) return details;
                var startBlockIndex = startBlockIter.index;
                var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

                this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
                    if (!b.lazy || toBlockIndex != null) {
                        // $FlowFixMe `_blocks` may not be present
                        var args = b._blocks != null ? [b._blocks.length] : [];

                        var bDetails = b._appendPlaceholder.apply(b, args);

                        _this3._value += bDetails.inserted;
                        details.aggregate(bDetails);
                    }
                });

                return details;
            }
            /** Finds block in pos */

        }, {
            key: "_mapPosToBlock",
            value: function _mapPosToBlock(pos) {
                var accVal = '';

                for (var bi = 0; bi < this._blocks.length; ++bi) {
                    var _block2 = this._blocks[bi];
                    var blockStartPos = accVal.length;
                    accVal += _block2.value;

                    if (pos <= accVal.length) {
                        return {
                            index: bi,
                            offset: pos - blockStartPos
                        };
                    }
                }
            }
            /** */

        }, {
            key: "_blockStartPos",
            value: function _blockStartPos(blockIndex) {
                return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
                    return pos += b.value.length;
                }, 0);
            }
            /** */

        }, {
            key: "_forEachBlocksInRange",
            value: function _forEachBlocksInRange(fromPos) {
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var fn = arguments.length > 2 ? arguments[2] : undefined;

                var fromBlockIter = this._mapPosToBlock(fromPos);

                if (fromBlockIter) {
                    var toBlockIter = this._mapPosToBlock(toPos); // process first block


                    var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
                    var fromBlockStartPos = fromBlockIter.offset;
                    var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
                    fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

                    if (toBlockIter && !isSameBlock) {
                        // process intermediate blocks
                        for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
                            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
                        } // process last block


                        fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
                    }
                }
            }
            /**
             @override
             */

        }, {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

                this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
                    removeDetails.aggregate(b.remove(bFromPos, bToPos));
                });

                return removeDetails;
            }
            /**
             @override
             */

        }, {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos) {
                var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
                if (!this._blocks.length) return 0;
                var cursor = new PatternCursor(this, cursorPos);

                if (direction === DIRECTION.NONE) {
                    // -------------------------------------------------
                    // NONE should only go out from fixed to the right!
                    // -------------------------------------------------
                    if (cursor.pushRightBeforeInput()) return cursor.pos;
                    cursor.popState();
                    if (cursor.pushLeftBeforeInput()) return cursor.pos;
                    return this.value.length;
                } // FORCE is only about a|* otherwise is 0


                if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
                    // try to break fast when *|a
                    if (direction === DIRECTION.LEFT) {
                        cursor.pushRightBeforeFilled();
                        if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
                        cursor.popState();
                    } // forward flow


                    cursor.pushLeftBeforeInput();
                    cursor.pushLeftBeforeRequired();
                    cursor.pushLeftBeforeFilled(); // backward flow

                    if (direction === DIRECTION.LEFT) {
                        cursor.pushRightBeforeInput();
                        cursor.pushRightBeforeRequired();
                        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                        cursor.popState();
                        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                        cursor.popState();
                    }

                    if (cursor.ok) return cursor.pos;
                    if (direction === DIRECTION.FORCE_LEFT) return 0;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos; // cursor.popState();
                    // if (
                    //   cursor.pushRightBeforeInput() &&
                    //   (!this.lazy || this.extractInput())
                    // ) return cursor.pos;

                    return 0;
                }

                if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
                    // forward flow
                    cursor.pushRightBeforeInput();
                    cursor.pushRightBeforeRequired();
                    if (cursor.pushRightBeforeFilled()) return cursor.pos;
                    if (direction === DIRECTION.FORCE_RIGHT) return this.value.length; // backward flow

                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    cursor.popState();
                    if (cursor.ok) return cursor.pos;
                    return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
                }

                return cursorPos;
            }
            /** Get block by name */

        }, {
            key: "maskedBlock",
            value: function maskedBlock(name) {
                return this.maskedBlocks(name)[0];
            }
            /** Get all blocks by name */

        }, {
            key: "maskedBlocks",
            value: function maskedBlocks(name) {
                var _this4 = this;

                var indices = this._maskedBlocks[name];
                if (!indices) return [];
                return indices.map(function (gi) {
                    return _this4._blocks[gi];
                });
            }
        }]);

        return MaskedPattern;
    }(Masked);
    MaskedPattern.DEFAULTS = {
        lazy: true,
        placeholderChar: '_'
    };
    MaskedPattern.STOP_CHAR = '`';
    MaskedPattern.ESCAPE_CHAR = '\\';
    MaskedPattern.InputDefinition = PatternInputDefinition;
    MaskedPattern.FixedDefinition = PatternFixedDefinition;
    IMask.MaskedPattern = MaskedPattern;

    /** Pattern which accepts ranges */

    var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
        _inherits(MaskedRange, _MaskedPattern);

        var _super = _createSuper(MaskedRange);

        function MaskedRange() {
            _classCallCheck(this, MaskedRange);

            return _super.apply(this, arguments);
        }

        _createClass(MaskedRange, [{
            key: "_matchFrom",
            get:
            /**
             Optionally sets max length of pattern.
             Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
             */

            /** Min bound */

            /** Max bound */

                /** */
                function get() {
                    return this.maxLength - String(this.from).length;
                }
            /**
             @override
             */

        }, {
            key: "_update",
            value: function _update(opts) {

                opts = Object.assign({
                    to: this.to || 0,
                    from: this.from || 0,
                    maxLength: this.maxLength || 0
                }, opts);
                var maxLength = String(opts.to).length;
                if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
                opts.maxLength = maxLength;
                var fromStr = String(opts.from).padStart(maxLength, '0');
                var toStr = String(opts.to).padStart(maxLength, '0');
                var sameCharsCount = 0;

                while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
                    ++sameCharsCount;
                }

                opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

                _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
            }
            /**
             @override
             */

        }, {
            key: "isComplete",
            get: function get() {
                return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
            }
        }, {
            key: "boundaries",
            value: function boundaries(str) {
                var minstr = '';
                var maxstr = '';

                var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
                    _ref2 = _slicedToArray(_ref, 3),
                    placeholder = _ref2[1],
                    num = _ref2[2];

                if (num) {
                    minstr = '0'.repeat(placeholder.length) + num;
                    maxstr = '9'.repeat(placeholder.length) + num;
                }

                minstr = minstr.padEnd(this.maxLength, '0');
                maxstr = maxstr.padEnd(this.maxLength, '9');
                return [minstr, maxstr];
            }

            /**
             @override
             */

        }, {
            key: "doPrepare",
            value: function doPrepare(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var details;

                var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));

                var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

                ch = _normalizePrepare2[0];
                details = _normalizePrepare2[1];
                if (!this.autofix || !ch) return ch;
                var fromStr = String(this.from).padStart(this.maxLength, '0');
                var toStr = String(this.to).padStart(this.maxLength, '0');
                var nextVal = this.value + ch;
                if (nextVal.length > this.maxLength) return '';

                var _this$boundaries = this.boundaries(nextVal),
                    _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
                    minstr = _this$boundaries2[0],
                    maxstr = _this$boundaries2[1];

                if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];

                if (Number(minstr) > this.to) {
                    if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
                        return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
                    }

                    return toStr[nextVal.length - 1];
                }

                return ch;
            }
            /**
             @override
             */

        }, {
            key: "doValidate",
            value: function doValidate() {
                var _get2;

                var str = this.value;
                var firstNonZero = str.search(/[^0]/);
                if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

                var _this$boundaries3 = this.boundaries(str),
                    _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
                    minstr = _this$boundaries4[0],
                    maxstr = _this$boundaries4[1];

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
            }
        }]);

        return MaskedRange;
    }(MaskedPattern);
    IMask.MaskedRange = MaskedRange;

    /** Date mask */

    var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
        _inherits(MaskedDate, _MaskedPattern);

        var _super = _createSuper(MaskedDate);

        /** Pattern mask for date according to {@link MaskedDate#format} */

        /** Start date */

        /** End date */

        /** */

        /**
         @param {Object} opts
         */
        function MaskedDate(opts) {
            _classCallCheck(this, MaskedDate);

            return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
        }
        /**
         @override
         */


        _createClass(MaskedDate, [{
            key: "_update",
            value: function _update(opts) {
                if (opts.mask === Date) delete opts.mask;
                if (opts.pattern) opts.mask = opts.pattern;
                var blocks = opts.blocks;
                opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

                if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
                if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

                if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
                    opts.blocks.m.from = opts.min.getMonth() + 1;
                    opts.blocks.m.to = opts.max.getMonth() + 1;

                    if (opts.blocks.m.from === opts.blocks.m.to) {
                        opts.blocks.d.from = opts.min.getDate();
                        opts.blocks.d.to = opts.max.getDate();
                    }
                }

                Object.assign(opts.blocks, this.blocks, blocks); // add autofix

                Object.keys(opts.blocks).forEach(function (bk) {
                    var b = opts.blocks[bk];
                    if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
                });

                _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
            }
            /**
             @override
             */

        }, {
            key: "doValidate",
            value: function doValidate() {
                var _get2;

                var date = this.date;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
            }
            /** Checks if date is exists */

        }, {
            key: "isDateExist",
            value: function isDateExist(str) {
                return this.format(this.parse(str, this), this).indexOf(str) >= 0;
            }
            /** Parsed Date */

        }, {
            key: "date",
            get: function get() {
                return this.typedValue;
            },
            set: function set(date) {
                this.typedValue = date;
            }
            /**
             @override
             */

        }, {
            key: "typedValue",
            get: function get() {
                return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
            },
            set: function set(value) {
                _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
            }
            /**
             @override
             */

        }, {
            key: "maskEquals",
            value: function maskEquals(mask) {
                return mask === Date || _get(_getPrototypeOf(MaskedDate.prototype), "maskEquals", this).call(this, mask);
            }
        }]);

        return MaskedDate;
    }(MaskedPattern);
    MaskedDate.DEFAULTS = {
        pattern: 'd{.}`m{.}`Y',
        format: function format(date) {
            if (!date) return '';
            var day = String(date.getDate()).padStart(2, '0');
            var month = String(date.getMonth() + 1).padStart(2, '0');
            var year = date.getFullYear();
            return [day, month, year].join('.');
        },
        parse: function parse(str) {
            var _str$split = str.split('.'),
                _str$split2 = _slicedToArray(_str$split, 3),
                day = _str$split2[0],
                month = _str$split2[1],
                year = _str$split2[2];

            return new Date(year, month - 1, day);
        }
    };

    MaskedDate.GET_DEFAULT_BLOCKS = function () {
        return {
            d: {
                mask: MaskedRange,
                from: 1,
                to: 31,
                maxLength: 2
            },
            m: {
                mask: MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2
            },
            Y: {
                mask: MaskedRange,
                from: 1900,
                to: 9999
            }
        };
    };

    IMask.MaskedDate = MaskedDate;

    /**
     Generic element API to use with mask
     @interface
     */
    var MaskElement = /*#__PURE__*/function () {
        function MaskElement() {
            _classCallCheck(this, MaskElement);
        }

        _createClass(MaskElement, [{
            key: "selectionStart",
            get:
            /** */

            /** */

            /** */

                /** Safely returns selection start */
                function get() {
                    var start;

                    try {
                        start = this._unsafeSelectionStart;
                    } catch (e) {}

                    return start != null ? start : this.value.length;
                }
            /** Safely returns selection end */

        }, {
            key: "selectionEnd",
            get: function get() {
                var end;

                try {
                    end = this._unsafeSelectionEnd;
                } catch (e) {}

                return end != null ? end : this.value.length;
            }
            /** Safely sets element selection */

        }, {
            key: "select",
            value: function select(start, end) {
                if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

                try {
                    this._unsafeSelect(start, end);
                } catch (e) {}
            }
            /** Should be overriden in subclasses */

        }, {
            key: "_unsafeSelect",
            value: function _unsafeSelect(start, end) {}
            /** Should be overriden in subclasses */

        }, {
            key: "isActive",
            get: function get() {
                return false;
            }
            /** Should be overriden in subclasses */

        }, {
            key: "bindEvents",
            value: function bindEvents(handlers) {}
            /** Should be overriden in subclasses */

        }, {
            key: "unbindEvents",
            value: function unbindEvents() {}
        }]);

        return MaskElement;
    }();
    IMask.MaskElement = MaskElement;

    /** Bridge between HTMLElement and {@link Masked} */

    var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
        _inherits(HTMLMaskElement, _MaskElement);

        var _super = _createSuper(HTMLMaskElement);

        /** Mapping between HTMLElement events and mask internal events */

        /** HTMLElement to use mask on */

        /**
         @param {HTMLInputElement|HTMLTextAreaElement} input
         */
        function HTMLMaskElement(input) {
            var _this;

            _classCallCheck(this, HTMLMaskElement);

            _this = _super.call(this);
            _this.input = input;
            _this._handlers = {};
            return _this;
        }
        /** */
        // $FlowFixMe https://github.com/facebook/flow/issues/2839


        _createClass(HTMLMaskElement, [{
            key: "rootElement",
            get: function get() {
                var _this$input$getRootNo, _this$input$getRootNo2, _this$input;

                return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
            }
            /**
             Is element in focus
             @readonly
             */

        }, {
            key: "isActive",
            get: function get() {
                //$FlowFixMe
                return this.input === this.rootElement.activeElement;
            }
            /**
             Returns HTMLElement selection start
             @override
             */

        }, {
            key: "_unsafeSelectionStart",
            get: function get() {
                return this.input.selectionStart;
            }
            /**
             Returns HTMLElement selection end
             @override
             */

        }, {
            key: "_unsafeSelectionEnd",
            get: function get() {
                return this.input.selectionEnd;
            }
            /**
             Sets HTMLElement selection
             @override
             */

        }, {
            key: "_unsafeSelect",
            value: function _unsafeSelect(start, end) {
                this.input.setSelectionRange(start, end);
            }
            /**
             HTMLElement value
             @override
             */

        }, {
            key: "value",
            get: function get() {
                return this.input.value;
            },
            set: function set(value) {
                this.input.value = value;
            }
            /**
             Binds HTMLElement events to mask internal events
             @override
             */

        }, {
            key: "bindEvents",
            value: function bindEvents(handlers) {
                var _this2 = this;

                Object.keys(handlers).forEach(function (event) {
                    return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
                });
            }
            /**
             Unbinds HTMLElement events to mask internal events
             @override
             */

        }, {
            key: "unbindEvents",
            value: function unbindEvents() {
                var _this3 = this;

                Object.keys(this._handlers).forEach(function (event) {
                    return _this3._toggleEventHandler(event);
                });
            }
            /** */

        }, {
            key: "_toggleEventHandler",
            value: function _toggleEventHandler(event, handler) {
                if (this._handlers[event]) {
                    this.input.removeEventListener(event, this._handlers[event]);
                    delete this._handlers[event];
                }

                if (handler) {
                    this.input.addEventListener(event, handler);
                    this._handlers[event] = handler;
                }
            }
        }]);

        return HTMLMaskElement;
    }(MaskElement);
    HTMLMaskElement.EVENTS_MAP = {
        selectionChange: 'keydown',
        input: 'input',
        drop: 'drop',
        click: 'click',
        focus: 'focus',
        commit: 'blur'
    };
    IMask.HTMLMaskElement = HTMLMaskElement;

    var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
        _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);

        var _super = _createSuper(HTMLContenteditableMaskElement);

        function HTMLContenteditableMaskElement() {
            _classCallCheck(this, HTMLContenteditableMaskElement);

            return _super.apply(this, arguments);
        }

        _createClass(HTMLContenteditableMaskElement, [{
            key: "_unsafeSelectionStart",
            get:
                /**
                 Returns HTMLElement selection start
                 @override
                 */
                function get() {
                    var root = this.rootElement;
                    var selection = root.getSelection && root.getSelection();
                    var anchorOffset = selection && selection.anchorOffset;
                    var focusOffset = selection && selection.focusOffset;

                    if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
                        return anchorOffset;
                    }

                    return focusOffset;
                }
            /**
             Returns HTMLElement selection end
             @override
             */

        }, {
            key: "_unsafeSelectionEnd",
            get: function get() {
                var root = this.rootElement;
                var selection = root.getSelection && root.getSelection();
                var anchorOffset = selection && selection.anchorOffset;
                var focusOffset = selection && selection.focusOffset;

                if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
                    return anchorOffset;
                }

                return focusOffset;
            }
            /**
             Sets HTMLElement selection
             @override
             */

        }, {
            key: "_unsafeSelect",
            value: function _unsafeSelect(start, end) {
                if (!this.rootElement.createRange) return;
                var range = this.rootElement.createRange();
                range.setStart(this.input.firstChild || this.input, start);
                range.setEnd(this.input.lastChild || this.input, end);
                var root = this.rootElement;
                var selection = root.getSelection && root.getSelection();

                if (selection) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
            /**
             HTMLElement value
             @override
             */

        }, {
            key: "value",
            get: function get() {
                // $FlowFixMe
                return this.input.textContent;
            },
            set: function set(value) {
                this.input.textContent = value;
            }
        }]);

        return HTMLContenteditableMaskElement;
    }(HTMLMaskElement);
    IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

    var _excluded$1 = ["mask"];
    /** Listens to element events and controls changes between element and {@link Masked} */

    var InputMask = /*#__PURE__*/function () {
        /**
         View element
         @readonly
         */

        /**
         Internal {@link Masked} model
         @readonly
         */

        /**
         @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
         @param {Object} opts
         */
        function InputMask(el, opts) {
            _classCallCheck(this, InputMask);

            this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
            this.masked = createMask(opts);
            this._listeners = {};
            this._value = '';
            this._unmaskedValue = '';
            this._saveSelection = this._saveSelection.bind(this);
            this._onInput = this._onInput.bind(this);
            this._onChange = this._onChange.bind(this);
            this._onDrop = this._onDrop.bind(this);
            this._onFocus = this._onFocus.bind(this);
            this._onClick = this._onClick.bind(this);
            this.alignCursor = this.alignCursor.bind(this);
            this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

            this._bindEvents(); // refresh


            this.updateValue();

            this._onChange();
        }
        /** Read or update mask */


        _createClass(InputMask, [{
            key: "mask",
            get: function get() {
                return this.masked.mask;
            },
            set: function set(mask) {
                if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update

                if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
                    this.masked.updateOptions({
                        mask: mask
                    });
                    return;
                }

                var masked = createMask({
                    mask: mask
                });
                masked.unmaskedValue = this.masked.unmaskedValue;
                this.masked = masked;
            }
            /** Raw value */

        }, {
            key: "maskEquals",
            value: function maskEquals(mask) {
                var _this$masked;

                return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
            }
        }, {
            key: "value",
            get: function get() {
                return this._value;
            },
            set: function set(str) {
                if (this.value === str) return;
                this.masked.value = str;
                this.updateControl();
                this.alignCursor();
            }
            /** Unmasked value */

        }, {
            key: "unmaskedValue",
            get: function get() {
                return this._unmaskedValue;
            },
            set: function set(str) {
                if (this.unmaskedValue === str) return;
                this.masked.unmaskedValue = str;
                this.updateControl();
                this.alignCursor();
            }
            /** Typed unmasked value */

        }, {
            key: "typedValue",
            get: function get() {
                return this.masked.typedValue;
            },
            set: function set(val) {
                if (this.masked.typedValueEquals(val)) return;
                this.masked.typedValue = val;
                this.updateControl();
                this.alignCursor();
            }
            /**
             Starts listening to element events
             @protected
             */

        }, {
            key: "_bindEvents",
            value: function _bindEvents() {
                this.el.bindEvents({
                    selectionChange: this._saveSelection,
                    input: this._onInput,
                    drop: this._onDrop,
                    click: this._onClick,
                    focus: this._onFocus,
                    commit: this._onChange
                });
            }
            /**
             Stops listening to element events
             @protected
             */

        }, {
            key: "_unbindEvents",
            value: function _unbindEvents() {
                if (this.el) this.el.unbindEvents();
            }
            /**
             Fires custom event
             @protected
             */

        }, {
            key: "_fireEvent",
            value: function _fireEvent(ev) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                var listeners = this._listeners[ev];
                if (!listeners) return;
                listeners.forEach(function (l) {
                    return l.apply(void 0, args);
                });
            }
            /**
             Current selection start
             @readonly
             */

        }, {
            key: "selectionStart",
            get: function get() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
            }
            /** Current cursor position */

        }, {
            key: "cursorPos",
            get: function get() {
                return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
            },
            set: function set(pos) {
                if (!this.el || !this.el.isActive) return;
                this.el.select(pos, pos);

                this._saveSelection();
            }
            /**
             Stores current selection
             @protected
             */

        }, {
            key: "_saveSelection",
            value: function
                /* ev */
                _saveSelection() {
                if (this.value !== this.el.value) {
                    console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
                }

                this._selection = {
                    start: this.selectionStart,
                    end: this.cursorPos
                };
            }
            /** Syncronizes model value from view */

        }, {
            key: "updateValue",
            value: function updateValue() {
                this.masked.value = this.el.value;
                this._value = this.masked.value;
            }
            /** Syncronizes view from model value, fires change events */

        }, {
            key: "updateControl",
            value: function updateControl() {
                var newUnmaskedValue = this.masked.unmaskedValue;
                var newValue = this.masked.value;
                var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
                this._unmaskedValue = newUnmaskedValue;
                this._value = newValue;
                if (this.el.value !== newValue) this.el.value = newValue;
                if (isChanged) this._fireChangeEvents();
            }
            /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

        }, {
            key: "updateOptions",
            value: function updateOptions(opts) {
                var mask = opts.mask,
                    restOpts = _objectWithoutProperties(opts, _excluded$1);

                var updateMask = !this.maskEquals(mask);
                var updateOpts = !objectIncludes(this.masked, restOpts);
                if (updateMask) this.mask = mask;
                if (updateOpts) this.masked.updateOptions(restOpts);
                if (updateMask || updateOpts) this.updateControl();
            }
            /** Updates cursor */

        }, {
            key: "updateCursor",
            value: function updateCursor(cursorPos) {
                if (cursorPos == null) return;
                this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

                this._delayUpdateCursor(cursorPos);
            }
            /**
             Delays cursor update to support mobile browsers
             @private
             */

        }, {
            key: "_delayUpdateCursor",
            value: function _delayUpdateCursor(cursorPos) {
                var _this = this;

                this._abortUpdateCursor();

                this._changingCursorPos = cursorPos;
                this._cursorChanging = setTimeout(function () {
                    if (!_this.el) return; // if was destroyed

                    _this.cursorPos = _this._changingCursorPos;

                    _this._abortUpdateCursor();
                }, 10);
            }
            /**
             Fires custom events
             @protected
             */

        }, {
            key: "_fireChangeEvents",
            value: function _fireChangeEvents() {
                this._fireEvent('accept', this._inputEvent);

                if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
            }
            /**
             Aborts delayed cursor update
             @private
             */

        }, {
            key: "_abortUpdateCursor",
            value: function _abortUpdateCursor() {
                if (this._cursorChanging) {
                    clearTimeout(this._cursorChanging);
                    delete this._cursorChanging;
                }
            }
            /** Aligns cursor to nearest available position */

        }, {
            key: "alignCursor",
            value: function alignCursor() {
                this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
            }
            /** Aligns cursor only if selection is empty */

        }, {
            key: "alignCursorFriendly",
            value: function alignCursorFriendly() {
                if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

                this.alignCursor();
            }
            /** Adds listener on custom event */

        }, {
            key: "on",
            value: function on(ev, handler) {
                if (!this._listeners[ev]) this._listeners[ev] = [];

                this._listeners[ev].push(handler);

                return this;
            }
            /** Removes custom event listener */

        }, {
            key: "off",
            value: function off(ev, handler) {
                if (!this._listeners[ev]) return this;

                if (!handler) {
                    delete this._listeners[ev];
                    return this;
                }

                var hIndex = this._listeners[ev].indexOf(handler);

                if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
                return this;
            }
            /** Handles view input event */

        }, {
            key: "_onInput",
            value: function _onInput(e) {
                this._inputEvent = e;

                this._abortUpdateCursor(); // fix strange IE behavior


                if (!this._selection) return this.updateValue();
                var details = new ActionDetails( // new state
                    this.el.value, this.cursorPos, // old state
                    this.value, this._selection);
                var oldRawValue = this.masked.rawInputValue;
                var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
                    input: true,
                    raw: true
                }).offset; // force align in remove direction only if no input chars were removed
                // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

                var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
                var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
                if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
                this.updateControl();
                this.updateCursor(cursorPos);
                delete this._inputEvent;
            }
            /** Handles view change event and commits model value */

        }, {
            key: "_onChange",
            value: function _onChange() {
                if (this.value !== this.el.value) {
                    this.updateValue();
                }

                this.masked.doCommit();
                this.updateControl();

                this._saveSelection();
            }
            /** Handles view drop event, prevents by default */

        }, {
            key: "_onDrop",
            value: function _onDrop(ev) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            /** Restore last selection on focus */

        }, {
            key: "_onFocus",
            value: function _onFocus(ev) {
                this.alignCursorFriendly();
            }
            /** Restore last selection on focus */

        }, {
            key: "_onClick",
            value: function _onClick(ev) {
                this.alignCursorFriendly();
            }
            /** Unbind view events and removes element reference */

        }, {
            key: "destroy",
            value: function destroy() {
                this._unbindEvents(); // $FlowFixMe why not do so?


                this._listeners.length = 0; // $FlowFixMe

                delete this.el;
            }
        }]);

        return InputMask;
    }();
    IMask.InputMask = InputMask;

    /** Pattern which validates enum values */

    var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
        _inherits(MaskedEnum, _MaskedPattern);

        var _super = _createSuper(MaskedEnum);

        function MaskedEnum() {
            _classCallCheck(this, MaskedEnum);

            return _super.apply(this, arguments);
        }

        _createClass(MaskedEnum, [{
            key: "_update",
            value:
                /**
                 @override
                 @param {Object} opts
                 */
                function _update(opts) {
                    if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

                    _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
                }
            /**
             @override
             */

        }, {
            key: "doValidate",
            value: function doValidate() {
                var _this = this,
                    _get2;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return this.enum.some(function (e) {
                    return e.indexOf(_this.unmaskedValue) >= 0;
                }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
            }
        }]);

        return MaskedEnum;
    }(MaskedPattern);
    IMask.MaskedEnum = MaskedEnum;

    /**
     Number mask
     @param {Object} opts
     @param {string} opts.radix - Single char
     @param {string} opts.thousandsSeparator - Single char
     @param {Array<string>} opts.mapToRadix - Array of single chars
     @param {number} opts.min
     @param {number} opts.max
     @param {number} opts.scale - Digits after point
     @param {boolean} opts.signed - Allow negative
     @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
     @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
     */
    var MaskedNumber = /*#__PURE__*/function (_Masked) {
        _inherits(MaskedNumber, _Masked);

        var _super = _createSuper(MaskedNumber);

        /** Single char */

        /** Single char */

        /** Array of single chars */

        /** */

        /** */

        /** Digits after point */

        /** */

        /** Flag to remove leading and trailing zeros in the end of editing */

        /** Flag to pad trailing zeros after point in the end of editing */
        function MaskedNumber(opts) {
            _classCallCheck(this, MaskedNumber);

            return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
        }
        /**
         @override
         */


        _createClass(MaskedNumber, [{
            key: "_update",
            value: function _update(opts) {
                _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

                this._updateRegExps();
            }
            /** */

        }, {
            key: "_updateRegExps",
            value: function _updateRegExps() {
                // use different regexp to process user input (more strict, input suffix) and tail shifting
                var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
                var midInput = '(0|([1-9]+\\d*))?';
                var mid = '\\d*';
                var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
                this._numberRegExpInput = new RegExp(start + midInput + end);
                this._numberRegExp = new RegExp(start + mid + end);
                this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
                this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
            }
            /** */

        }, {
            key: "_removeThousandsSeparators",
            value: function _removeThousandsSeparators(value) {
                return value.replace(this._thousandsSeparatorRegExp, '');
            }
            /** */

        }, {
            key: "_insertThousandsSeparators",
            value: function _insertThousandsSeparators(value) {
                // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                var parts = value.split(this.radix);
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
                return parts.join(this.radix);
            }
            /**
             @override
             */

        }, {
            key: "doPrepare",
            value: function doPrepare(ch) {
                var _get2;

                ch = ch.replace(this._mapToRadixRegExp, this.radix);

                var noSepCh = this._removeThousandsSeparators(ch);

                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                var _normalizePrepare = normalizePrepare((_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))),
                    _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
                    prepCh = _normalizePrepare2[0],
                    details = _normalizePrepare2[1];

                if (ch && !noSepCh) details.skip = true;
                return [prepCh, details];
            }
            /** */

        }, {
            key: "_separatorsCount",
            value: function _separatorsCount(to) {
                var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var count = 0;

                for (var pos = 0; pos < to; ++pos) {
                    if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
                        ++count;
                        if (extendOnSeparators) to += this.thousandsSeparator.length;
                    }
                }

                return count;
            }
            /** */

        }, {
            key: "_separatorsCountFromSlice",
            value: function _separatorsCountFromSlice() {
                var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
                return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
            }
            /**
             @override
             */

        }, {
            key: "extractInput",
            value: function extractInput() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                var flags = arguments.length > 2 ? arguments[2] : undefined;

                var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

                var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

                fromPos = _this$_adjustRangeWit2[0];
                toPos = _this$_adjustRangeWit2[1];
                return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
            }
            /**
             @override
             */

        }, {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
                var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

                var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

                this._value = this._removeThousandsSeparators(this.value);

                var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

                this._value = this._insertThousandsSeparators(this._value);
                var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

                var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

                appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
                appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
                return appendDetails;
            }
            /** */

        }, {
            key: "_findSeparatorAround",
            value: function _findSeparatorAround(pos) {
                if (this.thousandsSeparator) {
                    var searchFrom = pos - this.thousandsSeparator.length + 1;
                    var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
                    if (separatorPos <= pos) return separatorPos;
                }

                return -1;
            }
        }, {
            key: "_adjustRangeWithSeparators",
            value: function _adjustRangeWithSeparators(from, to) {
                var separatorAroundFromPos = this._findSeparatorAround(from);

                if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

                var separatorAroundToPos = this._findSeparatorAround(to);

                if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
                return [from, to];
            }
            /**
             @override
             */

        }, {
            key: "remove",
            value: function remove() {
                var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

                var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

                fromPos = _this$_adjustRangeWit4[0];
                toPos = _this$_adjustRangeWit4[1];
                var valueBeforePos = this.value.slice(0, fromPos);
                var valueAfterPos = this.value.slice(toPos);

                var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

                this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

                var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

                return new ChangeDetails({
                    tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
                });
            }
            /**
             @override
             */

        }, {
            key: "nearestInputPos",
            value: function nearestInputPos(cursorPos, direction) {
                if (!this.thousandsSeparator) return cursorPos;

                switch (direction) {
                    case DIRECTION.NONE:
                    case DIRECTION.LEFT:
                    case DIRECTION.FORCE_LEFT:
                    {
                        var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

                        if (separatorAtLeftPos >= 0) {
                            var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

                            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                                return separatorAtLeftPos;
                            }
                        }

                        break;
                    }

                    case DIRECTION.RIGHT:
                    case DIRECTION.FORCE_RIGHT:
                    {
                        var separatorAtRightPos = this._findSeparatorAround(cursorPos);

                        if (separatorAtRightPos >= 0) {
                            return separatorAtRightPos + this.thousandsSeparator.length;
                        }
                    }
                }

                return cursorPos;
            }
            /**
             @override
             */

        }, {
            key: "doValidate",
            value: function doValidate(flags) {
                var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

                var valid = regexp.test(this._removeThousandsSeparators(this.value));

                if (valid) {
                    // validate as number
                    var number = this.number;
                    valid = valid && !isNaN(number) && ( // check min bound for negative values
                        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
                        this.max == null || this.max <= 0 || this.number <= this.max);
                }

                return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
            }
            /**
             @override
             */

        }, {
            key: "doCommit",
            value: function doCommit() {
                if (this.value) {
                    var number = this.number;
                    var validnum = number; // check bounds

                    if (this.min != null) validnum = Math.max(validnum, this.min);
                    if (this.max != null) validnum = Math.min(validnum, this.max);
                    if (validnum !== number) this.unmaskedValue = String(validnum);
                    var formatted = this.value;
                    if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
                    if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
                    this._value = formatted;
                }

                _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
            }
            /** */

        }, {
            key: "_normalizeZeros",
            value: function _normalizeZeros(value) {
                var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


                parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
                    return sign + num;
                }); // add leading zero

                if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

                if (parts.length > 1) {
                    parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

                    if (!parts[1].length) parts.length = 1; // remove fractional
                }

                return this._insertThousandsSeparators(parts.join(this.radix));
            }
            /** */

        }, {
            key: "_padFractionalZeros",
            value: function _padFractionalZeros(value) {
                if (!value) return value;
                var parts = value.split(this.radix);
                if (parts.length < 2) parts.push('');
                parts[1] = parts[1].padEnd(this.scale, '0');
                return parts.join(this.radix);
            }
            /**
             @override
             */

        }, {
            key: "unmaskedValue",
            get: function get() {
                return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
            },
            set: function set(unmaskedValue) {
                _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
            }
            /**
             @override
             */

        }, {
            key: "typedValue",
            get: function get() {
                return Number(this.unmaskedValue);
            },
            set: function set(n) {
                _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
            }
            /** Parsed Number */

        }, {
            key: "number",
            get: function get() {
                return this.typedValue;
            },
            set: function set(number) {
                this.typedValue = number;
            }
            /**
             Is negative allowed
             @readonly
             */

        }, {
            key: "allowNegative",
            get: function get() {
                return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
            }
            /**
             @override
             */

        }, {
            key: "typedValueEquals",
            value: function typedValueEquals(value) {
                // handle  0 -> '' case (typed = 0 even if value = '')
                // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
                return (_get(_getPrototypeOf(MaskedNumber.prototype), "typedValueEquals", this).call(this, value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
            }
        }]);

        return MaskedNumber;
    }(Masked);
    MaskedNumber.DEFAULTS = {
        radix: ',',
        thousandsSeparator: '',
        mapToRadix: ['.'],
        scale: 2,
        signed: false,
        normalizeZeros: true,
        padFractionalZeros: false
    };
    MaskedNumber.EMPTY_VALUES = [].concat(_toConsumableArray(Masked.EMPTY_VALUES), [0]);
    IMask.MaskedNumber = MaskedNumber;

    /** Masking by custom Function */

    var MaskedFunction = /*#__PURE__*/function (_Masked) {
        _inherits(MaskedFunction, _Masked);

        var _super = _createSuper(MaskedFunction);

        function MaskedFunction() {
            _classCallCheck(this, MaskedFunction);

            return _super.apply(this, arguments);
        }

        _createClass(MaskedFunction, [{
            key: "_update",
            value:
                /**
                 @override
                 @param {Object} opts
                 */
                function _update(opts) {
                    if (opts.mask) opts.validate = opts.mask;

                    _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
                }
        }]);

        return MaskedFunction;
    }(Masked);
    IMask.MaskedFunction = MaskedFunction;

    var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];

    /** Dynamic mask for choosing apropriate mask in run-time */
    var MaskedDynamic = /*#__PURE__*/function (_Masked) {
        _inherits(MaskedDynamic, _Masked);

        var _super = _createSuper(MaskedDynamic);

        /** Currently chosen mask */

        /** Compliled {@link Masked} options */

        /** Chooses {@link Masked} depending on input value */

        /**
         @param {Object} opts
         */
        function MaskedDynamic(opts) {
            var _this;

            _classCallCheck(this, MaskedDynamic);

            _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
            _this.currentMask = null;
            return _this;
        }
        /**
         @override
         */


        _createClass(MaskedDynamic, [{
            key: "_update",
            value: function _update(opts) {
                _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

                if ('mask' in opts) {
                    // mask could be totally dynamic with only `dispatch` option
                    this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
                        return createMask(m);
                    }) : [];
                }
            }
            /**
             @override
             */

        }, {
            key: "_appendCharRaw",
            value: function _appendCharRaw(ch) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                var details = this._applyDispatch(ch, flags);

                if (this.currentMask) {
                    details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
                }

                return details;
            }
        }, {
            key: "_applyDispatch",
            value: function _applyDispatch() {
                var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
                var inputValue = this.rawInputValue;
                var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
                    flags._beforeTailState._rawInputValue : inputValue;
                var tailValue = inputValue.slice(insertValue.length);
                var prevMask = this.currentMask;
                var details = new ChangeDetails();
                var prevMaskState = prevMask === null || prevMask === void 0 ? void 0 : prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

                this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

                if (this.currentMask) {
                    if (this.currentMask !== prevMask) {
                        // if mask changed reapply input
                        this.currentMask.reset();

                        if (insertValue) {
                            // $FlowFixMe - it's ok, we don't change current mask above
                            var d = this.currentMask.append(insertValue, {
                                raw: true
                            });
                            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
                        }

                        if (tailValue) {
                            // $FlowFixMe - it's ok, we don't change current mask above
                            details.tailShift += this.currentMask.append(tailValue, {
                                raw: true,
                                tail: true
                            }).tailShift;
                        }
                    } else {
                        // Dispatch can do something bad with state, so
                        // restore prev mask state
                        this.currentMask.state = prevMaskState;
                    }
                }

                return details;
            }
        }, {
            key: "_appendPlaceholder",
            value: function _appendPlaceholder() {
                var details = this._applyDispatch.apply(this, arguments);

                if (this.currentMask) {
                    details.aggregate(this.currentMask._appendPlaceholder());
                }

                return details;
            }
            /**
             @override
             */

        }, {
            key: "_appendEager",
            value: function _appendEager() {
                var details = this._applyDispatch.apply(this, arguments);

                if (this.currentMask) {
                    details.aggregate(this.currentMask._appendEager());
                }

                return details;
            }
        }, {
            key: "currentMaskFlags",
            value: function currentMaskFlags(flags) {
                var _flags$_beforeTailSta, _flags$_beforeTailSta2;

                return Object.assign({}, flags, {
                    _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
                });
            }
            /**
             @override
             */

        }, {
            key: "doDispatch",
            value: function doDispatch(appended) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.dispatch(appended, this, flags);
            }
            /**
             @override
             */

        }, {
            key: "doValidate",
            value: function doValidate(flags) {
                return _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this).call(this, flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
            }
            /**
             @override
             */

        }, {
            key: "doPrepare",
            value: function doPrepare(str) {
                var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedDynamic.prototype), "doPrepare", this).call(this, str, flags)),
                    _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
                    s = _normalizePrepare2[0],
                    details = _normalizePrepare2[1];

                if (this.currentMask) {
                    var currentDetails;

                    var _normalizePrepare3 = normalizePrepare(_get(_getPrototypeOf(MaskedDynamic.prototype), "doPrepare", this).call(this, s, this.currentMaskFlags(flags)));

                    var _normalizePrepare4 = _slicedToArray(_normalizePrepare3, 2);

                    s = _normalizePrepare4[0];
                    currentDetails = _normalizePrepare4[1];
                    details = details.aggregate(currentDetails);
                }

                return [s, details];
            }
            /**
             @override
             */

        }, {
            key: "reset",
            value: function reset() {
                var _this$currentMask;

                (_this$currentMask = this.currentMask) === null || _this$currentMask === void 0 ? void 0 : _this$currentMask.reset();
                this.compiledMasks.forEach(function (m) {
                    return m.reset();
                });
            }
            /**
             @override
             */

        }, {
            key: "value",
            get: function get() {
                return this.currentMask ? this.currentMask.value : '';
            },
            set: function set(value) {
                _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
            }
            /**
             @override
             */

        }, {
            key: "unmaskedValue",
            get: function get() {
                return this.currentMask ? this.currentMask.unmaskedValue : '';
            },
            set: function set(unmaskedValue) {
                _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
            }
            /**
             @override
             */

        }, {
            key: "typedValue",
            get: function get() {
                return this.currentMask ? this.currentMask.typedValue : '';
            } // probably typedValue should not be used with dynamic
            ,
            set: function set(value) {
                var unmaskedValue = String(value); // double check it

                if (this.currentMask) {
                    this.currentMask.typedValue = value;
                    unmaskedValue = this.currentMask.unmaskedValue;
                }

                this.unmaskedValue = unmaskedValue;
            }
            /**
             @override
             */

        }, {
            key: "isComplete",
            get: function get() {
                var _this$currentMask2;

                return Boolean((_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.isComplete);
            }
            /**
             @override
             */

        }, {
            key: "isFilled",
            get: function get() {
                var _this$currentMask3;

                return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isFilled);
            }
            /**
             @override
             */

        }, {
            key: "remove",
            value: function remove() {
                var details = new ChangeDetails();

                if (this.currentMask) {
                    var _this$currentMask4;

                    details.aggregate((_this$currentMask4 = this.currentMask).remove.apply(_this$currentMask4, arguments)) // update with dispatch
                        .aggregate(this._applyDispatch());
                }

                return details;
            }
            /**
             @override
             */

        }, {
            key: "state",
            get: function get() {
                var _this$currentMask5;

                return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
                    _rawInputValue: this.rawInputValue,
                    compiledMasks: this.compiledMasks.map(function (m) {
                        return m.state;
                    }),
                    currentMaskRef: this.currentMask,
                    currentMask: (_this$currentMask5 = this.currentMask) === null || _this$currentMask5 === void 0 ? void 0 : _this$currentMask5.state
                });
            },
            set: function set(state) {
                var compiledMasks = state.compiledMasks,
                    currentMaskRef = state.currentMaskRef,
                    currentMask = state.currentMask,
                    maskedState = _objectWithoutProperties(state, _excluded);

                this.compiledMasks.forEach(function (m, mi) {
                    return m.state = compiledMasks[mi];
                });

                if (currentMaskRef != null) {
                    this.currentMask = currentMaskRef;
                    this.currentMask.state = currentMask;
                }

                _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
            }
            /**
             @override
             */

        }, {
            key: "extractInput",
            value: function extractInput() {
                var _this$currentMask6;

                return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : '';
            }
            /**
             @override
             */

        }, {
            key: "extractTail",
            value: function extractTail() {
                var _this$currentMask7, _get2;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get2, [this].concat(args));
            }
            /**
             @override
             */

        }, {
            key: "doCommit",
            value: function doCommit() {
                if (this.currentMask) this.currentMask.doCommit();

                _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
            }
            /**
             @override
             */

        }, {
            key: "nearestInputPos",
            value: function nearestInputPos() {
                var _this$currentMask8, _get3;

                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get3, [this].concat(args));
            }
        }, {
            key: "overwrite",
            get: function get() {
                return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
            },
            set: function set(overwrite) {
                console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
            }
        }, {
            key: "eager",
            get: function get() {
                return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic.prototype), "eager", this);
            },
            set: function set(eager) {
                console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
            }
            /**
             @override
             */

        }, {
            key: "maskEquals",
            value: function maskEquals(mask) {
                return Array.isArray(mask) && this.compiledMasks.every(function (m, mi) {
                    var _mask$mi;

                    return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
                });
            }
            /**
             @override
             */

        }, {
            key: "typedValueEquals",
            value: function typedValueEquals(value) {
                var _this$currentMask9;

                return Boolean((_this$currentMask9 = this.currentMask) === null || _this$currentMask9 === void 0 ? void 0 : _this$currentMask9.typedValueEquals(value));
            }
        }]);

        return MaskedDynamic;
    }(Masked);
    MaskedDynamic.DEFAULTS = {
        dispatch: function dispatch(appended, masked, flags) {
            if (!masked.compiledMasks.length) return;
            var inputValue = masked.rawInputValue; // simulate input

            var inputs = masked.compiledMasks.map(function (m, index) {
                m.reset();
                m.append(inputValue, {
                    raw: true
                });
                m.append(appended, masked.currentMaskFlags(flags));
                var weight = m.rawInputValue.length;
                return {
                    weight: weight,
                    index: index
                };
            }); // pop masks with longer values first

            inputs.sort(function (i1, i2) {
                return i2.weight - i1.weight;
            });
            return masked.compiledMasks[inputs[0].index];
        }
    };
    IMask.MaskedDynamic = MaskedDynamic;

    /** Mask pipe source and destination types */

    var PIPE_TYPE = {
        MASKED: 'value',
        UNMASKED: 'unmaskedValue',
        TYPED: 'typedValue'
    };
    /** Creates new pipe function depending on mask type, source and destination options */

    function createPipe(mask) {
        var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
        var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
        var masked = createMask(mask);
        return function (value) {
            return masked.runIsolated(function (m) {
                m[from] = value;
                return m[to];
            });
        };
    }
    /** Pipes value through mask depending on mask type, source and destination options */

    function pipe(value) {
        for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            pipeArgs[_key - 1] = arguments[_key];
        }

        return createPipe.apply(void 0, pipeArgs)(value);
    }
    IMask.PIPE_TYPE = PIPE_TYPE;
    IMask.createPipe = createPipe;
    IMask.pipe = pipe;

    try {
        globalThis.IMask = IMask;
    } catch (e) {}

    exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
    exports.HTMLMaskElement = HTMLMaskElement;
    exports.InputMask = InputMask;
    exports.MaskElement = MaskElement;
    exports.Masked = Masked;
    exports.MaskedDate = MaskedDate;
    exports.MaskedDynamic = MaskedDynamic;
    exports.MaskedEnum = MaskedEnum;
    exports.MaskedFunction = MaskedFunction;
    exports.MaskedNumber = MaskedNumber;
    exports.MaskedPattern = MaskedPattern;
    exports.MaskedRange = MaskedRange;
    exports.MaskedRegExp = MaskedRegExp;
    exports.PIPE_TYPE = PIPE_TYPE;
    exports.createMask = createMask;
    exports.createPipe = createPipe;
    exports["default"] = IMask;
    exports.pipe = pipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWIvdmFsaWRhdGlvbi9pbWFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICAgICAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgICAgICAgICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLklNYXNrID0ge30pKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgICBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICAgICAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgICAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICAgIH0sIF90eXBlb2Yob2JqKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgICAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICAgICAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgICAgICAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICAgIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgICAgICAgICAgby5fX3Byb3RvX18gPSBwO1xuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgICAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgICAgICAgdmFyIHRhcmdldCA9IHt9O1xuICAgICAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIHZhciBrZXksIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICAgICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gICAgICAgIHZhciBrZXksIGk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICAgICAgICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgICAgIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGw7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICAgICAgICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgICAgICAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgICAgICAgICAgcmVzdWx0O1xuXG4gICAgICAgICAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICAgICAgICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0KCkge1xuICAgICAgICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICAgICAgICAgIF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHtcbiAgICAgICAgICAgIHNldCA9IFJlZmxlY3Quc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGVzYztcblxuICAgICAgICAgICAgICAgIGlmIChiYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3NldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIsIGlzU3RyaWN0KSB7XG4gICAgICAgIHZhciBzID0gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciB8fCB0YXJnZXQpO1xuXG4gICAgICAgIGlmICghcyAmJiBpc1N0cmljdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gc2V0IHByb3BlcnR5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gICAgICAgIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgICAgICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gICAgICAgIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICAgICAgICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICB2YXIgX2FyciA9IFtdO1xuICAgICAgICB2YXIgX24gPSB0cnVlO1xuICAgICAgICB2YXIgX2QgPSBmYWxzZTtcblxuICAgICAgICB2YXIgX3MsIF9lO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfZCA9IHRydWU7XG4gICAgICAgICAgICBfZSA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hcnI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgICAgICBpZiAoIW8pIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgICAgICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgICAgICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgICAgICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgICAgIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgICAgICByZXR1cm4gYXJyMjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIFByb3ZpZGVzIGRldGFpbHMgb2YgY2hhbmdpbmcgbW9kZWwgdmFsdWVcbiAgICAgQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzXVxuICAgICBAcGFyYW0ge3N0cmluZ30gW2RldGFpbHMuaW5zZXJ0ZWRdIC0gSW5zZXJ0ZWQgc3ltYm9sc1xuICAgICBAcGFyYW0ge2Jvb2xlYW59IFtkZXRhaWxzLnNraXBdIC0gQ2FuIHNraXAgY2hhcnNcbiAgICAgQHBhcmFtIHtudW1iZXJ9IFtkZXRhaWxzLnJlbW92ZUNvdW50XSAtIFJlbW92ZWQgc3ltYm9scyBjb3VudFxuICAgICBAcGFyYW0ge251bWJlcn0gW2RldGFpbHMudGFpbFNoaWZ0XSAtIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsXG4gICAgICovXG4gICAgdmFyIENoYW5nZURldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICAvKiogSW5zZXJ0ZWQgc3ltYm9scyAqL1xuXG4gICAgICAgIC8qKiBDYW4gc2tpcCBjaGFycyAqL1xuXG4gICAgICAgIC8qKiBBZGRpdGlvbmFsIG9mZnNldCBpZiBhbnkgY2hhbmdlcyBvY2N1cnJlZCBiZWZvcmUgdGFpbCAqL1xuXG4gICAgICAgIC8qKiBSYXcgaW5zZXJ0ZWQgaXMgdXNlZCBieSBkeW5hbWljIG1hc2sgKi9cbiAgICAgICAgZnVuY3Rpb24gQ2hhbmdlRGV0YWlscyhkZXRhaWxzKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhbmdlRGV0YWlscyk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgICAgICAgIGluc2VydGVkOiAnJyxcbiAgICAgICAgICAgICAgICByYXdJbnNlcnRlZDogJycsXG4gICAgICAgICAgICAgICAgc2tpcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGFpbFNoaWZ0OiAwXG4gICAgICAgICAgICB9LCBkZXRhaWxzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgIEFnZ3JlZ2F0ZSBjaGFuZ2VzXG4gICAgICAgICBAcmV0dXJucyB7Q2hhbmdlRGV0YWlsc30gYHRoaXNgXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKENoYW5nZURldGFpbHMsIFt7XG4gICAgICAgICAgICBrZXk6IFwiYWdncmVnYXRlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWdncmVnYXRlKGRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhd0luc2VydGVkICs9IGRldGFpbHMucmF3SW5zZXJ0ZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwID0gdGhpcy5za2lwIHx8IGRldGFpbHMuc2tpcDtcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydGVkICs9IGRldGFpbHMuaW5zZXJ0ZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy50YWlsU2hpZnQgKz0gZGV0YWlscy50YWlsU2hpZnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogVG90YWwgb2Zmc2V0IGNvbnNpZGVyaW5nIGFsbCBjaGFuZ2VzICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIm9mZnNldFwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFpbFNoaWZ0ICsgdGhpcy5pbnNlcnRlZC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gQ2hhbmdlRGV0YWlscztcbiAgICB9KCk7XG5cbiAgICAvKiogQ2hlY2tzIGlmIHZhbHVlIGlzIHN0cmluZyAqL1xuXG4gICAgZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyB8fCBzdHIgaW5zdGFuY2VvZiBTdHJpbmc7XG4gICAgfVxuICAgIC8qKlxuICAgICBEaXJlY3Rpb25cbiAgICAgQHByb3Age3N0cmluZ30gTk9ORVxuICAgICBAcHJvcCB7c3RyaW5nfSBMRUZUXG4gICAgIEBwcm9wIHtzdHJpbmd9IEZPUkNFX0xFRlRcbiAgICAgQHByb3Age3N0cmluZ30gUklHSFRcbiAgICAgQHByb3Age3N0cmluZ30gRk9SQ0VfUklHSFRcbiAgICAgKi9cblxuICAgIHZhciBESVJFQ1RJT04gPSB7XG4gICAgICAgIE5PTkU6ICdOT05FJyxcbiAgICAgICAgTEVGVDogJ0xFRlQnLFxuICAgICAgICBGT1JDRV9MRUZUOiAnRk9SQ0VfTEVGVCcsXG4gICAgICAgIFJJR0hUOiAnUklHSFQnLFxuICAgICAgICBGT1JDRV9SSUdIVDogJ0ZPUkNFX1JJR0hUJ1xuICAgIH07XG4gICAgLyoqICovXG5cbiAgICBmdW5jdGlvbiBmb3JjZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9MRUZUO1xuXG4gICAgICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX1JJR0hUO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEVzY2FwZXMgcmVndWxhciBleHByZXNzaW9uIGNvbnRyb2wgY2hhcnMgKi9cblxuICAgIGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVByZXBhcmUocHJlcCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwcmVwKSA/IHByZXAgOiBbcHJlcCwgbmV3IENoYW5nZURldGFpbHMoKV07XG4gICAgfSAvLyBjbG9uZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXBvYmVyZXpraW4vZmFzdC1kZWVwLWVxdWFsIHdpdGggc21hbGwgY2hhbmdlc1xuXG4gICAgZnVuY3Rpb24gb2JqZWN0SW5jbHVkZXMoYiwgYSkge1xuICAgICAgICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBhcnJBID0gQXJyYXkuaXNBcnJheShhKSxcbiAgICAgICAgICAgIGFyckIgPSBBcnJheS5pc0FycmF5KGIpLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgICAgICAgICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9iamVjdEluY2x1ZGVzKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyckEgIT0gYXJyQikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmIChhICYmIGIgJiYgX3R5cGVvZihhKSA9PT0gJ29iamVjdCcgJiYgX3R5cGVvZihiKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlLFxuICAgICAgICAgICAgICAgIGRhdGVCID0gYiBpbnN0YW5jZW9mIERhdGU7XG4gICAgICAgICAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgdmFyIHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwLFxuICAgICAgICAgICAgICAgIHJlZ2V4cEIgPSBiIGluc3RhbmNlb2YgUmVnRXhwO1xuICAgICAgICAgICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAocmVnZXhwQSAhPSByZWdleHBCKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGEpOyAvLyBpZiAoa2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWUgLi4uID8/P1xuICAgICAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvYmplY3RJbmNsdWRlcyhiW2tleXNbaV1dLCBhW2tleXNbaV1dKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqIFNlbGVjdGlvbiByYW5nZSAqL1xuXG4gICAgLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY2hhbmdpbmcgaW5wdXQgKi9cblxuICAgIHZhciBBY3Rpb25EZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqIEN1cnJlbnQgaW5wdXQgdmFsdWUgKi9cblxuICAgICAgICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cblxuICAgICAgICAvKiogT2xkIGlucHV0IHZhbHVlICovXG5cbiAgICAgICAgLyoqIE9sZCBzZWxlY3Rpb24gKi9cbiAgICAgICAgZnVuY3Rpb24gQWN0aW9uRGV0YWlscyh2YWx1ZSwgY3Vyc29yUG9zLCBvbGRWYWx1ZSwgb2xkU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uRGV0YWlscyk7XG5cbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgICAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5vbGRTZWxlY3Rpb24gPSBvbGRTZWxlY3Rpb247IC8vIGRvdWJsZSBjaGVjayBpZiBsZWZ0IHBhcnQgd2FzIGNoYW5nZWQgKGF1dG9maWxsaW5nLCBvdGhlciBub24tc3RhbmRhcmQgaW5wdXQgdHJpZ2dlcnMpXG5cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpICE9PSB0aGlzLm9sZFZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpKSB7XG4gICAgICAgICAgICAgICAgLS10aGlzLm9sZFNlbGVjdGlvbi5zdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgIFN0YXJ0IGNoYW5naW5nIHBvc2l0aW9uXG4gICAgICAgICBAcmVhZG9ubHlcbiAgICAgICAgICovXG5cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoQWN0aW9uRGV0YWlscywgW3tcbiAgICAgICAgICAgIGtleTogXCJzdGFydENoYW5nZVBvc1wiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWluKHRoaXMuY3Vyc29yUG9zLCB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBJbnNlcnRlZCBzeW1ib2xzIGNvdW50XG4gICAgICAgICAgICAgQHJlYWRvbmx5XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiaW5zZXJ0ZWRDb3VudFwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3Vyc29yUG9zIC0gdGhpcy5zdGFydENoYW5nZVBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEluc2VydGVkIHN5bWJvbHNcbiAgICAgICAgICAgICBAcmVhZG9ubHlcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJpbnNlcnRlZFwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBSZW1vdmVkIHN5bWJvbHMgY291bnRcbiAgICAgICAgICAgICBAcmVhZG9ubHlcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJyZW1vdmVkQ291bnRcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIC8vIE1hdGgubWF4IGZvciBvcHBvc2l0ZSBvcGVyYXRpb25cbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5vbGRTZWxlY3Rpb24uZW5kIC0gdGhpcy5zdGFydENoYW5nZVBvcyB8fCAvLyBmb3IgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2xkVmFsdWUubGVuZ3RoIC0gdGhpcy52YWx1ZS5sZW5ndGgsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgUmVtb3ZlZCBzeW1ib2xzXG4gICAgICAgICAgICAgQHJlYWRvbmx5XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicmVtb3ZlZFwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub2xkVmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMucmVtb3ZlZENvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIFVuY2hhbmdlZCBoZWFkIHN5bWJvbHNcbiAgICAgICAgICAgICBAcmVhZG9ubHlcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJoZWFkXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcoMCwgdGhpcy5zdGFydENoYW5nZVBvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBVbmNoYW5nZWQgdGFpbCBzeW1ib2xzXG4gICAgICAgICAgICAgQHJlYWRvbmx5XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwidGFpbFwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKHRoaXMuc3RhcnRDaGFuZ2VQb3MgKyB0aGlzLmluc2VydGVkQ291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgUmVtb3ZlIGRpcmVjdGlvblxuICAgICAgICAgICAgIEByZWFkb25seVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInJlbW92ZURpcmVjdGlvblwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDb3VudCB8fCB0aGlzLmluc2VydGVkQ291bnQpIHJldHVybiBESVJFQ1RJT04uTk9ORTsgLy8gYWxpZ24gcmlnaHQgaWYgZGVsZXRlIGF0IHJpZ2h0XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMub2xkU2VsZWN0aW9uLmVuZCA9PT0gdGhpcy5jdXJzb3JQb3MgfHwgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQgPT09IHRoaXMuY3Vyc29yUG9zKSAmJiAvLyBpZiBub3QgcmFuZ2UgcmVtb3ZlZCAoZXZlbnQgd2l0aCBiYWNrc3BhY2UpXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRTZWxlY3Rpb24uZW5kID09PSB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCA/IERJUkVDVElPTi5SSUdIVCA6IERJUkVDVElPTi5MRUZUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIEFjdGlvbkRldGFpbHM7XG4gICAgfSgpO1xuXG4gICAgLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY29udGludW91cyBleHRyYWN0ZWQgdGFpbCAqL1xuICAgIHZhciBDb250aW51b3VzVGFpbERldGFpbHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICAvKiogVGFpbCB2YWx1ZSBhcyBzdHJpbmcgKi9cblxuICAgICAgICAvKiogVGFpbCBzdGFydCBwb3NpdGlvbiAqL1xuXG4gICAgICAgIC8qKiBTdGFydCBwb3NpdGlvbiAqL1xuICAgICAgICBmdW5jdGlvbiBDb250aW51b3VzVGFpbERldGFpbHMoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgICAgICAgICAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gICAgICAgICAgICB2YXIgc3RvcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGludW91c1RhaWxEZXRhaWxzKTtcblxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgICAgIHRoaXMuc3RvcCA9IHN0b3A7XG4gICAgICAgIH1cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoQ29udGludW91c1RhaWxEZXRhaWxzLCBbe1xuICAgICAgICAgICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJleHRlbmRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmQodGFpbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nKHRhaWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiYXBwZW5kVG9cIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUbyhtYXNrZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFza2VkLmFwcGVuZCh0aGlzLnRvU3RyaW5nKCksIHtcbiAgICAgICAgICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwic3RhdGVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiB0aGlzLmZyb20sXG4gICAgICAgICAgICAgICAgICAgIHN0b3A6IHRoaXMuc3RvcFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInVuc2hpZnRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bnNoaWZ0KGJlZm9yZVBvcykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWx1ZS5sZW5ndGggfHwgYmVmb3JlUG9zICE9IG51bGwgJiYgdGhpcy5mcm9tID49IGJlZm9yZVBvcykgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIHZhciBzaGlmdENoYXIgPSB0aGlzLnZhbHVlWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzaGlmdENoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJzaGlmdFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWx1ZS5sZW5ndGgpIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB2YXIgc2hpZnRDaGFyID0gdGhpcy52YWx1ZVt0aGlzLnZhbHVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hpZnRDaGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIENvbnRpbnVvdXNUYWlsRGV0YWlscztcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIG1hc2sgb24gZWxlbWVudC5cbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudHxNYXNrRWxlbWVudH0gZWwgLSBFbGVtZW50IHRvIGFwcGx5IG1hc2tcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIEN1c3RvbSBtYXNrIG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtJbnB1dE1hc2t9XG4gICAgICovXG4gICAgZnVuY3Rpb24gSU1hc2soZWwpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAvLyBjdXJyZW50bHkgYXZhaWxhYmxlIG9ubHkgZm9yIGlucHV0LWxpa2UgZWxlbWVudHNcbiAgICAgICAgcmV0dXJuIG5ldyBJTWFzay5JbnB1dE1hc2soZWwsIG9wdHMpO1xuICAgIH1cblxuICAgIC8qKiBTdXBwb3J0ZWQgbWFzayB0eXBlICovXG5cbiAgICAvKiogUHJvdmlkZXMgY29tbW9uIG1hc2tpbmcgc3R1ZmYgKi9cbiAgICB2YXIgTWFza2VkID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gJFNoYXBlPE1hc2tlZE9wdGlvbnM+O1xuXG4gICAgICAgIC8qKiBAdHlwZSB7TWFza30gKi9cblxuICAgICAgICAvKiogKi9cbiAgICAgICAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gICAgICAgIC8qKiBUcmFuc2Zvcm1zIHZhbHVlIGJlZm9yZSBtYXNrIHByb2Nlc3NpbmcgKi9cblxuICAgICAgICAvKiogVmFsaWRhdGVzIGlmIHZhbHVlIGlzIGFjY2VwdGFibGUgKi9cblxuICAgICAgICAvKiogRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG5cbiAgICAgICAgLyoqIEZvcm1hdCB0eXBlZCB2YWx1ZSB0byBzdHJpbmcgKi9cblxuICAgICAgICAvKiogUGFyc2Ugc3RyZ2luIHRvIGdldCB0eXBlZCB2YWx1ZSAqL1xuXG4gICAgICAgIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xuXG4gICAgICAgIC8qKiAqL1xuXG4gICAgICAgIC8qKiAqL1xuICAgICAgICBmdW5jdGlvbiBNYXNrZWQob3B0cykge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZShPYmplY3QuYXNzaWduKHt9LCBNYXNrZWQuREVGQVVMVFMsIG9wdHMpKTtcblxuICAgICAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvKiogU2V0cyBhbmQgYXBwbGllcyBuZXcgb3B0aW9ucyAqL1xuXG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKE1hc2tlZCwgW3tcbiAgICAgICAgICAgIGtleTogXCJ1cGRhdGVPcHRpb25zXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvcHRzKS5sZW5ndGgpIHJldHVybjsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgICAgICAgdGhpcy53aXRoVmFsdWVSZWZyZXNoKHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMsIG9wdHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIFNldHMgbmV3IG9wdGlvbnNcbiAgICAgICAgICAgICBAcHJvdGVjdGVkXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogTWFzayBzdGF0ZSAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gc3RhdGUuX3ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIFJlc2V0cyB2YWx1ZSAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJyZXNldFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwidmFsdWVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogUmVzb2x2ZSBuZXcgdmFsdWUgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicmVzb2x2ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7fSwgJycpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kb1BhcnNlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZG9Gb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIFZhbHVlIHRoYXQgaW5jbHVkZXMgcmF3IHVzZXIgaW5wdXQgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicmF3SW5wdXRWYWx1ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdElucHV0KDAsIHRoaXMudmFsdWUubGVuZ3RoLCB7XG4gICAgICAgICAgICAgICAgICAgIHJhdzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgIHJhdzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiaXNGaWxsZWRcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogRmluZHMgbmVhcmVzdCBpbnB1dCBwb3NpdGlvbiBpbiBkaXJlY3Rpb24gKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBFeHRyYWN0cyB2YWx1ZSBpbiByYW5nZSBjb25zaWRlcmluZyBmbGFncyAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgICAgICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5zbGljZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogRXh0cmFjdHMgdGFpbCBpbiByYW5nZSAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgICAgICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICAgICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb250aW51b3VzVGFpbERldGFpbHModGhpcy5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MpLCBmcm9tUG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBBcHBlbmRzIHRhaWwgKi9cbiAgICAgICAgICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZyh0YWlsKSkgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBBcHBlbmRzIGNoYXIgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgICAgICAgICAgIGlmICghY2gpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlICs9IGNoO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydGVkOiBjaCxcbiAgICAgICAgICAgICAgICAgICAgcmF3SW5zZXJ0ZWQ6IGNoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogQXBwZW5kcyBjaGFyICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoY2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAgICAgICAgIHZhciBjaGVja1RhaWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB2YXIgY29uc2lzdGVudFN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgICAgICB2YXIgZGV0YWlscztcblxuICAgICAgICAgICAgICAgIHZhciBfbm9ybWFsaXplUHJlcGFyZSA9IG5vcm1hbGl6ZVByZXBhcmUodGhpcy5kb1ByZXBhcmUoY2gsIGZsYWdzKSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgX25vcm1hbGl6ZVByZXBhcmUyID0gX3NsaWNlZFRvQXJyYXkoX25vcm1hbGl6ZVByZXBhcmUsIDIpO1xuXG4gICAgICAgICAgICAgICAgY2ggPSBfbm9ybWFsaXplUHJlcGFyZTJbMF07XG4gICAgICAgICAgICAgICAgZGV0YWlscyA9IF9ub3JtYWxpemVQcmVwYXJlMlsxXTtcbiAgICAgICAgICAgICAgICBkZXRhaWxzID0gZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kQ2hhclJhdyhjaCwgZmxhZ3MpKTtcblxuICAgICAgICAgICAgICAgIGlmIChkZXRhaWxzLmluc2VydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25zaXN0ZW50VGFpbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwcGVuZGVkID0gdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSAhPT0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcGVuZGVkICYmIGNoZWNrVGFpbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWxpZGF0aW9uIG9rLCBjaGVjayB0YWlsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmVmb3JlVGFpbFN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3ZlcndyaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc2lzdGVudFRhaWwgPSBjaGVja1RhaWwuc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tUYWlsLnVuc2hpZnQodGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFpbERldGFpbHMgPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZGVkID0gdGFpbERldGFpbHMucmF3SW5zZXJ0ZWQgPT09IGNoZWNrVGFpbC50b1N0cmluZygpOyAvLyBub3Qgb2ssIHRyeSBzaGlmdFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShhcHBlbmRlZCAmJiB0YWlsRGV0YWlscy5pbnNlcnRlZCkgJiYgdGhpcy5vdmVyd3JpdGUgPT09ICdzaGlmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gYmVmb3JlVGFpbFN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNpc3RlbnRUYWlsID0gY2hlY2tUYWlsLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVGFpbC5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhaWxEZXRhaWxzID0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kZWQgPSB0YWlsRGV0YWlscy5yYXdJbnNlcnRlZCA9PT0gY2hlY2tUYWlsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IC8vIGlmIG9rLCByb2xsYmFjayBzdGF0ZSBhZnRlciB0YWlsXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwcGVuZGVkICYmIHRhaWxEZXRhaWxzLmluc2VydGVkKSB0aGlzLnN0YXRlID0gYmVmb3JlVGFpbFN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB9IC8vIHJldmVydCBhbGwgaWYgc29tZXRoaW5nIHdlbnQgd3JvbmdcblxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYXBwZW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGNvbnNpc3RlbnRTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja1RhaWwgJiYgY29uc2lzdGVudFRhaWwpIGNoZWNrVGFpbC5zdGF0ZSA9IGNvbnNpc3RlbnRUYWlsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogQXBwZW5kcyBvcHRpb25hbCBwbGFjZWhvbGRlciBhdCBlbmQgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIEFwcGVuZHMgb3B0aW9uYWwgZWFnZXIgcGxhY2Vob2xkZXIgYXQgZW5kICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9hcHBlbmRFYWdlclwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRFYWdlcigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBBcHBlbmRzIHN5bWJvbHMgY29uc2lkZXJpbmcgZmxhZ3MgKi9cbiAgICAgICAgICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKHN0ciwgZmxhZ3MsIHRhaWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzU3RyaW5nKHN0cikpIHRocm93IG5ldyBFcnJvcigndmFsdWUgc2hvdWxkIGJlIHN0cmluZycpO1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tUYWlsID0gaXNTdHJpbmcodGFpbCkgPyBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSkgOiB0YWlsO1xuICAgICAgICAgICAgICAgIGlmIChmbGFncyAhPT0gbnVsbCAmJiBmbGFncyAhPT0gdm9pZCAwICYmIGZsYWdzLnRhaWwpIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY2kgPSAwOyBjaSA8IHN0ci5sZW5ndGg7ICsrY2kpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kQ2hhcihzdHJbY2ldLCBmbGFncywgY2hlY2tUYWlsKSk7XG4gICAgICAgICAgICAgICAgfSAvLyBhcHBlbmQgdGFpbCBidXQgYWdncmVnYXRlIG9ubHkgdGFpbFNoaWZ0XG5cblxuICAgICAgICAgICAgICAgIGlmIChjaGVja1RhaWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKS50YWlsU2hpZnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpdCBjYXVzZXMgYnVncyB3aGVuIG9uZSBhcHBlbmQgY2FsbHMgYW5vdGhlciAod2hlbiBkeW5hbWljIGRpc3BhdGNoIHNldCByYXdJbnB1dFZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9yZXNldEJlZm9yZVRhaWxTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVhZ2VyICYmIGZsYWdzICE9PSBudWxsICYmIGZsYWdzICE9PSB2b2lkIDAgJiYgZmxhZ3MuaW5wdXQgJiYgc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuX2FwcGVuZEVhZ2VyKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInJlbW92ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgICAgICAgICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMudmFsdWUuc2xpY2UodG9Qb3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIENhbGxzIGZ1bmN0aW9uIGFuZCByZWFwcGxpZXMgY3VycmVudCB2YWx1ZSAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJ3aXRoVmFsdWVSZWZyZXNoXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2l0aFZhbHVlUmVmcmVzaChmbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZWZyZXNoaW5nIHx8ICF0aGlzLmlzSW5pdGlhbGl6ZWQpIHJldHVybiBmbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciByYXdJbnB1dCA9IHRoaXMucmF3SW5wdXRWYWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSBmbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucmF3SW5wdXRWYWx1ZSA9IHJhd0lucHV0OyAvLyBhcHBlbmQgbG9zdCB0cmFpbGluZyBjaGFycyBhdCBlbmRcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUgIT09IHZhbHVlICYmIHZhbHVlLmluZGV4T2YodGhpcy52YWx1ZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQodmFsdWUuc2xpY2UodGhpcy52YWx1ZS5sZW5ndGgpLCB7fSwgJycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9yZWZyZXNoaW5nO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicnVuSXNvbGF0ZWRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBydW5Jc29sYXRlZChmbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc29sYXRlZCB8fCAhdGhpcy5pc0luaXRpYWxpemVkKSByZXR1cm4gZm4odGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNvbGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IGZuKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5faXNvbGF0ZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIFByZXBhcmVzIHN0cmluZyBiZWZvcmUgbWFzayBwcm9jZXNzaW5nXG4gICAgICAgICAgICAgQHByb3RlY3RlZFxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXBhcmUgPyB0aGlzLnByZXBhcmUoc3RyLCB0aGlzLCBmbGFncykgOiBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBWYWxpZGF0ZXMgaWYgdmFsdWUgaXMgYWNjZXB0YWJsZVxuICAgICAgICAgICAgIEBwcm90ZWN0ZWRcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZShmbGFncykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIXRoaXMudmFsaWRhdGUgfHwgdGhpcy52YWxpZGF0ZSh0aGlzLnZhbHVlLCB0aGlzLCBmbGFncykpICYmICghdGhpcy5wYXJlbnQgfHwgdGhpcy5wYXJlbnQuZG9WYWxpZGF0ZShmbGFncykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXG4gICAgICAgICAgICAgQHByb3RlY3RlZFxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbWl0KSB0aGlzLmNvbW1pdCh0aGlzLnZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJkb0Zvcm1hdFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvRm9ybWF0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0ID8gdGhpcy5mb3JtYXQodmFsdWUsIHRoaXMpIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiZG9QYXJzZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvUGFyc2Uoc3RyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2UgPyB0aGlzLnBhcnNlKHN0ciwgdGhpcykgOiBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgaW5zZXJ0ZWQsIHJlbW92ZURpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHRhaWxQb3MgPSBzdGFydCArIGRlbGV0ZUNvdW50O1xuICAgICAgICAgICAgICAgIHZhciB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0YWlsUG9zKTtcbiAgICAgICAgICAgICAgICB2YXIgb2xkUmF3VmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYWdlcikge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVEaXJlY3Rpb24gPSBmb3JjZURpcmVjdGlvbihyZW1vdmVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBvbGRSYXdWYWx1ZSA9IHRoaXMuZXh0cmFjdElucHV0KDAsIHRhaWxQb3MsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRDaGFuZ2VQb3MgPSB0aGlzLm5lYXJlc3RJbnB1dFBvcyhzdGFydCwgZGVsZXRlQ291bnQgPiAxICYmIHN0YXJ0ICE9PSAwICYmICF0aGlzLmVhZ2VyID8gRElSRUNUSU9OLk5PTkUgOiByZW1vdmVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICB0YWlsU2hpZnQ6IHN0YXJ0Q2hhbmdlUG9zIC0gc3RhcnQgLy8gYWRqdXN0IHRhaWxTaGlmdCBpZiBzdGFydCB3YXMgYWxpZ25lZFxuXG4gICAgICAgICAgICAgICAgfSkuYWdncmVnYXRlKHRoaXMucmVtb3ZlKHN0YXJ0Q2hhbmdlUG9zKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lYWdlciAmJiByZW1vdmVEaXJlY3Rpb24gIT09IERJUkVDVElPTi5OT05FICYmIG9sZFJhd1ZhbHVlID09PSB0aGlzLnJhd0lucHV0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZURpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxMZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChvbGRSYXdWYWx1ZSA9PT0gdGhpcy5yYXdJbnB1dFZhbHVlICYmICh2YWxMZW5ndGggPSB0aGlzLnZhbHVlLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhaWxTaGlmdDogLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkuYWdncmVnYXRlKHRoaXMucmVtb3ZlKHZhbExlbmd0aCAtIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZW1vdmVEaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFpbC51bnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5hcHBlbmQoaW5zZXJ0ZWQsIGZsYWdzLCB0YWlsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJtYXNrRXF1YWxzXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbWFza0VxdWFscyhtYXNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFzayA9PT0gbWFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInR5cGVkVmFsdWVFcXVhbHNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBlZFZhbHVlRXF1YWxzKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR2YWwgPSB0aGlzLnR5cGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0dmFsIHx8IE1hc2tlZC5FTVBUWV9WQUxVRVMuaW5jbHVkZXModmFsdWUpICYmIE1hc2tlZC5FTVBUWV9WQUxVRVMuaW5jbHVkZXModHZhbCkgfHwgdGhpcy5kb0Zvcm1hdCh2YWx1ZSkgPT09IHRoaXMuZG9Gb3JtYXQodGhpcy50eXBlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBNYXNrZWQ7XG4gICAgfSgpO1xuICAgIE1hc2tlZC5ERUZBVUxUUyA9IHtcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQodikge1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH0sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh2KSB7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWFza2VkLkVNUFRZX1ZBTFVFUyA9IFt1bmRlZmluZWQsIG51bGwsICcnXTtcbiAgICBJTWFzay5NYXNrZWQgPSBNYXNrZWQ7XG5cbiAgICAvKiogR2V0IE1hc2tlZCBjbGFzcyBieSBtYXNrIHR5cGUgKi9cblxuICAgIGZ1bmN0aW9uIG1hc2tlZENsYXNzKG1hc2spIHtcbiAgICAgICAgaWYgKG1hc2sgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXNrIHByb3BlcnR5IHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gICAgICAgIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgICAgaWYgKG1hc2sgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiBJTWFzay5NYXNrZWRSZWdFeHA7IC8vICRGbG93Rml4TWVcblxuICAgICAgICBpZiAoaXNTdHJpbmcobWFzaykpIHJldHVybiBJTWFzay5NYXNrZWRQYXR0ZXJuOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgaWYgKG1hc2sgaW5zdGFuY2VvZiBEYXRlIHx8IG1hc2sgPT09IERhdGUpIHJldHVybiBJTWFzay5NYXNrZWREYXRlOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgaWYgKG1hc2sgaW5zdGFuY2VvZiBOdW1iZXIgfHwgdHlwZW9mIG1hc2sgPT09ICdudW1iZXInIHx8IG1hc2sgPT09IE51bWJlcikgcmV0dXJuIElNYXNrLk1hc2tlZE51bWJlcjsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hc2spIHx8IG1hc2sgPT09IEFycmF5KSByZXR1cm4gSU1hc2suTWFza2VkRHluYW1pYzsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgIGlmIChJTWFzay5NYXNrZWQgJiYgbWFzay5wcm90b3R5cGUgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBtYXNrOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgaWYgKG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBtYXNrLmNvbnN0cnVjdG9yOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgaWYgKG1hc2sgaW5zdGFuY2VvZiBGdW5jdGlvbikgcmV0dXJuIElNYXNrLk1hc2tlZEZ1bmN0aW9uO1xuICAgICAgICBjb25zb2xlLndhcm4oJ01hc2sgbm90IGZvdW5kIGZvciBtYXNrJywgbWFzayk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgcmV0dXJuIElNYXNrLk1hc2tlZDtcbiAgICB9XG4gICAgLyoqIENyZWF0ZXMgbmV3IHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBtYXNrIHR5cGUgKi9cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1hc2sob3B0cykge1xuICAgICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICAgIGlmIChJTWFzay5NYXNrZWQgJiYgb3B0cyBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgcmV0dXJuIG9wdHM7XG4gICAgICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzKTtcbiAgICAgICAgdmFyIG1hc2sgPSBvcHRzLm1hc2s7IC8vICRGbG93Rml4TWVcblxuICAgICAgICBpZiAoSU1hc2suTWFza2VkICYmIG1hc2sgaW5zdGFuY2VvZiBJTWFzay5NYXNrZWQpIHJldHVybiBtYXNrO1xuICAgICAgICB2YXIgTWFza2VkQ2xhc3MgPSBtYXNrZWRDbGFzcyhtYXNrKTtcbiAgICAgICAgaWYgKCFNYXNrZWRDbGFzcykgdGhyb3cgbmV3IEVycm9yKCdNYXNrZWQgY2xhc3MgaXMgbm90IGZvdW5kIGZvciBwcm92aWRlZCBtYXNrLCBhcHByb3ByaWF0ZSBtb2R1bGUgbmVlZHMgdG8gYmUgaW1wb3J0IG1hbnVhbGx5IGJlZm9yZSBjcmVhdGluZyBtYXNrLicpO1xuICAgICAgICByZXR1cm4gbmV3IE1hc2tlZENsYXNzKG9wdHMpO1xuICAgIH1cbiAgICBJTWFzay5jcmVhdGVNYXNrID0gY3JlYXRlTWFzaztcblxuICAgIHZhciBfZXhjbHVkZWQkNCA9IFtcIm1hc2tcIl07XG4gICAgdmFyIERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMgPSB7XG4gICAgICAgICcwJzogL1xcZC8sXG4gICAgICAgICdhJzogL1tcXHUwMDQxLVxcdTAwNUFcXHUwMDYxLVxcdTAwN0FcXHUwMEFBXFx1MDBCNVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTBcXHUwOEEyLVxcdTA4QUNcXHUwOTA0LVxcdTA5MzlcXHUwOTNEXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3RlxcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkRcXHUwOUNFXFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTFcXHUwOUYwXFx1MDlGMVxcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNzItXFx1MEE3NFxcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCRFxcdTBBRDBcXHUwQUUwXFx1MEFFMVxcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNEXFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjcxXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkQwXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzMzXFx1MEMzNS1cXHUwQzM5XFx1MEMzRFxcdTBDNThcXHUwQzU5XFx1MEM2MFxcdTBDNjFcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENGMVxcdTBDRjJcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNEXFx1MEQ0RVxcdTBENjBcXHUwRDYxXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQy1cXHUwRURGXFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwMDAtXFx1MTAyQVxcdTEwM0ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVBLVxcdTEwNURcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZFLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhFXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3ODAtXFx1MTdCM1xcdTE3RDdcXHUxN0RDXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE4XFx1MThBQVxcdTE4QjAtXFx1MThGNVxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBQlxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFBMjAtXFx1MUE1NFxcdTFBQTdcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQkEtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFDRjVcXHUxQ0Y2XFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEyRi1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxODNcXHUyMTg0XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0VFXFx1MkNGMlxcdTJDRjNcXHUyRDAwLVxcdTJEMjVcXHUyRDI3XFx1MkQyRFxcdTJEMzAtXFx1MkQ2N1xcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUyRTJGXFx1MzAwNVxcdTMwMDZcXHUzMDMxLVxcdTMwMzVcXHUzMDNCXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOUQtXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjk3XFx1QTZBMC1cXHVBNkU1XFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MC1cXHVBNzkzXFx1QTdBMC1cXHVBN0FBXFx1QTdGOC1cXHVBODAxXFx1QTgwMy1cXHVBODA1XFx1QTgwNy1cXHVBODBBXFx1QTgwQy1cXHVBODIyXFx1QTg0MC1cXHVBODczXFx1QTg4Mi1cXHVBOEIzXFx1QThGMi1cXHVBOEY3XFx1QThGQlxcdUE5MEEtXFx1QTkyNVxcdUE5MzAtXFx1QTk0NlxcdUE5NjAtXFx1QTk3Q1xcdUE5ODQtXFx1QTlCMlxcdUE5Q0ZcXHVBQTAwLVxcdUFBMjhcXHVBQTQwLVxcdUFBNDJcXHVBQTQ0LVxcdUFBNEJcXHVBQTYwLVxcdUFBNzZcXHVBQTdBXFx1QUE4MC1cXHVBQUFGXFx1QUFCMVxcdUFBQjVcXHVBQUI2XFx1QUFCOS1cXHVBQUJEXFx1QUFDMFxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUFcXHVBQUYyLVxcdUFBRjRcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQkMwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdLyxcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjIwNzUwNzBcbiAgICAgICAgJyonOiAvLi9cbiAgICB9O1xuICAgIC8qKiAqL1xuXG4gICAgdmFyIFBhdHRlcm5JbnB1dERlZmluaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cbiAgICAgICAgZnVuY3Rpb24gUGF0dGVybklucHV0RGVmaW5pdGlvbihvcHRzKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGF0dGVybklucHV0RGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIHZhciBtYXNrID0gb3B0cy5tYXNrLFxuICAgICAgICAgICAgICAgIGJsb2NrT3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRzLCBfZXhjbHVkZWQkNCk7XG5cbiAgICAgICAgICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayh7XG4gICAgICAgICAgICAgICAgbWFzazogbWFza1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGJsb2NrT3B0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoUGF0dGVybklucHV0RGVmaW5pdGlvbiwgW3tcbiAgICAgICAgICAgIGtleTogXCJyZXNldFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tlZC5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICAgICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoZnJvbVBvcyA9PT0gMCAmJiB0b1BvcyA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnJlbW92ZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnZhbHVlIHx8ICh0aGlzLmlzRmlsbGVkICYmICF0aGlzLmlzT3B0aW9uYWwgPyB0aGlzLnBsYWNlaG9sZGVyQ2hhciA6ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5tYXNrZWQudmFsdWUpIHx8IHRoaXMuaXNPcHRpb25hbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoY2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRmlsbGVkKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLm1hc2tlZC5zdGF0ZTsgLy8gc2ltdWxhdGUgaW5wdXRcblxuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5tYXNrZWQuX2FwcGVuZENoYXIoY2gsIGZsYWdzKTtcblxuICAgICAgICAgICAgICAgIGlmIChkZXRhaWxzLmluc2VydGVkICYmIHRoaXMuZG9WYWxpZGF0ZShmbGFncykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSBkZXRhaWxzLnJhd0luc2VydGVkID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWwgJiYgIXRoaXMubGF6eSAmJiAhZmxhZ3MuaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRldGFpbHMuc2tpcCA9ICFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWw7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IEJvb2xlYW4oZGV0YWlscy5pbnNlcnRlZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJhcHBlbmRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzJG1hc2tlZDtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoX3RoaXMkbWFza2VkID0gdGhpcy5tYXNrZWQpLmFwcGVuZC5hcHBseShfdGhpcyRtYXNrZWQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRmlsbGVkIHx8IHRoaXMuaXNPcHRpb25hbCkgcmV0dXJuIGRldGFpbHM7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX2FwcGVuZEVhZ2VyXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZEVhZ2VyKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMkbWFza2VkMjtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoX3RoaXMkbWFza2VkMiA9IHRoaXMubWFza2VkKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRtYXNrZWQyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzJG1hc2tlZDM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDMgPSB0aGlzLm1hc2tlZCkuYXBwZW5kVGFpbC5hcHBseShfdGhpcyRtYXNrZWQzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgICAgICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICAgICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERJUkVDVElPTi5OT05FO1xuICAgICAgICAgICAgICAgIHZhciBtaW5Qb3MgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBtYXhQb3MgPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRQb3MgPSBNYXRoLm1pbihNYXRoLm1heChjdXJzb3JQb3MsIG1pblBvcyksIG1heFBvcyk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IGJvdW5kUG9zIDogbWluUG9zO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1heFBvcztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvdW5kUG9zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRtYXNrZWQ0LCBfdGhpcyRwYXJlbnQ7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDQgPSB0aGlzLm1hc2tlZCkuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRtYXNrZWQ0LCBhcmd1bWVudHMpICYmICghdGhpcy5wYXJlbnQgfHwgKF90aGlzJHBhcmVudCA9IHRoaXMucGFyZW50KS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJHBhcmVudCwgYXJndW1lbnRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFza2VkOiB0aGlzLm1hc2tlZC5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNGaWxsZWQ6IHRoaXMuaXNGaWxsZWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZS5tYXNrZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IHN0YXRlLmlzRmlsbGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIFBhdHRlcm5JbnB1dERlZmluaXRpb247XG4gICAgfSgpO1xuXG4gICAgdmFyIFBhdHRlcm5GaXhlZERlZmluaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cbiAgICAgICAgZnVuY3Rpb24gUGF0dGVybkZpeGVkRGVmaW5pdGlvbihvcHRzKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGF0dGVybkZpeGVkRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5pc0ZpeGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhQYXR0ZXJuRml4ZWREZWZpbml0aW9uLCBbe1xuICAgICAgICAgICAga2V5OiBcInZhbHVlXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc1VubWFza2luZyA/IHRoaXMudmFsdWUgOiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInJlc2V0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNSYXdJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJyZW1vdmVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgICAgICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl92YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMuX3ZhbHVlLnNsaWNlKHRvUG9zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3ZhbHVlKSB0aGlzLl9pc1Jhd0lucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICAgICAgICAgICAgdmFyIG1pblBvcyA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIG1heFBvcyA9IHRoaXMuX3ZhbHVlLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWluUG9zO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXhQb3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgICAgICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICAgICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsYWdzLnJhdyAmJiB0aGlzLl9pc1Jhd0lucHV0ICYmIHRoaXMuX3ZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiaXNGaWxsZWRcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoY2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiBkZXRhaWxzO1xuICAgICAgICAgICAgICAgIHZhciBhcHBlbmRlZCA9IHRoaXMuY2hhciA9PT0gY2g7XG4gICAgICAgICAgICAgICAgdmFyIGlzUmVzb2x2ZWQgPSBhcHBlbmRlZCAmJiAodGhpcy5pc1VubWFza2luZyB8fCBmbGFncy5pbnB1dCB8fCBmbGFncy5yYXcpICYmICghZmxhZ3MucmF3IHx8ICF0aGlzLmVhZ2VyKSAmJiAhZmxhZ3MudGFpbDtcbiAgICAgICAgICAgICAgICBpZiAoaXNSZXNvbHZlZCkgZGV0YWlscy5yYXdJbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNSYXdJbnB1dCA9IGlzUmVzb2x2ZWQgJiYgKGZsYWdzLnJhdyB8fCBmbGFncy5pbnB1dCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfYXBwZW5kRWFnZXJcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kRWFnZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FwcGVuZENoYXIodGhpcy5jaGFyLCB7XG4gICAgICAgICAgICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlKSByZXR1cm4gZGV0YWlscztcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoJycpO1xuICAgICAgICAgICAgfSAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUYWlsKHRhaWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJhcHBlbmRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoc3RyLCBmbGFncywgdGFpbCkge1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwZW5kQ2hhcihzdHJbMF0sIGZsYWdzKTtcblxuICAgICAgICAgICAgICAgIGlmICh0YWlsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKHRhaWwpLnRhaWxTaGlmdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7fVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwic3RhdGVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIF92YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIF9pc1Jhd0lucHV0OiB0aGlzLl9pc1Jhd0lucHV0XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIFBhdHRlcm5GaXhlZERlZmluaXRpb247XG4gICAgfSgpO1xuXG4gICAgdmFyIF9leGNsdWRlZCQzID0gW1wiY2h1bmtzXCJdO1xuXG4gICAgdmFyIENodW5rc1RhaWxEZXRhaWxzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqICovXG4gICAgICAgIGZ1bmN0aW9uIENodW5rc1RhaWxEZXRhaWxzKCkge1xuICAgICAgICAgICAgdmFyIGNodW5rcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gICAgICAgICAgICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENodW5rc1RhaWxEZXRhaWxzKTtcblxuICAgICAgICAgICAgdGhpcy5jaHVua3MgPSBjaHVua3M7XG4gICAgICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB9XG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKENodW5rc1RhaWxEZXRhaWxzLCBbe1xuICAgICAgICAgICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2h1bmtzLm1hcChTdHJpbmcpLmpvaW4oJycpO1xuICAgICAgICAgICAgfSAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImV4dGVuZFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCh0YWlsQ2h1bmspIHtcbiAgICAgICAgICAgICAgICBpZiAoIVN0cmluZyh0YWlsQ2h1bmspKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHRhaWxDaHVuaykpIHRhaWxDaHVuayA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWxDaHVuaykpO1xuICAgICAgICAgICAgICAgIHZhciBsYXN0Q2h1bmsgPSB0aGlzLmNodW5rc1t0aGlzLmNodW5rcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICB2YXIgZXh0ZW5kTGFzdCA9IGxhc3RDaHVuayAmJiAoIC8vIGlmIHN0b3BzIGFyZSBzYW1lIG9yIHRhaWwgaGFzIG5vIHN0b3BcbiAgICAgICAgICAgICAgICAgICAgbGFzdENodW5rLnN0b3AgPT09IHRhaWxDaHVuay5zdG9wIHx8IHRhaWxDaHVuay5zdG9wID09IG51bGwpICYmIC8vIGlmIHRhaWwgY2h1bmsgZ29lcyBqdXN0IGFmdGVyIGxhc3QgY2h1bmtcbiAgICAgICAgICAgICAgICAgICAgdGFpbENodW5rLmZyb20gPT09IGxhc3RDaHVuay5mcm9tICsgbGFzdENodW5rLnRvU3RyaW5nKCkubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENvbnRpbnVvdXNUYWlsRGV0YWlscykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGUgYWJpbGl0eSB0byBleHRlbmQgcHJldmlvdXMgY2h1bmtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVuZExhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4dGVuZCBwcmV2aW91cyBjaHVua1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdENodW5rLmV4dGVuZCh0YWlsQ2h1bmsudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgbmV3IGNodW5rXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHRhaWxDaHVuayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWlsQ2h1bmsuc3RvcCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1bndyYXAgZmxvYXRpbmcgY2h1bmtzIHRvIHBhcmVudCwga2VlcGluZyBgZnJvbWAgcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlyc3RUYWlsQ2h1bms7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0YWlsQ2h1bmsuY2h1bmtzLmxlbmd0aCAmJiB0YWlsQ2h1bmsuY2h1bmtzWzBdLnN0b3AgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VGFpbENodW5rID0gdGFpbENodW5rLmNodW5rcy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0VGFpbENodW5rLmZyb20gKz0gdGFpbENodW5rLmZyb207XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRlbmQoZmlyc3RUYWlsQ2h1bmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IC8vIGlmIHRhaWwgY2h1bmsgc3RpbGwgaGFzIHZhbHVlXG5cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGFpbENodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGNodW5rcyBjb250YWlucyBzdG9wcywgdGhlbiBwb3B1cCBzdG9wIHRvIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFpbENodW5rLnN0b3AgPSB0YWlsQ2h1bmsuYmxvY2tJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImFwcGVuZFRvXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVG8obWFza2VkKSB7XG4gICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgIGlmICghKG1hc2tlZCBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZFBhdHRlcm4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyhtYXNrZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCB0aGlzLmNodW5rcy5sZW5ndGggJiYgIWRldGFpbHMuc2tpcDsgKytjaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RCbG9ja0l0ZXIgPSBtYXNrZWQuX21hcFBvc1RvQmxvY2sobWFza2VkLnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3AgPSBjaHVuay5zdG9wO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2h1bmtCbG9jayA9IHZvaWQgMDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcCAhPSBudWxsICYmICggLy8gaWYgYmxvY2sgbm90IGZvdW5kIG9yIHN0b3AgaXMgYmVoaW5kIGxhc3RCbG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgIWxhc3RCbG9ja0l0ZXIgfHwgbGFzdEJsb2NrSXRlci5pbmRleCA8PSBzdG9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgfHwgLy8gZm9yIGNvbnRpbnVvdXMgYmxvY2sgYWxzbyBjaGVjayBpZiBzdG9wIGlzIGV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza2VkLl9zdG9wcy5pbmRleE9mKHN0b3ApID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKHN0b3ApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtCbG9jayA9IGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgJiYgbWFza2VkLl9ibG9ja3Nbc3RvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2h1bmtCbG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhaWxEZXRhaWxzID0gY2h1bmtCbG9jay5hcHBlbmRUYWlsKGNodW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhaWxEZXRhaWxzLnNraXAgPSBmYWxzZTsgLy8gYWx3YXlzIGlnbm9yZSBza2lwLCBpdCB3aWxsIGJlIHNldCBvbiBsYXN0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRhaWxEZXRhaWxzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tlZC5fdmFsdWUgKz0gdGFpbERldGFpbHMuaW5zZXJ0ZWQ7IC8vIGdldCBub3QgaW5zZXJ0ZWQgY2hhcnNcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbWFpbkNoYXJzID0gY2h1bmsudG9TdHJpbmcoKS5zbGljZSh0YWlsRGV0YWlscy5yYXdJbnNlcnRlZC5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbWFpbkNoYXJzKSBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuYXBwZW5kKHJlbWFpbkNoYXJzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLmFwcGVuZChjaHVuay50b1N0cmluZygpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwic3RhdGVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNodW5rczogdGhpcy5jaHVua3MubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYy5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGZyb206IHRoaXMuZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcDogdGhpcy5zdG9wLFxuICAgICAgICAgICAgICAgICAgICBibG9ja0luZGV4OiB0aGlzLmJsb2NrSW5kZXhcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNodW5rcyA9IHN0YXRlLmNodW5rcyxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIF9leGNsdWRlZCQzKTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzLm1hcChmdW5jdGlvbiAoY3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IFwiY2h1bmtzXCIgaW4gY3N0YXRlID8gbmV3IENodW5rc1RhaWxEZXRhaWxzKCkgOiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCk7IC8vICRGbG93Rml4TWUgYWxyZWFkeSBjaGVja2VkIGFib3ZlXG5cbiAgICAgICAgICAgICAgICAgICAgY2h1bmsuc3RhdGUgPSBjc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaHVuaztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInVuc2hpZnRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bnNoaWZ0KGJlZm9yZVBvcykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaHVua3MubGVuZ3RoIHx8IGJlZm9yZVBvcyAhPSBudWxsICYmIHRoaXMuZnJvbSA+PSBiZWZvcmVQb3MpIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB2YXIgY2h1bmtTaGlmdFBvcyA9IGJlZm9yZVBvcyAhPSBudWxsID8gYmVmb3JlUG9zIC0gdGhpcy5mcm9tIDogYmVmb3JlUG9zO1xuICAgICAgICAgICAgICAgIHZhciBjaSA9IDA7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoY2kgPCB0aGlzLmNodW5rcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2hpZnRDaGFyID0gY2h1bmsudW5zaGlmdChjaHVua1NoaWZ0UG9zKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2h1bmsgc3RpbGwgY29udGFpbnMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBub3Qgc2hpZnRlZCAtIG1lYW5zIG5vIG1vcmUgYXZhaWxhYmxlIGNoYXJzIHRvIHNoaWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoaWZ0Q2hhcikgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICArK2NpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xlYW4gaWYgY2h1bmsgaGFzIG5vIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNodW5rcy5zcGxpY2UoY2ksIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaWZ0Q2hhcikgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJzaGlmdFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jaHVua3MubGVuZ3RoKSByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgdmFyIGNpID0gdGhpcy5jaHVua3MubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIHdoaWxlICgwIDw9IGNpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IHRoaXMuY2h1bmtzW2NpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNoaWZ0Q2hhciA9IGNodW5rLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNodW5rIHN0aWxsIGNvbnRhaW5zIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgbm90IHNoaWZ0ZWQgLSBtZWFucyBubyBtb3JlIGF2YWlsYWJsZSBjaGFycyB0byBzaGlmdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGlmdENoYXIpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1jaTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsZWFuIGlmIGNodW5rIGhhcyBubyB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaHVua3Muc3BsaWNlKGNpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlmdENoYXIpIHJldHVybiBzaGlmdENoYXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIENodW5rc1RhaWxEZXRhaWxzO1xuICAgIH0oKTtcblxuICAgIHZhciBQYXR0ZXJuQ3Vyc29yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gUGF0dGVybkN1cnNvcihtYXNrZWQsIHBvcykge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdHRlcm5DdXJzb3IpO1xuXG4gICAgICAgICAgICB0aGlzLm1hc2tlZCA9IG1hc2tlZDtcbiAgICAgICAgICAgIHRoaXMuX2xvZyA9IFtdO1xuXG4gICAgICAgICAgICB2YXIgX3JlZiA9IG1hc2tlZC5fbWFwUG9zVG9CbG9jayhwb3MpIHx8IChwb3MgPCAwID8gLy8gZmlyc3RcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDBcbiAgICAgICAgICAgICAgICB9IDogLy8gbGFzdFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMubWFza2VkLl9ibG9ja3MubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDBcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBfcmVmLm9mZnNldCxcbiAgICAgICAgICAgICAgICBpbmRleCA9IF9yZWYuaW5kZXg7XG5cbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy5vayA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKFBhdHRlcm5DdXJzb3IsIFt7XG4gICAgICAgICAgICBrZXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5fYmxvY2tzW3RoaXMuaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicG9zXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrZWQuX2Jsb2NrU3RhcnRQb3ModGhpcy5pbmRleCkgKyB0aGlzLm9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInN0YXRlXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgb2s6IHRoaXMub2tcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHMpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicHVzaFN0YXRlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaFN0YXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvZy5wdXNoKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicG9wU3RhdGVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwb3BTdGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IHRoaXMuX2xvZy5wb3AoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBzO1xuICAgICAgICAgICAgICAgIHJldHVybiBzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiYmluZEJsb2NrXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEJsb2NrKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJsb2NrKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbmRleCA+PSB0aGlzLm1hc2tlZC5fYmxvY2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5tYXNrZWQuX2Jsb2Nrcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZnNldCA9IHRoaXMuYmxvY2sudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9wdXNoTGVmdFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wdXNoTGVmdChmbikge1xuICAgICAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHRoaXMuYmluZEJsb2NrKCk7IDAgPD0gdGhpcy5pbmRleDsgLS10aGlzLmluZGV4LCB0aGlzLm9mZnNldCA9ICgoX3RoaXMkYmxvY2sgPSB0aGlzLmJsb2NrKSA9PT0gbnVsbCB8fCBfdGhpcyRibG9jayA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkYmxvY2sudmFsdWUubGVuZ3RoKSB8fCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyRibG9jaztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZm4oKSkgcmV0dXJuIHRoaXMub2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9rID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfcHVzaFJpZ2h0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3B1c2hSaWdodChmbikge1xuICAgICAgICAgICAgICAgIHRoaXMucHVzaFN0YXRlKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHRoaXMuYmluZEJsb2NrKCk7IHRoaXMuaW5kZXggPCB0aGlzLm1hc2tlZC5fYmxvY2tzLmxlbmd0aDsgKyt0aGlzLmluZGV4LCB0aGlzLm9mZnNldCA9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZuKCkpIHJldHVybiB0aGlzLm9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vayA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicHVzaExlZnRCZWZvcmVGaWxsZWRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoTGVmdEJlZm9yZUZpbGxlZCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3B1c2hMZWZ0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmJsb2NrLmlzRml4ZWQgfHwgIV90aGlzLmJsb2NrLnZhbHVlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9mZnNldCA9IF90aGlzLmJsb2NrLm5lYXJlc3RJbnB1dFBvcyhfdGhpcy5vZmZzZXQsIERJUkVDVElPTi5GT1JDRV9MRUZUKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLm9mZnNldCAhPT0gMCkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJwdXNoTGVmdEJlZm9yZUlucHV0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaExlZnRCZWZvcmVJbnB1dCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgICAgIC8vIGNhc2VzOlxuICAgICAgICAgICAgICAgIC8vIGZpbGxlZCBpbnB1dDogMDB8XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uYWwgZW1wdHkgaW5wdXQ6IDAwW118XG4gICAgICAgICAgICAgICAgLy8gbmVzdGVkIGJsb2NrOiBYWDxbXT58XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3B1c2hMZWZ0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzMi5ibG9jay5pc0ZpeGVkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5vZmZzZXQgPSBfdGhpczIuYmxvY2submVhcmVzdElucHV0UG9zKF90aGlzMi5vZmZzZXQsIERJUkVDVElPTi5MRUZUKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJwdXNoTGVmdEJlZm9yZVJlcXVpcmVkXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaExlZnRCZWZvcmVSZXF1aXJlZCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdXNoTGVmdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczMuYmxvY2suaXNGaXhlZCB8fCBfdGhpczMuYmxvY2suaXNPcHRpb25hbCAmJiAhX3RoaXMzLmJsb2NrLnZhbHVlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5vZmZzZXQgPSBfdGhpczMuYmxvY2submVhcmVzdElucHV0UG9zKF90aGlzMy5vZmZzZXQsIERJUkVDVElPTi5MRUZUKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJwdXNoUmlnaHRCZWZvcmVGaWxsZWRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoUmlnaHRCZWZvcmVGaWxsZWQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcHVzaFJpZ2h0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzNC5ibG9jay5pc0ZpeGVkIHx8ICFfdGhpczQuYmxvY2sudmFsdWUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM0Lm9mZnNldCA9IF90aGlzNC5ibG9jay5uZWFyZXN0SW5wdXRQb3MoX3RoaXM0Lm9mZnNldCwgRElSRUNUSU9OLkZPUkNFX1JJR0hUKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzNC5vZmZzZXQgIT09IF90aGlzNC5ibG9jay52YWx1ZS5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicHVzaFJpZ2h0QmVmb3JlSW5wdXRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdXNoUmlnaHRCZWZvcmVJbnB1dCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdXNoUmlnaHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXM1LmJsb2NrLmlzRml4ZWQpIHJldHVybjsgLy8gY29uc3QgbyA9IHRoaXMub2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzNS5vZmZzZXQgPSBfdGhpczUuYmxvY2submVhcmVzdElucHV0UG9zKF90aGlzNS5vZmZzZXQsIERJUkVDVElPTi5OT05FKTsgLy8gSEFDSyBjYXNlcyBsaWtlIChTVElMTCBET0VTIE5PVCBXT1JLIEZPUiBORVNURUQpXG4gICAgICAgICAgICAgICAgICAgIC8vIGFhfFhcbiAgICAgICAgICAgICAgICAgICAgLy8gYWE8WHxbXT5YXyAgICAtIHRoaXMgd2lsbCBub3Qgd29ya1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAobyAmJiBvID09PSB0aGlzLm9mZnNldCAmJiB0aGlzLmJsb2NrIGluc3RhbmNlb2YgUGF0dGVybklucHV0RGVmaW5pdGlvbikgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJwdXNoUmlnaHRCZWZvcmVSZXF1aXJlZFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2hSaWdodEJlZm9yZVJlcXVpcmVkKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3B1c2hSaWdodChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczYuYmxvY2suaXNGaXhlZCB8fCBfdGhpczYuYmxvY2suaXNPcHRpb25hbCAmJiAhX3RoaXM2LmJsb2NrLnZhbHVlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXM2Lm9mZnNldCA9IF90aGlzNi5ibG9jay5uZWFyZXN0SW5wdXRQb3MoX3RoaXM2Lm9mZnNldCwgRElSRUNUSU9OLk5PTkUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBQYXR0ZXJuQ3Vyc29yO1xuICAgIH0oKTtcblxuICAgIC8qKiBNYXNraW5nIGJ5IFJlZ0V4cCAqL1xuXG4gICAgdmFyIE1hc2tlZFJlZ0V4cCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZCkge1xuICAgICAgICBfaW5oZXJpdHMoTWFza2VkUmVnRXhwLCBfTWFza2VkKTtcblxuICAgICAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZFJlZ0V4cCk7XG5cbiAgICAgICAgZnVuY3Rpb24gTWFza2VkUmVnRXhwKCkge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZFJlZ0V4cCk7XG5cbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhNYXNrZWRSZWdFeHAsIFt7XG4gICAgICAgICAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5tYXNrKSBvcHRzLnZhbGlkYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuc2VhcmNoKG9wdHMubWFzaykgPj0gMDtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSZWdFeHAucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIE1hc2tlZFJlZ0V4cDtcbiAgICB9KE1hc2tlZCk7XG4gICAgSU1hc2suTWFza2VkUmVnRXhwID0gTWFza2VkUmVnRXhwO1xuXG4gICAgdmFyIF9leGNsdWRlZCQyID0gW1wiX2Jsb2Nrc1wiXTtcblxuICAgIC8qKlxuICAgICBQYXR0ZXJuIG1hc2tcbiAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHMuYmxvY2tzXG4gICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRlZmluaXRpb25zXG4gICAgIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnBsYWNlaG9sZGVyQ2hhclxuICAgICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMubGF6eVxuICAgICAqL1xuICAgIHZhciBNYXNrZWRQYXR0ZXJuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkKSB7XG4gICAgICAgIF9pbmhlcml0cyhNYXNrZWRQYXR0ZXJuLCBfTWFza2VkKTtcblxuICAgICAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZFBhdHRlcm4pO1xuXG4gICAgICAgIC8qKiAqL1xuXG4gICAgICAgIC8qKiAqL1xuXG4gICAgICAgIC8qKiBTaW5nbGUgY2hhciBmb3IgZW1wdHkgaW5wdXQgKi9cblxuICAgICAgICAvKiogU2hvdyBwbGFjZWhvbGRlciBvbmx5IHdoZW4gbmVlZGVkICovXG4gICAgICAgIGZ1bmN0aW9uIE1hc2tlZFBhdHRlcm4oKSB7XG4gICAgICAgICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRQYXR0ZXJuKTtcblxuICAgICAgICAgICAgb3B0cy5kZWZpbml0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMsIG9wdHMuZGVmaW5pdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZFBhdHRlcm4uREVGQVVMVFMsIG9wdHMpKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgICAgICovXG5cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoTWFza2VkUGF0dGVybiwgW3tcbiAgICAgICAgICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICAgICAgICAgICAgb3B0cy5kZWZpbml0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmaW5pdGlvbnMsIG9wdHMuZGVmaW5pdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3JlYnVpbGRNYXNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX3JlYnVpbGRNYXNrXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlYnVpbGRNYXNrKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGVmcyA9IHRoaXMuZGVmaW5pdGlvbnM7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcHMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrZWRCbG9ja3MgPSB7fTtcbiAgICAgICAgICAgICAgICB2YXIgcGF0dGVybiA9IHRoaXMubWFzaztcbiAgICAgICAgICAgICAgICBpZiAoIXBhdHRlcm4gfHwgIWRlZnMpIHJldHVybjtcbiAgICAgICAgICAgICAgICB2YXIgdW5tYXNraW5nQmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uYWxCbG9jayA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJsb2Nrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBwYXR0ZXJuLnNsaWNlKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiTmFtZXMgPSBPYmplY3Qua2V5cyhfdGhpcy5ibG9ja3MpLmZpbHRlcihmdW5jdGlvbiAoYk5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAuaW5kZXhPZihiTmFtZSkgPT09IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IC8vIG9yZGVyIGJ5IGtleSBsZW5ndGhcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJOYW1lcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyAvLyB1c2UgYmxvY2sgbmFtZSB3aXRoIG1heCBsZW5ndGhcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiTmFtZSA9IGJOYW1lc1swXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXNrZWRCbG9jayA9IGNyZWF0ZU1hc2soT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IF90aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eTogX3RoaXMubGF6eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhZ2VyOiBfdGhpcy5lYWdlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQ2hhcjogX3RoaXMucGxhY2Vob2xkZXJDaGFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcndyaXRlOiBfdGhpcy5vdmVyd3JpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX3RoaXMuYmxvY2tzW2JOYW1lXSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXNrZWRCbG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2Jsb2Nrcy5wdXNoKG1hc2tlZEJsb2NrKTsgLy8gc3RvcmUgYmxvY2sgaW5kZXhcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdKSBfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXS5wdXNoKF90aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpICs9IGJOYW1lLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFyID0gcGF0dGVybltpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzSW5wdXQgPSAoY2hhciBpbiBkZWZzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gTWFza2VkUGF0dGVybi5TVE9QX0NIQVIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BzLnB1c2godGhpcy5fYmxvY2tzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICd7JyB8fCBjaGFyID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVubWFza2luZ0Jsb2NrID0gIXVubWFza2luZ0Jsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1snIHx8IGNoYXIgPT09ICddJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxCbG9jayA9ICFvcHRpb25hbEJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gTWFza2VkUGF0dGVybi5FU0NBUEVfQ0hBUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhciA9IHBhdHRlcm5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoYXIpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZiA9IGlzSW5wdXQgPyBuZXcgUGF0dGVybklucHV0RGVmaW5pdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5OiB0aGlzLmxhenksXG4gICAgICAgICAgICAgICAgICAgICAgICBlYWdlcjogdGhpcy5lYWdlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyQ2hhcjogdGhpcy5wbGFjZWhvbGRlckNoYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNrOiBkZWZzW2NoYXJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPcHRpb25hbDogb3B0aW9uYWxCbG9ja1xuICAgICAgICAgICAgICAgICAgICB9KSA6IG5ldyBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXI6IGNoYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlYWdlcjogdGhpcy5lYWdlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVW5tYXNraW5nOiB1bm1hc2tpbmdCbG9ja1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja3MucHVzaChkZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInN0YXRlXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInN0YXRlXCIsIHRoaXMpLCB7XG4gICAgICAgICAgICAgICAgICAgIF9ibG9ja3M6IHRoaXMuX2Jsb2Nrcy5tYXAoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9ibG9ja3MgPSBzdGF0ZS5fYmxvY2tzLFxuICAgICAgICAgICAgICAgICAgICBtYXNrZWRTdGF0ZSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgX2V4Y2x1ZGVkJDIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIsIGJpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnN0YXRlID0gX2Jsb2Nrc1tiaV07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwic3RhdGVcIiwgbWFza2VkU3RhdGUsIHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicmVzZXRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgICAgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwicmVzZXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmlzQ29tcGxldGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJpc0ZpbGxlZFwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5ldmVyeShmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYi5pc0ZpbGxlZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImlzRml4ZWRcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuaXNGaXhlZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImlzT3B0aW9uYWxcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuaXNPcHRpb25hbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIuZG9Db21taXQoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyICs9IGIudW5tYXNrZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9LCAnJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodW5tYXNrZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUsIHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwidmFsdWVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MucmVkdWNlKGZ1bmN0aW9uIChzdHIsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ciArPSBiLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0sICcnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJ2YWx1ZVwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJhcHBlbmRUYWlsXCIsIHRoaXMpLmNhbGwodGhpcywgdGFpbCkuYWdncmVnYXRlKHRoaXMuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX2FwcGVuZEVhZ2VyXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZEVhZ2VyKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRfbWFwUG9zVG9CbG9jaztcblxuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRCbG9ja0luZGV4ID0gKF90aGlzJF9tYXBQb3NUb0Jsb2NrID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLnZhbHVlLmxlbmd0aCkpID09PSBudWxsIHx8IF90aGlzJF9tYXBQb3NUb0Jsb2NrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRfbWFwUG9zVG9CbG9jay5pbmRleDtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRCbG9ja0luZGV4ID09IG51bGwpIHJldHVybiBkZXRhaWxzO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Jsb2Nrc1tzdGFydEJsb2NrSW5kZXhdLmlzRmlsbGVkKSArK3N0YXJ0QmxvY2tJbmRleDtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGJpID0gc3RhcnRCbG9ja0luZGV4OyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLl9ibG9ja3NbYmldLl9hcHBlbmRFYWdlcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZC5pbnNlcnRlZCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKGQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgICAgICAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgICAgICAgICAgICB2YXIgYmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFibG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYmkgPSBibG9ja0l0ZXIuaW5kZXg7OyArK2JpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEsIF9mbGFncyRfYmVmb3JlVGFpbFN0YTI7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIF9ibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghX2Jsb2NrKSBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYmxvY2tEZXRhaWxzID0gX2Jsb2NrLl9hcHBlbmRDaGFyKGNoLCBPYmplY3QuYXNzaWduKHt9LCBmbGFncywge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2JlZm9yZVRhaWxTdGF0ZTogKF9mbGFncyRfYmVmb3JlVGFpbFN0YSA9IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUpID09PSBudWxsIHx8IF9mbGFncyRfYmVmb3JlVGFpbFN0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9mbGFncyRfYmVmb3JlVGFpbFN0YTIgPSBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEuX2Jsb2NrcykgPT09IG51bGwgfHwgX2ZsYWdzJF9iZWZvcmVUYWlsU3RhMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ZsYWdzJF9iZWZvcmVUYWlsU3RhMltiaV1cbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBza2lwID0gYmxvY2tEZXRhaWxzLnNraXA7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKGJsb2NrRGV0YWlscyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChza2lwIHx8IGJsb2NrRGV0YWlscy5yYXdJbnNlcnRlZCkgYnJlYWs7IC8vIGdvIG5leHQgY2hhclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICAgICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGNodW5rVGFpbCA9IG5ldyBDaHVua3NUYWlsRGV0YWlscygpO1xuICAgICAgICAgICAgICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuIGNodW5rVGFpbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgYmksIGJGcm9tUG9zLCBiVG9Qb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJsb2NrQ2h1bmsgPSBiLmV4dHJhY3RUYWlsKGJGcm9tUG9zLCBiVG9Qb3MpO1xuICAgICAgICAgICAgICAgICAgICBibG9ja0NodW5rLnN0b3AgPSBfdGhpczIuX2ZpbmRTdG9wQmVmb3JlKGJpKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tDaHVuay5mcm9tID0gX3RoaXMyLl9ibG9ja1N0YXJ0UG9zKGJpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykgYmxvY2tDaHVuay5ibG9ja0luZGV4ID0gYmk7XG4gICAgICAgICAgICAgICAgICAgIGNodW5rVGFpbC5leHRlbmQoYmxvY2tDaHVuayk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2h1bmtUYWlsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgICAgICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICAgICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgICAgICAgICAgICBpZiAoZnJvbVBvcyA9PT0gdG9Qb3MpIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSAnJztcblxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgXywgZnJvbVBvcywgdG9Qb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgKz0gYi5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9maW5kU3RvcEJlZm9yZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU3RvcEJlZm9yZShibG9ja0luZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3BCZWZvcmU7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzaSA9IDA7IHNpIDwgdGhpcy5fc3RvcHMubGVuZ3RoOyArK3NpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9wID0gdGhpcy5fc3RvcHNbc2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcCA8PSBibG9ja0luZGV4KSBzdG9wQmVmb3JlID0gc3RvcDtlbHNlIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzdG9wQmVmb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIEFwcGVuZHMgcGxhY2Vob2xkZXIgZGVwZW5kaW5nIG9uIGxhemluZXNzICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcih0b0Jsb2NrSW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXp5ICYmIHRvQmxvY2tJbmRleCA9PSBudWxsKSByZXR1cm4gZGV0YWlscztcblxuICAgICAgICAgICAgICAgIHZhciBzdGFydEJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzdGFydEJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0QmxvY2tJbmRleCA9IHN0YXJ0QmxvY2tJdGVyLmluZGV4O1xuICAgICAgICAgICAgICAgIHZhciBlbmRCbG9ja0luZGV4ID0gdG9CbG9ja0luZGV4ICE9IG51bGwgPyB0b0Jsb2NrSW5kZXggOiB0aGlzLl9ibG9ja3MubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tzLnNsaWNlKHN0YXJ0QmxvY2tJbmRleCwgZW5kQmxvY2tJbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWIubGF6eSB8fCB0b0Jsb2NrSW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZSBgX2Jsb2Nrc2AgbWF5IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IGIuX2Jsb2NrcyAhPSBudWxsID8gW2IuX2Jsb2Nrcy5sZW5ndGhdIDogW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiRGV0YWlscyA9IGIuX2FwcGVuZFBsYWNlaG9sZGVyLmFwcGx5KGIsIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMuX3ZhbHVlICs9IGJEZXRhaWxzLmluc2VydGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYkRldGFpbHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBGaW5kcyBibG9jayBpbiBwb3MgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX21hcFBvc1RvQmxvY2tcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFwUG9zVG9CbG9jayhwb3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWNjVmFsID0gJyc7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBiaSA9IDA7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2Jsb2NrMiA9IHRoaXMuX2Jsb2Nrc1tiaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBibG9ja1N0YXJ0UG9zID0gYWNjVmFsLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYWNjVmFsICs9IF9ibG9jazIudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA8PSBhY2NWYWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBiaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHBvcyAtIGJsb2NrU3RhcnRQb3NcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX2Jsb2NrU3RhcnRQb3NcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYmxvY2tTdGFydFBvcyhibG9ja0luZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5zbGljZSgwLCBibG9ja0luZGV4KS5yZWR1Y2UoZnVuY3Rpb24gKHBvcywgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zICs9IGIudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9mb3JFYWNoQmxvY2tzSW5SYW5nZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIHZhciBmcm9tQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayhmcm9tUG9zKTtcblxuICAgICAgICAgICAgICAgIGlmIChmcm9tQmxvY2tJdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b0Jsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodG9Qb3MpOyAvLyBwcm9jZXNzIGZpcnN0IGJsb2NrXG5cblxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNTYW1lQmxvY2sgPSB0b0Jsb2NrSXRlciAmJiBmcm9tQmxvY2tJdGVyLmluZGV4ID09PSB0b0Jsb2NrSXRlci5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyb21CbG9ja1N0YXJ0UG9zID0gZnJvbUJsb2NrSXRlci5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmcm9tQmxvY2tFbmRQb3MgPSB0b0Jsb2NrSXRlciAmJiBpc1NhbWVCbG9jayA/IHRvQmxvY2tJdGVyLm9mZnNldCA6IHRoaXMuX2Jsb2Nrc1tmcm9tQmxvY2tJdGVyLmluZGV4XS52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1tmcm9tQmxvY2tJdGVyLmluZGV4XSwgZnJvbUJsb2NrSXRlci5pbmRleCwgZnJvbUJsb2NrU3RhcnRQb3MsIGZyb21CbG9ja0VuZFBvcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvQmxvY2tJdGVyICYmICFpc1NhbWVCbG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvY2VzcyBpbnRlcm1lZGlhdGUgYmxvY2tzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiaSA9IGZyb21CbG9ja0l0ZXIuaW5kZXggKyAxOyBiaSA8IHRvQmxvY2tJdGVyLmluZGV4OyArK2JpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4odGhpcy5fYmxvY2tzW2JpXSwgYmksIDAsIHRoaXMuX2Jsb2Nrc1tiaV0udmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLy8gcHJvY2VzcyBsYXN0IGJsb2NrXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm4odGhpcy5fYmxvY2tzW3RvQmxvY2tJdGVyLmluZGV4XSwgdG9CbG9ja0l0ZXIuaW5kZXgsIDAsIHRvQmxvY2tJdGVyLm9mZnNldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJyZW1vdmVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgICAgICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVEZXRhaWxzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInJlbW92ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgXywgYkZyb21Qb3MsIGJUb1Bvcykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVEZXRhaWxzLmFnZ3JlZ2F0ZShiLnJlbW92ZShiRnJvbVBvcywgYlRvUG9zKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVtb3ZlRGV0YWlscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2Jsb2Nrcy5sZW5ndGgpIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSBuZXcgUGF0dGVybkN1cnNvcih0aGlzLCBjdXJzb3JQb3MpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLk5PTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAvLyBOT05FIHNob3VsZCBvbmx5IGdvIG91dCBmcm9tIGZpeGVkIHRvIHRoZSByaWdodCFcbiAgICAgICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yLnB1c2hSaWdodEJlZm9yZUlucHV0KCkpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvci5wdXNoTGVmdEJlZm9yZUlucHV0KCkpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSAvLyBGT1JDRSBpcyBvbmx5IGFib3V0IGF8KiBvdGhlcndpc2UgaXMgMFxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSB0byBicmVhayBmYXN0IHdoZW4gKnxhXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlRmlsbGVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yLm9rICYmIGN1cnNvci5wb3MgPT09IGN1cnNvclBvcykgcmV0dXJuIGN1cnNvclBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IC8vIGZvcndhcmQgZmxvd1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnB1c2hMZWZ0QmVmb3JlSW5wdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnB1c2hMZWZ0QmVmb3JlUmVxdWlyZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnB1c2hMZWZ0QmVmb3JlRmlsbGVkKCk7IC8vIGJhY2t3YXJkIGZsb3dcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IucHVzaFJpZ2h0QmVmb3JlUmVxdWlyZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3Iub2sgJiYgY3Vyc29yLnBvcyA8PSBjdXJzb3JQb3MpIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yLm9rICYmIGN1cnNvci5wb3MgPD0gY3Vyc29yUG9zKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUKSByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3Iub2spIHJldHVybiBjdXJzb3IucG9zO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7IC8vIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZUlucHV0KCkgJiZcbiAgICAgICAgICAgICAgICAgICAgLy8gICAoIXRoaXMubGF6eSB8fCB0aGlzLmV4dHJhY3RJbnB1dCgpKVxuICAgICAgICAgICAgICAgICAgICAvLyApIHJldHVybiBjdXJzb3IucG9zO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5SSUdIVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3J3YXJkIGZsb3dcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yLnB1c2hSaWdodEJlZm9yZUlucHV0KCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci5wdXNoUmlnaHRCZWZvcmVSZXF1aXJlZCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yLnB1c2hSaWdodEJlZm9yZUZpbGxlZCgpKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUKSByZXR1cm4gdGhpcy52YWx1ZS5sZW5ndGg7IC8vIGJhY2t3YXJkIGZsb3dcblxuICAgICAgICAgICAgICAgICAgICBjdXJzb3IucG9wU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvci5vaykgcmV0dXJuIGN1cnNvci5wb3M7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvci5wb3BTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3Vyc29yLm9rKSByZXR1cm4gY3Vyc29yLnBvcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgRElSRUNUSU9OLkxFRlQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJzb3JQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogR2V0IGJsb2NrIGJ5IG5hbWUgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwibWFza2VkQmxvY2tcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrZWRCbG9jayhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkQmxvY2tzKG5hbWUpWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIEdldCBhbGwgYmxvY2tzIGJ5IG5hbWUgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwibWFza2VkQmxvY2tzXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbWFza2VkQmxvY2tzKG5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2VzID0gdGhpcy5fbWFza2VkQmxvY2tzW25hbWVdO1xuICAgICAgICAgICAgICAgIGlmICghaW5kaWNlcykgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRpY2VzLm1hcChmdW5jdGlvbiAoZ2kpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzNC5fYmxvY2tzW2dpXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBNYXNrZWRQYXR0ZXJuO1xuICAgIH0oTWFza2VkKTtcbiAgICBNYXNrZWRQYXR0ZXJuLkRFRkFVTFRTID0ge1xuICAgICAgICBsYXp5OiB0cnVlLFxuICAgICAgICBwbGFjZWhvbGRlckNoYXI6ICdfJ1xuICAgIH07XG4gICAgTWFza2VkUGF0dGVybi5TVE9QX0NIQVIgPSAnYCc7XG4gICAgTWFza2VkUGF0dGVybi5FU0NBUEVfQ0hBUiA9ICdcXFxcJztcbiAgICBNYXNrZWRQYXR0ZXJuLklucHV0RGVmaW5pdGlvbiA9IFBhdHRlcm5JbnB1dERlZmluaXRpb247XG4gICAgTWFza2VkUGF0dGVybi5GaXhlZERlZmluaXRpb24gPSBQYXR0ZXJuRml4ZWREZWZpbml0aW9uO1xuICAgIElNYXNrLk1hc2tlZFBhdHRlcm4gPSBNYXNrZWRQYXR0ZXJuO1xuXG4gICAgLyoqIFBhdHRlcm4gd2hpY2ggYWNjZXB0cyByYW5nZXMgKi9cblxuICAgIHZhciBNYXNrZWRSYW5nZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX01hc2tlZFBhdHRlcm4pIHtcbiAgICAgICAgX2luaGVyaXRzKE1hc2tlZFJhbmdlLCBfTWFza2VkUGF0dGVybik7XG5cbiAgICAgICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWRSYW5nZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gTWFza2VkUmFuZ2UoKSB7XG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkUmFuZ2UpO1xuXG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoTWFza2VkUmFuZ2UsIFt7XG4gICAgICAgICAgICBrZXk6IFwiX21hdGNoRnJvbVwiLFxuICAgICAgICAgICAgZ2V0OlxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgT3B0aW9uYWxseSBzZXRzIG1heCBsZW5ndGggb2YgcGF0dGVybi5cbiAgICAgICAgICAgICBVc2VkIHdoZW4gcGF0dGVybiBsZW5ndGggaXMgbG9uZ2VyIHRoZW4gYHRvYCBwYXJhbSBsZW5ndGguIFBhZHMgemVyb3MgYXQgc3RhcnQgaW4gdGhpcyBjYXNlLlxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8qKiBNaW4gYm91bmQgKi9cblxuICAgICAgICAgICAgLyoqIE1heCBib3VuZCAqL1xuXG4gICAgICAgICAgICAgICAgLyoqICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGggLSBTdHJpbmcodGhpcy5mcm9tKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuXG4gICAgICAgICAgICAgICAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICB0bzogdGhpcy50byB8fCAwLFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiB0aGlzLmZyb20gfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiB0aGlzLm1heExlbmd0aCB8fCAwXG4gICAgICAgICAgICAgICAgfSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgdmFyIG1heExlbmd0aCA9IFN0cmluZyhvcHRzLnRvKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMubWF4TGVuZ3RoICE9IG51bGwpIG1heExlbmd0aCA9IE1hdGgubWF4KG1heExlbmd0aCwgb3B0cy5tYXhMZW5ndGgpO1xuICAgICAgICAgICAgICAgIG9wdHMubWF4TGVuZ3RoID0gbWF4TGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBmcm9tU3RyID0gU3RyaW5nKG9wdHMuZnJvbSkucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgICAgICAgICAgIHZhciB0b1N0ciA9IFN0cmluZyhvcHRzLnRvKS5wYWRTdGFydChtYXhMZW5ndGgsICcwJyk7XG4gICAgICAgICAgICAgICAgdmFyIHNhbWVDaGFyc0NvdW50ID0gMDtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChzYW1lQ2hhcnNDb3VudCA8IHRvU3RyLmxlbmd0aCAmJiB0b1N0cltzYW1lQ2hhcnNDb3VudF0gPT09IGZyb21TdHJbc2FtZUNoYXJzQ291bnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICsrc2FtZUNoYXJzQ291bnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb3B0cy5tYXNrID0gdG9TdHIuc2xpY2UoMCwgc2FtZUNoYXJzQ291bnQpLnJlcGxhY2UoLzAvZywgJ1xcXFwwJykgKyAnMCcucmVwZWF0KG1heExlbmd0aCAtIHNhbWVDaGFyc0NvdW50KTtcblxuICAgICAgICAgICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiaXNDb21wbGV0ZVwiLCB0aGlzKSAmJiBCb29sZWFuKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiYm91bmRhcmllc1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJvdW5kYXJpZXMoc3RyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pbnN0ciA9ICcnO1xuICAgICAgICAgICAgICAgIHZhciBtYXhzdHIgPSAnJztcblxuICAgICAgICAgICAgICAgIHZhciBfcmVmID0gc3RyLm1hdGNoKC9eKFxcRCopKFxcZCopKFxcRCopLykgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMyksXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gX3JlZjJbMV0sXG4gICAgICAgICAgICAgICAgICAgIG51bSA9IF9yZWYyWzJdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG51bSkge1xuICAgICAgICAgICAgICAgICAgICBtaW5zdHIgPSAnMCcucmVwZWF0KHBsYWNlaG9sZGVyLmxlbmd0aCkgKyBudW07XG4gICAgICAgICAgICAgICAgICAgIG1heHN0ciA9ICc5Jy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtaW5zdHIgPSBtaW5zdHIucGFkRW5kKHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgICAgICAgICAgIG1heHN0ciA9IG1heHN0ci5wYWRFbmQodGhpcy5tYXhMZW5ndGgsICc5Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFttaW5zdHIsIG1heHN0cl07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShjaCkge1xuICAgICAgICAgICAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbHM7XG5cbiAgICAgICAgICAgICAgICB2YXIgX25vcm1hbGl6ZVByZXBhcmUgPSBub3JtYWxpemVQcmVwYXJlKF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiZG9QcmVwYXJlXCIsIHRoaXMpLmNhbGwodGhpcywgY2gucmVwbGFjZSgvXFxEL2csICcnKSwgZmxhZ3MpKTtcblxuICAgICAgICAgICAgICAgIHZhciBfbm9ybWFsaXplUHJlcGFyZTIgPSBfc2xpY2VkVG9BcnJheShfbm9ybWFsaXplUHJlcGFyZSwgMik7XG5cbiAgICAgICAgICAgICAgICBjaCA9IF9ub3JtYWxpemVQcmVwYXJlMlswXTtcbiAgICAgICAgICAgICAgICBkZXRhaWxzID0gX25vcm1hbGl6ZVByZXBhcmUyWzFdO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdXRvZml4IHx8ICFjaCkgcmV0dXJuIGNoO1xuICAgICAgICAgICAgICAgIHZhciBmcm9tU3RyID0gU3RyaW5nKHRoaXMuZnJvbSkucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgICAgICAgICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKHRoaXMudG8pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgICAgICAgICAgIHZhciBuZXh0VmFsID0gdGhpcy52YWx1ZSArIGNoO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0VmFsLmxlbmd0aCA+IHRoaXMubWF4TGVuZ3RoKSByZXR1cm4gJyc7XG5cbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMkYm91bmRhcmllcyA9IHRoaXMuYm91bmRhcmllcyhuZXh0VmFsKSxcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMkYm91bmRhcmllczIgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgbWluc3RyID0gX3RoaXMkYm91bmRhcmllczJbMF0sXG4gICAgICAgICAgICAgICAgICAgIG1heHN0ciA9IF90aGlzJGJvdW5kYXJpZXMyWzFdO1xuXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcihtYXhzdHIpIDwgdGhpcy5mcm9tKSByZXR1cm4gZnJvbVN0cltuZXh0VmFsLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcihtaW5zdHIpID4gdGhpcy50bykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvZml4ID09PSAncGFkJyAmJiBuZXh0VmFsLmxlbmd0aCA8IHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWycnLCBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmFwcGVuZChmcm9tU3RyW25leHRWYWwubGVuZ3RoIC0gMV0gKyBjaCwgZmxhZ3MpKV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2dldDI7XG5cbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3ROb25aZXJvID0gc3RyLnNlYXJjaCgvW14wXS8pO1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdE5vblplcm8gPT09IC0xICYmIHN0ci5sZW5ndGggPD0gdGhpcy5fbWF0Y2hGcm9tKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRib3VuZGFyaWVzMyA9IHRoaXMuYm91bmRhcmllcyhzdHIpLFxuICAgICAgICAgICAgICAgICAgICBfdGhpcyRib3VuZGFyaWVzNCA9IF9zbGljZWRUb0FycmF5KF90aGlzJGJvdW5kYXJpZXMzLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgbWluc3RyID0gX3RoaXMkYm91bmRhcmllczRbMF0sXG4gICAgICAgICAgICAgICAgICAgIG1heHN0ciA9IF90aGlzJGJvdW5kYXJpZXM0WzFdO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbSA8PSBOdW1iZXIobWF4c3RyKSAmJiBOdW1iZXIobWluc3RyKSA8PSB0aGlzLnRvICYmIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gTWFza2VkUmFuZ2U7XG4gICAgfShNYXNrZWRQYXR0ZXJuKTtcbiAgICBJTWFzay5NYXNrZWRSYW5nZSA9IE1hc2tlZFJhbmdlO1xuXG4gICAgLyoqIERhdGUgbWFzayAqL1xuXG4gICAgdmFyIE1hc2tlZERhdGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gICAgICAgIF9pbmhlcml0cyhNYXNrZWREYXRlLCBfTWFza2VkUGF0dGVybik7XG5cbiAgICAgICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWREYXRlKTtcblxuICAgICAgICAvKiogUGF0dGVybiBtYXNrIGZvciBkYXRlIGFjY29yZGluZyB0byB7QGxpbmsgTWFza2VkRGF0ZSNmb3JtYXR9ICovXG5cbiAgICAgICAgLyoqIFN0YXJ0IGRhdGUgKi9cblxuICAgICAgICAvKiogRW5kIGRhdGUgKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKipcbiAgICAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBNYXNrZWREYXRlKG9wdHMpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWREYXRlKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuREVGQVVMVFMsIG9wdHMpKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgKi9cblxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhNYXNrZWREYXRlLCBbe1xuICAgICAgICAgICAga2V5OiBcIl91cGRhdGVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5tYXNrID09PSBEYXRlKSBkZWxldGUgb3B0cy5tYXNrO1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLnBhdHRlcm4pIG9wdHMubWFzayA9IG9wdHMucGF0dGVybjtcbiAgICAgICAgICAgICAgICB2YXIgYmxvY2tzID0gb3B0cy5ibG9ja3M7XG4gICAgICAgICAgICAgICAgb3B0cy5ibG9ja3MgPSBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUygpKTsgLy8gYWRqdXN0IHllYXIgYmxvY2tcblxuICAgICAgICAgICAgICAgIGlmIChvcHRzLm1pbikgb3B0cy5ibG9ja3MuWS5mcm9tID0gb3B0cy5taW4uZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5tYXgpIG9wdHMuYmxvY2tzLlkudG8gPSBvcHRzLm1heC5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdHMubWluICYmIG9wdHMubWF4ICYmIG9wdHMuYmxvY2tzLlkuZnJvbSA9PT0gb3B0cy5ibG9ja3MuWS50bykge1xuICAgICAgICAgICAgICAgICAgICBvcHRzLmJsb2Nrcy5tLmZyb20gPSBvcHRzLm1pbi5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5ibG9ja3MubS50byA9IG9wdHMubWF4LmdldE1vbnRoKCkgKyAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLmJsb2Nrcy5tLmZyb20gPT09IG9wdHMuYmxvY2tzLm0udG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMuYmxvY2tzLmQuZnJvbSA9IG9wdHMubWluLmdldERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMuYmxvY2tzLmQudG8gPSBvcHRzLm1heC5nZXREYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG9wdHMuYmxvY2tzLCB0aGlzLmJsb2NrcywgYmxvY2tzKTsgLy8gYWRkIGF1dG9maXhcblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdHMuYmxvY2tzKS5mb3JFYWNoKGZ1bmN0aW9uIChiaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IG9wdHMuYmxvY2tzW2JrXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoJ2F1dG9maXgnIGluIGIpICYmICdhdXRvZml4JyBpbiBvcHRzKSBiLmF1dG9maXggPSBvcHRzLmF1dG9maXg7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9nZXQyO1xuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSB0aGlzLmRhdGU7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRGF0ZS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpICYmICghdGhpcy5pc0NvbXBsZXRlIHx8IHRoaXMuaXNEYXRlRXhpc3QodGhpcy52YWx1ZSkgJiYgZGF0ZSAhPSBudWxsICYmICh0aGlzLm1pbiA9PSBudWxsIHx8IHRoaXMubWluIDw9IGRhdGUpICYmICh0aGlzLm1heCA9PSBudWxsIHx8IGRhdGUgPD0gdGhpcy5tYXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBDaGVja3MgaWYgZGF0ZSBpcyBleGlzdHMgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiaXNEYXRlRXhpc3RcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RhdGVFeGlzdChzdHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQodGhpcy5wYXJzZShzdHIsIHRoaXMpLCB0aGlzKS5pbmRleE9mKHN0cikgPj0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBQYXJzZWQgRGF0ZSAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJkYXRlXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVkVmFsdWUgPSBkYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJ0eXBlZFZhbHVlXCIsIHRoaXMpIDogbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJ0eXBlZFZhbHVlXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIm1hc2tFcXVhbHNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrRXF1YWxzKG1hc2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFzayA9PT0gRGF0ZSB8fCBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwibWFza0VxdWFsc1wiLCB0aGlzKS5jYWxsKHRoaXMsIG1hc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIE1hc2tlZERhdGU7XG4gICAgfShNYXNrZWRQYXR0ZXJuKTtcbiAgICBNYXNrZWREYXRlLkRFRkFVTFRTID0ge1xuICAgICAgICBwYXR0ZXJuOiAnZHsufWBtey59YFknLFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdChkYXRlKSB7XG4gICAgICAgICAgICBpZiAoIWRhdGUpIHJldHVybiAnJztcbiAgICAgICAgICAgIHZhciBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgICAgICB2YXIgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgcmV0dXJuIFtkYXksIG1vbnRoLCB5ZWFyXS5qb2luKCcuJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgICAgICAgICAgIHZhciBfc3RyJHNwbGl0ID0gc3RyLnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgX3N0ciRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfc3RyJHNwbGl0LCAzKSxcbiAgICAgICAgICAgICAgICBkYXkgPSBfc3RyJHNwbGl0MlswXSxcbiAgICAgICAgICAgICAgICBtb250aCA9IF9zdHIkc3BsaXQyWzFdLFxuICAgICAgICAgICAgICAgIHllYXIgPSBfc3RyJHNwbGl0MlsyXTtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBNYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGQ6IHtcbiAgICAgICAgICAgICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICAgICAgICAgICAgICBmcm9tOiAxLFxuICAgICAgICAgICAgICAgIHRvOiAzMSxcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtOiB7XG4gICAgICAgICAgICAgICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgICAgICAgICAgICAgZnJvbTogMSxcbiAgICAgICAgICAgICAgICB0bzogMTIsXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgWToge1xuICAgICAgICAgICAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgICAgICAgICAgICAgIGZyb206IDE5MDAsXG4gICAgICAgICAgICAgICAgdG86IDk5OTlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgSU1hc2suTWFza2VkRGF0ZSA9IE1hc2tlZERhdGU7XG5cbiAgICAvKipcbiAgICAgR2VuZXJpYyBlbGVtZW50IEFQSSB0byB1c2Ugd2l0aCBtYXNrXG4gICAgIEBpbnRlcmZhY2VcbiAgICAgKi9cbiAgICB2YXIgTWFza0VsZW1lbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBNYXNrRWxlbWVudCgpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoTWFza0VsZW1lbnQsIFt7XG4gICAgICAgICAgICBrZXk6IFwic2VsZWN0aW9uU3RhcnRcIixcbiAgICAgICAgICAgIGdldDpcbiAgICAgICAgICAgIC8qKiAqL1xuXG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICAgICAgLyoqICovXG5cbiAgICAgICAgICAgICAgICAvKiogU2FmZWx5IHJldHVybnMgc2VsZWN0aW9uIHN0YXJ0ICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXJ0ICE9IG51bGwgPyBzdGFydCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gZW5kICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInNlbGVjdGlvbkVuZFwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVuZDtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IHRoaXMuX3Vuc2FmZVNlbGVjdGlvbkVuZDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuZCAhPSBudWxsID8gZW5kIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogU2FmZWx5IHNldHMgZWxlbWVudCBzZWxlY3Rpb24gKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwic2VsZWN0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbCB8fCBlbmQgPT0gbnVsbCB8fCBzdGFydCA9PT0gdGhpcy5zZWxlY3Rpb25TdGFydCAmJiBlbmQgPT09IHRoaXMuc2VsZWN0aW9uRW5kKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge31cbiAgICAgICAgICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiaXNBY3RpdmVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiYmluZEV2ZW50c1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaGFuZGxlcnMpIHt9XG4gICAgICAgICAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInVuYmluZEV2ZW50c1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHt9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gTWFza0VsZW1lbnQ7XG4gICAgfSgpO1xuICAgIElNYXNrLk1hc2tFbGVtZW50ID0gTWFza0VsZW1lbnQ7XG5cbiAgICAvKiogQnJpZGdlIGJldHdlZW4gSFRNTEVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5cbiAgICB2YXIgSFRNTE1hc2tFbGVtZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza0VsZW1lbnQpIHtcbiAgICAgICAgX2luaGVyaXRzKEhUTUxNYXNrRWxlbWVudCwgX01hc2tFbGVtZW50KTtcblxuICAgICAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxNYXNrRWxlbWVudCk7XG5cbiAgICAgICAgLyoqIE1hcHBpbmcgYmV0d2VlbiBIVE1MRWxlbWVudCBldmVudHMgYW5kIG1hc2sgaW50ZXJuYWwgZXZlbnRzICovXG5cbiAgICAgICAgLyoqIEhUTUxFbGVtZW50IHRvIHVzZSBtYXNrIG9uICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudH0gaW5wdXRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIEhUTUxNYXNrRWxlbWVudChpbnB1dCkge1xuICAgICAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTE1hc2tFbGVtZW50KTtcblxuICAgICAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIF90aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICBfdGhpcy5faGFuZGxlcnMgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvKiogKi9cbiAgICAgICAgLy8gJEZsb3dGaXhNZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjgzOVxuXG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKEhUTUxNYXNrRWxlbWVudCwgW3tcbiAgICAgICAgICAgIGtleTogXCJyb290RWxlbWVudFwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzJGlucHV0JGdldFJvb3RObywgX3RoaXMkaW5wdXQkZ2V0Um9vdE5vMiwgX3RoaXMkaW5wdXQ7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKF90aGlzJGlucHV0JGdldFJvb3RObyA9IChfdGhpcyRpbnB1dCRnZXRSb290Tm8yID0gKF90aGlzJGlucHV0ID0gdGhpcy5pbnB1dCkuZ2V0Um9vdE5vZGUpID09PSBudWxsIHx8IF90aGlzJGlucHV0JGdldFJvb3RObzIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGlucHV0JGdldFJvb3RObzIuY2FsbChfdGhpcyRpbnB1dCkpICE9PSBudWxsICYmIF90aGlzJGlucHV0JGdldFJvb3RObyAhPT0gdm9pZCAwID8gX3RoaXMkaW5wdXQkZ2V0Um9vdE5vIDogZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBJcyBlbGVtZW50IGluIGZvY3VzXG4gICAgICAgICAgICAgQHJlYWRvbmx5XG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiaXNBY3RpdmVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIC8vJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0ID09PSB0aGlzLnJvb3RFbGVtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBzdGFydFxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25TdGFydFwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBlbmRcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uRW5kXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBTZXRzIEhUTUxFbGVtZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5zYWZlU2VsZWN0KHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgSFRNTEVsZW1lbnQgdmFsdWVcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBCaW5kcyBIVE1MRWxlbWVudCBldmVudHMgdG8gbWFzayBpbnRlcm5hbCBldmVudHNcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJiaW5kRXZlbnRzXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEV2ZW50cyhoYW5kbGVycykge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3RvZ2dsZUV2ZW50SGFuZGxlcihIVE1MTWFza0VsZW1lbnQuRVZFTlRTX01BUFtldmVudF0sIGhhbmRsZXJzW2V2ZW50XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBVbmJpbmRzIEhUTUxFbGVtZW50IGV2ZW50cyB0byBtYXNrIGludGVybmFsIGV2ZW50c1xuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInVuYmluZEV2ZW50c1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2hhbmRsZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLl90b2dnbGVFdmVudEhhbmRsZXIoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl90b2dnbGVFdmVudEhhbmRsZXJcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdG9nZ2xlRXZlbnRIYW5kbGVyKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW2V2ZW50XSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMuX2hhbmRsZXJzW2V2ZW50XSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9oYW5kbGVyc1tldmVudF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlcnNbZXZlbnRdID0gaGFuZGxlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gSFRNTE1hc2tFbGVtZW50O1xuICAgIH0oTWFza0VsZW1lbnQpO1xuICAgIEhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQID0ge1xuICAgICAgICBzZWxlY3Rpb25DaGFuZ2U6ICdrZXlkb3duJyxcbiAgICAgICAgaW5wdXQ6ICdpbnB1dCcsXG4gICAgICAgIGRyb3A6ICdkcm9wJyxcbiAgICAgICAgY2xpY2s6ICdjbGljaycsXG4gICAgICAgIGZvY3VzOiAnZm9jdXMnLFxuICAgICAgICBjb21taXQ6ICdibHVyJ1xuICAgIH07XG4gICAgSU1hc2suSFRNTE1hc2tFbGVtZW50ID0gSFRNTE1hc2tFbGVtZW50O1xuXG4gICAgdmFyIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0hUTUxNYXNrRWxlbWVudCkge1xuICAgICAgICBfaW5oZXJpdHMoSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50LCBfSFRNTE1hc2tFbGVtZW50KTtcblxuICAgICAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50KCkge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQsIFt7XG4gICAgICAgICAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvblN0YXJ0XCIsXG4gICAgICAgICAgICBnZXQ6XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIHN0YXJ0XG4gICAgICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3RFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuY2hvck9mZnNldCA9IHNlbGVjdGlvbiAmJiBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9jdXNPZmZzZXQgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmb2N1c09mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA8IGZvY3VzT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYW5jaG9yT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvY3VzT2Zmc2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIGVuZFxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25FbmRcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciByb290ID0gdGhpcy5yb290RWxlbWVudDtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gcm9vdC5nZXRTZWxlY3Rpb24gJiYgcm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yT2Zmc2V0ID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGZvY3VzT2Zmc2V0ID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5mb2N1c09mZnNldDtcblxuICAgICAgICAgICAgICAgIGlmIChmb2N1c09mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA9PSBudWxsIHx8IGFuY2hvck9mZnNldCA+IGZvY3VzT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmNob3JPZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvY3VzT2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgU2V0cyBIVE1MRWxlbWVudCBzZWxlY3Rpb25cbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJvb3RFbGVtZW50LmNyZWF0ZVJhbmdlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gdGhpcy5yb290RWxlbWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHRoaXMuaW5wdXQuZmlyc3RDaGlsZCB8fCB0aGlzLmlucHV0LCBzdGFydCk7XG4gICAgICAgICAgICAgICAgcmFuZ2Uuc2V0RW5kKHRoaXMuaW5wdXQubGFzdENoaWxkIHx8IHRoaXMuaW5wdXQsIGVuZCk7XG4gICAgICAgICAgICAgICAgdmFyIHJvb3QgPSB0aGlzLnJvb3RFbGVtZW50O1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb24gPSByb290LmdldFNlbGVjdGlvbiAmJiByb290LmdldFNlbGVjdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgSFRNTEVsZW1lbnQgdmFsdWVcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudDtcbiAgICB9KEhUTUxNYXNrRWxlbWVudCk7XG4gICAgSU1hc2suSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50ID0gSFRNTENvbnRlbnRlZGl0YWJsZU1hc2tFbGVtZW50O1xuXG4gICAgdmFyIF9leGNsdWRlZCQxID0gW1wibWFza1wiXTtcbiAgICAvKiogTGlzdGVucyB0byBlbGVtZW50IGV2ZW50cyBhbmQgY29udHJvbHMgY2hhbmdlcyBiZXR3ZWVuIGVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5cbiAgICB2YXIgSW5wdXRNYXNrID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICBWaWV3IGVsZW1lbnRcbiAgICAgICAgIEByZWFkb25seVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgIEludGVybmFsIHtAbGluayBNYXNrZWR9IG1vZGVsXG4gICAgICAgICBAcmVhZG9ubHlcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICBAcGFyYW0ge01hc2tFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudH0gZWxcbiAgICAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBJbnB1dE1hc2soZWwsIG9wdHMpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dE1hc2spO1xuXG4gICAgICAgICAgICB0aGlzLmVsID0gZWwgaW5zdGFuY2VvZiBNYXNrRWxlbWVudCA/IGVsIDogZWwuaXNDb250ZW50RWRpdGFibGUgJiYgZWwudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBlbC50YWdOYW1lICE9PSAnVEVYVEFSRUEnID8gbmV3IEhUTUxDb250ZW50ZWRpdGFibGVNYXNrRWxlbWVudChlbCkgOiBuZXcgSFRNTE1hc2tFbGVtZW50KGVsKTtcbiAgICAgICAgICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayhvcHRzKTtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24gPSB0aGlzLl9zYXZlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9vbklucHV0ID0gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fb25Ecm9wID0gdGhpcy5fb25Ecm9wLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fb25DbGljayA9IHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYWxpZ25DdXJzb3IgPSB0aGlzLmFsaWduQ3Vyc29yLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkgPSB0aGlzLmFsaWduQ3Vyc29yRnJpZW5kbHkuYmluZCh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5fYmluZEV2ZW50cygpOyAvLyByZWZyZXNoXG5cblxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8qKiBSZWFkIG9yIHVwZGF0ZSBtYXNrICovXG5cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoSW5wdXRNYXNrLCBbe1xuICAgICAgICAgICAga2V5OiBcIm1hc2tcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5tYXNrO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG1hc2spIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXNrRXF1YWxzKG1hc2spKSByZXR1cm47IC8vICRGbG93Rml4TWUgTm8gaWRlYXMgLi4uIGFmdGVyIHVwZGF0ZVxuXG4gICAgICAgICAgICAgICAgaWYgKCEobWFzayBpbnN0YW5jZW9mIElNYXNrLk1hc2tlZCkgJiYgdGhpcy5tYXNrZWQuY29uc3RydWN0b3IgPT09IG1hc2tlZENsYXNzKG1hc2spKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFza2VkLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzazogbWFza1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBtYXNrZWQgPSBjcmVhdGVNYXNrKHtcbiAgICAgICAgICAgICAgICAgICAgbWFzazogbWFza1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG1hc2tlZC51bm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tlZCA9IG1hc2tlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBSYXcgdmFsdWUgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwibWFza0VxdWFsc1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tFcXVhbHMobWFzaykge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRtYXNrZWQ7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFzayA9PSBudWxsIHx8ICgoX3RoaXMkbWFza2VkID0gdGhpcy5tYXNrZWQpID09PSBudWxsIHx8IF90aGlzJG1hc2tlZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkbWFza2VkLm1hc2tFcXVhbHMobWFzaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwidmFsdWVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdHIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gc3RyKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrZWQudmFsdWUgPSBzdHI7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIFVubWFza2VkIHZhbHVlICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91bm1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHN0cikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVubWFza2VkVmFsdWUgPT09IHN0cikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMubWFza2VkLnVubWFza2VkVmFsdWUgPSBzdHI7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIFR5cGVkIHVubWFza2VkIHZhbHVlICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tlZC50eXBlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tlZC50eXBlZFZhbHVlRXF1YWxzKHZhbCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tlZC50eXBlZFZhbHVlID0gdmFsO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIFN0YXJ0cyBsaXN0ZW5pbmcgdG8gZWxlbWVudCBldmVudHNcbiAgICAgICAgICAgICBAcHJvdGVjdGVkXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX2JpbmRFdmVudHNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYmluZEV2ZW50cygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmJpbmRFdmVudHMoe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2U6IHRoaXMuX3NhdmVTZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiB0aGlzLl9vbklucHV0LFxuICAgICAgICAgICAgICAgICAgICBkcm9wOiB0aGlzLl9vbkRyb3AsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiB0aGlzLl9vbkNsaWNrLFxuICAgICAgICAgICAgICAgICAgICBmb2N1czogdGhpcy5fb25Gb2N1cyxcbiAgICAgICAgICAgICAgICAgICAgY29tbWl0OiB0aGlzLl9vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgU3RvcHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzXG4gICAgICAgICAgICAgQHByb3RlY3RlZFxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl91bmJpbmRFdmVudHNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsKSB0aGlzLmVsLnVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgRmlyZXMgY3VzdG9tIGV2ZW50XG4gICAgICAgICAgICAgQHByb3RlY3RlZFxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9maXJlRXZlbnRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZmlyZUV2ZW50KGV2KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgICAgICAgICAgICBpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBDdXJyZW50IHNlbGVjdGlvbiBzdGFydFxuICAgICAgICAgICAgIEByZWFkb25seVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInNlbGVjdGlvblN0YXJ0XCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPyB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA6IHRoaXMuZWwuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiY3Vyc29yUG9zXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3Vyc29yQ2hhbmdpbmcgPyB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA6IHRoaXMuZWwuc2VsZWN0aW9uRW5kO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHBvcykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5lbCB8fCAhdGhpcy5lbC5pc0FjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuc2VsZWN0KHBvcywgcG9zKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIFN0b3JlcyBjdXJyZW50IHNlbGVjdGlvblxuICAgICAgICAgICAgIEBwcm90ZWN0ZWRcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfc2F2ZVNlbGVjdGlvblwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgLyogZXYgKi9cbiAgICAgICAgICAgICAgICBfc2F2ZVNlbGVjdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5lbC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0VsZW1lbnQgdmFsdWUgd2FzIGNoYW5nZWQgb3V0c2lkZSBvZiBtYXNrLiBTeW5jcm9uaXplIG1hc2sgdXNpbmcgYG1hc2sudXBkYXRlVmFsdWUoKWAgdG8gd29yayBwcm9wZXJseS4nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiB0aGlzLmN1cnNvclBvc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogU3luY3Jvbml6ZXMgbW9kZWwgdmFsdWUgZnJvbSB2aWV3ICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInVwZGF0ZVZhbHVlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlVmFsdWUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrZWQudmFsdWUgPSB0aGlzLmVsLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogU3luY3Jvbml6ZXMgdmlldyBmcm9tIG1vZGVsIHZhbHVlLCBmaXJlcyBjaGFuZ2UgZXZlbnRzICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInVwZGF0ZUNvbnRyb2xcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDb250cm9sKCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdVbm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLm1hc2tlZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgaXNDaGFuZ2VkID0gdGhpcy51bm1hc2tlZFZhbHVlICE9PSBuZXdVbm1hc2tlZFZhbHVlIHx8IHRoaXMudmFsdWUgIT09IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSBuZXdVbm1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWwudmFsdWUgIT09IG5ld1ZhbHVlKSB0aGlzLmVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzQ2hhbmdlZCkgdGhpcy5fZmlyZUNoYW5nZUV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIFVwZGF0ZXMgb3B0aW9ucyB3aXRoIGRlZXAgZXF1YWwgY2hlY2ssIHJlY3JlYXRlcyBAe2xpbmsgTWFza2VkfSBtb2RlbCBpZiBtYXNrIHR5cGUgY2hhbmdlcyAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJ1cGRhdGVPcHRpb25zXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXG4gICAgICAgICAgICAgICAgICAgIHJlc3RPcHRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdHMsIF9leGNsdWRlZCQxKTtcblxuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVNYXNrID0gIXRoaXMubWFza0VxdWFscyhtYXNrKTtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlT3B0cyA9ICFvYmplY3RJbmNsdWRlcyh0aGlzLm1hc2tlZCwgcmVzdE9wdHMpO1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVNYXNrKSB0aGlzLm1hc2sgPSBtYXNrO1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVPcHRzKSB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHJlc3RPcHRzKTtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlTWFzayB8fCB1cGRhdGVPcHRzKSB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBVcGRhdGVzIGN1cnNvciAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJ1cGRhdGVDdXJzb3JcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDdXJzb3IoY3Vyc29yUG9zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnNvclBvcyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3JQb3MgPSBjdXJzb3JQb3M7IC8vIGFsc28gcXVldWUgY2hhbmdlIGN1cnNvciBmb3IgbW9iaWxlIGJyb3dzZXJzXG5cbiAgICAgICAgICAgICAgICB0aGlzLl9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgRGVsYXlzIGN1cnNvciB1cGRhdGUgdG8gc3VwcG9ydCBtb2JpbGUgYnJvd3NlcnNcbiAgICAgICAgICAgICBAcHJpdmF0ZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9kZWxheVVwZGF0ZUN1cnNvclwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnNvckNoYW5naW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZWwpIHJldHVybjsgLy8gaWYgd2FzIGRlc3Ryb3llZFxuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmN1cnNvclBvcyA9IF90aGlzLl9jaGFuZ2luZ0N1cnNvclBvcztcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcbiAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBGaXJlcyBjdXN0b20gZXZlbnRzXG4gICAgICAgICAgICAgQHByb3RlY3RlZFxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9maXJlQ2hhbmdlRXZlbnRzXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpcmVDaGFuZ2VFdmVudHMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmlyZUV2ZW50KCdhY2NlcHQnLCB0aGlzLl9pbnB1dEV2ZW50KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hc2tlZC5pc0NvbXBsZXRlKSB0aGlzLl9maXJlRXZlbnQoJ2NvbXBsZXRlJywgdGhpcy5faW5wdXRFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBBYm9ydHMgZGVsYXllZCBjdXJzb3IgdXBkYXRlXG4gICAgICAgICAgICAgQHByaXZhdGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfYWJvcnRVcGRhdGVDdXJzb3JcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWJvcnRVcGRhdGVDdXJzb3IoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnNvckNoYW5naW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jdXJzb3JDaGFuZ2luZyk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jdXJzb3JDaGFuZ2luZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogQWxpZ25zIGN1cnNvciB0byBuZWFyZXN0IGF2YWlsYWJsZSBwb3NpdGlvbiAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJhbGlnbkN1cnNvclwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFsaWduQ3Vyc29yKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyh0aGlzLmN1cnNvclBvcywgRElSRUNUSU9OLkxFRlQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBBbGlnbnMgY3Vyc29yIG9ubHkgaWYgc2VsZWN0aW9uIGlzIGVtcHR5ICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImFsaWduQ3Vyc29yRnJpZW5kbHlcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbGlnbkN1cnNvckZyaWVuZGx5KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICE9PSB0aGlzLmN1cnNvclBvcykgcmV0dXJuOyAvLyBza2lwIGlmIHJhbmdlIGlzIHNlbGVjdGVkXG5cbiAgICAgICAgICAgICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogQWRkcyBsaXN0ZW5lciBvbiBjdXN0b20gZXZlbnQgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwib25cIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldiwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgdGhpcy5fbGlzdGVuZXJzW2V2XSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2XS5wdXNoKGhhbmRsZXIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogUmVtb3ZlcyBjdXN0b20gZXZlbnQgbGlzdGVuZXIgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwib2ZmXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2LCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSByZXR1cm4gdGhpcztcblxuICAgICAgICAgICAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGhJbmRleCA9IHRoaXMuX2xpc3RlbmVyc1tldl0uaW5kZXhPZihoYW5kbGVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChoSW5kZXggPj0gMCkgdGhpcy5fbGlzdGVuZXJzW2V2XS5zcGxpY2UoaEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiBIYW5kbGVzIHZpZXcgaW5wdXQgZXZlbnQgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX29uSW5wdXRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25JbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5wdXRFdmVudCA9IGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpOyAvLyBmaXggc3RyYW5nZSBJRSBiZWhhdmlvclxuXG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3NlbGVjdGlvbikgcmV0dXJuIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGV0YWlscyA9IG5ldyBBY3Rpb25EZXRhaWxzKCAvLyBuZXcgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC52YWx1ZSwgdGhpcy5jdXJzb3JQb3MsIC8vIG9sZCBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlLCB0aGlzLl9zZWxlY3Rpb24pO1xuICAgICAgICAgICAgICAgIHZhciBvbGRSYXdWYWx1ZSA9IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMubWFza2VkLnNwbGljZShkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zLCBkZXRhaWxzLnJlbW92ZWQubGVuZ3RoLCBkZXRhaWxzLmluc2VydGVkLCBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmF3OiB0cnVlXG4gICAgICAgICAgICAgICAgfSkub2Zmc2V0OyAvLyBmb3JjZSBhbGlnbiBpbiByZW1vdmUgZGlyZWN0aW9uIG9ubHkgaWYgbm8gaW5wdXQgY2hhcnMgd2VyZSByZW1vdmVkXG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHdlIHN0aWxsIG5lZWQgdG8gYWxpZ24gd2l0aCBOT05FICh0byBnZXQgb3V0IGZyb20gZml4ZWQgc3ltYm9scyBmb3IgaW5zdGFuY2UpXG5cbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlRGlyZWN0aW9uID0gb2xkUmF3VmFsdWUgPT09IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWUgPyBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbiA6IERJUkVDVElPTi5OT05FO1xuICAgICAgICAgICAgICAgIHZhciBjdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3MoZGV0YWlscy5zdGFydENoYW5nZVBvcyArIG9mZnNldCwgcmVtb3ZlRGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlRGlyZWN0aW9uICE9PSBESVJFQ1RJT04uTk9ORSkgY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgRElSRUNUSU9OLk5PTkUpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ3Vyc29yKGN1cnNvclBvcyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2lucHV0RXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogSGFuZGxlcyB2aWV3IGNoYW5nZSBldmVudCBhbmQgY29tbWl0cyBtb2RlbCB2YWx1ZSAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfb25DaGFuZ2VcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25DaGFuZ2UoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9zYXZlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogSGFuZGxlcyB2aWV3IGRyb3AgZXZlbnQsIHByZXZlbnRzIGJ5IGRlZmF1bHQgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX29uRHJvcFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRyb3AoZXYpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIFJlc3RvcmUgbGFzdCBzZWxlY3Rpb24gb24gZm9jdXMgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX29uRm9jdXNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Gb2N1cyhldikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIFJlc3RvcmUgbGFzdCBzZWxlY3Rpb24gb24gZm9jdXMgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX29uQ2xpY2tcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25DbGljayhldikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIFVuYmluZCB2aWV3IGV2ZW50cyBhbmQgcmVtb3ZlcyBlbGVtZW50IHJlZmVyZW5jZSAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bmJpbmRFdmVudHMoKTsgLy8gJEZsb3dGaXhNZSB3aHkgbm90IGRvIHNvP1xuXG5cbiAgICAgICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnMubGVuZ3RoID0gMDsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gSW5wdXRNYXNrO1xuICAgIH0oKTtcbiAgICBJTWFzay5JbnB1dE1hc2sgPSBJbnB1dE1hc2s7XG5cbiAgICAvKiogUGF0dGVybiB3aGljaCB2YWxpZGF0ZXMgZW51bSB2YWx1ZXMgKi9cblxuICAgIHZhciBNYXNrZWRFbnVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xuICAgICAgICBfaW5oZXJpdHMoTWFza2VkRW51bSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gICAgICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRW51bSk7XG5cbiAgICAgICAgZnVuY3Rpb24gTWFza2VkRW51bSgpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRFbnVtKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKE1hc2tlZEVudW0sIFt7XG4gICAgICAgICAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0cy5lbnVtKSBvcHRzLm1hc2sgPSAnKicucmVwZWF0KG9wdHMuZW51bVswXS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZEVudW0ucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgX2dldDI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbnVtLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuaW5kZXhPZihfdGhpcy51bm1hc2tlZFZhbHVlKSA+PSAwO1xuICAgICAgICAgICAgICAgIH0pICYmIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZEVudW0ucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBNYXNrZWRFbnVtO1xuICAgIH0oTWFza2VkUGF0dGVybik7XG4gICAgSU1hc2suTWFza2VkRW51bSA9IE1hc2tlZEVudW07XG5cbiAgICAvKipcbiAgICAgTnVtYmVyIG1hc2tcbiAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgQHBhcmFtIHtzdHJpbmd9IG9wdHMucmFkaXggLSBTaW5nbGUgY2hhclxuICAgICBAcGFyYW0ge3N0cmluZ30gb3B0cy50aG91c2FuZHNTZXBhcmF0b3IgLSBTaW5nbGUgY2hhclxuICAgICBAcGFyYW0ge0FycmF5PHN0cmluZz59IG9wdHMubWFwVG9SYWRpeCAtIEFycmF5IG9mIHNpbmdsZSBjaGFyc1xuICAgICBAcGFyYW0ge251bWJlcn0gb3B0cy5taW5cbiAgICAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWF4XG4gICAgIEBwYXJhbSB7bnVtYmVyfSBvcHRzLnNjYWxlIC0gRGlnaXRzIGFmdGVyIHBvaW50XG4gICAgIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5zaWduZWQgLSBBbGxvdyBuZWdhdGl2ZVxuICAgICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMubm9ybWFsaXplWmVyb3MgLSBGbGFnIHRvIHJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB6ZXJvcyBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcbiAgICAgQHBhcmFtIHtib29sZWFufSBvcHRzLnBhZEZyYWN0aW9uYWxaZXJvcyAtIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZ1xuICAgICAqL1xuICAgIHZhciBNYXNrZWROdW1iZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgICAgICAgX2luaGVyaXRzKE1hc2tlZE51bWJlciwgX01hc2tlZCk7XG5cbiAgICAgICAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihNYXNrZWROdW1iZXIpO1xuXG4gICAgICAgIC8qKiBTaW5nbGUgY2hhciAqL1xuXG4gICAgICAgIC8qKiBTaW5nbGUgY2hhciAqL1xuXG4gICAgICAgIC8qKiBBcnJheSBvZiBzaW5nbGUgY2hhcnMgKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogKi9cblxuICAgICAgICAvKiogRGlnaXRzIGFmdGVyIHBvaW50ICovXG5cbiAgICAgICAgLyoqICovXG5cbiAgICAgICAgLyoqIEZsYWcgdG8gcmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHplcm9zIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gICAgICAgIC8qKiBGbGFnIHRvIHBhZCB0cmFpbGluZyB6ZXJvcyBhZnRlciBwb2ludCBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cbiAgICAgICAgZnVuY3Rpb24gTWFza2VkTnVtYmVyKG9wdHMpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWROdW1iZXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkTnVtYmVyLkRFRkFVTFRTLCBvcHRzKSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICovXG5cblxuICAgICAgICBfY3JlYXRlQ2xhc3MoTWFza2VkTnVtYmVyLCBbe1xuICAgICAgICAgICAga2V5OiBcIl91cGRhdGVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgICAgICAgICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVSZWdFeHBzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX3VwZGF0ZVJlZ0V4cHNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlUmVnRXhwcygpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgZGlmZmVyZW50IHJlZ2V4cCB0byBwcm9jZXNzIHVzZXIgaW5wdXQgKG1vcmUgc3RyaWN0LCBpbnB1dCBzdWZmaXgpIGFuZCB0YWlsIHNoaWZ0aW5nXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gJ14nICsgKHRoaXMuYWxsb3dOZWdhdGl2ZSA/ICdbK3xcXFxcLV0/JyA6ICcnKTtcbiAgICAgICAgICAgICAgICB2YXIgbWlkSW5wdXQgPSAnKDB8KFsxLTldK1xcXFxkKikpPyc7XG4gICAgICAgICAgICAgICAgdmFyIG1pZCA9ICdcXFxcZConO1xuICAgICAgICAgICAgICAgIHZhciBlbmQgPSAodGhpcy5zY2FsZSA/ICcoJyArIGVzY2FwZVJlZ0V4cCh0aGlzLnJhZGl4KSArICdcXFxcZHswLCcgKyB0aGlzLnNjYWxlICsgJ30pPycgOiAnJykgKyAnJCc7XG4gICAgICAgICAgICAgICAgdGhpcy5fbnVtYmVyUmVnRXhwSW5wdXQgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgbWlkSW5wdXQgKyBlbmQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX251bWJlclJlZ0V4cCA9IG5ldyBSZWdFeHAoc3RhcnQgKyBtaWQgKyBlbmQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcFRvUmFkaXhSZWdFeHAgPSBuZXcgUmVnRXhwKCdbJyArIHRoaXMubWFwVG9SYWRpeC5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCcnKSArICddJywgJ2cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90aG91c2FuZHNTZXBhcmF0b3JSZWdFeHAgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0aGlzLnRob3VzYW5kc1NlcGFyYXRvciksICdnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTAxMTAyL2hvdy10by1wcmludC1hLW51bWJlci13aXRoLWNvbW1hcy1hcy10aG91c2FuZHMtc2VwYXJhdG9ycy1pbi1qYXZhc2NyaXB0XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQodGhpcy5yYWRpeCk7XG4gICAgICAgICAgICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4odGhpcy5yYWRpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJkb1ByZXBhcmVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoY2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2dldDI7XG5cbiAgICAgICAgICAgICAgICBjaCA9IGNoLnJlcGxhY2UodGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCwgdGhpcy5yYWRpeCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbm9TZXBDaCA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoY2gpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgX25vcm1hbGl6ZVByZXBhcmUgPSBub3JtYWxpemVQcmVwYXJlKChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvUHJlcGFyZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXMsIG5vU2VwQ2hdLmNvbmNhdChhcmdzKSkpLFxuICAgICAgICAgICAgICAgICAgICBfbm9ybWFsaXplUHJlcGFyZTIgPSBfc2xpY2VkVG9BcnJheShfbm9ybWFsaXplUHJlcGFyZSwgMiksXG4gICAgICAgICAgICAgICAgICAgIHByZXBDaCA9IF9ub3JtYWxpemVQcmVwYXJlMlswXSxcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscyA9IF9ub3JtYWxpemVQcmVwYXJlMlsxXTtcblxuICAgICAgICAgICAgICAgIGlmIChjaCAmJiAhbm9TZXBDaCkgZGV0YWlscy5za2lwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3ByZXBDaCwgZGV0YWlsc107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX3NlcGFyYXRvcnNDb3VudFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXBhcmF0b3JzQ291bnQodG8pIHtcbiAgICAgICAgICAgICAgICB2YXIgZXh0ZW5kT25TZXBhcmF0b3JzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcG9zID0gMDsgcG9zIDwgdG87ICsrcG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl92YWx1ZS5pbmRleE9mKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrY291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZW5kT25TZXBhcmF0b3JzKSB0byArPSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VwYXJhdG9yc0NvdW50KHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoc2xpY2UpLmxlbmd0aCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgICAgICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQgPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMkX2FkanVzdFJhbmdlV2l0LCAyKTtcblxuICAgICAgICAgICAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyWzBdO1xuICAgICAgICAgICAgICAgIHRvUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0MlsxXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJleHRyYWN0SW5wdXRcIiwgdGhpcykuY2FsbCh0aGlzLCBmcm9tUG9zLCB0b1BvcywgZmxhZ3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfYXBwZW5kQ2hhclJhd1wiLCB0aGlzKS5jYWxsKHRoaXMsIGNoLCBmbGFncyk7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZCZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKHByZXZCZWZvcmVUYWlsVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFwcGVuZERldGFpbHMgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfYXBwZW5kQ2hhclJhd1wiLCB0aGlzKS5jYWxsKHRoaXMsIGNoLCBmbGFncyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBiZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgdmFyIGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UoYmVmb3JlVGFpbFZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGFwcGVuZERldGFpbHMudGFpbFNoaWZ0ICs9IChiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IC0gcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQpICogdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGFwcGVuZERldGFpbHMuc2tpcCA9ICFhcHBlbmREZXRhaWxzLnJhd0luc2VydGVkICYmIGNoID09PSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwZW5kRGV0YWlscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfZmluZFNlcGFyYXRvckFyb3VuZFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU2VwYXJhdG9yQXJvdW5kKHBvcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VhcmNoRnJvbSA9IHBvcyAtIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aCArIDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JQb3MgPSB0aGlzLnZhbHVlLmluZGV4T2YodGhpcy50aG91c2FuZHNTZXBhcmF0b3IsIHNlYXJjaEZyb20pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VwYXJhdG9yUG9zIDw9IHBvcykgcmV0dXJuIHNlcGFyYXRvclBvcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9yc1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb20sIHRvKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGZyb20pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPj0gMCkgZnJvbSA9IHNlcGFyYXRvckFyb3VuZEZyb21Qb3M7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2VwYXJhdG9yQXJvdW5kVG9Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKHRvKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBcm91bmRUb1BvcyA+PSAwKSB0byA9IHNlcGFyYXRvckFyb3VuZFRvUG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJldHVybiBbZnJvbSwgdG9dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgICAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICAgICAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0MyA9IHRoaXMuX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbVBvcywgdG9Qb3MpO1xuXG4gICAgICAgICAgICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDQgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRfYWRqdXN0UmFuZ2VXaXQzLCAyKTtcblxuICAgICAgICAgICAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0WzBdO1xuICAgICAgICAgICAgICAgIHRvUG9zID0gX3RoaXMkX2FkanVzdFJhbmdlV2l0NFsxXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVCZWZvcmVQb3MgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUFmdGVyUG9zID0gdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnQodmFsdWVCZWZvcmVQb3MubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlQmVmb3JlUG9zICsgdmFsdWVBZnRlclBvcykpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UodmFsdWVCZWZvcmVQb3MpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgdGFpbFNoaWZ0OiAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikgcmV0dXJuIGN1cnNvclBvcztcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdExlZnRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyAtIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VwYXJhdG9yQXRMZWZ0UG9zID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zID0gc2VwYXJhdG9yQXRMZWZ0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvclBvcyA8IHNlcGFyYXRvckF0TGVmdEVuZFBvcyB8fCB0aGlzLnZhbHVlLmxlbmd0aCA8PSBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRMZWZ0UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdFJpZ2h0UG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChjdXJzb3JQb3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VwYXJhdG9yQXRSaWdodFBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcGFyYXRvckF0UmlnaHRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoZmxhZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVnZXhwID0gZmxhZ3MuaW5wdXQgPyB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA6IHRoaXMuX251bWJlclJlZ0V4cDsgLy8gdmFsaWRhdGUgYXMgc3RyaW5nXG5cbiAgICAgICAgICAgICAgICB2YXIgdmFsaWQgPSByZWdleHAudGVzdCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2YWxpZGF0ZSBhcyBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlciA9IHRoaXMubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHZhbGlkICYmICFpc05hTihudW1iZXIpICYmICggLy8gY2hlY2sgbWluIGJvdW5kIGZvciBuZWdhdGl2ZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPj0gMCB8fCB0aGlzLm1pbiA8PSB0aGlzLm51bWJlcikgJiYgKCAvLyBjaGVjayBtYXggYm91bmQgZm9yIHBvc2l0aXZlIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXggPT0gbnVsbCB8fCB0aGlzLm1heCA8PSAwIHx8IHRoaXMubnVtYmVyIDw9IHRoaXMubWF4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWQgJiYgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIGZsYWdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bWJlciA9IHRoaXMubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWRudW0gPSBudW1iZXI7IC8vIGNoZWNrIGJvdW5kc1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pbiAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWF4KHZhbGlkbnVtLCB0aGlzLm1pbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1heCAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWluKHZhbGlkbnVtLCB0aGlzLm1heCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZG51bSAhPT0gbnVtYmVyKSB0aGlzLnVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsaWRudW0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9ybWFsaXplWmVyb3MpIGZvcm1hdHRlZCA9IHRoaXMuX25vcm1hbGl6ZVplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZEZyYWN0aW9uYWxaZXJvcyAmJiB0aGlzLnNjYWxlID4gMCkgZm9ybWF0dGVkID0gdGhpcy5fcGFkRnJhY3Rpb25hbFplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybWF0dGVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvQ29tbWl0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX25vcm1hbGl6ZVplcm9zXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX25vcm1hbGl6ZVplcm9zKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRzID0gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkuc3BsaXQodGhpcy5yYWRpeCk7IC8vIHJlbW92ZSBsZWFkaW5nIHplcm9zXG5cblxuICAgICAgICAgICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXihcXEQqKSgwKikoXFxkKikvLCBmdW5jdGlvbiAobWF0Y2gsIHNpZ24sIHplcm9zLCBudW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpZ24gKyBudW07XG4gICAgICAgICAgICAgICAgfSk7IC8vIGFkZCBsZWFkaW5nIHplcm9cblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggJiYgIS9cXGQkLy50ZXN0KHBhcnRzWzBdKSkgcGFydHNbMF0gPSBwYXJ0c1swXSArICcwJztcblxuICAgICAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucmVwbGFjZSgvMCokLywgJycpOyAvLyByZW1vdmUgdHJhaWxpbmcgemVyb3NcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcnRzWzFdLmxlbmd0aCkgcGFydHMubGVuZ3RoID0gMTsgLy8gcmVtb3ZlIGZyYWN0aW9uYWxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyhwYXJ0cy5qb2luKHRoaXMucmFkaXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfcGFkRnJhY3Rpb25hbFplcm9zXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3BhZEZyYWN0aW9uYWxaZXJvcyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICAgICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoIDwgMikgcGFydHMucHVzaCgnJyk7XG4gICAgICAgICAgICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5wYWRFbmQodGhpcy5zY2FsZSwgJzAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX25vcm1hbGl6ZVplcm9zKHRoaXMudmFsdWUpKS5yZXBsYWNlKHRoaXMucmFkaXgsICcuJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodW5tYXNrZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgdW5tYXNrZWRWYWx1ZS5yZXBsYWNlKCcuJywgdGhpcy5yYWRpeCksIHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLnVubWFza2VkVmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KG4pIHtcbiAgICAgICAgICAgICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIFN0cmluZyhuKSwgdGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogUGFyc2VkIE51bWJlciAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJudW1iZXJcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGVkVmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQobnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlZFZhbHVlID0gbnVtYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgSXMgbmVnYXRpdmUgYWxsb3dlZFxuICAgICAgICAgICAgIEByZWFkb25seVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImFsbG93TmVnYXRpdmVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25lZCB8fCB0aGlzLm1pbiAhPSBudWxsICYmIHRoaXMubWluIDwgMCB8fCB0aGlzLm1heCAhPSBudWxsICYmIHRoaXMubWF4IDwgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInR5cGVkVmFsdWVFcXVhbHNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBlZFZhbHVlRXF1YWxzKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlICAwIC0+ICcnIGNhc2UgKHR5cGVkID0gMCBldmVuIGlmIHZhbHVlID0gJycpXG4gICAgICAgICAgICAgICAgLy8gZm9yIGRldGFpbHMgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91Tm1Bbk5lUi9pbWFza2pzL2lzc3Vlcy8xMzRcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcInR5cGVkVmFsdWVFcXVhbHNcIiwgdGhpcykuY2FsbCh0aGlzLCB2YWx1ZSkgfHwgTWFza2VkTnVtYmVyLkVNUFRZX1ZBTFVFUy5pbmNsdWRlcyh2YWx1ZSkgJiYgTWFza2VkTnVtYmVyLkVNUFRZX1ZBTFVFUy5pbmNsdWRlcyh0aGlzLnR5cGVkVmFsdWUpKSAmJiAhKHZhbHVlID09PSAwICYmIHRoaXMudmFsdWUgPT09ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBNYXNrZWROdW1iZXI7XG4gICAgfShNYXNrZWQpO1xuICAgIE1hc2tlZE51bWJlci5ERUZBVUxUUyA9IHtcbiAgICAgICAgcmFkaXg6ICcsJyxcbiAgICAgICAgdGhvdXNhbmRzU2VwYXJhdG9yOiAnJyxcbiAgICAgICAgbWFwVG9SYWRpeDogWycuJ10sXG4gICAgICAgIHNjYWxlOiAyLFxuICAgICAgICBzaWduZWQ6IGZhbHNlLFxuICAgICAgICBub3JtYWxpemVaZXJvczogdHJ1ZSxcbiAgICAgICAgcGFkRnJhY3Rpb25hbFplcm9zOiBmYWxzZVxuICAgIH07XG4gICAgTWFza2VkTnVtYmVyLkVNUFRZX1ZBTFVFUyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoTWFza2VkLkVNUFRZX1ZBTFVFUyksIFswXSk7XG4gICAgSU1hc2suTWFza2VkTnVtYmVyID0gTWFza2VkTnVtYmVyO1xuXG4gICAgLyoqIE1hc2tpbmcgYnkgY3VzdG9tIEZ1bmN0aW9uICovXG5cbiAgICB2YXIgTWFza2VkRnVuY3Rpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgICAgICAgX2luaGVyaXRzKE1hc2tlZEZ1bmN0aW9uLCBfTWFza2VkKTtcblxuICAgICAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKE1hc2tlZEZ1bmN0aW9uKTtcblxuICAgICAgICBmdW5jdGlvbiBNYXNrZWRGdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9jcmVhdGVDbGFzcyhNYXNrZWRGdW5jdGlvbiwgW3tcbiAgICAgICAgICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRzLm1hc2spIG9wdHMudmFsaWRhdGUgPSBvcHRzLm1hc2s7XG5cbiAgICAgICAgICAgICAgICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRnVuY3Rpb24ucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIE1hc2tlZEZ1bmN0aW9uO1xuICAgIH0oTWFza2VkKTtcbiAgICBJTWFzay5NYXNrZWRGdW5jdGlvbiA9IE1hc2tlZEZ1bmN0aW9uO1xuXG4gICAgdmFyIF9leGNsdWRlZCA9IFtcImNvbXBpbGVkTWFza3NcIiwgXCJjdXJyZW50TWFza1JlZlwiLCBcImN1cnJlbnRNYXNrXCJdO1xuXG4gICAgLyoqIER5bmFtaWMgbWFzayBmb3IgY2hvb3NpbmcgYXByb3ByaWF0ZSBtYXNrIGluIHJ1bi10aW1lICovXG4gICAgdmFyIE1hc2tlZER5bmFtaWMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgICAgICAgX2luaGVyaXRzKE1hc2tlZER5bmFtaWMsIF9NYXNrZWQpO1xuXG4gICAgICAgIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWFza2VkRHluYW1pYyk7XG5cbiAgICAgICAgLyoqIEN1cnJlbnRseSBjaG9zZW4gbWFzayAqL1xuXG4gICAgICAgIC8qKiBDb21wbGlsZWQge0BsaW5rIE1hc2tlZH0gb3B0aW9ucyAqL1xuXG4gICAgICAgIC8qKiBDaG9vc2VzIHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBpbnB1dCB2YWx1ZSAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIE1hc2tlZER5bmFtaWMob3B0cykge1xuICAgICAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRHluYW1pYyk7XG5cbiAgICAgICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRHluYW1pYy5ERUZBVUxUUywgb3B0cykpO1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudE1hc2sgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKE1hc2tlZER5bmFtaWMsIFt7XG4gICAgICAgICAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgICAgICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJ21hc2snIGluIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFzayBjb3VsZCBiZSB0b3RhbGx5IGR5bmFtaWMgd2l0aCBvbmx5IGBkaXNwYXRjaGAgb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGlsZWRNYXNrcyA9IEFycmF5LmlzQXJyYXkob3B0cy5tYXNrKSA/IG9wdHMubWFzay5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVNYXNrKG0pO1xuICAgICAgICAgICAgICAgICAgICB9KSA6IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICAgICAgICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBseURpc3BhdGNoKGNoLCBmbGFncyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRDaGFyKGNoLCB0aGlzLmN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJfYXBwbHlEaXNwYXRjaFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBseURpc3BhdGNoKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcHBlbmRlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgICAgICAgICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgICAgICAgICB2YXIgcHJldlZhbHVlQmVmb3JlVGFpbCA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gdGhpcy5yYXdJbnB1dFZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBpbnNlcnRWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gLy8gJEZsb3dGaXhNZSAtIHRpcmVkIHRvIGZpZ2h0IHdpdGggdHlwZSBzeXN0ZW1cbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fcmF3SW5wdXRWYWx1ZSA6IGlucHV0VmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHRhaWxWYWx1ZSA9IGlucHV0VmFsdWUuc2xpY2UoaW5zZXJ0VmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJldk1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrO1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJldk1hc2tTdGF0ZSA9IHByZXZNYXNrID09PSBudWxsIHx8IHByZXZNYXNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcmV2TWFzay5zdGF0ZTsgLy8gY2xvbmUgZmxhZ3MgdG8gcHJldmVudCBvdmVyd3JpdGluZyBgX2JlZm9yZVRhaWxTdGF0ZWBcblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1hc2sgPSB0aGlzLmRvRGlzcGF0Y2goYXBwZW5kZWQsIE9iamVjdC5hc3NpZ24oe30sIGZsYWdzKSk7IC8vIHJlc3RvcmUgc3RhdGUgYWZ0ZXIgZGlzcGF0Y2hcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrICE9PSBwcmV2TWFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgbWFzayBjaGFuZ2VkIHJlYXBwbHkgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuY3VycmVudE1hc2suYXBwZW5kKGluc2VydFZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ID0gZC5pbnNlcnRlZC5sZW5ndGggLSBwcmV2VmFsdWVCZWZvcmVUYWlsLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhaWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICRGbG93Rml4TWUgLSBpdCdzIG9rLCB3ZSBkb24ndCBjaGFuZ2UgY3VycmVudCBtYXNrIGFib3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5jdXJyZW50TWFzay5hcHBlbmQodGFpbFZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRhaWxTaGlmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc3BhdGNoIGNhbiBkbyBzb21ldGhpbmcgYmFkIHdpdGggc3RhdGUsIHNvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXN0b3JlIHByZXYgbWFzayBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IHByZXZNYXNrU3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2suX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiX2FwcGVuZEVhZ2VyXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZEVhZ2VyKCkge1xuICAgICAgICAgICAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGhpcy5jdXJyZW50TWFzay5fYXBwZW5kRWFnZXIoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJjdXJyZW50TWFza0ZsYWdzXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3VycmVudE1hc2tGbGFncyhmbGFncykge1xuICAgICAgICAgICAgICAgIHZhciBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEsIF9mbGFncyRfYmVmb3JlVGFpbFN0YTI7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZmxhZ3MsIHtcbiAgICAgICAgICAgICAgICAgICAgX2JlZm9yZVRhaWxTdGF0ZTogKChfZmxhZ3MkX2JlZm9yZVRhaWxTdGEgPSBmbGFncy5fYmVmb3JlVGFpbFN0YXRlKSA9PT0gbnVsbCB8fCBfZmxhZ3MkX2JlZm9yZVRhaWxTdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mbGFncyRfYmVmb3JlVGFpbFN0YS5jdXJyZW50TWFza1JlZikgPT09IHRoaXMuY3VycmVudE1hc2sgJiYgKChfZmxhZ3MkX2JlZm9yZVRhaWxTdGEyID0gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSkgPT09IG51bGwgfHwgX2ZsYWdzJF9iZWZvcmVUYWlsU3RhMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ZsYWdzJF9iZWZvcmVUYWlsU3RhMi5jdXJyZW50TWFzaykgfHwgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiZG9EaXNwYXRjaFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvRGlzcGF0Y2goYXBwZW5kZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKGFwcGVuZGVkLCB0aGlzLCBmbGFncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZShmbGFncykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIGZsYWdzKSAmJiAoIXRoaXMuY3VycmVudE1hc2sgfHwgdGhpcy5jdXJyZW50TWFzay5kb1ZhbGlkYXRlKHRoaXMuY3VycmVudE1hc2tGbGFncyhmbGFncykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICAgICAgICAgICAgdmFyIF9ub3JtYWxpemVQcmVwYXJlID0gbm9ybWFsaXplUHJlcGFyZShfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZG9QcmVwYXJlXCIsIHRoaXMpLmNhbGwodGhpcywgc3RyLCBmbGFncykpLFxuICAgICAgICAgICAgICAgICAgICBfbm9ybWFsaXplUHJlcGFyZTIgPSBfc2xpY2VkVG9BcnJheShfbm9ybWFsaXplUHJlcGFyZSwgMiksXG4gICAgICAgICAgICAgICAgICAgIHMgPSBfbm9ybWFsaXplUHJlcGFyZTJbMF0sXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMgPSBfbm9ybWFsaXplUHJlcGFyZTJbMV07XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudERldGFpbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIF9ub3JtYWxpemVQcmVwYXJlMyA9IG5vcm1hbGl6ZVByZXBhcmUoX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImRvUHJlcGFyZVwiLCB0aGlzKS5jYWxsKHRoaXMsIHMsIHRoaXMuY3VycmVudE1hc2tGbGFncyhmbGFncykpKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgX25vcm1hbGl6ZVByZXBhcmU0ID0gX3NsaWNlZFRvQXJyYXkoX25vcm1hbGl6ZVByZXBhcmUzLCAyKTtcblxuICAgICAgICAgICAgICAgICAgICBzID0gX25vcm1hbGl6ZVByZXBhcmU0WzBdO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGV0YWlscyA9IF9ub3JtYWxpemVQcmVwYXJlNFsxXTtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscyA9IGRldGFpbHMuYWdncmVnYXRlKGN1cnJlbnREZXRhaWxzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gW3MsIGRldGFpbHNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwicmVzZXRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s7XG5cbiAgICAgICAgICAgICAgICAoX3RoaXMkY3VycmVudE1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrKSA9PT0gbnVsbCB8fCBfdGhpcyRjdXJyZW50TWFzayA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkY3VycmVudE1hc2sucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwidmFsdWVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay52YWx1ZSA6ICcnO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInZhbHVlXCIsIHZhbHVlLCB0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay51bm1hc2tlZFZhbHVlIDogJyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodW5tYXNrZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUsIHRoaXMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgOiAnJztcbiAgICAgICAgICAgIH0gLy8gcHJvYmFibHkgdHlwZWRWYWx1ZSBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBkeW5hbWljXG4gICAgICAgICAgICAsXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciB1bm1hc2tlZFZhbHVlID0gU3RyaW5nKHZhbHVlKTsgLy8gZG91YmxlIGNoZWNrIGl0XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdW5tYXNrZWRWYWx1ZSA9IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrMjtcblxuICAgICAgICAgICAgICAgIHJldHVybiBCb29sZWFuKChfdGhpcyRjdXJyZW50TWFzazIgPSB0aGlzLmN1cnJlbnRNYXNrKSA9PT0gbnVsbCB8fCBfdGhpcyRjdXJyZW50TWFzazIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGN1cnJlbnRNYXNrMi5pc0NvbXBsZXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImlzRmlsbGVkXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2szO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4oKF90aGlzJGN1cnJlbnRNYXNrMyA9IHRoaXMuY3VycmVudE1hc2spID09PSBudWxsIHx8IF90aGlzJGN1cnJlbnRNYXNrMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkY3VycmVudE1hc2szLmlzRmlsbGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInJlbW92ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s0O1xuXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKChfdGhpcyRjdXJyZW50TWFzazQgPSB0aGlzLmN1cnJlbnRNYXNrKS5yZW1vdmUuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s0LCBhcmd1bWVudHMpKSAvLyB1cGRhdGUgd2l0aCBkaXNwYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBseURpc3BhdGNoKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwic3RhdGVcIixcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInN0YXRlXCIsIHRoaXMpLCB7XG4gICAgICAgICAgICAgICAgICAgIF9yYXdJbnB1dFZhbHVlOiB0aGlzLnJhd0lucHV0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBpbGVkTWFza3M6IHRoaXMuY29tcGlsZWRNYXNrcy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtLnN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1hc2tSZWY6IHRoaXMuY3VycmVudE1hc2ssXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNYXNrOiAoX3RoaXMkY3VycmVudE1hc2s1ID0gdGhpcy5jdXJyZW50TWFzaykgPT09IG51bGwgfHwgX3RoaXMkY3VycmVudE1hc2s1ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRjdXJyZW50TWFzazUuc3RhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBjb21waWxlZE1hc2tzID0gc3RhdGUuY29tcGlsZWRNYXNrcyxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1hc2tSZWYgPSBzdGF0ZS5jdXJyZW50TWFza1JlZixcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1hc2sgPSBzdGF0ZS5jdXJyZW50TWFzayxcbiAgICAgICAgICAgICAgICAgICAgbWFza2VkU3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIF9leGNsdWRlZCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChmdW5jdGlvbiAobSwgbWkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0uc3RhdGUgPSBjb21waWxlZE1hc2tzW21pXTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TWFza1JlZiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1hc2sgPSBjdXJyZW50TWFza1JlZjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5zdGF0ZSA9IGN1cnJlbnRNYXNrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCBtYXNrZWRTdGF0ZSwgdGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICBAb3ZlcnJpZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNjtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrNiA9IHRoaXMuY3VycmVudE1hc2spLmV4dHJhY3RJbnB1dC5hcHBseShfdGhpcyRjdXJyZW50TWFzazYsIGFyZ3VtZW50cykgOiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNywgX2dldDI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazcgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRjdXJyZW50TWFzazcsIGFyZ3MpIDogKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImV4dHJhY3RUYWlsXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHRoaXMuY3VycmVudE1hc2suZG9Db21taXQoKTtcblxuICAgICAgICAgICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazgsIF9nZXQzO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazggPSB0aGlzLmN1cnJlbnRNYXNrKS5uZWFyZXN0SW5wdXRQb3MuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s4LCBhcmdzKSA6IChfZ2V0MyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJuZWFyZXN0SW5wdXRQb3NcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDMsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwib3ZlcndyaXRlXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sub3ZlcndyaXRlIDogX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIm92ZXJ3cml0ZVwiLCB0aGlzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChvdmVyd3JpdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1wib3ZlcndyaXRlXCIgb3B0aW9uIGlzIG5vdCBhdmFpbGFibGUgaW4gZHluYW1pYyBtYXNrLCB1c2UgdGhpcyBvcHRpb24gaW4gc2libGluZ3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcImVhZ2VyXCIsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2suZWFnZXIgOiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZWFnZXJcIiwgdGhpcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoZWFnZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1wiZWFnZXJcIiBvcHRpb24gaXMgbm90IGF2YWlsYWJsZSBpbiBkeW5hbWljIG1hc2ssIHVzZSB0aGlzIG9wdGlvbiBpbiBzaWJsaW5ncycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgQG92ZXJyaWRlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBrZXk6IFwibWFza0VxdWFsc1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tFcXVhbHMobWFzaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KG1hc2spICYmIHRoaXMuY29tcGlsZWRNYXNrcy5ldmVyeShmdW5jdGlvbiAobSwgbWkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9tYXNrJG1pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtLm1hc2tFcXVhbHMoKF9tYXNrJG1pID0gbWFza1ttaV0pID09PSBudWxsIHx8IF9tYXNrJG1pID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbWFzayRtaS5tYXNrKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgIEBvdmVycmlkZVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiBcInR5cGVkVmFsdWVFcXVhbHNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBlZFZhbHVlRXF1YWxzKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrOTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBCb29sZWFuKChfdGhpcyRjdXJyZW50TWFzazkgPSB0aGlzLmN1cnJlbnRNYXNrKSA9PT0gbnVsbCB8fCBfdGhpcyRjdXJyZW50TWFzazkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGN1cnJlbnRNYXNrOS50eXBlZFZhbHVlRXF1YWxzKHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gTWFza2VkRHluYW1pYztcbiAgICB9KE1hc2tlZCk7XG4gICAgTWFza2VkRHluYW1pYy5ERUZBVUxUUyA9IHtcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFwcGVuZGVkLCBtYXNrZWQsIGZsYWdzKSB7XG4gICAgICAgICAgICBpZiAoIW1hc2tlZC5jb21waWxlZE1hc2tzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBtYXNrZWQucmF3SW5wdXRWYWx1ZTsgLy8gc2ltdWxhdGUgaW5wdXRcblxuICAgICAgICAgICAgdmFyIGlucHV0cyA9IG1hc2tlZC5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgbS5hcHBlbmQoaW5wdXRWYWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICByYXc6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtLmFwcGVuZChhcHBlbmRlZCwgbWFza2VkLmN1cnJlbnRNYXNrRmxhZ3MoZmxhZ3MpKTtcbiAgICAgICAgICAgICAgICB2YXIgd2VpZ2h0ID0gbS5yYXdJbnB1dFZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IHdlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pOyAvLyBwb3AgbWFza3Mgd2l0aCBsb25nZXIgdmFsdWVzIGZpcnN0XG5cbiAgICAgICAgICAgIGlucHV0cy5zb3J0KGZ1bmN0aW9uIChpMSwgaTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTIud2VpZ2h0IC0gaTEud2VpZ2h0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWFza2VkLmNvbXBpbGVkTWFza3NbaW5wdXRzWzBdLmluZGV4XTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSU1hc2suTWFza2VkRHluYW1pYyA9IE1hc2tlZER5bmFtaWM7XG5cbiAgICAvKiogTWFzayBwaXBlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gdHlwZXMgKi9cblxuICAgIHZhciBQSVBFX1RZUEUgPSB7XG4gICAgICAgIE1BU0tFRDogJ3ZhbHVlJyxcbiAgICAgICAgVU5NQVNLRUQ6ICd1bm1hc2tlZFZhbHVlJyxcbiAgICAgICAgVFlQRUQ6ICd0eXBlZFZhbHVlJ1xuICAgIH07XG4gICAgLyoqIENyZWF0ZXMgbmV3IHBpcGUgZnVuY3Rpb24gZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSwgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBvcHRpb25zICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQaXBlKG1hc2spIHtcbiAgICAgICAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFBJUEVfVFlQRS5NQVNLRUQ7XG4gICAgICAgIHZhciB0byA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogUElQRV9UWVBFLk1BU0tFRDtcbiAgICAgICAgdmFyIG1hc2tlZCA9IGNyZWF0ZU1hc2sobWFzayk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXNrZWQucnVuSXNvbGF0ZWQoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICBtW2Zyb21dID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1bdG9dO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKiBQaXBlcyB2YWx1ZSB0aHJvdWdoIG1hc2sgZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSwgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBvcHRpb25zICovXG5cbiAgICBmdW5jdGlvbiBwaXBlKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwaXBlQXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBwaXBlQXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlUGlwZS5hcHBseSh2b2lkIDAsIHBpcGVBcmdzKSh2YWx1ZSk7XG4gICAgfVxuICAgIElNYXNrLlBJUEVfVFlQRSA9IFBJUEVfVFlQRTtcbiAgICBJTWFzay5jcmVhdGVQaXBlID0gY3JlYXRlUGlwZTtcbiAgICBJTWFzay5waXBlID0gcGlwZTtcblxuICAgIHRyeSB7XG4gICAgICAgIGdsb2JhbFRoaXMuSU1hc2sgPSBJTWFzaztcbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgZXhwb3J0cy5IVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQgPSBIVE1MQ29udGVudGVkaXRhYmxlTWFza0VsZW1lbnQ7XG4gICAgZXhwb3J0cy5IVE1MTWFza0VsZW1lbnQgPSBIVE1MTWFza0VsZW1lbnQ7XG4gICAgZXhwb3J0cy5JbnB1dE1hc2sgPSBJbnB1dE1hc2s7XG4gICAgZXhwb3J0cy5NYXNrRWxlbWVudCA9IE1hc2tFbGVtZW50O1xuICAgIGV4cG9ydHMuTWFza2VkID0gTWFza2VkO1xuICAgIGV4cG9ydHMuTWFza2VkRGF0ZSA9IE1hc2tlZERhdGU7XG4gICAgZXhwb3J0cy5NYXNrZWREeW5hbWljID0gTWFza2VkRHluYW1pYztcbiAgICBleHBvcnRzLk1hc2tlZEVudW0gPSBNYXNrZWRFbnVtO1xuICAgIGV4cG9ydHMuTWFza2VkRnVuY3Rpb24gPSBNYXNrZWRGdW5jdGlvbjtcbiAgICBleHBvcnRzLk1hc2tlZE51bWJlciA9IE1hc2tlZE51bWJlcjtcbiAgICBleHBvcnRzLk1hc2tlZFBhdHRlcm4gPSBNYXNrZWRQYXR0ZXJuO1xuICAgIGV4cG9ydHMuTWFza2VkUmFuZ2UgPSBNYXNrZWRSYW5nZTtcbiAgICBleHBvcnRzLk1hc2tlZFJlZ0V4cCA9IE1hc2tlZFJlZ0V4cDtcbiAgICBleHBvcnRzLlBJUEVfVFlQRSA9IFBJUEVfVFlQRTtcbiAgICBleHBvcnRzLmNyZWF0ZU1hc2sgPSBjcmVhdGVNYXNrO1xuICAgIGV4cG9ydHMuY3JlYXRlUGlwZSA9IGNyZWF0ZVBpcGU7XG4gICAgZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBJTWFzaztcbiAgICBleHBvcnRzLnBpcGUgPSBwaXBlO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpOyJdLCJmaWxlIjoibGliL3ZhbGlkYXRpb24vaW1hc2suanMifQ==