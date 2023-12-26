"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["MALE"] = "MALE";
    GenderEnum["FEMALE"] = "FEMALE";
})(GenderEnum || (exports.GenderEnum = GenderEnum = {}));
(0, graphql_1.registerEnumType)(GenderEnum, { name: 'GenderEnum' });
//# sourceMappingURL=gender.enum.js.map