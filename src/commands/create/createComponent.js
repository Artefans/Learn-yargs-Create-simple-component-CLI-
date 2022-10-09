import fs from 'fs';
import path from 'path';
import { baseComponentFolder, baseComponentStyleFolder } from '../../constants/components';

const createComponent = (pathUrl, name) => {
  const outputPath = `${process.cwd()}${pathUrl}/${name}`;
  const fileNameJs = `${outputPath}/${name}.js`;
  const fileNameScss = `${outputPath}/${name}.module.scss`;

  try {
    fs.mkdirSync(outputPath, { recursive: true });

    fs.copyFileSync(path.join(__dirname, baseComponentStyleFolder), fileNameScss);

    const data = fs.readFileSync(path.join(__dirname, baseComponentFolder), 'utf8');
    const result = data.replace(/COMPONENT_NAME/g, name);
    fs.writeFileSync(fileNameJs, result);
  } catch (error) {
    console.log('Shit!');
  }
};

export default createComponent;
