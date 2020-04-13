import IPeddleState from './peddle_state';
import { CardType } from '../cards';

export default interface IPlayerStashState {
  hasslePile: CardType[];
  peddle: IPeddleState[];
}
