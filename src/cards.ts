export interface ICardMap {
  [key: string]: CardType
}

const CardEnum: ICardMap = {
  MarketOpen: 'MARKET_OPEN',
  MarketClose: 'MARKET_CLOSE',
  Peddle5000: 'PEDDLE_5000',
  Peddle25000: 'PEDDLE_25000',
  Peddle50000: 'PEDDLE_50000',
  Peddle100000: 'PEDDLE_100000',
  HeatOnBust: 'HEAT_ON_BUST',
  HeatOnDetained: 'HEAT_ON_DETAINED',
  HeatOnFelony: 'HEAT_ON_FELONY',
  HeatOnSearchAndSeizure: 'HEAT_ON_SEARCH_AND_SEIZURE',
  HeatOffBust: 'HEAT_OFF_BUST',
  HeatOffDetained: 'HEAT_OFF_DETAINED',
  HeatOffFelony: 'HEAT_OFF_FELONY',
  HeatOffSearchAndSeizure: 'HEAT_OFF_SEARCH_AND_SEIZURE',
  HeatOffPayFine: 'HEAT_OFF_PAY_FINE',
  NirvanaStonehigh: 'NIRVANA_STONEHIGH',
  NirvanaEuphoria: 'NIRVANA_EUPHORIA',
  ParanoiaSoldOut: 'PARANOIA_SOLD_OUT',
  ParanoiaDoubleCrossed: 'PARANOIA_DOUBLE_CROSSED',
  ParanoiaUtterlyWipedOut: 'PARANOIA_UTTERLY_WIPED_OUT',
};

export type CardType =
  | 'MARKET_OPEN'
  | 'MARKET_CLOSE'
  | 'PEDDLE_5000'
  | 'PEDDLE_25000'
  | 'PEDDLE_50000'
  | 'PEDDLE_100000'
  | 'HEAT_ON_BUST'
  | 'HEAT_ON_DETAINED'
  | 'HEAT_ON_FELONY'
  | 'HEAT_ON_SEARCH_AND_SEIZURE'
  | 'HEAT_OFF_BUST'
  | 'HEAT_OFF_DETAINED'
  | 'HEAT_OFF_FELONY'
  | 'HEAT_OFF_SEARCH_AND_SEIZURE'
  | 'HEAT_OFF_PAY_FINE'
  | 'NIRVANA_STONEHIGH'
  | 'NIRVANA_EUPHORIA'
  | 'PARANOIA_SOLD_OUT'
  | 'PARANOIA_DOUBLE_CROSSED'
  | 'PARANOIA_UTTERLY_WIPED_OUT';

export default CardEnum;

export function isPeddleCard(cardType: CardType): boolean {
  switch (cardType) {
    case CardEnum.Peddle5000:
    case CardEnum.Peddle5000:
    case CardEnum.Peddle5000:
    case CardEnum.Peddle5000:
      return true;
    default:
      return false;
  }
}

export function isHeatOnCard(cardType: CardType): boolean {
  switch (cardType) {
    case CardEnum.HeatOnBust:
    case CardEnum.HeatOnDetained:
    case CardEnum.HeatOnFelony:
    case CardEnum.HeatOnSearchAndSeizure:
      return true;
    default:
      return false;
  }
}
