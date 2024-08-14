import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { YpkDesign } from '../src/ypk-design.js';
import '../src/ypk-design.js';

describe('YpkDesign', () => {
  let element: YpkDesign;
  beforeEach(async () => {
    element = await fixture(html`<ypk-design></ypk-design>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
