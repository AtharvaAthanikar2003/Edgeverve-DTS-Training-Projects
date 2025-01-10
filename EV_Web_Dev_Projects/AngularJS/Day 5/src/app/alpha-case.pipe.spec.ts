import { AlphaCasePipe } from './alpha-case.pipe';

describe('AlphaCasePipe', () => {
  let pipe : any;
  beforeEach(() => {
    pipe = new AlphaCasePipe();
  })

  it('create an instance', () => {
    // const pipe = new AlphaCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('Transform to UpperCase', () => {
    let testInput = 'mY iNfY';
    const result = pipe.transform(testInput, 'U');
    expect(result).toBe('MY INFY')
  });

  it('Transform to LowerCase', () => {
    let testInput = 'mY iNfY';
    const result = pipe.transform(testInput, 'L');
    expect(result).toBe('my infy')
  });

  it('Transform to TitleCase', () => {
    let testInput = 'mY iNfY';
    const result = pipe.transform(testInput, 'T');
    expect(result).toBe('My Infy')
  });
});
