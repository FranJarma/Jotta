/* eslint-disable testing-library/await-async-query */
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/testUtils';
import Congrats from './Congrats';

const setup = (props={}) => {
    return shallow(<Congrats success {...props}/>)
}

test('render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

// test('renders no text when sucess prop is false', () => {
//     const wrapper = setup({ success: false});
//     const component = findByTestAttr(wrapper, 'component-congrats');
//     expect(component.text()).toBe('');
// });

// test('renders non-empty congrats message when success prop is true', () => {
//     const wrapper = setup({ success: true});
//     const message = findByTestAttr(wrapper, 'congrats-message');
//     expect(message.text().length).not.toBe(0);
// });
