import {Test, TestingModule} from '@nestjs/testing';
import {FormsController} from './forms.controller';
import {expect} from 'chai';

describe('FormsController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        FormsController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: FormsController;
  beforeEach(() => {
    controller = module.get(FormsController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
