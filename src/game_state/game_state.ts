import IPlayerState from './player_state';

export default interface IGameState {
  deck?: string[];
  deckSize: number;
  playerStates: {
    [playerName: string]: IPlayerState;
  };
  currentTurn: string;
  roundNumber: number;
}
