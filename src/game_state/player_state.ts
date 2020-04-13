import IPlayerStashState from './player_stash_state';
import { CardType } from '../cards';

export default interface IPlayerState {
  hand?: CardType[];
  handSize: number;
  stash: IPlayerStashState;
  currentValue: number;
}
