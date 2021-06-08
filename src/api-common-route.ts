import * as express from 'express';
import bmiCalculatorApi from './bmiCalculator/bmi-calculator-api';
const ApiCommon = express.Router();
ApiCommon.use('/bmiCalculator', bmiCalculatorApi);
export default ApiCommon;
