---
to: components/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
import './index.module.scss';
import React from 'react';

const <%= h.changeCase.pascalCase(name) %>: React.FC = () => (
  <React.Fragment>
    <h1 style={{ color: 'white', fontSize: '30px' }}>Component <%= h.changeCase.pascalCase(name) %> is working file!</h1>
  </React.Fragment>
);

export default <%= h.changeCase.pascalCase(name) %>;