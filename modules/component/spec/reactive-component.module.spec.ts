import { TestBed } from '@angular/core/testing';
import { ReactiveComponentModule } from '../';

describe('Component Module', () => {
  let componentModule: ReactiveComponentModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveComponentModule],
    });

    componentModule = TestBed.inject(ReactiveComponentModule);
  });

  it('should add all effects when instantiated', () => {
    expect(componentModule).toBeDefined();
  });
});
