import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import Inline from '../prototypes/Inline';

const Index = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    examples={[{
      title: 'Default',
      description: 'A default variant allows selecting a single option.',
      example: <Inline />,
    }]}
  />
);

export default Index;
