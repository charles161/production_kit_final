import jsf from 'json-schema-faker'
import {schema} from './mockDataSchema';
import fs from "fs";
import chalk from 'chalk';

jsf.resolve(schema).then(function (sample) {
  let json=JSON.stringify(sample)
  fs.writeFile('./src/api/db.json', json, function (err) {
    if (err) {
      return console.log(chalk.red(err))
    }
    else {
      console.log(chalk.green("mock data generated"));
    }
  })
});
