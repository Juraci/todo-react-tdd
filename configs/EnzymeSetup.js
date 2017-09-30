import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const EnzymeSetup = () => {
  configure({ adapter: new Adapter() });
};

export default EnzymeSetup;
