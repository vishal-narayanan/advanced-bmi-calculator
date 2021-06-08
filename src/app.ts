import * as express from 'express';
import ApiCommon from './api-common-route';

let app = express();
app.use(express.json());
app.use('/bmi-api', ApiCommon);
app.listen(1800, function () {
  console.log(`Server is listening on port 1800`);
});
module.exports = app;
