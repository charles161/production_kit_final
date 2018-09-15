import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk';

process.env.NODE_ENV="production"
console.log(chalk.blue("Generating production build"));

webpack(webpackConfig).run((err, stats) => {
  if(err){
    console.log(chalk.red(err))
    return 1
  }

  const jsonStats = stats.toJson()

  if(jsonStats.hasErrors)
{
  return jsonStats.errors.map(error => console.log(chalk.red(error)))
}
if(jsonStats.hasWarnings){
  console.log(chalk.yellow("webpack generated the following warnings : \n"));
  jsonpath.warnings.map(war => console.log(chalk.yellow(war)))
}

console.log(`webpack stats: ${stats}`)

console.log(chalk.green("ur app has been successfully built for production and is written to /dist"))
  return 0;

})