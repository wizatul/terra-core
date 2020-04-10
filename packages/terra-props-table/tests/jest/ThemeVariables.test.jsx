// eslint-disable-next-line import/no-extraneous-dependencies
import themeVariablesHaveValues from 'terra-unit-testing/lib/reusable-tests/themeVariablesHaveValues';
import path from 'path';

themeVariablesHaveValues(path.join(__dirname, '..', '..'), ['clinical-lowlight-theme', 'orion-fusion-theme']);
