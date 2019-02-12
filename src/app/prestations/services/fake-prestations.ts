import { Prestation } from 'src/app/shared/models/prestation.model';

export const FakePrestations: Prestation[] = [
 new  Prestation({
    id: '1',
  typePresta: 'Formation',
    client: 'Capgemeini',
    tjmHt : 3000,
    nbJours: 25,
    comment : 'Merci Cap'
  }),
  new  Prestation({
    id: '2',
  typePresta: 'Tech Management',
    client: 'Enedis',
    tjmHt : 4000,
    nbJours: 35,
    comment : 'Merci Enedis pour ces miettes'
  }),
  new  Prestation({
    id: '3',
  typePresta: 'Tech LEAD',
    client: 'EDF',
    tjmHt : 5000,
    nbJours: 30,
    comment : 'Merci EDF pour ce projet'
  })
];

