import { html, TemplateResult } from 'lit';
import '../src/ypk-design.js';

export default {
  title: 'YpkDesign',
  component: 'ypk-design',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <ypk-design style="--ypk-design-background-color: ${backgroundColor}" .header=${header}></ypk-design>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
