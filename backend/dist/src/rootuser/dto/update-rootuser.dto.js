"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRootuserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_rootuser_dto_1 = require("./create-rootuser.dto");
class UpdateRootuserDto extends (0, mapped_types_1.PartialType)(create_rootuser_dto_1.CreateRootuserDto) {
}
exports.UpdateRootuserDto = UpdateRootuserDto;
//# sourceMappingURL=update-rootuser.dto.js.map