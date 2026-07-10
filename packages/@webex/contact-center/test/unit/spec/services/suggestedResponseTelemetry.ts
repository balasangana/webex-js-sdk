import {classifySuggestedResponseOutcome} from '../../../../src/services/aiAssistant/suggestedResponseTelemetry';

describe('suggestedResponseTelemetry', () => {
  it('AC-5: enabled request without context -> requested (spec sections 3, 4, 5, 8)', () => {
    expect(classifySuggestedResponseOutcome({enabled: true, hasContext: false})).toBe(
      'requested'
    );
  });

  it('AC-5: enabled request with context -> enriched (spec sections 3, 4, 5, 8)', () => {
    expect(classifySuggestedResponseOutcome({enabled: true, hasContext: true})).toBe(
      'enriched'
    );
  });

  it('AC-5: disabled or incomplete input -> disabled (spec sections 3, 4, 5, 7, 8)', () => {
    expect(classifySuggestedResponseOutcome({enabled: false, hasContext: true})).toBe(
      'disabled'
    );
    expect(classifySuggestedResponseOutcome({enabled: false, hasContext: false})).toBe(
      'disabled'
    );
    expect(classifySuggestedResponseOutcome({enabled: true})).toBe('disabled');
    expect(classifySuggestedResponseOutcome({})).toBe('disabled');
    expect(classifySuggestedResponseOutcome()).toBe('disabled');
  });
});
