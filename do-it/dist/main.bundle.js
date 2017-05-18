webpackJsonp([1,5],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchiveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArchiveComponent = (function () {
    function ArchiveComponent(todoService) {
        this.todoService = todoService;
        this.searchStringSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
    }
    ArchiveComponent.prototype.ngOnInit = function () {
        this.archiveList$ = this.todoService.todoList$
            .combineLatest(this.searchStringSub, function (list, searchString) {
            // console.log(list, searchString);
            return list.filter(function (todo) { return todo.isDone && todo.title.includes(searchString); });
        });
    };
    ArchiveComponent.prototype.onKeyUp = function (searchStr) {
        console.log(searchStr);
        this.searchStringSub.next(searchStr);
    };
    ArchiveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-archive',
            template: __webpack_require__(565),
            styles: [__webpack_require__(558)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === 'function' && _a) || Object])
    ], ArchiveComponent);
    return ArchiveComponent;
    var _a;
}());
//# sourceMappingURL=archive.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(todoService) {
        this.todoService = todoService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.todoService.fetchAllTodos();
        this.todoService.todoList$
            .subscribe(function (list) {
            _this.projectList = list.filter(function (todo) { return todo.category === 'project' && !todo.isDone; });
            _this.personalList = list.filter(function (todo) { return todo.category === 'personal' && !todo.isDone; });
        });
    };
    HomeComponent.prototype.onProjectTaskAdded = function (taskName) {
        this.todoService.addTaskToProjects(taskName);
    };
    HomeComponent.prototype.onPersonalTaskAdded = function (taskName) {
        this.todoService.addTaskToPersonal(taskName);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(567),
            styles: [__webpack_require__(559)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(title, category, id, isDone, createdDate, endDate) {
        if (id === void 0) { id = ''; }
        if (isDone === void 0) { isDone = false; }
        if (createdDate === void 0) { createdDate = Date.now(); }
        if (endDate === void 0) { endDate = 0; }
        this.isDone = isDone;
        this.createdDate = createdDate;
        this.title = title;
        this.category = category;
        this.id = id;
        this.endDate = endDate;
    }
    return Todo;
}());
//# sourceMappingURL=todo.js.map

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 376;


