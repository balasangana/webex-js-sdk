export type SuggestedResponseOutcome = 'requested' | 'enriched' | 'disabled';

export type SuggestedResponseOutcomeInput = {
  enabled?: boolean;
  hasContext?: boolean;
};

export function classifySuggestedResponseOutcome(
  input: SuggestedResponseOutcomeInput = {}
): SuggestedResponseOutcome {
  if (typeof input.enabled !== 'boolean' || typeof input.hasContext !== 'boolean') {
    return 'disabled';
  }

  if (!input.enabled) {
    return 'disabled';
  }

  return input.hasContext ? 'enriched' : 'requested';
}
