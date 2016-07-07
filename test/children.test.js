import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import ChildrenTable from '../public/app/components/children/childrenTable';
const app = shallow(<ChildrenTable/>);
describe('Children Test', function() {
  it('ChildrenTable\'s title should be Children', function(done) {
    expect(app.find('h1').text()).to.equal('Children');
  });
});
