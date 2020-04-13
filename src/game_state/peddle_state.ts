import { CardType } from '../cards';

export default interface IPeddleState {
  card: CardType;
  protectCard?: CardType;
}
