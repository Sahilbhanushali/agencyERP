"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootuserController = void 0;
const common_1 = require("@nestjs/common");
const rootuser_service_1 = require("./rootuser.service");
const create_rootuser_dto_1 = require("./dto/create-rootuser.dto");
const update_rootuser_dto_1 = require("./dto/update-rootuser.dto");
const login_rootuser_dto_1 = require("./dto/login-rootuser.dto");
let RootuserController = class RootuserController {
    rootuserService;
    constructor(rootuserService) {
        this.rootuserService = rootuserService;
    }
    create(createRootuserDto) {
        console.log('Controller received DTO:', createRootuserDto);
        return this.rootuserService.create(createRootuserDto);
    }
    login(loginRootuserDto) {
        return this.rootuserService.login(loginRootuserDto);
    }
    findAll() {
        return this.rootuserService.findAll();
    }
    findOne(id) {
        return this.rootuserService.findOne(id);
    }
    update(id, updateRootuserDto) {
        return this.rootuserService.update(id, updateRootuserDto);
    }
    remove(id) {
        return this.rootuserService.remove(id);
    }
};
exports.RootuserController = RootuserController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rootuser_dto_1.CreateRootuserDto]),
    __metadata("design:returntype", void 0)
], RootuserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_rootuser_dto_1.LoginRootuserDto]),
    __metadata("design:returntype", void 0)
], RootuserController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RootuserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RootuserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rootuser_dto_1.UpdateRootuserDto]),
    __metadata("design:returntype", void 0)
], RootuserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RootuserController.prototype, "remove", null);
exports.RootuserController = RootuserController = __decorate([
    (0, common_1.Controller)({
        path: "root-user",
        version: "1"
    }),
    __metadata("design:paramtypes", [rootuser_service_1.RootuserService])
], RootuserController);
//# sourceMappingURL=rootuser.controller.js.map