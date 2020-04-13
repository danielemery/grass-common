import IGameState from '../game_state/game_state';
import { CardType } from '../cards';
import IActionMeta from './action_meta';

export type InputType =
  | 'HAND_SELECTION'
  | 'OWN_PEDDLE_SELECTION'
  | 'OTHER_PEDDLE_SELECTION'
  | 'OTHER_PLAYER_SELECTION';

export default interface IInputSelection {
  inputType: InputType;
  inputValue: any;
}

export function canPerformInputType(
  inputSelection: IInputSelection,
  gameState: IGameState,
  actionMeta: IActionMeta,
): string[] {
  const reasons = [];

  const { inputType, inputValue } = inputSelection;
  const { playerName } = actionMeta;

  switch (inputType) {
    case 'HAND_SELECTION':
      const cardTypeSelected: CardType = inputValue;
      const playerState = gameState.playerStates[playerName];
      if (!playerState?.hand?.includes(cardTypeSelected)) {
        reasons.push(
          `You do not have a ${cardTypeSelected} card available in your hand.`,
        );
      }
      break;
    default:
      reasons.push(`Unknown input selection type: ${inputType}`);
  }

  return reasons;
}
