import {Checkbox} from './custom-checkbox';

describe('Checkbox', () => {
  let component;

  beforeEach(() => component = new Checkbox());

  test('should be created', () => {
    expect(component).toBeTruthy();
  });

  test('should initialize template', () => {
    expect(component.shadowRoot).toBeTruthy();

    console.log()
  });
});
