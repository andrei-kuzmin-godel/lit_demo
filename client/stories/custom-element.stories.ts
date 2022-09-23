import { html, TemplateResult } from 'lit';
import '../src/custom-element.js';

export default {
  title: 'CustomElement',
  component: 'custom-element',
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
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <custom-element style="--custom-element-background-color: ${backgroundColor}" .title=${title}></custom-element>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
