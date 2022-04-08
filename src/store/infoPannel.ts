import { makeAutoObservable } from 'mobx';

class infoPannel {
  data = [
    {
      name: 'New listings',
      value: '+4,235',
      dinamiks: 10,
      logo: '/assets/listings.svg',
    },
    {
      name: 'Sold',
      value: '2,300',
      dinamiks: 30,
      logo: '/assets/sold.svg',
    },
    {
      name: 'Rented',
      value: '+246',
      dinamiks: -2,
      logo: '/assets/rented.svg',
    },
    {
      name: 'Rejected',
      value: '64',
      dinamiks: 4,
      logo: '/assets/rejected.svg',
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new infoPannel();
