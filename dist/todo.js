/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Vue) {
	    "use strict";
	    var TodoApp = (function (_super) {
	        __extends(TodoApp, _super);
	        function TodoApp() {
	            _super.call(this);
	            this.newTaskBody = '';
	            this.editingTask = {};
	            this._init({
	                el: '#todoapp',
	                data: {
	                    tasks: this.tasks,
	                    newTaskBody: this.newTaskBody,
	                    editingTask: this.editingTask
	                },
	                computed: {
	                    // getCountDone: this.getCountDone
	                    allDone: {
	                        get: function () {
	                            var res = true;
	                            this.tasks.forEach(function (task) {
	                                if (task.done === false) {
	                                    res = false;
	                                    return false;
	                                }
	                            });
	                            return res;
	                        },
	                        set: function (value) {
	                            this.tasks.forEach(function (task) {
	                                task.done = value;
	                            });
	                        }
	                    }
	                },
	                created: function () {
	                    this.tasks = [
	                        { body: 'do this 1', done: false }
	                    ];
	                },
	                method: {
	                    addTask: this.addTask,
	                    deleteTask: this.deleteTask,
	                    doneEdit: this.doneEdit,
	                    editTask: this.editTask
	                }
	            });
	        }
	        TodoApp.prototype.addTask = function () {
	            var task = this.newTaskBody || this.newTaskBody.trim();
	            if (!task) {
	                return;
	            }
	            this.tasks.push({ body: task, done: false });
	            this.newTaskBody = '';
	        };
	        TodoApp.prototype.deleteTask = function (delTask) {
	            console.log('delete');
	            this.tasks.$remove(delTask);
	        };
	        TodoApp.prototype.doneEdit = function (doneTask) {
	            if (!doneTask.body.trim()) {
	                return;
	            }
	            doneTask.body = doneTask.body.trim();
	            this.editingTask = null;
	        };
	        TodoApp.prototype.editTask = function (task) {
	            console.log('edit');
	            this.editingTask = task;
	        };
	        return TodoApp;
	    }(Vue));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = new TodoApp();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Vue;

/***/ }
/******/ ]);