/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(502);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(564),
            styles: [__webpack_require__(557)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__check_list_check_list_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__todo_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__archive_archive_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__todo_card_todo_card_component__ = __webpack_require__(501);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__["a" /* Nav */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__check_list_check_list_component__["a" /* CheckListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__archive_archive_component__["a" /* ArchiveComponent */],
                __WEBPACK_IMPORTED_MODULE_12__todo_card_todo_card_component__["a" /* TodoCardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routes */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__todo_service__["a" /* TodoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__archive_archive_component__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'archive',
        component: __WEBPACK_IMPORTED_MODULE_1__archive_archive_component__["a" /* ArchiveComponent */]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckListComponent = (function () {
    function CheckListComponent(todoService) {
        this.todoService = todoService;
        this.taskAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    CheckListComponent.prototype.ngOnInit = function () {
        // console.log(this.checkList);
    };
    CheckListComponent.prototype.isOk = function (item) {
        var diffInTime = this.findTotalMsElapsed(item.createdDate);
        var milliSecondsInADay = 24 * 60 * 60 * 1000;
        // console.log(diffInTime, milliSecondsInADay);
        return (diffInTime < milliSecondsInADay) ? true : false;
    };
    CheckListComponent.prototype.isDueByOneDay = function (item) {
        var diffInTime = this.findTotalMsElapsed(item.createdDate);
        var milliSecondsInADay = 24 * 60 * 60 * 1000;
        var milliSecondsIn2Days = 2 * 24 * 60 * 60 * 1000;
        return (diffInTime > milliSecondsInADay && diffInTime < milliSecondsIn2Days) ? true : false;
    };
    CheckListComponent.prototype.isOverDue = function (item) {
        var diffInTime = this.findTotalMsElapsed(item.createdDate);
        var milliSecondsIn3Days = 3 * 24 * 60 * 60 * 1000;
        return diffInTime > milliSecondsIn3Days ? true : false;
    };
    CheckListComponent.prototype.findTotalMsElapsed = function (createdDate) {
        var currentDate = Date.now();
        // console.log(createdDate, Date.now());
        var diffInTime = currentDate - createdDate;
        return diffInTime;
    };
    CheckListComponent.prototype.addTask = function (taskName) {
        // console.log(taskName);
        this.taskAdded.emit(taskName);
    };
    CheckListComponent.prototype.onCheckboxChange = function (todo, e) {
        console.log(e.target.checked);
        console.log(todo);
        this.todoService.markTodoAsDone(todo);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], CheckListComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], CheckListComponent.prototype, "checkList", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], CheckListComponent.prototype, "taskAdded", void 0);
    CheckListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-check-list',
            template: __webpack_require__(566),
            styles: [__webpack_require__(556)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === 'function' && _b) || Object])
    ], CheckListComponent);
    return CheckListComponent;
    var _a, _b;
}());
//# sourceMappingURL=check-list.component.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nav; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Nav = (function () {
    function Nav() {
    }
    Nav = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__(568),
            styles: [__webpack_require__(560)]
        }), 
        __metadata('design:paramtypes', [])
    ], Nav);
    return Nav;
}());
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_todo__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoCardComponent = (function () {
    function TodoCardComponent(todoService) {
        this.todoService = todoService;
    }
    TodoCardComponent.prototype.ngOnInit = function () {
    };
    TodoCardComponent.prototype.delete = function (id) {
        this.todoService.deleteTodo(id);
    };
    TodoCardComponent.prototype.revert = function (todo) {
        this.todoService.revertTodo(todo);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_todo__["a" /* Todo */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__models_todo__["a" /* Todo */]) === 'function' && _a) || Object)
    ], TodoCardComponent.prototype, "todo", void 0);
    TodoCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-todo-card',
            template: __webpack_require__(569),
            styles: [__webpack_require__(561)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === 'function' && _b) || Object])
    ], TodoCardComponent);
    return TodoCardComponent;
    var _a, _b;
}());
//# sourceMappingURL=todo-card.component.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, ".status-indicator {\n  border-right-width: thick;\n  border-right-style: solid;\n  padding-right: 10px; }\n  .status-indicator.ok {\n    border-right-color: green; }\n  .status-indicator.warn {\n    border-right-color: orange; }\n  .status-indicator.danger {\n    border-right-color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, ".flex-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n    ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = "     <form>\r\n        <div class=\"input-field\">\r\n          <input id=\"search\" type=\"search\" placeholder=\"Search by task\" required #search\r\n          (keyup)=\"onKeyUp(search.value)\">\r\n          <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\r\n          <i class=\"material-icons\">close</i>\r\n        </div>\r\n      </form>\r\n\r\n<app-todo-card [todo]=\"item\" *ngFor=\"let item of archiveList$ | async\"></app-todo-card>\r\n"

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<h3>{{title}}</h3>\r\n\r\n<div class=\"input-field\">\r\n  <input placeholder=\"What do you want to do today ?\" \r\n  id=\"task\" type=\"text\" class=\"validate\" #task (keyup.enter)=\"addTask(task.value);task.value=''\">\r\n</div>\r\n<p *ngFor=\"let item of checkList\">\r\n<input type=\"checkbox\" id=\"{{item.id}}\" (change)=\"onCheckboxChange(item, $event)\" />\r\n  <label for=\"{{item.id}}\"\r\n  class=\"status-indicator\" [ngClass]=\"{'ok': isOk(item), 'warn': isDueByOneDay(item), 'danger': isOverDue(item)}\">\r\n  {{item.title}}</label>\r\n</p>"

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col s6\">\r\n    <app-check-list title=\"Project To Do\" [checkList]=\"projectList\"\r\n    (taskAdded)=\"onProjectTaskAdded($event)\">\r\n    </app-check-list>\r\n  </div>\r\n  <div class=\"col s6\">\r\n    <app-check-list title=\"Personal To Do\" [checkList]=\"personalList\"\r\n    (taskAdded)=\"onPersonalTaskAdded($event)\">\r\n    </app-check-list>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = " <nav>\r\n    <div class=\"nav-wrapper\">\r\n      <a [routerLink]=\"['home']\" class=\"brand-logo\">Do It</a>\r\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n        <li><a [routerLink]=\"['archive']\">Archive</a></li>\r\n        <li><a href=\"badges.html\">About</a></li>\r\n      </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-content\">\r\n    <span class=\"card-title\">{{todo.title}}</span>\r\n    <div class=\"flex-container\">\r\n      <span>\r\n        <i class=\"material-icons\">hourglass_empty</i>\r\n        {{todo.createdDate | date}}\r\n      </span>\r\n      <span>\r\n        <i class=\"material-icons\">hourglass_full</i>\r\n        {{todo.endDate | date}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-action\">\r\n    <a (click)=\"delete(todo.id)\">Trash this</a>\r\n    <a (click)=\"revert(todo)\">Roll this back</a>\r\n  </div>\r\n</div>\r\n            "

