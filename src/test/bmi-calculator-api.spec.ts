import createServer from "server";
import { expect } from "chai";
import * as request from 'supertest';
 
const app = createServer();
describe("Postive Flow Check",()=>{
    const jsonData = {
        "data" :[{"Gender": "Male", "HeightCm": 100, "WeightKg": 500 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
    85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
    "WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
    "HeightCm": 167, "WeightKg": 82}]
    };
    it('TO Expect status 200',(done)=>{
    request(app).post("/bmi-api/bmiCalculator/bmiCalculator").send(jsonData).expect(200,done);
    })
});

describe("Negative Flow Check",()=>{
    it('TO Expect status 404',(done)=>{
    request(app).post("/bmi-api/bmiCalculator/bmiCalculator").send({
        "data" :[]
    }).expect(404,done);
    })
});

describe("Negative Value Check",()=>{
    it('TO Expect status 500',(done)=>{
    request(app).post("/bmi-api/bmiCalculator/bmiCalculator").send({
        "data" :[{"Gender": "Male", "HeightCm": 0, "WeightKg": 0 }]
    }).expect(200,done);
    })
});

describe("Negative Value Check",()=>{
    it('TO Expect status 500',(done)=>{
    request(app).post("/bmi-api/bmiCalculator/bmiCalculator").send({
        "data" :[{"Gender": "Male", "HeightCm": -1, "WeightKg": 0 }]
    }).expect(200,done);
    })
});