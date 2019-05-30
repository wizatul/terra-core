import React, { useContext } from 'react';
import ModalManager from 'terra-modal-manager';
import DisclosureManagerContext from 'terra-disclosure-manager/lib/DisclosureManagerContext';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ModalHeader from 'terra-form-select/lib/_ModalHeader';
import ModalFooter from 'terra-form-select/lib/_ModalFooter';
import Modal from 'terra-form-select/lib/_Modal';
import Option from 'terra-form-select/lib/_Option';

const Bar = () => (
  <div>
    <ModalHeader title="Bar" onClose={() => alert('Bar inside Foo!')} />
    <p>Deserunt ut excepteur amet consectetur exercitation ex irure aute pariatur nulla in amet.</p>
  </div>
);

const Foo = () => {
  const man = useContext(DisclosureManagerContext);

  const data = [...new Array(25)].map((_, i) => i);
  const children = <ul>{data.map(e => <Option key={e} value={e} display={e} />)}</ul>;

  return (
    <button type="button" onClick={() => man.disclose({ preferredType: 'modal', content: { key: 'ayyy-lmao', component: <Modal>{children}</Modal> } })}>Clicky</button>
  );
};

const ModalHeaderExample = () => (
  <div>
    <ModalManager>
      <Foo />
      <ModalHeader title="Foo" />
      <ModalHeader title="Bar" onClose={() => alert('Baz')} /> {/* eslint-disable-line */}
      <ModalHeader onClose={() => alert('Baz')} /> {/* eslint-disable-line */}
      <ModalFooter />
      <ModalFooter allowClear />
      <ModalFooter allowClear clearDisabled />
    </ModalManager>
  </div>
);

export default ModalHeaderExample;
