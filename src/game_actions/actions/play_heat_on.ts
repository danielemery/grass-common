import { IGameAction } from '../game_action';
import IGameState from '../../game_state/game_state';
import IInputSelection, { InputType } from '../input_selection';
import Cards, { isHeatOnCard, CardType } from '../../cards';

import IActionMeta from '../action_meta';

export abstract class PlayMarketOpen extends IGameAction {
  requiredInputTypes: InputType[] = ['HAND_SELECTION', 'OTHER_PLAYER_SELECTION'];

  canPerformSpecificAction(
    inputSelections: IInputSelection[],
    actionMeta: IActionMeta,
    currentGameState: IGameState,
  ): string[] {
    let reasons = [];

    const handSelection = inputSelections[0];
    const cardTypeSelected: CardType = handSelection.inputValue;

    if (!isHeatOnCard(cardTypeSelected)) {
      reasons.push('Can only put the heat on with a heat on card.');
    }

    const targetSelection = inputSelections[1];
    const targetPlayerName = targetSelection.inputValue;

    if (
      !Object.keys(currentGameState.playerStates).includes(targetPlayerName)
    ) {
      reasons.push(
        `Could not target player ${targetPlayerName}, they don't exist`,
      );
    }

    if (
      !currentGameState.playerStates[
        targetPlayerName
      ].stash.hasslePile.includes(Cards.MarketOpen)
    ) {
      reasons.push(
        `Could not target player ${targetPlayerName}, their market is not yet open.`,
      );
    }

    return reasons;
  }
}
