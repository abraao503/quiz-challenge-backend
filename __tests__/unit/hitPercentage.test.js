const calculateHitPercentage = require('../../src/utils/calculateHitPercentage');

const questions = [
  {
    id:  1,
    is_correct: true,
  },
  {
    id:  2,
    is_correct: true,
  },
  {
    id:  3,
    is_correct: true,
  }, 
  {
    id:  4,
    is_correct: true,
  },  
  {
    id:  5,
    is_correct: false,
  }, 
]

describe('calculation of the hit percentage', () => {
  it('should return 25 when receive 1/4 correct questions', () => {
    const answer = [1];

    expect(calculateHitPercentage(answer, questions)).toBe(25);
  });

  it('should return 50 when receive 2/4 correct questions', () => {
    const answer = [1,4];

    expect(calculateHitPercentage(answer, questions)).toBe(50);
  });

  it('should return 75 when receive 3/4 correct questions', () => {
    const answer = [1,2,3];

    expect(calculateHitPercentage(answer, questions)).toBe(75);
  });

  it('should return 100 when receive 4/4 correct questions', () => {
    const answer = [1,2,3,4];

    expect(calculateHitPercentage(answer, questions)).toBe(100);
  });

  it('should return 0 when receive 0/4 correct questions', () => {
    const answer = [];

    expect(calculateHitPercentage(answer, questions)).toBe(0);
  });

  it('should return 0 when receive 4/4 correct questions and 1 incorrect', () => {
    const answer = [1,2,3,4,5];

    expect(calculateHitPercentage(answer, questions)).toBe(0);
  });

  it('should return 0 when receive 1/4 correct questions and 1 incorrect', () => {
    const answer = [4,5];

    expect(calculateHitPercentage(answer, questions)).toBe(0);
  });
});