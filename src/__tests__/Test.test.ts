import { shallowMount } from '@vue/test-utils';
import Test from '../Test.vue';

describe('Component "Test"', () => {
  it('looks cool 😎', () => {
    expect.assertions(1);

    const wrapper = shallowMount(Test);

    expect(wrapper).toMatchSnapshot();
  });
});
