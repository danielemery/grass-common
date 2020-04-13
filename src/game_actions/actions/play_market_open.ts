import { IGameAction } from '../game_action';
import IGameState from '../../game_state/game_state';
import IInputSelection, { InputType } from '../input_selection';
import Cards, { CardType } from '../../cards';

import IActionMeta from '../action_meta';

export abstract class PlayMarketOpen extends IGameAction {
  requiredInputTypes: InputType[] = ['HAND_SELECTION'];

  canPerformSpecificAction(
    inputSelections: IInputSelection[],
    actionMeta: IActionMeta,
    currentGameState: IGameState,
  ): string[] {
    let reasons = [];

    const handSelection = inputSelections[0];
    const cardTypeSelected: CardType = handSelection.inputValue;

    if (cardTypeSelected !== Cards.MarketOpen) {
      reasons.push('Can only open the market with a market open.');
    }

    return reasons;
  }
}
