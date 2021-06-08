type GenderType = 'Male' | 'Female';

export enum HealthRiskEnum {
  MALNUTRITION = 'Malnutrition risk',
  LOW = 'Low risk',
  ENHANCED = 'Enhanced risk',
  MEDIUM = 'Medium risk',
  HIGH = 'High risk',
  VERY_HIGH = 'Very high risk',
}

export enum BmiCategoryEnum {
  UNDERWEIGHT = 'Underweight',
  NORMAL_WEIGHT = 'Normal weight',
  OVER_WEIGHT = 'Overweight',
  MODERATELY_OBESE = 'Moderately obese',
  SEVERLY_OBESE = 'Severly obese',
  VERY_SEVERLY_OBESE = 'Very severly obese',
}

export enum BMIBorderRangeEnum {
  MALNUTRITION = 18.4,
  LOW = 24.9,
  ENHANCED = 29.9,
  MEDIUM = 34.9,
  HIGH = 39.9,
  VERY_HIGH = 40,
}

export interface BMIInterface {
  Gender: GenderType;
  HeightCm: number;
  WeightKg: number;
}

interface BmiCategoryRisk {
  bmiCategory: BmiCategoryEnum;
  healthRisk: HealthRiskEnum;
}

export class BMI implements BMIInterface {
  Gender: GenderType;
  HeightCm: number;
  WeightKg: number;
  Bmi?: number;
  BmiCategory?: BmiCategoryEnum;
  HealthRisk?: HealthRiskEnum;
  constructor(Gender: GenderType, HeightCm: number, WeightKg: number) {
    const bmi = calculateBmi(HeightCm, WeightKg);
    const bmiBorderRange = calculateBmiCategoryRisk(bmi);
    this.Gender = Gender;
    this.HeightCm = HeightCm;
    this.WeightKg = WeightKg;
    this.Bmi = bmi;
    this.BmiCategory = bmiBorderRange.bmiCategory;
    this.HealthRisk = bmiBorderRange.healthRisk;
  }
}

/**
 * calculateBmi is used to calculate bmi
 * @param height
 * @param weight
 * @returns bmi
 */
const calculateBmi = (height: number, weight: number): number => weight / Math.pow((height/100), 2);

/**
 * calculates bmi category & health risk
 * @param bmi
 * @returns bmi category & health risk
 */
const calculateBmiCategoryRisk = (bmi: number): BmiCategoryRisk => {
  if (bmi <= BMIBorderRangeEnum.MALNUTRITION) {
    return {bmiCategory: BmiCategoryEnum.UNDERWEIGHT, healthRisk: HealthRiskEnum.MALNUTRITION};
  } else if (bmi <= BMIBorderRangeEnum.LOW) {
    return {bmiCategory: BmiCategoryEnum.NORMAL_WEIGHT, healthRisk: HealthRiskEnum.LOW};
  } else if (bmi <= BMIBorderRangeEnum.ENHANCED) {
    return {bmiCategory: BmiCategoryEnum.OVER_WEIGHT, healthRisk: HealthRiskEnum.ENHANCED};
  } else if (bmi <= BMIBorderRangeEnum.MEDIUM) {
    return {bmiCategory: BmiCategoryEnum.MODERATELY_OBESE, healthRisk: HealthRiskEnum.MEDIUM};
  } else if (bmi <= BMIBorderRangeEnum.HIGH) {
    return {bmiCategory: BmiCategoryEnum.SEVERLY_OBESE, healthRisk: HealthRiskEnum.HIGH};
  }
  return {bmiCategory: BmiCategoryEnum.VERY_SEVERLY_OBESE, healthRisk: HealthRiskEnum.VERY_HIGH};
};
