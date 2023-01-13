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
exports.vehicleRouter = void 0;
const express_1 = require("express");
const vehicle_controllers_1 = __importDefault(require("../controllers/vehicle/vehicle.controllers"));
exports.vehicleRouter = (0, express_1.Router)();
exports.vehicleRouter.post('/stationName', vehicle_controllers_1.default.createStationName);
exports.vehicleRouter.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield vehicle_controllers_1.default.createVehicle(req.body);
        res.send({ message: "vehicle added successfully" });
    }
    catch (error) {
        throw error;
    }
}));
exports.vehicleRouter.get('/', vehicle_controllers_1.default.getAllStation);
//# sourceMappingURL=vehicles.route.js.map