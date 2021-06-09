import * as express from 'express';
import {BMI, BMIInterface,BmiCategoryEnum} from './bmi-calculator';
import {NextFunction, Request, Response} from 'express';
import HttpStatus from 'http-status-codes';
const bmiCalculatorApi = express.Router();

bmiCalculatorApi.post('/calculateBmi', async (request: Request, response: Response, next: NextFunction) => {
  const bmiData: Array<BMIInterface> = request.body.data;
  let totalNoofOverWeight = 0;
  if(!bmiData || bmiData.length === 0){
    response.status(HttpStatus.NOT_FOUND).send({status:false});
  }
  try {
    const data = bmiData.map(bmi => {
      if (bmi.HeightCm <= 0 || bmi.WeightKg <= 0) {
        throw {httpStatus: HttpStatus.UNPROCESSABLE_ENTITY, errorResponse:{message: 'Invalid Height or Weight', status: false}};
      }
      const calculatedBmi: BMI = new BMI(bmi.Gender, bmi.HeightCm, bmi.WeightKg);
      if (calculatedBmi.BmiCategory == BmiCategoryEnum.OVER_WEIGHT) totalNoofOverWeight++;
      return calculatedBmi;
    });
    response.status(HttpStatus.OK).send({data, totalNoofOverWeight});
  } catch (exception) {
    response
      .status(exception.httpStatus ? exception.httpStatus : HttpStatus.INTERNAL_SERVER_ERROR)
      .send(exception.errorResponse ? exception.errorResponse : exception);
  }
});

export default bmiCalculatorApi;
