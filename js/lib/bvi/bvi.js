/*!
  * Button visually impaired - v1.0.0 https://bvi.isvek.ru
  * Copyright 2014-2021 Oleg Korotenko <bvi@isvek.ru>.
  * Licensed MIT (https://github.com/veks/button-visually-impaired-javascript/blob/master/LICENSE.md)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.isvek = factory());
}(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
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

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var runtime = {exports: {}};

  (function (module) {
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      define(Gp, iteratorSymbol, function () {
        return this;
      });
      define(Gp, "toString", function () {
        return "[object Generator]";
      });

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  })(runtime);

  /**
   * --------------------------------------------------------------------------
   * Button visually impaired (v1.0.0): util/index.js
   * Licensed under MIT (https://github.com/veks/button-visually-impaired-javascript/blob/master/LICENSE.md)
   * --------------------------------------------------------------------------
   */
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('prepend')) {
        return;
      }

      Object.defineProperty(item, 'prepend', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          var argArr = Array.prototype.slice.call(arguments),
              docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if (window.HTMLCollection && !HTMLCollection.prototype.forEach) {
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
  }

  var toType = function toType(obj) {
    if (obj === null || obj === undefined) {
      return "".concat(obj);
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  var isElement = function isElement(obj) {
    if (!obj || _typeof(obj) !== 'object') {
      return false;
    }

    return typeof obj.nodeType !== 'undefined';
  };

  var checkConfig = function checkConfig(config, configTypes, configOptions) {
    Object.keys(configTypes).forEach(function (key) {
      var expectedTypes = configTypes[key];
      var value = config[key];
      var valueType = value && isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError("Bvi console: \u041E\u043F\u0446\u0438\u044F \"".concat(key, "\" \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0442\u0438\u043F \"").concat(valueType, "\", \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0439 \u0442\u0438\u043F \"").concat(expectedTypes, "\"."));
      }
    });
    Object.keys(configOptions).forEach(function (key) {
      var expectedOptions = configOptions[key];
      var value = config[key];

      if (!new RegExp(expectedOptions).test(value)) {
        throw new TypeError("Bvi console: \u041E\u043F\u0446\u0438\u044F \"".concat(key, "\" \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \"").concat(value, "\", \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u044B\u0439 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \"").concat(expectedOptions, "\"."));
      }
    });
  };

  var stringToBoolean = function stringToBoolean(string) {
    switch (string) {
      case 'on':
      case 'true':
      case '1':
        return true;

      default:
        return false;
    }
  };

  var wrapInner = function wrapInner(parent, wrapper, className) {
    if (typeof wrapper === 'string') {
      wrapper = document.createElement(wrapper);
    }

    parent.appendChild(wrapper).className = className;

    while (parent.firstChild !== wrapper) {
      wrapper.appendChild(parent.firstChild);
    }
  };

  var unwrap = function unwrap(wrapper) {
    var docFrag = document.createDocumentFragment();
    if (!wrapper) return;

    while (wrapper.firstChild) {
      var child = wrapper.removeChild(wrapper.firstChild);
      docFrag.appendChild(child);
    }

    wrapper.parentNode.replaceChild(docFrag, wrapper);
  };

  var getObject = function getObject(object, callback) {
    Object.keys(object).forEach(function (key) {
      if (typeof callback === 'function') {
        callback(key);
      }
    });
  };

  var getArray = function getArray(array, callback) {
    Array.from(array).forEach(function (key) {
      if (typeof callback === 'function') {
        callback(key);
      }
    });
  };

  var synth = function synth() {
    return window.speechSynthesis;
  };

  /**
   * --------------------------------------------------------------------------
   * Button visually impaired (v1.0.0): util/cookie.js
   * Licensed under MIT (https://github.com/veks/button-visually-impaired-javascript/blob/master/LICENSE.md)
   * --------------------------------------------------------------------------
   */
  var setCookie = function setCookie() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var now = new Date();
    var time = now.getTime();
    time += 24 * 60 * 60 * 1000;
    now.setTime(time);
    document.cookie = "bvi_".concat(name, "=").concat(value, ",path=/,expires=").concat(now.toUTCString(), ",domain=").concat(location.host, ",SameSite=None,Secure");
  };

  var getCookie = function getCookie() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    name = "bvi_".concat(name, "=");
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookies = decodedCookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      let options=cookie.split(",")
      if (cookie.indexOf(name) !== -1) {
        return options[0].substring(name.length, options[0].length);
      }
    }
     
  };

  var removeCookie = function removeCookie() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    document.cookie = "bvi_".concat(name, "=,path=/,expires=Thu, 01 Jan 1970 00:00:01 GMT,domain=").concat(location.host);
  };

  /**
   * --------------------------------------------------------------------------
   * Button visually impaired (v1.0.0): i18n.js
   * Licensed under MIT (https://github.com/veks/button-visually-impaired-javascript/blob/master/LICENSE.md)
   * --------------------------------------------------------------------------
   */
  var lang = {
    'ru-RU': {
      'text': {
        'fontSize': 'Размер шрифта',
        'siteColors': 'Цвета сайта',
        'images': 'Изображения',
        'speech': 'Синтез речи',
        'settings': 'Настройки',
        'regularVersionOfTheSite': 'Обычная версия сайта',
        'letterSpacing': 'Межбуквенное расстояние',
        'normal': 'Стандартный',
        'average': 'Средний',
        'big': 'Большой',
        'lineHeight': 'Межстрочный интервал',
        'font': 'Шрифт',
        'arial': 'Без засечек',
        'times': 'С засечками',
        'builtElements': 'Встроенные элементы (Видео, карты и тд.)',
        'on': 'Включить',
        'off': 'Выключить',
        'reset': 'Сбросить настройки',
        'plural_0': 'пиксель',
        'plural_1': 'пекселя',
        'plural_2': 'пикселей'
      },
      'voice': {
        'fontSizePlus': 'Размер шрифта увели́чен',
        'fontSizeMinus': 'Размер шрифта уме́ньшен',
        'siteColorBlackOnWhite': 'Цвет сайта черным по белому',
        'siteColorWhiteOnBlack': 'Цвет сайта белым по черному',
        'siteColorDarkBlueOnBlue': 'Цвет сайта тёмно-синим по голубому',
        'siteColorBeigeBrown': 'Цвет сайта кори́чневым по бе́жевому',
        'siteColorGreenOnDarkBrown': 'Цвет сайта зеленым по тёмно-коричневому',
        'imagesOn': 'Изображения включены',
        'imagesOFF': 'Изображения выключены',
        'imagesGrayscale': 'Изображения чёрно-белые',
        'speechOn': 'Синтез речи включён',
        'speechOff': 'Синтез речи вы́ключен',
        'lineHeightNormal': 'Межстрочный интервал стандартный',
        'lineHeightAverage': 'Межстрочный интервал средний',
        'lineHeightBig': 'Межстрочный интервал большой',
        'LetterSpacingNormal': 'Интервал между буквами стандартный',
        'LetterSpacingAverage': 'Интервал между буквами средний',
        'LetterSpacingBig': 'Интервал между буквами большой',
        'fontArial': 'Шрифт без засечек',
        'fontTimes': 'Шрифт с засечками',
        'builtElementsOn': 'Встроенные элементы включены',
        'builtElementsOFF': 'Встроенные элементы выключены',
        'resetSettings': 'Установлены настройки по умолча́нию',
        'panelShow': 'Панель открыта',
        'panelHide': 'Панель скрыта',
        'panelOn': 'Версия сайта для слабови́дящий',
        'panelOff': 'Обычная версия сайта'
      }
    },
    'en-US': {
      'text': {
        'fontSize': 'Font size',
        'siteColors': 'Site colors',
        'images': 'Images',
        'speech': 'Speech synthesis',
        'settings': 'Settings',
        'regularVersionOfTheSite': 'Regular version Of The site',
        'letterSpacing': 'Letter spacing',
        'normal': 'Single',
        'average': 'One and a half',
        'big': 'Double',
        'lineHeight': 'Line spacing',
        'font': 'Font',
        'arial': 'Sans Serif - Arial',
        'times': 'Serif - Times New Roman',
        'builtElements': 'Include inline elements (Videos, maps, etc.)',
        'on': 'Enable',
        'off': 'Disabled',
        'reset': 'Reset settings',
        'plural_0': 'pixel',
        'plural_1': 'pixels',
        'plural_2': 'pixels'
      },
      'voice': {
        'fontSizePlus': 'Font size increased',
        'fontSizeMinus': 'Font size reduced',
        'siteColorBlackOnWhite': 'Site color black on white',
        'siteColorWhiteOnBlack': 'Site color white on black',
        'siteColorDarkBlueOnBlue': 'Site color dark blue on cyan',
        'siteColorBeigeBrown': 'SiteColorBeigeBrown',
        'siteColorGreenOnDarkBrown': 'Site color green on dark brown',
        'imagesOn': 'Images enable',
        'imagesOFF': 'Images disabled',
        'imagesGrayscale': 'Images gray scale',
        'speechOn': 'Synthesis speech enable',
        'speechOff': 'Synthesis speech disabled',
        'lineHeightNormal': 'Line spacing single',
        'lineHeightAverage': 'Line spacing one and a half',
        'lineHeightBig': 'Line spacing double',
        'LetterSpacingNormal': 'Letter spacing single',
        'LetterSpacingAverage': 'Letter spacing one and a half',
        'LetterSpacingBig': 'Letter spacing letter double',
        'fontArial': 'Sans Serif - Arial',
        'fontTimes': 'Serif - Times New Roman',
        'builtElementsOn': 'Include inline elements are enabled',
        'builtElementsOFF': 'Include inline elements are disabled',
        'resetSettings': 'Default settings have been set',
        'panelShow': 'Panel show',
        'panelHide': 'Panel hide',
        'panelOn': 'Site version for visually impaired',
        'panelOff': 'Regular version of the site'
      }
    }
  };

  var I18n = /*#__PURE__*/function () {
    function I18n(options) {
      _classCallCheck(this, I18n);

      this._config = options;
    }

    _createClass(I18n, [{
      key: "t",
      value: function t(key) {
        return lang[this._config.lang]['text'][key];
      }
    }, {
      key: "v",
      value: function v(key) {
        return lang[this._config.lang]['voice'][key];
      }
    }]);

    return I18n;
  }();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var Default = {
    target: '.bvi-open',
    fontSize: 16,
    theme: 'white',
    images: 'grayscale',
    letterSpacing: 'normal',
    lineHeight: 'normal',
    speech: true,
    fontFamily: 'arial',
    builtElements: false,
    panelFixed: true,
    panelHide: false,
    reload: false,
    lang: 'ru-RU'
  };
  var DefaultType = {
    target: 'string',
    fontSize: 'number',
    theme: 'string',
    images: '(string|boolean)',
    letterSpacing: 'string',
    lineHeight: 'string',
    speech: 'boolean',
    fontFamily: 'string',
    builtElements: 'boolean',
    panelFixed: 'boolean',
    panelHide: 'boolean',
    reload: 'boolean',
    lang: 'string'
  };
  var DefaultOptions = {
    target: '',
    fontSize: '(^[1-9]$|^[1-3][0-9]?$|^39$)',
    theme: '(white|black|blue|brown|green)',
    images: '(true|false|grayscale)',
    letterSpacing: '(normal|average|big)',
    lineHeight: '(normal|average|big)',
    speech: '(true|false)',
    fontFamily: '(arial|times)',
    builtElements: '(true|false)',
    panelFixed: '(true|false)',
    panelHide: '(true|false)',
    reload: '(true|false)',
    lang: '(ru-RU|en-US)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Bvi = /*#__PURE__*/function () {
    function Bvi(options) {
      _classCallCheck(this, Bvi);

      this._config = this._getConfig(options);
      this._elements = document.querySelectorAll(this._config.target);
      this._i18n = new I18n({
        lang: this._config.lang
      });

      this._addEventListeners();

      this._init();

      console.log('Bvi console: ready Button visually impaired v1.0.0');
    } // Private


    _createClass(Bvi, [{
      key: "_init",
      value: function _init() {
        getObject(this._config, function (key) {
          if (typeof getCookie(key) === 'undefined') {
            removeCookie('panelActive');
          }
        });

        if (stringToBoolean(getCookie('panelActive'))) {
          this._set();

          this._getPanel();

          this._addEventListenersPanel();

          this._images();

          this._speechPlayer();

          if ('speechSynthesis' in window && stringToBoolean(getCookie('speech'))) {
            setInterval(function () {
              if (synth().pending === false) {
                var play = document.querySelectorAll('.bvi-speech-play');
                var pause = document.querySelectorAll('.bvi-speech-pause');
                var resume = document.querySelectorAll('.bvi-speech-resume');
                var stop = document.querySelectorAll('.bvi-speech-stop');

                var el = function el(elements, callback) {
                  elements.forEach(function (element) {
                    return callback(element);
                  });
                };

                el(play, function (element) {
                  return element.classList.remove('disabled');
                });
                el(pause, function (element) {
                  return element.classList.add('disabled');
                });
                el(resume, function (element) {
                  return element.classList.add('disabled');
                });
                el(stop, function (element) {
                  return element.classList.add('disabled');
                });
              }
            }, 1000);
          }
        } else {
          this._remove();
        }
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this = this;

        if (!this._elements) {
          return false;
        }

        this._elements.forEach(function (element) {
          element.addEventListener('click', function (event) {
            event.preventDefault();
            getObject(_this._config, function (key) {
              return setCookie(key, _this._config[key]);
            });
            setCookie('panelActive', true);

            _this._init();

            _this._speech("".concat(_this._i18n.v('panelOn')));
          });
        });
      }
    }, {
      key: "_addEventListenersPanel",
      value: function _addEventListenersPanel() {
        var _this2 = this;

        var elements = {
          fontSizeMinus: document.querySelector('.bvi-fontSize-minus'),
          fontSizePlus: document.querySelector('.bvi-fontSize-plus'),
          themeWhite: document.querySelector('.bvi-theme-white'),
          themeBlack: document.querySelector('.bvi-theme-black'),
          themeBlue: document.querySelector('.bvi-theme-blue'),
          themeBrown: document.querySelector('.bvi-theme-brown'),
          themeGreen: document.querySelector('.bvi-theme-green'),
          imagesOn: document.querySelector('.bvi-images-on'),
          imagesOff: document.querySelector('.bvi-images-off'),
          imagesGrayscale: document.querySelector('.bvi-images-grayscale'),
          speechOn: document.querySelector('.bvi-speech-on'),
          speechOff: document.querySelector('.bvi-speech-off'),
          lineHeightNormal: document.querySelector('.bvi-line-height-normal'),
          lineHeightAverage: document.querySelector('.bvi-line-height-average'),
          lineHeightBig: document.querySelector('.bvi-line-height-big'),
          letterSpacingNormal: document.querySelector('.bvi-letter-spacing-normal'),
          letterSpacingAverage: document.querySelector('.bvi-letter-spacing-average'),
          letterSpacingBig: document.querySelector('.bvi-letter-spacing-big'),
          fontFamilyArial: document.querySelector('.bvi-font-family-arial'),
          fontFamilyTimes: document.querySelector('.bvi-font-family-times'),
          builtElementsOn: document.querySelector('.bvi-built-elements-on'),
          builtElementsOff: document.querySelector('.bvi-built-elements-off'),
          reset: document.querySelector('.bvi-reset'),
          links: document.querySelectorAll('.bvi-link'),
          modal: document.querySelector('.bvi-modal')
        };

        var activeLink = function activeLink(element) {
          var _iterator = _createForOfIteratorHelper(element.parentNode.children),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var sibling = _step.value;
              sibling.classList.remove('active');
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          element.classList.add('active');
        };

        var click = function click(element, callback) {
          element.addEventListener('click', function (event) {
            event.preventDefault();

            if (typeof callback === 'function') {
              callback(event);
            }
          });
        };

        var activeAll = function activeAll() {
          var links = document.querySelectorAll('.bvi-link');
          links.forEach(function (link) {
            link.classList.remove('active');
          });
          getObject(_this2._config, function (key) {
            if (key === 'theme') {
              var value = getCookie(key);
              document.querySelector(".bvi-theme-".concat(value)).classList.add('active');
            }

            if (key === 'images') {
              var _value = getCookie(key) === 'grayscale' ? 'grayscale' : stringToBoolean(getCookie(key)) ? 'on' : 'off';

              document.querySelector(".bvi-images-".concat(_value)).classList.add('active');
            }

            if (key === 'speech') {
              var _value2 = stringToBoolean(getCookie(key)) ? 'on' : 'off';

              document.querySelector(".bvi-speech-".concat(_value2)).classList.add('active');
            }

            if (key === 'lineHeight') {
              var _value3 = getCookie(key);

              document.querySelector(".bvi-line-height-".concat(_value3)).classList.add('active');
            }

            if (key === 'letterSpacing') {
              var _value4 = getCookie(key);

              document.querySelector(".bvi-letter-spacing-".concat(_value4)).classList.add('active');
            }

            if (key === 'fontFamily') {
              var _value5 = getCookie(key);

              document.querySelector(".bvi-font-family-".concat(_value5)).classList.add('active');
            }

            if (key === 'builtElements') {
              var _value6 = stringToBoolean(getCookie(key)) ? 'on' : 'off';

              document.querySelector(".bvi-built-elements-".concat(_value6)).classList.add('active');
            }
          });
        };

        activeAll(); // Font size

        click(elements.fontSizeMinus, function () {
          var size = parseFloat(getCookie('fontSize')) - 1;

          if (size !== 0) {
            _this2._setAttrDataBviBody('fontSize', size);

            setCookie('fontSize', size);

            _this2._speech("".concat(_this2._i18n.v('fontSizeMinus')));

            activeLink(elements.fontSizeMinus);
          }
        });
        click(elements.fontSizePlus, function () {
          var size = parseFloat(getCookie('fontSize')) + 1;

          if (size !== 40) {
            _this2._setAttrDataBviBody('fontSize', size);

            setCookie('fontSize', size);

            _this2._speech("".concat(_this2._i18n.v('fontSizePlus')));

            activeLink(elements.fontSizePlus);
          }
        }); // Theme

        click(elements.themeWhite, function () {
          _this2._setAttrDataBviBody('theme', 'white');

          setCookie('theme', 'white');

          _this2._speech("".concat(_this2._i18n.v('siteColorBlackOnWhite')));

          activeLink(elements.themeWhite);
        });
        click(elements.themeBlack, function () {
          _this2._setAttrDataBviBody('theme', 'black');

          setCookie('theme', 'black');

          _this2._speech("".concat(_this2._i18n.v('siteColorWhiteOnBlack')));

          activeLink(elements.themeBlack);
        });
        click(elements.themeBlue, function () {
          _this2._setAttrDataBviBody('theme', 'blue');

          setCookie('theme', 'blue');

          _this2._speech("".concat(_this2._i18n.v('siteColorDarkBlueOnBlue')));

          activeLink(elements.themeBlue);
        });
        click(elements.themeBrown, function () {
          _this2._setAttrDataBviBody('theme', 'brown');

          setCookie('theme', 'brown');

          _this2._speech("".concat(_this2._i18n.v('siteColorBeigeBrown')));

          activeLink(elements.themeBrown);
        });
        click(elements.themeGreen, function () {
          _this2._setAttrDataBviBody('theme', 'green');

          setCookie('theme', 'green');

          _this2._speech("".concat(_this2._i18n.v('siteColorGreenOnDarkBrown')));

          activeLink(elements.themeGreen);
        }); // Images

        click(elements.imagesOn, function () {
          _this2._setAttrDataBviBody('images', 'true');

          setCookie('images', 'true');

          _this2._speech("".concat(_this2._i18n.v('imagesOn')));

          activeLink(elements.imagesOn);
        });
        click(elements.imagesOff, function () {
          _this2._setAttrDataBviBody('images', 'false');

          setCookie('images', 'false');

          _this2._speech("".concat(_this2._i18n.v('imagesOFF')));

          activeLink(elements.imagesOff);
        });
        click(elements.imagesGrayscale, function () {
          _this2._setAttrDataBviBody('images', 'grayscale');

          setCookie('images', 'grayscale');

          _this2._speech("".concat(_this2._i18n.v('imagesGrayscale')));

          activeLink(elements.imagesGrayscale);
        }); // Speech

        click(elements.speechOn, function () {
          _this2._setAttrDataBviBody('speech', 'true');

          setCookie('speech', 'true');

          _this2._speech("".concat(_this2._i18n.v('speechOn')));

          activeLink(elements.speechOn);

          _this2._speechPlayer();
        });
        click(elements.speechOff, function () {
          _this2._speech("".concat(_this2._i18n.v('speechOff')));

          _this2._setAttrDataBviBody('speech', 'false');

          setCookie('speech', 'false');
          activeLink(elements.speechOff);

          _this2._speechPlayer();
        }); // Line height

        click(elements.lineHeightNormal, function () {
          _this2._setAttrDataBviBody('lineHeight', 'normal');

          setCookie('lineHeight', 'normal');

          _this2._speech("".concat(_this2._i18n.v('lineHeightNormal')));

          activeLink(elements.lineHeightNormal);
        });
        click(elements.lineHeightAverage, function () {
          _this2._setAttrDataBviBody('lineHeight', 'average');

          setCookie('lineHeight', 'average');

          _this2._speech("".concat(_this2._i18n.v('lineHeightAverage')));

          activeLink(elements.lineHeightAverage);
        });
        click(elements.lineHeightBig, function () {
          _this2._setAttrDataBviBody('lineHeight', 'big');

          setCookie('lineHeight', 'big');

          _this2._speech("".concat(_this2._i18n.v('lineHeightBig')));

          activeLink(elements.lineHeightBig);
        }); // Letter spacing

        click(elements.letterSpacingNormal, function () {
          _this2._setAttrDataBviBody('letterSpacing', 'normal');

          setCookie('letterSpacing', 'normal');

          _this2._speech("".concat(_this2._i18n.v('LetterSpacingNormal')));

          activeLink(elements.letterSpacingNormal);
        });
        click(elements.letterSpacingAverage, function () {
          _this2._setAttrDataBviBody('letterSpacing', 'average');

          setCookie('letterSpacing', 'average');

          _this2._speech("".concat(_this2._i18n.v('LetterSpacingAverage')));

          activeLink(elements.letterSpacingAverage);
        });
        click(elements.letterSpacingBig, function () {
          _this2._setAttrDataBviBody('letterSpacing', 'big');

          setCookie('letterSpacing', 'big');

          _this2._speech("".concat(_this2._i18n.v('LetterSpacingBig')));

          activeLink(elements.letterSpacingBig);
        }); // Font family

        click(elements.fontFamilyArial, function () {
          _this2._setAttrDataBviBody('fontFamily', 'arial');

          setCookie('fontFamily', 'arial');

          _this2._speech("".concat(_this2._i18n.v('fontArial')));

          activeLink(elements.fontFamilyArial);
        });
        click(elements.fontFamilyTimes, function () {
          _this2._setAttrDataBviBody('fontFamily', 'times');

          setCookie('fontFamily', 'times');

          _this2._speech("".concat(_this2._i18n.v('fontTimes')));

          activeLink(elements.fontFamilyTimes);
        }); // Built elements

        click(elements.builtElementsOn, function () {
          _this2._setAttrDataBviBody('builtElements', 'true');

          setCookie('builtElements', 'true');

          _this2._speech("".concat(_this2._i18n.v('builtElementsOn')));

          activeLink(elements.builtElementsOn);
        });
        click(elements.builtElementsOff, function () {
          _this2._setAttrDataBviBody('builtElements', 'false');

          setCookie('builtElements', 'false');

          _this2._speech("".concat(_this2._i18n.v('builtElementsOFF')));

          activeLink(elements.builtElementsOff);
        }); // Reset

        click(elements.reset, function () {
          _this2._speech("".concat(_this2._i18n.v('resetSettings')));

          getObject(_this2._config, function (key) {
            _this2._setAttrDataBviBody(key, _this2._config[key]);

            setCookie(key, _this2._config[key]);
            activeAll();
          });
        });
        getArray(elements.links, function (element) {
          click(element, function (event) {
            var target = event.target.getAttribute('data-bvi');

            if (target === 'close') {
              _this2._setAttrDataBviBody('panelActive', 'false');

              setCookie('panelActive', 'false');

              _this2._init();
            }

            if (target === 'modal') {
              document.body.style.overflow = 'hidden';
              document.body.classList.add('bvi-noscroll');
              elements.modal.classList.toggle('show');
            }

            if (target === 'modal-close') {
              document.body.classList.remove('bvi-noscroll');
              document.body.style.overflow = '';
              elements.modal.classList.remove('show');
            }

            if (target === 'panel-hide') {
              document.querySelector('.bvi-panel').classList.add('bvi-panel-hide');
              document.querySelector('.bvi-link-fixed-top').classList.remove('bvi-hide');
              document.querySelector('.bvi-link-fixed-top').classList.add('bvi-show');
              setCookie('panelHide', 'true');

              _this2._speech("".concat(_this2._i18n.v('panelHide')));
            }

            if (target === 'panel-show') {
              document.querySelector('.bvi-link-fixed-top').classList.remove('bvi-show');
              document.querySelector('.bvi-link-fixed-top').classList.add('bvi-hide');
              document.querySelector('.bvi-panel').classList.remove('bvi-panel-hide');
              setCookie('panelHide', 'false');

              _this2._speech("".concat(_this2._i18n.v('panelShow')));
            }
          });
        });
        click(elements.modal, function (event) {
          if (event.target.contains(elements.modal)) {
            document.body.classList.remove('bvi-noscroll');
            document.body.style.overflow = '';
            elements.modal.classList.remove('show');
          }
        });
      }
    }, {
      key: "_getPanel",
      value: function _getPanel() {
        var scroll = function scroll() {
          var scroll = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

          if (stringToBoolean(getCookie('panelFixed'))) {
            if (scroll > 200) {
              document.querySelector('.bvi-panel').classList.add('bvi-fixed-top');
            } else {
              document.querySelector('.bvi-panel').classList.remove('bvi-fixed-top');
            }
          }
        };

        var panelHide = stringToBoolean(getCookie('panelHide')) ? ' bvi-panel-hide' : '';
        var linkHide = !stringToBoolean(getCookie('panelHide')) ? ' bvi-hide' : 'bvi-show';
        var html = "\n    <div class='bvi-panel".concat(panelHide, "'>\n        <div class=\"bvi-blocks bvi-block-center\">\n            <div class=\"bvi-block\">\n                <div class=\"bvi-block-title\">").concat(this._i18n.t('fontSize'), "</div>\n                <a class=\"bvi-link bvi-fontSize-minus\">\u0410-</a>\n                <a class=\"bvi-link bvi-fontSize-plus\">\u0410+</a>\n            </div>\n            <div class=\"bvi-block\">\n                <div class=\"bvi-block-title\">").concat(this._i18n.t('siteColors'), "</div>\n                <a href=\"#\" class=\"bvi-link bvi-theme-white\">\u0426</a>\n                <a href=\"#\" class=\"bvi-link bvi-theme-black\">\u0426</a>\n                <a href=\"#\" class=\"bvi-link bvi-theme-blue\">\u0426</a>\n                <a href=\"#\" class=\"bvi-link bvi-theme-brown\">\u0426</a>\n                <a href=\"#\" class=\"bvi-link bvi-theme-green\">\u0426</a>\n            </div>\n            <div class=\"bvi-block\">\n                <div class=\"bvi-block-title\">").concat(this._i18n.t('images'), "</div>\n                <a href=\"#\" class=\"bvi-link bvi-images-on\">\n                    <i class=\"bvi-images bvi-images-image\"></i>\n                </a>\n                <a href=\"#\" class=\"bvi-link bvi-images-off\">\n                    <i class=\"bvi-images bvi-images-minus-circle\"></i>\n                </a>\n                <a href=\"#\" class=\"bvi-link bvi-images-grayscale\">\n                    <i class=\"bvi-images bvi-images-adjust\"></i>\n                </a>\n            </div>\n            <div class=\"bvi-block\">\n                <div class=\"bvi-block-title\">").concat(this._i18n.t('speech'), "</div>\n                <a href=\"#\" class=\"bvi-link bvi-speech-off\">\n                    <i class=\"bvi-images bvi-images-volume-off\"></i>\n                </a>\n                <a href=\"#\" class=\"bvi-link bvi-speech-on\">\n                    <i class=\"bvi-images bvi-images-volume-up\"></i>\n                </a>\n            </div>\n            <div class=\"bvi-block\">\n                <div class=\"bvi-block-title\">").concat(this._i18n.t('settings'), "</div>\n                <a href=\"#\" class=\"bvi-link\" data-bvi=\"modal\">\n                    <i class=\"bvi-images bvi-images-cog\"></i>\n                </a>\n                <a href=\"#\" class=\"bvi-link\" data-bvi=\"close\">\n                    ").concat(this._i18n.t('regularVersionOfTheSite'), "\n                </a>\n                <a href=\"#\" class=\"bvi-link\" data-bvi=\"panel-hide\">\n                    <i class=\"bvi-images bvi-images-minus\"></i>\n                </a>\n            </div>\n        </div>\n        <div class=\"bvi-modal\">\n            <div class=\"bvi-modal-dialog\">\n                <div class=\"bvi-modal-content\">\n                    <div class=\"bvi-modal-header\">\n                        <div class=\"bvi-modal-title\">").concat(this._i18n.t('settings'), "</div>\n                        <a href=\"#\" class=\"bvi-link bvi-modal-close\" data-bvi=\"modal-close\">\xD7</a>\n                    </div>\n                    <div class=\"bvi-modal-body\">\n                        <div class=\"bvi-blocks bvi-block-center\">\n                            <div class=\"bvi-block\">\n                                <div class=\"bvi-block-title\">").concat(this._i18n.t('letterSpacing'), "</div>\n                                <a href=\"#\" class=\"bvi-link bvi-letter-spacing-normal\">").concat(this._i18n.t('normal'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-letter-spacing-average\">").concat(this._i18n.t('average'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-letter-spacing-big\">").concat(this._i18n.t('big'), "</a>\n                            </div>\n                            <div class=\"bvi-block\">\n                                <div class=\"bvi-block-title\">").concat(this._i18n.t('lineHeight'), "</div>\n                                <a href=\"#\" class=\"bvi-link bvi-line-height-normal\">").concat(this._i18n.t('normal'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-line-height-average\">").concat(this._i18n.t('average'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-line-height-big\">").concat(this._i18n.t('big'), "</a>\n                            </div>\n                            <div class=\"bvi-block\">\n                                <div class=\"bvi-block-title\">").concat(this._i18n.t('font'), "</div>\n                                <a href=\"#\" class=\"bvi-link bvi-font-family-arial\">").concat(this._i18n.t('arial'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-font-family-times\">").concat(this._i18n.t('times'), "</a>\n                            </div>\n                            <div class=\"bvi-block\">\n                                <div class=\"bvi-block-title\">").concat(this._i18n.t('builtElements'), "</div>\n                                <a href=\"#\" class=\"bvi-link bvi-built-elements-on\">").concat(this._i18n.t('on'), "</a>\n                                <a href=\"#\" class=\"bvi-link bvi-built-elements-off\">").concat(this._i18n.t('off'), "</a>\n                            </div>\n                        </div>\n                        <div class=\"bvi-blocks bvi-block-center\">\n                            <a href=\"https://bvi.isvek.ru\" class=\"bvi-copyright\" target=\"_blank\">bvi.isvek.ru</a>\n                        </div>\n                    </div>\n                    <div class=\"bvi-modal-footer\">\n                        <a href=\"#\" class=\"bvi-link bvi-reset\">").concat(this._i18n.t('reset'), "</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>");
        var link = "<a href=\"#\" class=\"bvi-link bvi-link-fixed-top bvi-no-styles ".concat(linkHide, "\" data-bvi=\"panel-show\">") + '<i class="bvi-images bvi-images-eye bvi-images-size-32 bvi-no-styles"></i></a>';
        window.addEventListener('scroll', scroll);
        document.querySelector('.bvi-body').insertAdjacentHTML('beforebegin', html);
        document.querySelector('.bvi-body').insertAdjacentHTML('afterbegin', link);
        scroll();
      }
    }, {
      key: "_set",
      value: function _set() {
        var _this3 = this;

        document.body.classList.add('bvi-active');
        wrapInner(document.body, 'div', 'bvi-body');
        getObject(this._config, function (key) {
          return _this3._setAttrDataBviBody(key, getCookie(key));
        });
        getArray(this._elements, function (element) {
          return element.style.display = 'none';
        });
        document.querySelectorAll('img').forEach(function (element) {
          if (element.classList.contains('bvi-img')) {
            element.classList.remove('bvi-img');
          }
        });
        document.querySelectorAll('body *').forEach(function (element) {
          if (element.classList.contains('bvi-background-image')) {
            element.classList.remove('bvi-background-image');
          }
        });
      }
    }, {
      key: "_remove",
      value: function _remove() {
        var bviPanel = document.querySelector('.bvi-panel');
        var bviBody = document.querySelector('.bvi-body');
        var bviLinkFixedTop = document.querySelector('.bvi-link-fixed-top');

        if (bviPanel) {
          bviPanel.remove();
        }

        if (bviBody) {
          unwrap(bviBody);
        }

        if (bviLinkFixedTop) {
          bviLinkFixedTop.remove();
        }

        this._speech("".concat(this._i18n.v('panelOff')));

        document.body.classList.remove('bvi-active');
        getArray(this._elements, function (element) {
          return element.style.display = '';
        });

        if (stringToBoolean(getCookie('reload'))) {
          document.location.reload();
        }

        getObject(this._config, function (key) {
          removeCookie(key);
        });

        this._speechPlayer();

        removeCookie('panelActive');
      }
    }, {
      key: "_images",
      value: function _images() {
        document.querySelectorAll('img').forEach(function (element) {
          if (!element.classList.contains('bvi-no-style')) {
            element.classList.add('bvi-img');
          }
        });
        document.querySelectorAll('.bvi-body *').forEach(function (element) {
          var style = getComputedStyle(element);

          if (style.backgroundImage !== 'none' && style.background !== 'none' && !element.classList.contains('bvi-no-style')) {
            element.classList.add('bvi-background-image');
          }
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _objectSpread2(_objectSpread2({}, Default), config);
        var extended = {};

        for (var keyDefault in Default) {
          extended[keyDefault] = config[keyDefault];
        }

        checkConfig(extended, DefaultType, DefaultOptions);
        return extended;
      }
    }, {
      key: "_setAttrDataBviBody",
      value: function _setAttrDataBviBody() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        document.querySelector('.bvi-body').setAttribute("data-bvi-".concat(name), value);
      }
    }, {
      key: "_speechPlayer",
      value: function _speechPlayer() {
        var _this4 = this;

        var selectorSpeechText = document.querySelectorAll('.bvi-speech-text');
        var selectorSpeechLink = document.querySelectorAll('.bvi-speech-link');
        var selectorBviSpeech = document.querySelectorAll('.bvi-speech');

        if ('speechSynthesis' in window && stringToBoolean(getCookie('speech'))) {
          if (selectorBviSpeech) {
            if (selectorSpeechText) {
              selectorSpeechText.forEach(function (element) {
                return unwrap(element);
              });
            }

            if (selectorSpeechLink) {
              selectorSpeechLink.forEach(function (element) {
                return element.remove();
              });
            }

            selectorBviSpeech.forEach(function (speechDivBlock, index) {
              var id = "bvi-speech-text-id-".concat(index + 1);
              var html = "\n            <div class=\"bvi-speech-link\">\n              <a href=\"#\" class=\"bvi-link bvi-speech-play\" title=\"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438\">\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438</a>\n              <a href=\"#\" class=\"bvi-link bvi-speech-pause disabled\" title=\"\u041F\u0430\u0443\u0437\u0430\">\u041F\u0430\u0443\u0437\u0430</a>\n              <a href=\"#\" class=\"bvi-link bvi-speech-resume disabled\" title=\"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C\">\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C</a>\n              <a href=\"#\" class=\"bvi-link bvi-speech-stop disabled\" title=\"\u0421\u0442\u043E\u043F\">\u0421\u0442\u043E\u043F</i></a>\n          </div>";
              wrapInner(speechDivBlock, 'div', "bvi-speech-text ".concat(id));
              speechDivBlock.insertAdjacentHTML('afterbegin', html);
            });
            var selectorPlay = document.querySelectorAll('.bvi-speech-play');
            var selectorPause = document.querySelectorAll('.bvi-speech-pause');
            var selectorResume = document.querySelectorAll('.bvi-speech-resume');
            var selectorStop = document.querySelectorAll('.bvi-speech-stop');

            var el = function el(elements, callback) {
              elements.forEach(function (element) {
                element.addEventListener('click', function (event) {
                  event.preventDefault();

                  if (typeof callback === 'function') {
                    return callback(element, event);
                  }
                }, false);
              });
            };

            el(selectorPlay, function (element, event) {
              var target = event.target;
              var text = target.parentNode.nextElementSibling;
              var closest = event.target.closest('.bvi-speech-link');
              var play = document.querySelectorAll('.bvi-speech-play');
              var pause = document.querySelectorAll('.bvi-speech-pause');
              var resume = document.querySelectorAll('.bvi-speech-resume');
              var stop = document.querySelectorAll('.bvi-speech-stop');

              _this4._speech(text.textContent, text, true);

              play.forEach(function (element) {
                return element.classList.remove('disabled');
              });
              pause.forEach(function (element) {
                return element.classList.add('disabled');
              });
              resume.forEach(function (element) {
                return element.classList.add('disabled');
              });
              stop.forEach(function (element) {
                return element.classList.add('disabled');
              });
              target.classList.add('disabled');
              closest.querySelector('.bvi-speech-pause').classList.remove('disabled');
              closest.querySelector('.bvi-speech-stop').classList.remove('disabled');
            });
            el(selectorPause, function (element, event) {
              var target = event.target;
              var closest = event.target.closest('.bvi-speech-link');
              target.classList.add('disabled');
              closest.querySelector('.bvi-speech-resume').classList.remove('disabled');
              synth().pause();
            });
            el(selectorResume, function (element, event) {
              var target = event.target;
              var closest = event.target.closest('.bvi-speech-link');
              target.classList.add('disabled');
              closest.querySelector('.bvi-speech-pause').classList.remove('disabled');
              synth().resume();
            });
            el(selectorStop, function (element, event) {
              var target = event.target;
              var closest = event.target.closest('.bvi-speech-link');
              target.classList.add('disabled');
              closest.querySelector('.bvi-speech-pause').classList.add('disabled');
              closest.querySelector('.bvi-speech-play').classList.remove('disabled');
              synth().cancel();
            });
          }
        } else {
          if (selectorSpeechText) {
            selectorSpeechText.forEach(function (element) {
              return unwrap(element);
            });
          }

          if (selectorSpeechLink) {
            selectorSpeechLink.forEach(function (element) {
              return element.remove();
            });
          }
        }
      }
    }, {
      key: "_speech",
      value: function _speech(text, element) {
        var _this5 = this;

        var echo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if ('speechSynthesis' in window && stringToBoolean(getCookie('speech'))) {
          synth().cancel();

          var getWordAt = function getWordAt(str, pos) {
            str = String(str);
            pos = Number(pos) >>> 0;
            var left = str.slice(0, pos + 1).search(/\S+$/);
            var right = str.slice(pos).search(/\s/);

            if (right < 0) {
              return str.slice(left);
            }

            return str.slice(left, right + pos);
          };

          var chunkLength = 120;
          var patternRegex = new RegExp('^[\\s\\S]{' + Math.floor(chunkLength / 2) + ',' + chunkLength + '}[.!?,]{1}|^[\\s\\S]{1,' + chunkLength + '}$|^[\\s\\S]{1,' + chunkLength + '} ');
          var array = [];
          var $text = text;
          var voices = synth().getVoices();

          while ($text.length > 0) {
            array.push($text.match(patternRegex)[0]);
            $text = $text.substring(array[array.length - 1].length);
          }

          array.forEach(function (getText) {
            var utter = new SpeechSynthesisUtterance(getText.trim());
            utter.volume = 1;
            utter.rate = 1;
            utter.pitch = 1;
            utter.lang = _this5._config.lang;

            for (var i = 0; i < voices.length; i++) {
              if (_this5._config.lang === 'ru-RU' && voices[i].name === 'Microsoft Pavel - Russian (Russia)') {
                utter.voice = voices[i];
              }

              if (_this5._config.lang === 'en-US' && voices[i].name === 'Microsoft Pavel - English (English)') {
                utter.voice = voices[i];
              }
            }

            if (echo) {
              utter.onboundary = function (event) {
                element.classList.add('bvi-highlighting');
                var world = getWordAt(event.utterance.text, event.charIndex);
                var textContent = element.textContent;
                var term = world.replace(/(\s+)/, '((<[^>]+>)*$1(<[^>]+>)*)');
                var pattern = new RegExp('(' + term + ')', 'gi');
                textContent = textContent.replace(pattern, '<mark>$1</mark>');
                textContent = textContent.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/, '$1</mark>$2<mark>$4');
                element.innerHTML = textContent;
              };

              utter.onend = function (event) {
                element.classList.remove('bvi-highlighting');
                var textContent = element.textContent;
                textContent = textContent.replace(/(<mark>$1<\/mark>)/, '$1');
                element.innerHTML = textContent;
              };
            }

            synth().speak(utter);
          });
        }
      }
    }]);

    return Bvi;
  }();

  /**
   * --------------------------------------------------------------------------
   * Button visually impaired (v1.0.0): index.umd.js
   * Licensed under MIT (https://github.com/veks/button-visually-impaired-javascript/blob/master/LICENSE.md)
   * --------------------------------------------------------------------------
   */
  var index_umd = {
    Bvi: Bvi
  };

  return index_umd;

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWIvYnZpL2J2aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgKiBCdXR0b24gdmlzdWFsbHkgaW1wYWlyZWQgLSB2MS4wLjAgaHR0cHM6Ly9idmkuaXN2ZWsucnVcbiAgKiBDb3B5cmlnaHQgMjAxNC0yMDIxIE9sZWcgS29yb3RlbmtvIDxidmlAaXN2ZWsucnU+LlxuICAqIExpY2Vuc2VkIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3Zla3MvYnV0dG9uLXZpc3VhbGx5LWltcGFpcmVkLWphdmFzY3JpcHQvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLmlzdmVrID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcblxuICAgICAgaWYgKGVudW1lcmFibGVPbmx5KSB7XG4gICAgICAgIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXM7XG4gIH1cblxuICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICAgIGlmIChpICUgMikge1xuICAgICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3R5cGVvZihvYmopO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgICBpZiAoIW8pIHJldHVybjtcbiAgICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICAgIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8sIGFsbG93QXJyYXlMaWtlKSB7XG4gICAgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07XG5cbiAgICBpZiAoIWl0KSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGlmIChpdCkgbyA9IGl0O1xuICAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoKSB7fTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHM6IEYsXG4gICAgICAgICAgbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7XG4gICAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsdWU6IG9baSsrXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZjogRlxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgfVxuXG4gICAgdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLFxuICAgICAgICBkaWRFcnIgPSBmYWxzZSxcbiAgICAgICAgZXJyO1xuICAgIHJldHVybiB7XG4gICAgICBzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGl0ID0gaXQuY2FsbChvKTtcbiAgICAgIH0sXG4gICAgICBuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGVwID0gaXQubmV4dCgpO1xuICAgICAgICBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lO1xuICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgIH0sXG4gICAgICBlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkaWRFcnIgPSB0cnVlO1xuICAgICAgICBlcnIgPSBlO1xuICAgICAgfSxcbiAgICAgIGY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXQucmV0dXJuICE9IG51bGwpIGl0LnJldHVybigpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChkaWRFcnIpIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgcnVudGltZSA9IHtleHBvcnRzOiB7fX07XG5cbiAgKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICB2YXIgcnVudGltZSA9IGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cbiAgICAgIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gICAgICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gICAgICB2YXIgdW5kZWZpbmVkJDE7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuXG4gICAgICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICAgICAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgICAgIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gICAgICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gICAgICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgICAgICBkZWZpbmUoe30sIFwiXCIpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGRlZmluZSA9IGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgICAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICAgICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pOyAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cblxuICAgICAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiBnZW5lcmF0b3I7XG4gICAgICB9XG5cbiAgICAgIGV4cG9ydHMud3JhcCA9IHdyYXA7IC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAgICAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gICAgICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgICAgIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgICAgIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgICAgIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgICAgIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gICAgICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgICAgIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgICAgIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cblxuICAgICAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICBhcmc6IGZuLmNhbGwob2JqLCBhcmcpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgICAgIGFyZzogZXJyXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICAgIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICAgICAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgICAgIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7IC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgICAgIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cblxuICAgICAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTsgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gICAgICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgICAgIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gICAgICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuXG4gICAgICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuXG4gICAgICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG5cbiAgICAgIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge30gLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAgICAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cblxuXG4gICAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgICAgIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9KTtcbiAgICAgIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgICAgIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcblxuICAgICAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJiBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICAgICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgICAgIH1cblxuICAgICAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgICAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTsgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgICAgIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG5cbiAgICAgIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICAgICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIGN0b3IgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiIDogZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgICAgICByZXR1cm4gZ2VuRnVuO1xuICAgICAgfTsgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gICAgICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAgICAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAgICAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cblxuXG4gICAgICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIF9fYXdhaXQ6IGFyZ1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlICYmIF90eXBlb2YodmFsdWUpID09PSBcIm9iamVjdFwiICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkge1xuICAgICAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgICAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcpIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICAgICAgfSAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgICAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cblxuXG4gICAgICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gICAgICB9XG5cbiAgICAgIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9KTtcbiAgICAgIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7IC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgICAgIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAgICAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG5cbiAgICAgIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG4gICAgICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksIFByb21pc2VJbXBsKTtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgICAgfSAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuXG5cbiAgICAgICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcblxuICAgICAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcbiAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IEdlblN0YXRlQ29tcGxldGVkIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkOyAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG5cbiAgICAgICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAgICAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAgICAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gICAgICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cblxuXG4gICAgICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkJDEpIHtcbiAgICAgICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQkMTtcbiAgICAgICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlOyAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG5cbiAgICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jOyAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgfSAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgICAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuXG5cbiAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfSAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAgICAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuXG5cbiAgICAgIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG4gICAgICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTsgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgICAgIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gICAgICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAgICAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cblxuICAgICAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0pO1xuICAgICAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0ge1xuICAgICAgICAgIHRyeUxvYzogbG9jc1swXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgICAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgICAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgICAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICAgICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgICAgICB0cnlMb2M6IFwicm9vdFwiXG4gICAgICAgIH1dO1xuICAgICAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzLnJldmVyc2UoKTsgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAgICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuXG4gICAgICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuXG5cbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcblxuICAgICAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgICAgICB2YXIgaSA9IC0xLFxuICAgICAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cblxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmV4dDogZG9uZVJlc3VsdFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICAgICAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkJDEsXG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICAgICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgICAgICB0aGlzLm5leHQgPSAwOyAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG5cbiAgICAgICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZCQxO1xuICAgICAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZCQxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG4gICAgICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgICAgICB9LFxuICAgICAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkJDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhYnJ1cHQ6IGZ1bmN0aW9uIGFicnVwdCh0eXBlLCBhcmcpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmaW5hbGx5RW50cnkgJiYgKHR5cGUgPT09IFwiYnJlYWtcIiB8fCB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHwgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9LFxuICAgICAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG5cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZCQxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9OyAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gICAgICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgICAgIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAgICAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cblxuICAgICAgcmV0dXJuIGV4cG9ydHM7XG4gICAgfSggLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAgIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICAgIG1vZHVsZS5leHBvcnRzICk7XG5cbiAgICB0cnkge1xuICAgICAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgICB9IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAgICAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgICAgIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAgICAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAgICAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAgICAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gICAgICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgICAgIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gICAgICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAgICAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gICAgICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgICAgIGlmICgodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihnbG9iYWxUaGlzKSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKHJ1bnRpbWUpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCdXR0b24gdmlzdWFsbHkgaW1wYWlyZWQgKHYxLjAuMCk6IHV0aWwvaW5kZXguanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdmVrcy9idXR0b24tdmlzdWFsbHktaW1wYWlyZWQtamF2YXNjcmlwdC9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgKGZ1bmN0aW9uIChhcnIpIHtcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoJ3ByZXBlbmQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdGVtLCAncHJlcGVuZCcsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBlbmQoKSB7XG4gICAgICAgICAgdmFyIGFyZ0FyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICAgIGRvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgYXJnQXJyLmZvckVhY2goZnVuY3Rpb24gKGFyZ0l0ZW0pIHtcbiAgICAgICAgICAgIHZhciBpc05vZGUgPSBhcmdJdGVtIGluc3RhbmNlb2YgTm9kZTtcbiAgICAgICAgICAgIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoaXNOb2RlID8gYXJnSXRlbSA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhhcmdJdGVtKSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaW5zZXJ0QmVmb3JlKGRvY0ZyYWcsIHRoaXMuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KShbRWxlbWVudC5wcm90b3R5cGUsIERvY3VtZW50LnByb3RvdHlwZSwgRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGVdKTtcblxuICBpZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4gIH1cblxuICBpZiAod2luZG93LkhUTUxDb2xsZWN0aW9uICYmICFIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgIEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZS5mb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG4gIH1cblxuICB2YXIgdG9UeXBlID0gZnVuY3Rpb24gdG9UeXBlKG9iaikge1xuICAgIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChvYmopO1xuICAgIH1cblxuICAgIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgdmFyIGlzRWxlbWVudCA9IGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICBpZiAoIW9iaiB8fCBfdHlwZW9mKG9iaikgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09ICd1bmRlZmluZWQnO1xuICB9O1xuXG4gIHZhciBjaGVja0NvbmZpZyA9IGZ1bmN0aW9uIGNoZWNrQ29uZmlnKGNvbmZpZywgY29uZmlnVHlwZXMsIGNvbmZpZ09wdGlvbnMpIHtcbiAgICBPYmplY3Qua2V5cyhjb25maWdUeXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW2tleV07XG4gICAgICB2YXIgdmFsdWUgPSBjb25maWdba2V5XTtcbiAgICAgIHZhciB2YWx1ZVR5cGUgPSB2YWx1ZSAmJiBpc0VsZW1lbnQodmFsdWUpID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKTtcblxuICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQnZpIGNvbnNvbGU6IFxcdTA0MUVcXHUwNDNGXFx1MDQ0NlxcdTA0MzhcXHUwNDRGIFxcXCJcIi5jb25jYXQoa2V5LCBcIlxcXCIgXFx1MDQzRlxcdTA0NDBcXHUwNDM1XFx1MDQzNFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcXHUwNDMyXFx1MDQzQlxcdTA0MzVcXHUwNDNEXFx1MDQzRFxcdTA0NEJcXHUwNDM5IFxcdTA0NDJcXHUwNDM4XFx1MDQzRiBcXFwiXCIpLmNvbmNhdCh2YWx1ZVR5cGUsIFwiXFxcIiwgXFx1MDQzRVxcdTA0MzZcXHUwNDM4XFx1MDQzNFxcdTA0MzBcXHUwNDM1XFx1MDQzQ1xcdTA0NEJcXHUwNDM5IFxcdTA0NDJcXHUwNDM4XFx1MDQzRiBcXFwiXCIpLmNvbmNhdChleHBlY3RlZFR5cGVzLCBcIlxcXCIuXCIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBPYmplY3Qua2V5cyhjb25maWdPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBleHBlY3RlZE9wdGlvbnMgPSBjb25maWdPcHRpb25zW2tleV07XG4gICAgICB2YXIgdmFsdWUgPSBjb25maWdba2V5XTtcblxuICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkT3B0aW9ucykudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkJ2aSBjb25zb2xlOiBcXHUwNDFFXFx1MDQzRlxcdTA0NDZcXHUwNDM4XFx1MDQ0RiBcXFwiXCIuY29uY2F0KGtleSwgXCJcXFwiIFxcdTA0M0ZcXHUwNDMwXFx1MDQ0MFxcdTA0MzBcXHUwNDNDXFx1MDQzNVxcdTA0NDJcXHUwNDQwIFxcXCJcIikuY29uY2F0KHZhbHVlLCBcIlxcXCIsIFxcdTA0M0VcXHUwNDM2XFx1MDQzOFxcdTA0MzRcXHUwNDMwXFx1MDQzNVxcdTA0M0NcXHUwNDRCXFx1MDQzOSBcXHUwNDNGXFx1MDQzMFxcdTA0NDBcXHUwNDMwXFx1MDQzQ1xcdTA0MzVcXHUwNDQyXFx1MDQ0MCBcXFwiXCIpLmNvbmNhdChleHBlY3RlZE9wdGlvbnMsIFwiXFxcIi5cIikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBzdHJpbmdUb0Jvb2xlYW4gPSBmdW5jdGlvbiBzdHJpbmdUb0Jvb2xlYW4oc3RyaW5nKSB7XG4gICAgc3dpdGNoIChzdHJpbmcpIHtcbiAgICAgIGNhc2UgJ29uJzpcbiAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgY2FzZSAnMSc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHZhciB3cmFwSW5uZXIgPSBmdW5jdGlvbiB3cmFwSW5uZXIocGFyZW50LCB3cmFwcGVyLCBjbGFzc05hbWUpIHtcbiAgICBpZiAodHlwZW9mIHdyYXBwZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh3cmFwcGVyKTtcbiAgICB9XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcikuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkICE9PSB3cmFwcGVyKSB7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVud3JhcCA9IGZ1bmN0aW9uIHVud3JhcCh3cmFwcGVyKSB7XG4gICAgdmFyIGRvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgaWYgKCF3cmFwcGVyKSByZXR1cm47XG5cbiAgICB3aGlsZSAod3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICB2YXIgY2hpbGQgPSB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIuZmlyc3RDaGlsZCk7XG4gICAgICBkb2NGcmFnLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG5cbiAgICB3cmFwcGVyLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGRvY0ZyYWcsIHdyYXBwZXIpO1xuICB9O1xuXG4gIHZhciBnZXRPYmplY3QgPSBmdW5jdGlvbiBnZXRPYmplY3Qob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdldEFycmF5ID0gZnVuY3Rpb24gZ2V0QXJyYXkoYXJyYXksIGNhbGxiYWNrKSB7XG4gICAgQXJyYXkuZnJvbShhcnJheSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHN5bnRoID0gZnVuY3Rpb24gc3ludGgoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5zcGVlY2hTeW50aGVzaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJ1dHRvbiB2aXN1YWxseSBpbXBhaXJlZCAodjEuMC4wKTogdXRpbC9jb29raWUuanNcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdmVrcy9idXR0b24tdmlzdWFsbHktaW1wYWlyZWQtamF2YXNjcmlwdC9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgdmFyIHNldENvb2tpZSA9IGZ1bmN0aW9uIHNldENvb2tpZSgpIHtcbiAgICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgdGltZSA9IG5vdy5nZXRUaW1lKCk7XG4gICAgdGltZSArPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgIG5vdy5zZXRUaW1lKHRpbWUpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiYnZpX1wiLmNvbmNhdChuYW1lLCBcIj1cIikuY29uY2F0KHZhbHVlLCBcIixwYXRoPS8sZXhwaXJlcz1cIikuY29uY2F0KG5vdy50b1VUQ1N0cmluZygpLCBcIixkb21haW49XCIpLmNvbmNhdChsb2NhdGlvbi5ob3N0LCBcIixTYW1lU2l0ZT1Ob25lLFNlY3VyZVwiKTtcbiAgfTtcblxuICB2YXIgZ2V0Q29va2llID0gZnVuY3Rpb24gZ2V0Q29va2llKCkge1xuICAgIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICBuYW1lID0gXCJidmlfXCIuY29uY2F0KG5hbWUsIFwiPVwiKTtcbiAgICB2YXIgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xuICAgIHZhciBjb29raWVzID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0udHJpbSgpO1xuICAgICAgbGV0IG9wdGlvbnM9Y29va2llLnNwbGl0KFwiLFwiKVxuICAgICAgaWYgKGNvb2tpZS5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uc1swXS5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIG9wdGlvbnNbMF0ubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgIFxuICB9O1xuXG4gIHZhciByZW1vdmVDb29raWUgPSBmdW5jdGlvbiByZW1vdmVDb29raWUoKSB7XG4gICAgdmFyIG5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiYnZpX1wiLmNvbmNhdChuYW1lLCBcIj0scGF0aD0vLGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQsZG9tYWluPVwiKS5jb25jYXQobG9jYXRpb24uaG9zdCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEJ1dHRvbiB2aXN1YWxseSBpbXBhaXJlZCAodjEuMC4wKTogaTE4bi5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS92ZWtzL2J1dHRvbi12aXN1YWxseS1pbXBhaXJlZC1qYXZhc2NyaXB0L2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgbGFuZyA9IHtcbiAgICAncnUtUlUnOiB7XG4gICAgICAndGV4dCc6IHtcbiAgICAgICAgJ2ZvbnRTaXplJzogJ9Cg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAnLFxuICAgICAgICAnc2l0ZUNvbG9ycyc6ICfQptCy0LXRgtCwINGB0LDQudGC0LAnLFxuICAgICAgICAnaW1hZ2VzJzogJ9CY0LfQvtCx0YDQsNC20LXQvdC40Y8nLFxuICAgICAgICAnc3BlZWNoJzogJ9Ch0LjQvdGC0LXQtyDRgNC10YfQuCcsXG4gICAgICAgICdzZXR0aW5ncyc6ICfQndCw0YHRgtGA0L7QudC60LgnLFxuICAgICAgICAncmVndWxhclZlcnNpb25PZlRoZVNpdGUnOiAn0J7QsdGL0YfQvdCw0Y8g0LLQtdGA0YHQuNGPINGB0LDQudGC0LAnLFxuICAgICAgICAnbGV0dGVyU3BhY2luZyc6ICfQnNC10LbQsdGD0LrQstC10L3QvdC+0LUg0YDQsNGB0YHRgtC+0Y/QvdC40LUnLFxuICAgICAgICAnbm9ybWFsJzogJ9Ch0YLQsNC90LTQsNGA0YLQvdGL0LknLFxuICAgICAgICAnYXZlcmFnZSc6ICfQodGA0LXQtNC90LjQuScsXG4gICAgICAgICdiaWcnOiAn0JHQvtC70YzRiNC+0LknLFxuICAgICAgICAnbGluZUhlaWdodCc6ICfQnNC10LbRgdGC0YDQvtGH0L3Ri9C5INC40L3RgtC10YDQstCw0LsnLFxuICAgICAgICAnZm9udCc6ICfQqNGA0LjRhNGCJyxcbiAgICAgICAgJ2FyaWFsJzogJ9CR0LXQtyDQt9Cw0YHQtdGH0LXQuicsXG4gICAgICAgICd0aW1lcyc6ICfQoSDQt9Cw0YHQtdGH0LrQsNC80LgnLFxuICAgICAgICAnYnVpbHRFbGVtZW50cyc6ICfQktGB0YLRgNC+0LXQvdC90YvQtSDRjdC70LXQvNC10L3RgtGLICjQktC40LTQtdC+LCDQutCw0YDRgtGLINC4INGC0LQuKScsXG4gICAgICAgICdvbic6ICfQktC60LvRjtGH0LjRgtGMJyxcbiAgICAgICAgJ29mZic6ICfQktGL0LrQu9GO0YfQuNGC0YwnLFxuICAgICAgICAncmVzZXQnOiAn0KHQsdGA0L7RgdC40YLRjCDQvdCw0YHRgtGA0L7QudC60LgnLFxuICAgICAgICAncGx1cmFsXzAnOiAn0L/QuNC60YHQtdC70YwnLFxuICAgICAgICAncGx1cmFsXzEnOiAn0L/QtdC60YHQtdC70Y8nLFxuICAgICAgICAncGx1cmFsXzInOiAn0L/QuNC60YHQtdC70LXQuSdcbiAgICAgIH0sXG4gICAgICAndm9pY2UnOiB7XG4gICAgICAgICdmb250U2l6ZVBsdXMnOiAn0KDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCDRg9Cy0LXQu9C4zIHRh9C10L0nLFxuICAgICAgICAnZm9udFNpemVNaW51cyc6ICfQoNCw0LfQvNC10YAg0YjRgNC40YTRgtCwINGD0LzQtcyB0L3RjNGI0LXQvScsXG4gICAgICAgICdzaXRlQ29sb3JCbGFja09uV2hpdGUnOiAn0KbQstC10YIg0YHQsNC50YLQsCDRh9C10YDQvdGL0Lwg0L/QviDQsdC10LvQvtC80YMnLFxuICAgICAgICAnc2l0ZUNvbG9yV2hpdGVPbkJsYWNrJzogJ9Cm0LLQtdGCINGB0LDQudGC0LAg0LHQtdC70YvQvCDQv9C+INGH0LXRgNC90L7QvNGDJyxcbiAgICAgICAgJ3NpdGVDb2xvckRhcmtCbHVlT25CbHVlJzogJ9Cm0LLQtdGCINGB0LDQudGC0LAg0YLRkdC80L3Qvi3RgdC40L3QuNC8INC/0L4g0LPQvtC70YPQsdC+0LzRgycsXG4gICAgICAgICdzaXRlQ29sb3JCZWlnZUJyb3duJzogJ9Cm0LLQtdGCINGB0LDQudGC0LAg0LrQvtGA0LjMgdGH0L3QtdCy0YvQvCDQv9C+INCx0LXMgdC20LXQstC+0LzRgycsXG4gICAgICAgICdzaXRlQ29sb3JHcmVlbk9uRGFya0Jyb3duJzogJ9Cm0LLQtdGCINGB0LDQudGC0LAg0LfQtdC70LXQvdGL0Lwg0L/QviDRgtGR0LzQvdC+LdC60L7RgNC40YfQvdC10LLQvtC80YMnLFxuICAgICAgICAnaW1hZ2VzT24nOiAn0JjQt9C+0LHRgNCw0LbQtdC90LjRjyDQstC60LvRjtGH0LXQvdGLJyxcbiAgICAgICAgJ2ltYWdlc09GRic6ICfQmNC30L7QsdGA0LDQttC10L3QuNGPINCy0YvQutC70Y7Rh9C10L3RiycsXG4gICAgICAgICdpbWFnZXNHcmF5c2NhbGUnOiAn0JjQt9C+0LHRgNCw0LbQtdC90LjRjyDRh9GR0YDQvdC+LdCx0LXQu9GL0LUnLFxuICAgICAgICAnc3BlZWNoT24nOiAn0KHQuNC90YLQtdC3INGA0LXRh9C4INCy0LrQu9GO0YfRkdC9JyxcbiAgICAgICAgJ3NwZWVjaE9mZic6ICfQodC40L3RgtC10Lcg0YDQtdGH0Lgg0LLRi8yB0LrQu9GO0YfQtdC9JyxcbiAgICAgICAgJ2xpbmVIZWlnaHROb3JtYWwnOiAn0JzQtdC20YHRgtGA0L7Rh9C90YvQuSDQuNC90YLQtdGA0LLQsNC7INGB0YLQsNC90LTQsNGA0YLQvdGL0LknLFxuICAgICAgICAnbGluZUhlaWdodEF2ZXJhZ2UnOiAn0JzQtdC20YHRgtGA0L7Rh9C90YvQuSDQuNC90YLQtdGA0LLQsNC7INGB0YDQtdC00L3QuNC5JyxcbiAgICAgICAgJ2xpbmVIZWlnaHRCaWcnOiAn0JzQtdC20YHRgtGA0L7Rh9C90YvQuSDQuNC90YLQtdGA0LLQsNC7INCx0L7Qu9GM0YjQvtC5JyxcbiAgICAgICAgJ0xldHRlclNwYWNpbmdOb3JtYWwnOiAn0JjQvdGC0LXRgNCy0LDQuyDQvNC10LbQtNGDINCx0YPQutCy0LDQvNC4INGB0YLQsNC90LTQsNGA0YLQvdGL0LknLFxuICAgICAgICAnTGV0dGVyU3BhY2luZ0F2ZXJhZ2UnOiAn0JjQvdGC0LXRgNCy0LDQuyDQvNC10LbQtNGDINCx0YPQutCy0LDQvNC4INGB0YDQtdC00L3QuNC5JyxcbiAgICAgICAgJ0xldHRlclNwYWNpbmdCaWcnOiAn0JjQvdGC0LXRgNCy0LDQuyDQvNC10LbQtNGDINCx0YPQutCy0LDQvNC4INCx0L7Qu9GM0YjQvtC5JyxcbiAgICAgICAgJ2ZvbnRBcmlhbCc6ICfQqNGA0LjRhNGCINCx0LXQtyDQt9Cw0YHQtdGH0LXQuicsXG4gICAgICAgICdmb250VGltZXMnOiAn0KjRgNC40YTRgiDRgSDQt9Cw0YHQtdGH0LrQsNC80LgnLFxuICAgICAgICAnYnVpbHRFbGVtZW50c09uJzogJ9CS0YHRgtGA0L7QtdC90L3Ri9C1INGN0LvQtdC80LXQvdGC0Ysg0LLQutC70Y7Rh9C10L3RiycsXG4gICAgICAgICdidWlsdEVsZW1lbnRzT0ZGJzogJ9CS0YHRgtGA0L7QtdC90L3Ri9C1INGN0LvQtdC80LXQvdGC0Ysg0LLRi9C60LvRjtGH0LXQvdGLJyxcbiAgICAgICAgJ3Jlc2V0U2V0dGluZ3MnOiAn0KPRgdGC0LDQvdC+0LLQu9C10L3RiyDQvdCw0YHRgtGA0L7QudC60Lgg0L/QviDRg9C80L7Qu9GH0LDMgdC90LjRjicsXG4gICAgICAgICdwYW5lbFNob3cnOiAn0J/QsNC90LXQu9GMINC+0YLQutGA0YvRgtCwJyxcbiAgICAgICAgJ3BhbmVsSGlkZSc6ICfQn9Cw0L3QtdC70Ywg0YHQutGA0YvRgtCwJyxcbiAgICAgICAgJ3BhbmVsT24nOiAn0JLQtdGA0YHQuNGPINGB0LDQudGC0LAg0LTQu9GPINGB0LvQsNCx0L7QstC4zIHQtNGP0YnQuNC5JyxcbiAgICAgICAgJ3BhbmVsT2ZmJzogJ9Ce0LHRi9GH0L3QsNGPINCy0LXRgNGB0LjRjyDRgdCw0LnRgtCwJ1xuICAgICAgfVxuICAgIH0sXG4gICAgJ2VuLVVTJzoge1xuICAgICAgJ3RleHQnOiB7XG4gICAgICAgICdmb250U2l6ZSc6ICdGb250IHNpemUnLFxuICAgICAgICAnc2l0ZUNvbG9ycyc6ICdTaXRlIGNvbG9ycycsXG4gICAgICAgICdpbWFnZXMnOiAnSW1hZ2VzJyxcbiAgICAgICAgJ3NwZWVjaCc6ICdTcGVlY2ggc3ludGhlc2lzJyxcbiAgICAgICAgJ3NldHRpbmdzJzogJ1NldHRpbmdzJyxcbiAgICAgICAgJ3JlZ3VsYXJWZXJzaW9uT2ZUaGVTaXRlJzogJ1JlZ3VsYXIgdmVyc2lvbiBPZiBUaGUgc2l0ZScsXG4gICAgICAgICdsZXR0ZXJTcGFjaW5nJzogJ0xldHRlciBzcGFjaW5nJyxcbiAgICAgICAgJ25vcm1hbCc6ICdTaW5nbGUnLFxuICAgICAgICAnYXZlcmFnZSc6ICdPbmUgYW5kIGEgaGFsZicsXG4gICAgICAgICdiaWcnOiAnRG91YmxlJyxcbiAgICAgICAgJ2xpbmVIZWlnaHQnOiAnTGluZSBzcGFjaW5nJyxcbiAgICAgICAgJ2ZvbnQnOiAnRm9udCcsXG4gICAgICAgICdhcmlhbCc6ICdTYW5zIFNlcmlmIC0gQXJpYWwnLFxuICAgICAgICAndGltZXMnOiAnU2VyaWYgLSBUaW1lcyBOZXcgUm9tYW4nLFxuICAgICAgICAnYnVpbHRFbGVtZW50cyc6ICdJbmNsdWRlIGlubGluZSBlbGVtZW50cyAoVmlkZW9zLCBtYXBzLCBldGMuKScsXG4gICAgICAgICdvbic6ICdFbmFibGUnLFxuICAgICAgICAnb2ZmJzogJ0Rpc2FibGVkJyxcbiAgICAgICAgJ3Jlc2V0JzogJ1Jlc2V0IHNldHRpbmdzJyxcbiAgICAgICAgJ3BsdXJhbF8wJzogJ3BpeGVsJyxcbiAgICAgICAgJ3BsdXJhbF8xJzogJ3BpeGVscycsXG4gICAgICAgICdwbHVyYWxfMic6ICdwaXhlbHMnXG4gICAgICB9LFxuICAgICAgJ3ZvaWNlJzoge1xuICAgICAgICAnZm9udFNpemVQbHVzJzogJ0ZvbnQgc2l6ZSBpbmNyZWFzZWQnLFxuICAgICAgICAnZm9udFNpemVNaW51cyc6ICdGb250IHNpemUgcmVkdWNlZCcsXG4gICAgICAgICdzaXRlQ29sb3JCbGFja09uV2hpdGUnOiAnU2l0ZSBjb2xvciBibGFjayBvbiB3aGl0ZScsXG4gICAgICAgICdzaXRlQ29sb3JXaGl0ZU9uQmxhY2snOiAnU2l0ZSBjb2xvciB3aGl0ZSBvbiBibGFjaycsXG4gICAgICAgICdzaXRlQ29sb3JEYXJrQmx1ZU9uQmx1ZSc6ICdTaXRlIGNvbG9yIGRhcmsgYmx1ZSBvbiBjeWFuJyxcbiAgICAgICAgJ3NpdGVDb2xvckJlaWdlQnJvd24nOiAnU2l0ZUNvbG9yQmVpZ2VCcm93bicsXG4gICAgICAgICdzaXRlQ29sb3JHcmVlbk9uRGFya0Jyb3duJzogJ1NpdGUgY29sb3IgZ3JlZW4gb24gZGFyayBicm93bicsXG4gICAgICAgICdpbWFnZXNPbic6ICdJbWFnZXMgZW5hYmxlJyxcbiAgICAgICAgJ2ltYWdlc09GRic6ICdJbWFnZXMgZGlzYWJsZWQnLFxuICAgICAgICAnaW1hZ2VzR3JheXNjYWxlJzogJ0ltYWdlcyBncmF5IHNjYWxlJyxcbiAgICAgICAgJ3NwZWVjaE9uJzogJ1N5bnRoZXNpcyBzcGVlY2ggZW5hYmxlJyxcbiAgICAgICAgJ3NwZWVjaE9mZic6ICdTeW50aGVzaXMgc3BlZWNoIGRpc2FibGVkJyxcbiAgICAgICAgJ2xpbmVIZWlnaHROb3JtYWwnOiAnTGluZSBzcGFjaW5nIHNpbmdsZScsXG4gICAgICAgICdsaW5lSGVpZ2h0QXZlcmFnZSc6ICdMaW5lIHNwYWNpbmcgb25lIGFuZCBhIGhhbGYnLFxuICAgICAgICAnbGluZUhlaWdodEJpZyc6ICdMaW5lIHNwYWNpbmcgZG91YmxlJyxcbiAgICAgICAgJ0xldHRlclNwYWNpbmdOb3JtYWwnOiAnTGV0dGVyIHNwYWNpbmcgc2luZ2xlJyxcbiAgICAgICAgJ0xldHRlclNwYWNpbmdBdmVyYWdlJzogJ0xldHRlciBzcGFjaW5nIG9uZSBhbmQgYSBoYWxmJyxcbiAgICAgICAgJ0xldHRlclNwYWNpbmdCaWcnOiAnTGV0dGVyIHNwYWNpbmcgbGV0dGVyIGRvdWJsZScsXG4gICAgICAgICdmb250QXJpYWwnOiAnU2FucyBTZXJpZiAtIEFyaWFsJyxcbiAgICAgICAgJ2ZvbnRUaW1lcyc6ICdTZXJpZiAtIFRpbWVzIE5ldyBSb21hbicsXG4gICAgICAgICdidWlsdEVsZW1lbnRzT24nOiAnSW5jbHVkZSBpbmxpbmUgZWxlbWVudHMgYXJlIGVuYWJsZWQnLFxuICAgICAgICAnYnVpbHRFbGVtZW50c09GRic6ICdJbmNsdWRlIGlubGluZSBlbGVtZW50cyBhcmUgZGlzYWJsZWQnLFxuICAgICAgICAncmVzZXRTZXR0aW5ncyc6ICdEZWZhdWx0IHNldHRpbmdzIGhhdmUgYmVlbiBzZXQnLFxuICAgICAgICAncGFuZWxTaG93JzogJ1BhbmVsIHNob3cnLFxuICAgICAgICAncGFuZWxIaWRlJzogJ1BhbmVsIGhpZGUnLFxuICAgICAgICAncGFuZWxPbic6ICdTaXRlIHZlcnNpb24gZm9yIHZpc3VhbGx5IGltcGFpcmVkJyxcbiAgICAgICAgJ3BhbmVsT2ZmJzogJ1JlZ3VsYXIgdmVyc2lvbiBvZiB0aGUgc2l0ZSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIEkxOG4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEkxOG4ob3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEkxOG4pO1xuXG4gICAgICB0aGlzLl9jb25maWcgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhJMThuLCBbe1xuICAgICAga2V5OiBcInRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB0KGtleSkge1xuICAgICAgICByZXR1cm4gbGFuZ1t0aGlzLl9jb25maWcubGFuZ11bJ3RleHQnXVtrZXldO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ2XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdihrZXkpIHtcbiAgICAgICAgcmV0dXJuIGxhbmdbdGhpcy5fY29uZmlnLmxhbmddWyd2b2ljZSddW2tleV07XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEkxOG47XG4gIH0oKTtcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENvbnN0YW50c1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgdmFyIERlZmF1bHQgPSB7XG4gICAgdGFyZ2V0OiAnLmJ2aS1vcGVuJyxcbiAgICBmb250U2l6ZTogMTYsXG4gICAgdGhlbWU6ICd3aGl0ZScsXG4gICAgaW1hZ2VzOiAnZ3JheXNjYWxlJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnbm9ybWFsJyxcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcbiAgICBzcGVlY2g6IHRydWUsXG4gICAgZm9udEZhbWlseTogJ2FyaWFsJyxcbiAgICBidWlsdEVsZW1lbnRzOiBmYWxzZSxcbiAgICBwYW5lbEZpeGVkOiB0cnVlLFxuICAgIHBhbmVsSGlkZTogZmFsc2UsXG4gICAgcmVsb2FkOiBmYWxzZSxcbiAgICBsYW5nOiAncnUtUlUnXG4gIH07XG4gIHZhciBEZWZhdWx0VHlwZSA9IHtcbiAgICB0YXJnZXQ6ICdzdHJpbmcnLFxuICAgIGZvbnRTaXplOiAnbnVtYmVyJyxcbiAgICB0aGVtZTogJ3N0cmluZycsXG4gICAgaW1hZ2VzOiAnKHN0cmluZ3xib29sZWFuKScsXG4gICAgbGV0dGVyU3BhY2luZzogJ3N0cmluZycsXG4gICAgbGluZUhlaWdodDogJ3N0cmluZycsXG4gICAgc3BlZWNoOiAnYm9vbGVhbicsXG4gICAgZm9udEZhbWlseTogJ3N0cmluZycsXG4gICAgYnVpbHRFbGVtZW50czogJ2Jvb2xlYW4nLFxuICAgIHBhbmVsRml4ZWQ6ICdib29sZWFuJyxcbiAgICBwYW5lbEhpZGU6ICdib29sZWFuJyxcbiAgICByZWxvYWQ6ICdib29sZWFuJyxcbiAgICBsYW5nOiAnc3RyaW5nJ1xuICB9O1xuICB2YXIgRGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGFyZ2V0OiAnJyxcbiAgICBmb250U2l6ZTogJyheWzEtOV0kfF5bMS0zXVswLTldPyR8XjM5JCknLFxuICAgIHRoZW1lOiAnKHdoaXRlfGJsYWNrfGJsdWV8YnJvd258Z3JlZW4pJyxcbiAgICBpbWFnZXM6ICcodHJ1ZXxmYWxzZXxncmF5c2NhbGUpJyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnKG5vcm1hbHxhdmVyYWdlfGJpZyknLFxuICAgIGxpbmVIZWlnaHQ6ICcobm9ybWFsfGF2ZXJhZ2V8YmlnKScsXG4gICAgc3BlZWNoOiAnKHRydWV8ZmFsc2UpJyxcbiAgICBmb250RmFtaWx5OiAnKGFyaWFsfHRpbWVzKScsXG4gICAgYnVpbHRFbGVtZW50czogJyh0cnVlfGZhbHNlKScsXG4gICAgcGFuZWxGaXhlZDogJyh0cnVlfGZhbHNlKScsXG4gICAgcGFuZWxIaWRlOiAnKHRydWV8ZmFsc2UpJyxcbiAgICByZWxvYWQ6ICcodHJ1ZXxmYWxzZSknLFxuICAgIGxhbmc6ICcocnUtUlV8ZW4tVVMpJ1xuICB9O1xuICAvKipcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIHZhciBCdmkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJ2aShvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnZpKTtcblxuICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKG9wdGlvbnMpO1xuICAgICAgdGhpcy5fZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2NvbmZpZy50YXJnZXQpO1xuICAgICAgdGhpcy5faTE4biA9IG5ldyBJMThuKHtcbiAgICAgICAgbGFuZzogdGhpcy5fY29uZmlnLmxhbmdcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuXG4gICAgICB0aGlzLl9pbml0KCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdCdmkgY29uc29sZTogcmVhZHkgQnV0dG9uIHZpc3VhbGx5IGltcGFpcmVkIHYxLjAuMCcpO1xuICAgIH0gLy8gUHJpdmF0ZVxuXG5cbiAgICBfY3JlYXRlQ2xhc3MoQnZpLCBbe1xuICAgICAga2V5OiBcIl9pbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgICAgIGdldE9iamVjdCh0aGlzLl9jb25maWcsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGdldENvb2tpZShrZXkpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmVtb3ZlQ29va2llKCdwYW5lbEFjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHN0cmluZ1RvQm9vbGVhbihnZXRDb29raWUoJ3BhbmVsQWN0aXZlJykpKSB7XG4gICAgICAgICAgdGhpcy5fc2V0KCk7XG5cbiAgICAgICAgICB0aGlzLl9nZXRQYW5lbCgpO1xuXG4gICAgICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnNQYW5lbCgpO1xuXG4gICAgICAgICAgdGhpcy5faW1hZ2VzKCk7XG5cbiAgICAgICAgICB0aGlzLl9zcGVlY2hQbGF5ZXIoKTtcblxuICAgICAgICAgIGlmICgnc3BlZWNoU3ludGhlc2lzJyBpbiB3aW5kb3cgJiYgc3RyaW5nVG9Cb29sZWFuKGdldENvb2tpZSgnc3BlZWNoJykpKSB7XG4gICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmIChzeW50aCgpLnBlbmRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnZpLXNwZWVjaC1wbGF5Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ2aS1zcGVlY2gtcGF1c2UnKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ2aS1zcGVlY2gtcmVzdW1lJyk7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnZpLXNwZWVjaC1zdG9wJyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBmdW5jdGlvbiBlbChlbGVtZW50cywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGVsKHBsYXksIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsKHBhdXNlLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbChyZXN1bWUsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVsKHN0b3AsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FkZEV2ZW50TGlzdGVuZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudHMpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGdldE9iamVjdChfdGhpcy5fY29uZmlnLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZXRDb29raWUoa2V5LCBfdGhpcy5fY29uZmlnW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRDb29raWUoJ3BhbmVsQWN0aXZlJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIF90aGlzLl9pbml0KCk7XG5cbiAgICAgICAgICAgIF90aGlzLl9zcGVlY2goXCJcIi5jb25jYXQoX3RoaXMuX2kxOG4udigncGFuZWxPbicpKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYWRkRXZlbnRMaXN0ZW5lcnNQYW5lbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVyc1BhbmVsKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgZWxlbWVudHMgPSB7XG4gICAgICAgICAgZm9udFNpemVNaW51czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1mb250U2l6ZS1taW51cycpLFxuICAgICAgICAgIGZvbnRTaXplUGx1czogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1mb250U2l6ZS1wbHVzJyksXG4gICAgICAgICAgdGhlbWVXaGl0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS10aGVtZS13aGl0ZScpLFxuICAgICAgICAgIHRoZW1lQmxhY2s6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktdGhlbWUtYmxhY2snKSxcbiAgICAgICAgICB0aGVtZUJsdWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktdGhlbWUtYmx1ZScpLFxuICAgICAgICAgIHRoZW1lQnJvd246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktdGhlbWUtYnJvd24nKSxcbiAgICAgICAgICB0aGVtZUdyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnZpLXRoZW1lLWdyZWVuJyksXG4gICAgICAgICAgaW1hZ2VzT246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktaW1hZ2VzLW9uJyksXG4gICAgICAgICAgaW1hZ2VzT2ZmOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnZpLWltYWdlcy1vZmYnKSxcbiAgICAgICAgICBpbWFnZXNHcmF5c2NhbGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktaW1hZ2VzLWdyYXlzY2FsZScpLFxuICAgICAgICAgIHNwZWVjaE9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnZpLXNwZWVjaC1vbicpLFxuICAgICAgICAgIHNwZWVjaE9mZjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1zcGVlY2gtb2ZmJyksXG4gICAgICAgICAgbGluZUhlaWdodE5vcm1hbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1saW5lLWhlaWdodC1ub3JtYWwnKSxcbiAgICAgICAgICBsaW5lSGVpZ2h0QXZlcmFnZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1saW5lLWhlaWdodC1hdmVyYWdlJyksXG4gICAgICAgICAgbGluZUhlaWdodEJpZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1saW5lLWhlaWdodC1iaWcnKSxcbiAgICAgICAgICBsZXR0ZXJTcGFjaW5nTm9ybWFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnZpLWxldHRlci1zcGFjaW5nLW5vcm1hbCcpLFxuICAgICAgICAgIGxldHRlclNwYWNpbmdBdmVyYWdlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnZpLWxldHRlci1zcGFjaW5nLWF2ZXJhZ2UnKSxcbiAgICAgICAgICBsZXR0ZXJTcGFjaW5nQmlnOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnZpLWxldHRlci1zcGFjaW5nLWJpZycpLFxuICAgICAgICAgIGZvbnRGYW1pbHlBcmlhbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1mb250LWZhbWlseS1hcmlhbCcpLFxuICAgICAgICAgIGZvbnRGYW1pbHlUaW1lczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1mb250LWZhbWlseS10aW1lcycpLFxuICAgICAgICAgIGJ1aWx0RWxlbWVudHNPbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1idWlsdC1lbGVtZW50cy1vbicpLFxuICAgICAgICAgIGJ1aWx0RWxlbWVudHNPZmY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktYnVpbHQtZWxlbWVudHMtb2ZmJyksXG4gICAgICAgICAgcmVzZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktcmVzZXQnKSxcbiAgICAgICAgICBsaW5rczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ2aS1saW5rJyksXG4gICAgICAgICAgbW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktbW9kYWwnKVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBhY3RpdmVMaW5rID0gZnVuY3Rpb24gYWN0aXZlTGluayhlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbiksXG4gICAgICAgICAgICAgIF9zdGVwO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICAgIHZhciBzaWJsaW5nID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIHNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNsaWNrID0gZnVuY3Rpb24gY2xpY2soZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgYWN0aXZlQWxsID0gZnVuY3Rpb24gYWN0aXZlQWxsKCkge1xuICAgICAgICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idmktbGluaycpO1xuICAgICAgICAgIGxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZ2V0T2JqZWN0KF90aGlzMi5fY29uZmlnLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAndGhlbWUnKSB7XG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldENvb2tpZShrZXkpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ2aS10aGVtZS1cIi5jb25jYXQodmFsdWUpKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2ltYWdlcycpIHtcbiAgICAgICAgICAgICAgdmFyIF92YWx1ZSA9IGdldENvb2tpZShrZXkpID09PSAnZ3JheXNjYWxlJyA/ICdncmF5c2NhbGUnIDogc3RyaW5nVG9Cb29sZWFuKGdldENvb2tpZShrZXkpKSA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ2aS1pbWFnZXMtXCIuY29uY2F0KF92YWx1ZSkpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnc3BlZWNoJykge1xuICAgICAgICAgICAgICB2YXIgX3ZhbHVlMiA9IHN0cmluZ1RvQm9vbGVhbihnZXRDb29raWUoa2V5KSkgPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idmktc3BlZWNoLVwiLmNvbmNhdChfdmFsdWUyKSkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdsaW5lSGVpZ2h0Jykge1xuICAgICAgICAgICAgICB2YXIgX3ZhbHVlMyA9IGdldENvb2tpZShrZXkpO1xuXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnZpLWxpbmUtaGVpZ2h0LVwiLmNvbmNhdChfdmFsdWUzKSkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdsZXR0ZXJTcGFjaW5nJykge1xuICAgICAgICAgICAgICB2YXIgX3ZhbHVlNCA9IGdldENvb2tpZShrZXkpO1xuXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnZpLWxldHRlci1zcGFjaW5nLVwiLmNvbmNhdChfdmFsdWU0KSkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdmb250RmFtaWx5Jykge1xuICAgICAgICAgICAgICB2YXIgX3ZhbHVlNSA9IGdldENvb2tpZShrZXkpO1xuXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnZpLWZvbnQtZmFtaWx5LVwiLmNvbmNhdChfdmFsdWU1KSkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdidWlsdEVsZW1lbnRzJykge1xuICAgICAgICAgICAgICB2YXIgX3ZhbHVlNiA9IHN0cmluZ1RvQm9vbGVhbihnZXRDb29raWUoa2V5KSkgPyAnb24nIDogJ29mZic7XG5cbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idmktYnVpbHQtZWxlbWVudHMtXCIuY29uY2F0KF92YWx1ZTYpKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBhY3RpdmVBbGwoKTsgLy8gRm9udCBzaXplXG5cbiAgICAgICAgY2xpY2soZWxlbWVudHMuZm9udFNpemVNaW51cywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBzaXplID0gcGFyc2VGbG9hdChnZXRDb29raWUoJ2ZvbnRTaXplJykpIC0gMTtcblxuICAgICAgICAgIGlmIChzaXplICE9PSAwKSB7XG4gICAgICAgICAgICBfdGhpczIuX3NldEF0dHJEYXRhQnZpQm9keSgnZm9udFNpemUnLCBzaXplKTtcblxuICAgICAgICAgICAgc2V0Q29va2llKCdmb250U2l6ZScsIHNpemUpO1xuXG4gICAgICAgICAgICBfdGhpczIuX3NwZWVjaChcIlwiLmNvbmNhdChfdGhpczIuX2kxOG4udignZm9udFNpemVNaW51cycpKSk7XG5cbiAgICAgICAgICAgIGFjdGl2ZUxpbmsoZWxlbWVudHMuZm9udFNpemVNaW51cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2xpY2soZWxlbWVudHMuZm9udFNpemVQbHVzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHNpemUgPSBwYXJzZUZsb2F0KGdldENvb2tpZSgnZm9udFNpemUnKSkgKyAxO1xuXG4gICAgICAgICAgaWYgKHNpemUgIT09IDQwKSB7XG4gICAgICAgICAgICBfdGhpczIuX3NldEF0dHJEYXRhQnZpQm9keSgnZm9udFNpemUnLCBzaXplKTtcblxuICAgICAgICAgICAgc2V0Q29va2llKCdmb250U2l6ZScsIHNpemUpO1xuXG4gICAgICAgICAgICBfdGhpczIuX3NwZWVjaChcIlwiLmNvbmNhdChfdGhpczIuX2kxOG4udignZm9udFNpemVQbHVzJykpKTtcblxuICAgICAgICAgICAgYWN0aXZlTGluayhlbGVtZW50cy5mb250U2l6ZVBsdXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7IC8vIFRoZW1lXG5cbiAgICAgICAgY2xpY2soZWxlbWVudHMudGhlbWVXaGl0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fc2V0QXR0ckRhdGFCdmlCb2R5KCd0aGVtZScsICd3aGl0ZScpO1xuXG4gICAgICAgICAgc2V0Q29va2llKCd0aGVtZScsICd3aGl0ZScpO1xuXG4gICAgICAgICAgX3RoaXMyLl9zcGVlY2goXCJcIi5jb25jYXQoX3RoaXMyLl9pMThuLnYoJ3NpdGVDb2xvckJsYWNrT25XaGl0ZScpKSk7XG5cbiAgICAgICAgICBhY3RpdmVMaW5rKGVsZW1lbnRzLnRoZW1lV2hpdGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xpY2soZWxlbWVudHMudGhlbWVCbGFjaywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fc2V0QXR0ckRhdGFCdmlCb2R5KCd0aGVtZScsICdibGFjaycpO1xuXG4gICAgICAgICAgc2V0Q29va2llKCd0aGVtZScsICdibGFjaycpO1xuXG4gICAgICAgICAgX3RoaXMyLl9zcGVlY2goXCJcIi5jb25jYXQoX3RoaXMyLl9pMThuLnYoJ3NpdGVDb2xvcldoaXRlT25CbGFjaycpKSk7XG5cbiAgICAgICAgICBhY3RpdmVMaW5rKGVsZW1lbnRzLnRoZW1lQmxhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xpY2soZWxlbWVudHMudGhlbWVCbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9zZXRBdHRyRGF0YUJ2aUJvZHkoJ3RoZW1lJywgJ2JsdWUnKTtcblxuICAgICAgICAgIHNldENvb2tpZSgndGhlbWUnLCAnYmx1ZScpO1xuXG4gICAgICAgICAgX3RoaXMyLl9zcGVlY2goXCJcIi5jb25jYXQoX3RoaXMyLl9pMThuLnYoJ3NpdGVDb2xvckRhcmtCbHVlT25CbHVlJykpKTtcblxuICAgICAgICAgIGFjdGl2ZUxpbmsoZWxlbWVudHMudGhlbWVCbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsaWNrKGVsZW1lbnRzLnRoZW1lQnJvd24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3NldEF0dHJEYXRhQnZpQm9keSgndGhlbWUnLCAnYnJvd24nKTtcblxuICAgICAgICAgIHNldENvb2tpZSgndGhlbWUnLCAnYnJvd24nKTtcblxuICAgICAgICAgIF90aGlzMi5fc3BlZWNoKFwiXCIuY29uY2F0KF90aGlzMi5faTE4bi52KCdzaXRlQ29sb3JCZWlnZUJyb3duJykpKTtcblxuICAgICAgICAgIGFjdGl2ZUxpbmsoZWxlbWVudHMudGhlbWVCcm93bik7XG4gICAgICAgIH0pO1xuICAgICAgICBjbGljayhlbGVtZW50cy50aGVtZUdyZWVuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9zZXRBdHRyRGF0YUJ2aUJvZHkoJ3RoZW1lJywgJ2dyZWVuJyk7XG5cbiAgICAgICAgICBzZXRDb29raWUoJ3RoZW1lJywgJ2dyZWVuJyk7XG5cbiAgICAgICAgICBfdGhpczIuX3NwZWVjaChcIlwiLmNvbmNhdChfdGhpczIuX2kxOG4udignc2l0ZUNvbG9yR3JlZW5PbkRhcmtCcm93bicpKSk7XG5cbiAgICAgICAgICBhY3RpdmVMaW5rKGVsZW1lbnRzLnRoZW1lR3JlZW4pO1xuICAgICAgICB9KTsgLy8gSW1hZ2VzXG5cbiAgICAgICAgY2xpY2soZWxlbWVudHMuaW1hZ2VzT24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3NldEF0dHJEYXRhQnZpQm9keSgnaW1hZ2VzJywgJ3RydWUnKTtcblxuICAgICAgICAgIHNldENvb2tpZSgnaW1hZ2VzJywgJ3RydWUnKTtcblxuICAgICAgICAgIF90aGlzMi5fc3BlZWNoKFwiXCIuY29uY2F0KF90aGlzMi5faTE4bi52KCdpbWFnZXNPbicpKSk7XG5cbiAgICAgICAgICBhY3RpdmVMaW5rKGVsZW1lbnRzLmltYWdlc09uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsaWNrKGVsZW1lbnRzLmltYWdlc09mZiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fc2V0QXR0ckRhdGFCdmlCb2R5KCdpbWFnZXMnLCAnZmFsc2UnKTtcblxuICAgICAgICAgIHNldENvb2tpZSgnaW1hZ2VzJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICBfdGhpczIuX3NwZWVjaChcIlwiLmNvbmNhdChfdGhpczIuX2kxOG4udignaW1hZ2VzT0ZGJykpKTtcblxuICAgICAgICAgIGFjdGl2ZUxpbmsoZWxlbWVudHMuaW1hZ2VzT2ZmKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsaWNrKGVsZW1lbnRzLmltYWdlc0dyYXlzY2FsZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fc2V0QXR0ckRhdGFCdmlCb2R5KCdpbWFnZXMnLCAnZ3JheXNjYWxlJyk7XG5cbiAgICAgICAgICBzZXRDb29raWUoJ2ltYWdlcycsICdncmF5c2NhbGUnKTtcblxuICAgICAgICAgIF90aGlzMi5fc3BlZWNoKFwiXCIuY29uY2F0KF90aGlzMi5faTE4bi52KCdpbWFnZXNHcmF5c2NhbGUnKSkpO1xuXG4gICAgICAgICAgYWN0aXZlTGluayhlbGVtZW50cy5pbWFnZXNHcmF5c2NhbGUpO1xuICAgICAgICB9KTsgLy8gU3BlZWNoXG5cbiAgICAgICAgY2xpY2soZWxlbWVudHMuc3BlZWNoT24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3NldEF0dHJEYXRhQnZpQm9keSgnc3BlZWNoJywgJ3RydWUnKTtcblxuICAgICAgICAgIHNldENvb2tpZSgnc3BlZWNoJywgJ3RydWUnKTtcblxuICAgICAgICAgIF90aGlzMi5fc3BlZWNoKFwiXCIuY29uY2F0KF90aGlzMi5faTE4bi52KCdzcGVlY2hPbicpKSk7XG5cbiAgICAgICAgICBhY3RpdmVMaW5rKGVsZW1lbnRzLnNwZWVjaE9uKTtcblxuICAgICAgICAgIF90aGlzMi5fc3BlZWNoUGxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjbGljayhlbGVtZW50cy5zcGVlY2hPZmYsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3NwZWVjaChcIlwiLmNvbmNhdChfdGhpczIuX2kxOG4udignc3BlZWNoT2ZmJykpKTtcblxuICAgICAgICAgIF90aGlzMi5fc2V0QXR0ckRhdGFCdmlCb2R5KCdzcGVlY2gnLCAnZmFsc2UnKTtcblxuICAgICAgICAgIHNldENvb2tpZSgnc3BlZWNoJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgYWN0aXZlTGluayhlbGVtZW50cy5zcGVlY2hPZmYpO1xuXG4gICAgICAgICAgX3RoaXMyLl9zcGVlY2hQbGF5ZXIoKTtcbiAgICAgICAgfSk7IC8vIExpbmUgaGVpZ2h0XG5cbiAgICAgICAgY2xpY2soZWxlbWVudHMubGluZUhlaWdodE5vcm1hbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fc2V0QXR0ckRhdGFCdmlCb2R5KCdsaW5lSGVpZ2h0JywgJ25vcm1hbCcpO1xuXG4gICAgICAgICAgc2V0Q29va2llKCdsaW5lSGVpZ2h0JywgJ25vcm1hbCcpO1xuXG4gICAgICAgICAgX3RoaXMyLl9zcGVlY2goXCJcIi5jb25jYXQoX3RoaXMyLl9pMThuLnYoJ2xpbmVIZWlnaHROb3JtYWwnKSkpO1xuXG4gICAgICAgICAgYWN0aXZlTGluayhlbGVtZW50cy5saW5lSGVpZ2h0Tm9ybWFsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsaWNrKGVsZW1lbnRzLmxpbmVIZWlnaHRBdmVyYWdlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9zZXRBdHRyRGF0YUJ2aUJvZHkoJ2xpbmVIZWlnaHQnLCAnYXZlcmFnZScpO1xuXG4gICAgICAgICAgc2V0Q29va2llKCdsaW5lSGVpZ2h0JywgJ2F2ZXJhZ2UnKTtcblxuICAgICAgICAgIF90aGlzMi5fc3BlZWNoKFwiXCIuY29uY2F0KF90aGlzMi5faTE4bi52KCdsaW5lSGVpZ2h0QXZlcmFnZScpKSk7XG5cbiAgICAgICAgICBhY3RpdmVMaW5rKGVsZW1lbnRzLmxpbmVIZWlnaHRBdmVyYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsaWNrKGVsZW1lbnRzLmxpbmVIZWlnaHRCaWcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3NldEF0dHJEYXRhQnZpQm9keSgnbGluZUhlaWdodCcsICdiaWcnKTtcblxuICAgICAgICAgIHNldENvb2tpZSgnbGluZUhlaWdodCcsICdiaWcnKTtcblxuICAgICAgICAgIF90aGlzMi5fc3BlZWNoKFwiXCIuY29uY2F0KF90aGlzMi5faTE4bi52KCdsaW5lSGVpZ2h0QmlnJykpKTtcblxuICAgICAgICAgIGFjdGl2ZUxpbmsoZWxlbWVudHMubGluZUhlaWdodEJpZyk7XG4gICAgICAgIH0pOyAvLyBMZXR0ZXIgc3BhY2luZ1xuXG4gICAgICAgIGNsaWNrKGVsZW1lbnRzLmxldHRlclNwYWNpbmdOb3JtYWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3NldEF0dHJEYXRhQnZpQm9keSgnbGV0dGVyU3BhY2luZycsICdub3JtYWwnKTtcblxuICAgICAgICAgIHNldENvb2tpZSgnbGV0dGVyU3BhY2luZycsICdub3JtYWwnKTtcblxuICAgICAgICAgIF90aGlzMi5fc3BlZWNoKFwiXCIuY29uY2F0KF90aGlzMi5faTE4bi52KCdMZXR0ZXJTcGFjaW5nTm9ybWFsJykpKTtcblxuICAgICAgICAgIGFjdGl2ZUxpbmsoZWxlbWVudHMubGV0dGVyU3BhY2luZ05vcm1hbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjbGljayhlbGVtZW50cy5sZXR0ZXJTcGFjaW5nQXZlcmFnZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fc2V0QXR0ckRhdGFCdmlCb2R5KCdsZXR0ZXJTcGFjaW5nJywgJ2F2ZXJhZ2UnKTtcblxuICAgICAgICAgIHNldENvb2tpZSgnbGV0dGVyU3BhY2luZycsICdhdmVyYWdlJyk7XG5cbiAgICAgICAgICBfdGhpczIuX3NwZWVjaChcIlwiLmNvbmNhdChfdGhpczIuX2kxOG4udignTGV0dGVyU3BhY2luZ0F2ZXJhZ2UnKSkpO1xuXG4gICAgICAgICAgYWN0aXZlTGluayhlbGVtZW50cy5sZXR0ZXJTcGFjaW5nQXZlcmFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjbGljayhlbGVtZW50cy5sZXR0ZXJTcGFjaW5nQmlnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9zZXRBdHRyRGF0YUJ2aUJvZHkoJ2xldHRlclNwYWNpbmcnLCAnYmlnJyk7XG5cbiAgICAgICAgICBzZXRDb29raWUoJ2xldHRlclNwYWNpbmcnLCAnYmlnJyk7XG5cbiAgICAgICAgICBfdGhpczIuX3NwZWVjaChcIlwiLmNvbmNhdChfdGhpczIuX2kxOG4udignTGV0dGVyU3BhY2luZ0JpZycpKSk7XG5cbiAgICAgICAgICBhY3RpdmVMaW5rKGVsZW1lbnRzLmxldHRlclNwYWNpbmdCaWcpO1xuICAgICAgICB9KTsgLy8gRm9udCBmYW1pbHlcblxuICAgICAgICBjbGljayhlbGVtZW50cy5mb250RmFtaWx5QXJpYWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3NldEF0dHJEYXRhQnZpQm9keSgnZm9udEZhbWlseScsICdhcmlhbCcpO1xuXG4gICAgICAgICAgc2V0Q29va2llKCdmb250RmFtaWx5JywgJ2FyaWFsJyk7XG5cbiAgICAgICAgICBfdGhpczIuX3NwZWVjaChcIlwiLmNvbmNhdChfdGhpczIuX2kxOG4udignZm9udEFyaWFsJykpKTtcblxuICAgICAgICAgIGFjdGl2ZUxpbmsoZWxlbWVudHMuZm9udEZhbWlseUFyaWFsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNsaWNrKGVsZW1lbnRzLmZvbnRGYW1pbHlUaW1lcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5fc2V0QXR0ckRhdGFCdmlCb2R5KCdmb250RmFtaWx5JywgJ3RpbWVzJyk7XG5cbiAgICAgICAgICBzZXRDb29raWUoJ2ZvbnRGYW1pbHknLCAndGltZXMnKTtcblxuICAgICAgICAgIF90aGlzMi5fc3BlZWNoKFwiXCIuY29uY2F0KF90aGlzMi5faTE4bi52KCdmb250VGltZXMnKSkpO1xuXG4gICAgICAgICAgYWN0aXZlTGluayhlbGVtZW50cy5mb250RmFtaWx5VGltZXMpO1xuICAgICAgICB9KTsgLy8gQnVpbHQgZWxlbWVudHNcblxuICAgICAgICBjbGljayhlbGVtZW50cy5idWlsdEVsZW1lbnRzT24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3NldEF0dHJEYXRhQnZpQm9keSgnYnVpbHRFbGVtZW50cycsICd0cnVlJyk7XG5cbiAgICAgICAgICBzZXRDb29raWUoJ2J1aWx0RWxlbWVudHMnLCAndHJ1ZScpO1xuXG4gICAgICAgICAgX3RoaXMyLl9zcGVlY2goXCJcIi5jb25jYXQoX3RoaXMyLl9pMThuLnYoJ2J1aWx0RWxlbWVudHNPbicpKSk7XG5cbiAgICAgICAgICBhY3RpdmVMaW5rKGVsZW1lbnRzLmJ1aWx0RWxlbWVudHNPbik7XG4gICAgICAgIH0pO1xuICAgICAgICBjbGljayhlbGVtZW50cy5idWlsdEVsZW1lbnRzT2ZmLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9zZXRBdHRyRGF0YUJ2aUJvZHkoJ2J1aWx0RWxlbWVudHMnLCAnZmFsc2UnKTtcblxuICAgICAgICAgIHNldENvb2tpZSgnYnVpbHRFbGVtZW50cycsICdmYWxzZScpO1xuXG4gICAgICAgICAgX3RoaXMyLl9zcGVlY2goXCJcIi5jb25jYXQoX3RoaXMyLl9pMThuLnYoJ2J1aWx0RWxlbWVudHNPRkYnKSkpO1xuXG4gICAgICAgICAgYWN0aXZlTGluayhlbGVtZW50cy5idWlsdEVsZW1lbnRzT2ZmKTtcbiAgICAgICAgfSk7IC8vIFJlc2V0XG5cbiAgICAgICAgY2xpY2soZWxlbWVudHMucmVzZXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3NwZWVjaChcIlwiLmNvbmNhdChfdGhpczIuX2kxOG4udigncmVzZXRTZXR0aW5ncycpKSk7XG5cbiAgICAgICAgICBnZXRPYmplY3QoX3RoaXMyLl9jb25maWcsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIF90aGlzMi5fc2V0QXR0ckRhdGFCdmlCb2R5KGtleSwgX3RoaXMyLl9jb25maWdba2V5XSk7XG5cbiAgICAgICAgICAgIHNldENvb2tpZShrZXksIF90aGlzMi5fY29uZmlnW2tleV0pO1xuICAgICAgICAgICAgYWN0aXZlQWxsKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBnZXRBcnJheShlbGVtZW50cy5saW5rcywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICBjbGljayhlbGVtZW50LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWJ2aScpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSAnY2xvc2UnKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5fc2V0QXR0ckRhdGFCdmlCb2R5KCdwYW5lbEFjdGl2ZScsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgIHNldENvb2tpZSgncGFuZWxBY3RpdmUnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICBfdGhpczIuX2luaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ21vZGFsJykge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYnZpLW5vc2Nyb2xsJyk7XG4gICAgICAgICAgICAgIGVsZW1lbnRzLm1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ21vZGFsLWNsb3NlJykge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2J2aS1ub3Njcm9sbCcpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgICAgICAgIGVsZW1lbnRzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3BhbmVsLWhpZGUnKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktcGFuZWwnKS5jbGFzc0xpc3QuYWRkKCdidmktcGFuZWwtaGlkZScpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnZpLWxpbmstZml4ZWQtdG9wJykuY2xhc3NMaXN0LnJlbW92ZSgnYnZpLWhpZGUnKTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1saW5rLWZpeGVkLXRvcCcpLmNsYXNzTGlzdC5hZGQoJ2J2aS1zaG93Jyk7XG4gICAgICAgICAgICAgIHNldENvb2tpZSgncGFuZWxIaWRlJywgJ3RydWUnKTtcblxuICAgICAgICAgICAgICBfdGhpczIuX3NwZWVjaChcIlwiLmNvbmNhdChfdGhpczIuX2kxOG4udigncGFuZWxIaWRlJykpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3BhbmVsLXNob3cnKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktbGluay1maXhlZC10b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdidmktc2hvdycpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnZpLWxpbmstZml4ZWQtdG9wJykuY2xhc3NMaXN0LmFkZCgnYnZpLWhpZGUnKTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1wYW5lbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2J2aS1wYW5lbC1oaWRlJyk7XG4gICAgICAgICAgICAgIHNldENvb2tpZSgncGFuZWxIaWRlJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgX3RoaXMyLl9zcGVlY2goXCJcIi5jb25jYXQoX3RoaXMyLl9pMThuLnYoJ3BhbmVsU2hvdycpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjbGljayhlbGVtZW50cy5tb2RhbCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jb250YWlucyhlbGVtZW50cy5tb2RhbCkpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYnZpLW5vc2Nyb2xsJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgICAgICBlbGVtZW50cy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2dldFBhbmVsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldFBhbmVsKCkge1xuICAgICAgICB2YXIgc2Nyb2xsID0gZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICAgIHZhciBzY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcDtcblxuICAgICAgICAgIGlmIChzdHJpbmdUb0Jvb2xlYW4oZ2V0Q29va2llKCdwYW5lbEZpeGVkJykpKSB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsID4gMjAwKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktcGFuZWwnKS5jbGFzc0xpc3QuYWRkKCdidmktZml4ZWQtdG9wJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnZpLXBhbmVsJykuY2xhc3NMaXN0LnJlbW92ZSgnYnZpLWZpeGVkLXRvcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcGFuZWxIaWRlID0gc3RyaW5nVG9Cb29sZWFuKGdldENvb2tpZSgncGFuZWxIaWRlJykpID8gJyBidmktcGFuZWwtaGlkZScgOiAnJztcbiAgICAgICAgdmFyIGxpbmtIaWRlID0gIXN0cmluZ1RvQm9vbGVhbihnZXRDb29raWUoJ3BhbmVsSGlkZScpKSA/ICcgYnZpLWhpZGUnIDogJ2J2aS1zaG93JztcbiAgICAgICAgdmFyIGh0bWwgPSBcIlxcbiAgICA8ZGl2IGNsYXNzPSdidmktcGFuZWxcIi5jb25jYXQocGFuZWxIaWRlLCBcIic+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidmktYmxvY2tzIGJ2aS1ibG9jay1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1ibG9jay10aXRsZVxcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ2ZvbnRTaXplJyksIFwiPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidmktbGluayBidmktZm9udFNpemUtbWludXNcXFwiPlxcdTA0MTAtPC9hPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnZpLWxpbmsgYnZpLWZvbnRTaXplLXBsdXNcXFwiPlxcdTA0MTArPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1ibG9jay10aXRsZVxcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ3NpdGVDb2xvcnMnKSwgXCI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ2aS1saW5rIGJ2aS10aGVtZS13aGl0ZVxcXCI+XFx1MDQyNjwvYT5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ2aS1saW5rIGJ2aS10aGVtZS1ibGFja1xcXCI+XFx1MDQyNjwvYT5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ2aS1saW5rIGJ2aS10aGVtZS1ibHVlXFxcIj5cXHUwNDI2PC9hPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnZpLWxpbmsgYnZpLXRoZW1lLWJyb3duXFxcIj5cXHUwNDI2PC9hPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnZpLWxpbmsgYnZpLXRoZW1lLWdyZWVuXFxcIj5cXHUwNDI2PC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1ibG9jay10aXRsZVxcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ2ltYWdlcycpLCBcIjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnZpLWxpbmsgYnZpLWltYWdlcy1vblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiYnZpLWltYWdlcyBidmktaW1hZ2VzLWltYWdlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ2aS1saW5rIGJ2aS1pbWFnZXMtb2ZmXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJidmktaW1hZ2VzIGJ2aS1pbWFnZXMtbWludXMtY2lyY2xlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ2aS1saW5rIGJ2aS1pbWFnZXMtZ3JheXNjYWxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJidmktaW1hZ2VzIGJ2aS1pbWFnZXMtYWRqdXN0XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidmktYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidmktYmxvY2stdGl0bGVcXFwiPlwiKS5jb25jYXQodGhpcy5faTE4bi50KCdzcGVlY2gnKSwgXCI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ2aS1saW5rIGJ2aS1zcGVlY2gtb2ZmXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJidmktaW1hZ2VzIGJ2aS1pbWFnZXMtdm9sdW1lLW9mZlxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidmktbGluayBidmktc3BlZWNoLW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJidmktaW1hZ2VzIGJ2aS1pbWFnZXMtdm9sdW1lLXVwXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidmktYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidmktYmxvY2stdGl0bGVcXFwiPlwiKS5jb25jYXQodGhpcy5faTE4bi50KCdzZXR0aW5ncycpLCBcIjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnZpLWxpbmtcXFwiIGRhdGEtYnZpPVxcXCJtb2RhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiYnZpLWltYWdlcyBidmktaW1hZ2VzLWNvZ1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidmktbGlua1xcXCIgZGF0YS1idmk9XFxcImNsb3NlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFwiKS5jb25jYXQodGhpcy5faTE4bi50KCdyZWd1bGFyVmVyc2lvbk9mVGhlU2l0ZScpLCBcIlxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidmktbGlua1xcXCIgZGF0YS1idmk9XFxcInBhbmVsLWhpZGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImJ2aS1pbWFnZXMgYnZpLWltYWdlcy1taW51c1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1tb2RhbFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnZpLW1vZGFsLWRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1tb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1tb2RhbC1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1tb2RhbC10aXRsZVxcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ3NldHRpbmdzJyksIFwiPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ2aS1saW5rIGJ2aS1tb2RhbC1jbG9zZVxcXCIgZGF0YS1idmk9XFxcIm1vZGFsLWNsb3NlXFxcIj5cXHhENzwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnZpLW1vZGFsLWJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1ibG9ja3MgYnZpLWJsb2NrLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidmktYmxvY2stdGl0bGVcXFwiPlwiKS5jb25jYXQodGhpcy5faTE4bi50KCdsZXR0ZXJTcGFjaW5nJyksIFwiPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnZpLWxpbmsgYnZpLWxldHRlci1zcGFjaW5nLW5vcm1hbFxcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ25vcm1hbCcpLCBcIjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidmktbGluayBidmktbGV0dGVyLXNwYWNpbmctYXZlcmFnZVxcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ2F2ZXJhZ2UnKSwgXCI8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnZpLWxpbmsgYnZpLWxldHRlci1zcGFjaW5nLWJpZ1xcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ2JpZycpLCBcIjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidmktYmxvY2stdGl0bGVcXFwiPlwiKS5jb25jYXQodGhpcy5faTE4bi50KCdsaW5lSGVpZ2h0JyksIFwiPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnZpLWxpbmsgYnZpLWxpbmUtaGVpZ2h0LW5vcm1hbFxcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ25vcm1hbCcpLCBcIjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidmktbGluayBidmktbGluZS1oZWlnaHQtYXZlcmFnZVxcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ2F2ZXJhZ2UnKSwgXCI8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnZpLWxpbmsgYnZpLWxpbmUtaGVpZ2h0LWJpZ1xcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ2JpZycpLCBcIjwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidmktYmxvY2stdGl0bGVcXFwiPlwiKS5jb25jYXQodGhpcy5faTE4bi50KCdmb250JyksIFwiPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnZpLWxpbmsgYnZpLWZvbnQtZmFtaWx5LWFyaWFsXFxcIj5cIikuY29uY2F0KHRoaXMuX2kxOG4udCgnYXJpYWwnKSwgXCI8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnZpLWxpbmsgYnZpLWZvbnQtZmFtaWx5LXRpbWVzXFxcIj5cIikuY29uY2F0KHRoaXMuX2kxOG4udCgndGltZXMnKSwgXCI8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidmktYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnZpLWJsb2NrLXRpdGxlXFxcIj5cIikuY29uY2F0KHRoaXMuX2kxOG4udCgnYnVpbHRFbGVtZW50cycpLCBcIjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ2aS1saW5rIGJ2aS1idWlsdC1lbGVtZW50cy1vblxcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ29uJyksIFwiPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ2aS1saW5rIGJ2aS1idWlsdC1lbGVtZW50cy1vZmZcXFwiPlwiKS5jb25jYXQodGhpcy5faTE4bi50KCdvZmYnKSwgXCI8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1ibG9ja3MgYnZpLWJsb2NrLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHBzOi8vYnZpLmlzdmVrLnJ1XFxcIiBjbGFzcz1cXFwiYnZpLWNvcHlyaWdodFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPmJ2aS5pc3Zlay5ydTwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnZpLW1vZGFsLWZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ2aS1saW5rIGJ2aS1yZXNldFxcXCI+XCIpLmNvbmNhdCh0aGlzLl9pMThuLnQoJ3Jlc2V0JyksIFwiPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlwiKTtcbiAgICAgICAgdmFyIGxpbmsgPSBcIjxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidmktbGluayBidmktbGluay1maXhlZC10b3AgYnZpLW5vLXN0eWxlcyBcIi5jb25jYXQobGlua0hpZGUsIFwiXFxcIiBkYXRhLWJ2aT1cXFwicGFuZWwtc2hvd1xcXCI+XCIpICsgJzxpIGNsYXNzPVwiYnZpLWltYWdlcyBidmktaW1hZ2VzLWV5ZSBidmktaW1hZ2VzLXNpemUtMzIgYnZpLW5vLXN0eWxlc1wiPjwvaT48L2E+JztcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktYm9keScpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBodG1sKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1ib2R5JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbGluayk7XG4gICAgICAgIHNjcm9sbCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldCgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdidmktYWN0aXZlJyk7XG4gICAgICAgIHdyYXBJbm5lcihkb2N1bWVudC5ib2R5LCAnZGl2JywgJ2J2aS1ib2R5Jyk7XG4gICAgICAgIGdldE9iamVjdCh0aGlzLl9jb25maWcsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLl9zZXRBdHRyRGF0YUJ2aUJvZHkoa2V5LCBnZXRDb29raWUoa2V5KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBnZXRBcnJheSh0aGlzLl9lbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJykuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYnZpLWltZycpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2J2aS1pbWcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5IConKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidmktYmFja2dyb3VuZC1pbWFnZScpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2J2aS1iYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmUoKSB7XG4gICAgICAgIHZhciBidmlQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktcGFuZWwnKTtcbiAgICAgICAgdmFyIGJ2aUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnZpLWJvZHknKTtcbiAgICAgICAgdmFyIGJ2aUxpbmtGaXhlZFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idmktbGluay1maXhlZC10b3AnKTtcblxuICAgICAgICBpZiAoYnZpUGFuZWwpIHtcbiAgICAgICAgICBidmlQYW5lbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidmlCb2R5KSB7XG4gICAgICAgICAgdW53cmFwKGJ2aUJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ2aUxpbmtGaXhlZFRvcCkge1xuICAgICAgICAgIGJ2aUxpbmtGaXhlZFRvcC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NwZWVjaChcIlwiLmNvbmNhdCh0aGlzLl9pMThuLnYoJ3BhbmVsT2ZmJykpKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2J2aS1hY3RpdmUnKTtcbiAgICAgICAgZ2V0QXJyYXkodGhpcy5fZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3RyaW5nVG9Cb29sZWFuKGdldENvb2tpZSgncmVsb2FkJykpKSB7XG4gICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRPYmplY3QodGhpcy5fY29uZmlnLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmVtb3ZlQ29va2llKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3NwZWVjaFBsYXllcigpO1xuXG4gICAgICAgIHJlbW92ZUNvb2tpZSgncGFuZWxBY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2ltYWdlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbWFnZXMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidmktbm8tc3R5bGUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdidmktaW1nJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ2aS1ib2R5IConKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgICAgICAgIGlmIChzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgIT09ICdub25lJyAmJiBzdHlsZS5iYWNrZ3JvdW5kICE9PSAnbm9uZScgJiYgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidmktbm8tc3R5bGUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdidmktYmFja2dyb3VuZC1pbWFnZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9nZXRDb25maWdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRGVmYXVsdCksIGNvbmZpZyk7XG4gICAgICAgIHZhciBleHRlbmRlZCA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGtleURlZmF1bHQgaW4gRGVmYXVsdCkge1xuICAgICAgICAgIGV4dGVuZGVkW2tleURlZmF1bHRdID0gY29uZmlnW2tleURlZmF1bHRdO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tDb25maWcoZXh0ZW5kZWQsIERlZmF1bHRUeXBlLCBEZWZhdWx0T3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBleHRlbmRlZDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldEF0dHJEYXRhQnZpQm9keVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRBdHRyRGF0YUJ2aUJvZHkoKSB7XG4gICAgICAgIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ2aS1ib2R5Jykuc2V0QXR0cmlidXRlKFwiZGF0YS1idmktXCIuY29uY2F0KG5hbWUpLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zcGVlY2hQbGF5ZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc3BlZWNoUGxheWVyKCkge1xuICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICB2YXIgc2VsZWN0b3JTcGVlY2hUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ2aS1zcGVlY2gtdGV4dCcpO1xuICAgICAgICB2YXIgc2VsZWN0b3JTcGVlY2hMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ2aS1zcGVlY2gtbGluaycpO1xuICAgICAgICB2YXIgc2VsZWN0b3JCdmlTcGVlY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnZpLXNwZWVjaCcpO1xuXG4gICAgICAgIGlmICgnc3BlZWNoU3ludGhlc2lzJyBpbiB3aW5kb3cgJiYgc3RyaW5nVG9Cb29sZWFuKGdldENvb2tpZSgnc3BlZWNoJykpKSB7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yQnZpU3BlZWNoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3JTcGVlY2hUZXh0KSB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yU3BlZWNoVGV4dC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVud3JhcChlbGVtZW50KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RvclNwZWVjaExpbmspIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3JTcGVlY2hMaW5rLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGVjdG9yQnZpU3BlZWNoLmZvckVhY2goZnVuY3Rpb24gKHNwZWVjaERpdkJsb2NrLCBpbmRleCkge1xuICAgICAgICAgICAgICB2YXIgaWQgPSBcImJ2aS1zcGVlY2gtdGV4dC1pZC1cIi5jb25jYXQoaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgdmFyIGh0bWwgPSBcIlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ2aS1zcGVlY2gtbGlua1xcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnZpLWxpbmsgYnZpLXNwZWVjaC1wbGF5XFxcIiB0aXRsZT1cXFwiXFx1MDQxMlxcdTA0M0VcXHUwNDQxXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQzOFxcdTA0MzdcXHUwNDMyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzOFxcXCI+XFx1MDQxMlxcdTA0M0VcXHUwNDQxXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQzOFxcdTA0MzdcXHUwNDMyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzODwvYT5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidmktbGluayBidmktc3BlZWNoLXBhdXNlIGRpc2FibGVkXFxcIiB0aXRsZT1cXFwiXFx1MDQxRlxcdTA0MzBcXHUwNDQzXFx1MDQzN1xcdTA0MzBcXFwiPlxcdTA0MUZcXHUwNDMwXFx1MDQ0M1xcdTA0MzdcXHUwNDMwPC9hPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ2aS1saW5rIGJ2aS1zcGVlY2gtcmVzdW1lIGRpc2FibGVkXFxcIiB0aXRsZT1cXFwiXFx1MDQxRlxcdTA0NDBcXHUwNDNFXFx1MDQzNFxcdTA0M0VcXHUwNDNCXFx1MDQzNlxcdTA0MzhcXHUwNDQyXFx1MDQ0Q1xcXCI+XFx1MDQxRlxcdTA0NDBcXHUwNDNFXFx1MDQzNFxcdTA0M0VcXHUwNDNCXFx1MDQzNlxcdTA0MzhcXHUwNDQyXFx1MDQ0QzwvYT5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidmktbGluayBidmktc3BlZWNoLXN0b3AgZGlzYWJsZWRcXFwiIHRpdGxlPVxcXCJcXHUwNDIxXFx1MDQ0MlxcdTA0M0VcXHUwNDNGXFxcIj5cXHUwNDIxXFx1MDQ0MlxcdTA0M0VcXHUwNDNGPC9pPjwvYT5cXG4gICAgICAgICAgPC9kaXY+XCI7XG4gICAgICAgICAgICAgIHdyYXBJbm5lcihzcGVlY2hEaXZCbG9jaywgJ2RpdicsIFwiYnZpLXNwZWVjaC10ZXh0IFwiLmNvbmNhdChpZCkpO1xuICAgICAgICAgICAgICBzcGVlY2hEaXZCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yUGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idmktc3BlZWNoLXBsYXknKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvclBhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ2aS1zcGVlY2gtcGF1c2UnKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvclJlc3VtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idmktc3BlZWNoLXJlc3VtZScpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yU3RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idmktc3BlZWNoLXN0b3AnKTtcblxuICAgICAgICAgICAgdmFyIGVsID0gZnVuY3Rpb24gZWwoZWxlbWVudHMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlbGVtZW50LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGVsKHNlbGVjdG9yUGxheSwgZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgIHZhciB0ZXh0ID0gdGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgICB2YXIgY2xvc2VzdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYnZpLXNwZWVjaC1saW5rJyk7XG4gICAgICAgICAgICAgIHZhciBwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ2aS1zcGVlY2gtcGxheScpO1xuICAgICAgICAgICAgICB2YXIgcGF1c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnZpLXNwZWVjaC1wYXVzZScpO1xuICAgICAgICAgICAgICB2YXIgcmVzdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ2aS1zcGVlY2gtcmVzdW1lJyk7XG4gICAgICAgICAgICAgIHZhciBzdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ2aS1zcGVlY2gtc3RvcCcpO1xuXG4gICAgICAgICAgICAgIF90aGlzNC5fc3BlZWNoKHRleHQudGV4dENvbnRlbnQsIHRleHQsIHRydWUpO1xuXG4gICAgICAgICAgICAgIHBsYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBwYXVzZS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJlc3VtZS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHN0b3AuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgY2xvc2VzdC5xdWVyeVNlbGVjdG9yKCcuYnZpLXNwZWVjaC1wYXVzZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgIGNsb3Nlc3QucXVlcnlTZWxlY3RvcignLmJ2aS1zcGVlY2gtc3RvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsKHNlbGVjdG9yUGF1c2UsIGZ1bmN0aW9uIChlbGVtZW50LCBldmVudCkge1xuICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICB2YXIgY2xvc2VzdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYnZpLXNwZWVjaC1saW5rJyk7XG4gICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICBjbG9zZXN0LnF1ZXJ5U2VsZWN0b3IoJy5idmktc3BlZWNoLXJlc3VtZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgIHN5bnRoKCkucGF1c2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWwoc2VsZWN0b3JSZXN1bWUsIGZ1bmN0aW9uIChlbGVtZW50LCBldmVudCkge1xuICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICB2YXIgY2xvc2VzdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYnZpLXNwZWVjaC1saW5rJyk7XG4gICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICBjbG9zZXN0LnF1ZXJ5U2VsZWN0b3IoJy5idmktc3BlZWNoLXBhdXNlJykuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgc3ludGgoKS5yZXN1bWUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWwoc2VsZWN0b3JTdG9wLCBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgdmFyIGNsb3Nlc3QgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmJ2aS1zcGVlY2gtbGluaycpO1xuICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgY2xvc2VzdC5xdWVyeVNlbGVjdG9yKCcuYnZpLXNwZWVjaC1wYXVzZScpLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgIGNsb3Nlc3QucXVlcnlTZWxlY3RvcignLmJ2aS1zcGVlY2gtcGxheScpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgIHN5bnRoKCkuY2FuY2VsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yU3BlZWNoVGV4dCkge1xuICAgICAgICAgICAgc2VsZWN0b3JTcGVlY2hUZXh0LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVud3JhcChlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxlY3RvclNwZWVjaExpbmspIHtcbiAgICAgICAgICAgIHNlbGVjdG9yU3BlZWNoTGluay5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zcGVlY2hcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc3BlZWNoKHRleHQsIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGVjaG8gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgICAgIGlmICgnc3BlZWNoU3ludGhlc2lzJyBpbiB3aW5kb3cgJiYgc3RyaW5nVG9Cb29sZWFuKGdldENvb2tpZSgnc3BlZWNoJykpKSB7XG4gICAgICAgICAgc3ludGgoKS5jYW5jZWwoKTtcblxuICAgICAgICAgIHZhciBnZXRXb3JkQXQgPSBmdW5jdGlvbiBnZXRXb3JkQXQoc3RyLCBwb3MpIHtcbiAgICAgICAgICAgIHN0ciA9IFN0cmluZyhzdHIpO1xuICAgICAgICAgICAgcG9zID0gTnVtYmVyKHBvcykgPj4+IDA7XG4gICAgICAgICAgICB2YXIgbGVmdCA9IHN0ci5zbGljZSgwLCBwb3MgKyAxKS5zZWFyY2goL1xcUyskLyk7XG4gICAgICAgICAgICB2YXIgcmlnaHQgPSBzdHIuc2xpY2UocG9zKS5zZWFyY2goL1xccy8pO1xuXG4gICAgICAgICAgICBpZiAocmlnaHQgPCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdHIuc2xpY2UobGVmdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdHIuc2xpY2UobGVmdCwgcmlnaHQgKyBwb3MpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB2YXIgY2h1bmtMZW5ndGggPSAxMjA7XG4gICAgICAgICAgdmFyIHBhdHRlcm5SZWdleCA9IG5ldyBSZWdFeHAoJ15bXFxcXHNcXFxcU117JyArIE1hdGguZmxvb3IoY2h1bmtMZW5ndGggLyAyKSArICcsJyArIGNodW5rTGVuZ3RoICsgJ31bLiE/LF17MX18XltcXFxcc1xcXFxTXXsxLCcgKyBjaHVua0xlbmd0aCArICd9JHxeW1xcXFxzXFxcXFNdezEsJyArIGNodW5rTGVuZ3RoICsgJ30gJyk7XG4gICAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgICAgdmFyICR0ZXh0ID0gdGV4dDtcbiAgICAgICAgICB2YXIgdm9pY2VzID0gc3ludGgoKS5nZXRWb2ljZXMoKTtcblxuICAgICAgICAgIHdoaWxlICgkdGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKCR0ZXh0Lm1hdGNoKHBhdHRlcm5SZWdleClbMF0pO1xuICAgICAgICAgICAgJHRleHQgPSAkdGV4dC5zdWJzdHJpbmcoYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV0ubGVuZ3RoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChnZXRUZXh0KSB7XG4gICAgICAgICAgICB2YXIgdXR0ZXIgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKGdldFRleHQudHJpbSgpKTtcbiAgICAgICAgICAgIHV0dGVyLnZvbHVtZSA9IDE7XG4gICAgICAgICAgICB1dHRlci5yYXRlID0gMTtcbiAgICAgICAgICAgIHV0dGVyLnBpdGNoID0gMTtcbiAgICAgICAgICAgIHV0dGVyLmxhbmcgPSBfdGhpczUuX2NvbmZpZy5sYW5nO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoX3RoaXM1Ll9jb25maWcubGFuZyA9PT0gJ3J1LVJVJyAmJiB2b2ljZXNbaV0ubmFtZSA9PT0gJ01pY3Jvc29mdCBQYXZlbCAtIFJ1c3NpYW4gKFJ1c3NpYSknKSB7XG4gICAgICAgICAgICAgICAgdXR0ZXIudm9pY2UgPSB2b2ljZXNbaV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoX3RoaXM1Ll9jb25maWcubGFuZyA9PT0gJ2VuLVVTJyAmJiB2b2ljZXNbaV0ubmFtZSA9PT0gJ01pY3Jvc29mdCBQYXZlbCAtIEVuZ2xpc2ggKEVuZ2xpc2gpJykge1xuICAgICAgICAgICAgICAgIHV0dGVyLnZvaWNlID0gdm9pY2VzW2ldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlY2hvKSB7XG4gICAgICAgICAgICAgIHV0dGVyLm9uYm91bmRhcnkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2J2aS1oaWdobGlnaHRpbmcnKTtcbiAgICAgICAgICAgICAgICB2YXIgd29ybGQgPSBnZXRXb3JkQXQoZXZlbnQudXR0ZXJhbmNlLnRleHQsIGV2ZW50LmNoYXJJbmRleCk7XG4gICAgICAgICAgICAgICAgdmFyIHRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB2YXIgdGVybSA9IHdvcmxkLnJlcGxhY2UoLyhcXHMrKS8sICcoKDxbXj5dKz4pKiQxKDxbXj5dKz4pKiknKTtcbiAgICAgICAgICAgICAgICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoJygnICsgdGVybSArICcpJywgJ2dpJyk7XG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudC5yZXBsYWNlKHBhdHRlcm4sICc8bWFyaz4kMTwvbWFyaz4nKTtcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudCA9IHRleHRDb250ZW50LnJlcGxhY2UoLyg8bWFyaz5bXjw+XSopKCg8W14+XSs+KSspKFtePD5dKjxcXC9tYXJrPikvLCAnJDE8L21hcms+JDI8bWFyaz4kNCcpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgdXR0ZXIub25lbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2J2aS1oaWdobGlnaHRpbmcnKTtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIHRleHRDb250ZW50ID0gdGV4dENvbnRlbnQucmVwbGFjZSgvKDxtYXJrPiQxPFxcL21hcms+KS8sICckMScpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN5bnRoKCkuc3BlYWsodXR0ZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEJ2aTtcbiAgfSgpO1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBCdXR0b24gdmlzdWFsbHkgaW1wYWlyZWQgKHYxLjAuMCk6IGluZGV4LnVtZC5qc1xuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS92ZWtzL2J1dHRvbi12aXN1YWxseS1pbXBhaXJlZC1qYXZhc2NyaXB0L2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQpXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICB2YXIgaW5kZXhfdW1kID0ge1xuICAgIEJ2aTogQnZpXG4gIH07XG5cbiAgcmV0dXJuIGluZGV4X3VtZDtcblxufSkpKTtcblxuIl0sImZpbGUiOiJsaWIvYnZpL2J2aS5qcyJ9