/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(377);


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_todo__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.baseURL = 'https://doit-5db57.firebaseio.com/todo';
        this.todoListSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this.todoList$ = this.todoListSub.asObservable();
        this.fetchAllTodos();
    }
    TodoService.prototype.fetchAllTodos = function () {
        var _this = this;
        var todoList = [];
        return this.http.get(this.baseURL + ".json")
            .subscribe(function (data) {
            var resp = data.json();
            var keysArr = Object.keys(resp);
            for (var i = 0; i < keysArr.length; i++) {
                var key = keysArr[i];
                var todoRspObj = resp[key];
                var todoModel = new __WEBPACK_IMPORTED_MODULE_3__models_todo__["a" /* Todo */](todoRspObj.title, todoRspObj.category, key, todoRspObj.isDone, todoRspObj.createdDate, todoRspObj.endDate);
                todoList.push(todoModel);
            }
            // console.log(todoList);
            _this.todoListSub.next(todoList);
        });
    };
    TodoService.prototype.addTaskToProjects = function (taskName) {
        this.postTask(new __WEBPACK_IMPORTED_MODULE_3__models_todo__["a" /* Todo */](taskName, 'project'));
    };
    TodoService.prototype.addTaskToPersonal = function (taskName) {
        this.postTask(new __WEBPACK_IMPORTED_MODULE_3__models_todo__["a" /* Todo */](taskName, 'personal'));
    };
    TodoService.prototype.postTask = function (todo) {
        var _this = this;
        this.http.post(this.baseURL + ".json", todo)
            .subscribe(function (data) {
            // console.log(data.json());
            todo.id = data.json().name;
            var todoList = _this.todoListSub.getValue();
            todoList.push(todo);
            _this.todoListSub.next(todoList);
        }, function (err) {
            console.log(err);
        });
    };
    TodoService.prototype.deleteTodo = function (id) {
        var _this = this;
        this.http.delete(this.baseURL + "/" + id + ".json")
            .subscribe(function (res) {
            console.log(res.json());
            // Delete the Object
            var todoList = _this.todoListSub.getValue();
            _.remove(todoList, function (todo) { return todo.id === id; });
            _this.todoListSub.next(todoList);
        });
    };
    TodoService.prototype.markTodoAsDone = function (todo) {
        var _this = this;
        // todo.isDone = true;
        // todo.endDate = Date.now();
        var updatedTodo = Object.assign({}, todo);
        updatedTodo.isDone = true;
        updatedTodo.endDate = Date.now();
        this.http.put(this.baseURL + "/" + todo.id + ".json", updatedTodo)
            .subscribe(function (res) {
            console.log(res.json());
            var respTodo = res.json();
            var todoList = _this.todoListSub.getValue();
            todoList.forEach(function (todo) {
                if (todo.id === respTodo.id) {
                    todo.isDone = true;
                    todo.endDate = respTodo.endDate;
                }
            });
            _this.todoListSub.next(todoList);
        });
    };
    TodoService.prototype.revertTodo = function (todo) {
        var _this = this;
        var updatedTodo = Object.assign({}, todo);
        updatedTodo.isDone = false;
        updatedTodo.endDate = 0;
        this.http.put(this.baseURL + "/" + todo.id + ".json", updatedTodo)
            .subscribe(function (res) {
            console.log(res.json());
            var respTodo = res.json();
            var todoList = _this.todoListSub.getValue();
            todoList.forEach(function (todo) {
                if (todo.id === respTodo.id) {
                    todo.isDone = false;
                    todo.endDate = 0;
                }
            });
            _this.todoListSub.next(todoList);
        });
    };
    TodoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], TodoService);
    return TodoService;
    var _a;
}());
//# sourceMappingURL=todo.service.js.map

/***/ })

},[841]);
//# sourceMappingURL=main.bundle.js.map