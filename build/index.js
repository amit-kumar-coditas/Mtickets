"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const mongo_connection_1 = require("./database/mongo.connection");
const routes_register_1 = require("./routes/routes.register");
const config_1 = require("./config");
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const app = (0, express_1.default)();
        yield (0, mongo_connection_1.connectToMongo)();
        // await connectToRedis()
        (0, routes_register_1.registerRoutes)(app);
        app.listen(config_1.PORT, () => console.log(`SERVER STARTED ON PORT: ${config_1.PORT}`));
    }
    catch (e) {
        console.error("COULD NOT START SERVER");
        process.exit(1);
    }
});
exports.startServer = startServer;
(0, exports.startServer)();
//# sourceMappingURL=index.js.map