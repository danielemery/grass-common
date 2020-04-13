import IInputSelection, {
  InputType,
  canPerformInputType,
} from './input_selection';
import IGameState from '../game_state/game_state';
import IActionMeta from './action_meta';

export abstract class IGameAction {
  abstract requiredInputTypes: InputType[];

  public canPerformAction(
    inputSelections: IInputSelection[],
    actionMeta: IActionMeta,
    currentGameState: IGameState,
  ): string[] {
    const result = inputSelections
      .map((is) => canPerformInputType(is, currentGameState, actionMeta)).flat();
    return [
      ...this.canPerformSpecificAction(
        inputSelections,
        actionMeta,
        currentGameState,
      ),
    ];
  }

  abstract canPerformSpecificAction(
    inputSelections: IInputSelection[],
    actionMeta: IActionMeta,
    currentGameState: IGameState,
  ): string[];

  abstract executePerformAction(
    inputSelections: IInputSelection[],
  ): Promise<string>;

  private inputSelectionsAreValid(
    inputSelections: IInputSelection[],
  ): string[] {
    if (inputSelections.length < this.requiredInputTypes.length) {
      return ['Not enough input selections provided for action.'];
    }

    const reasons = [];
    for (let i = 0; i < inputSelections.length; i++) {
      const recieved = inputSelections[i].inputType;
      const expected = this.requiredInputTypes[i];
      if (recieved !== expected) {
        reasons.push(
          `Expected ${expected} for input ${i} but recieved ${recieved}`,
        );
      }
    }
    return reasons;
  }

  async performAction(
    inputSelections: IInputSelection[],
    actionMeta: IActionMeta,
    currentGameState: IGameState,
  ) {
    const reasons: string[] = [];

    reasons.push(...this.inputSelectionsAreValid(inputSelections));
    reasons.push(
      ...this.canPerformAction(inputSelections, actionMeta, currentGameState),
    );

    if (reasons.length === 0) {
      await this.executePerformAction(inputSelections);
    } else {
      throw new Error(
        `Action attempted to be execute with wrong inputs: ${reasons}`,
      );
    }
  }
}
