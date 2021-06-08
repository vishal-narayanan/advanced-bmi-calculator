# [code-08062021-VishalNarayanan Challenge]

API calculates BMI (Body Mass Index) of given list of weight in
kg and height in centimeters and total no of over weight persons

The challenge is served as an HTTP `POST` in 1800 port with endpoint at `/bmi-api/bmiCalculator/calculateBmi`. 
It accepts request body json of schema 
```
{
"data":[{"Gender": string, "HeightCm": number, "WeightKg": number }]
}
```

 and returns the list of calculated BMIS in schema of 
 
```
{
"data":[{"Gender":string,"HeightCm":number,"WeightKg":number,"Bmi":number,"BmiCategory":string,"HealthRisk":string}],
"totalNoofOverWeight":number
}
```

## Local Installation

Then install of required dependencies using below command:

```
$ npm install
```

## Local deploy 

Kindly use below command for local deploy in port 1800

```
$ npm start
```

