import { Prestation } from 'src/shared/models/prestation.model';

export const FakePrestations: Prestation[] = [
  new Prestation({
    id: 'id_1',
    typePresta: 'LEAD DEV',
    client: 'Atos',
    tjmHt: 3000,
    nbJours: 20,
    comment: 'string'
  }),

  new Prestation({
    id: 'id_2',
    typePresta: 'TECH MANAGEMENT',
    client: 'EDF',
    tjmHt: 4000,
    nbJours: 30,
    comment: 'string'
  }),

  new Prestation({
    id: 'id_3',
    typePresta: 'ANGULAR',
    client: 'CAP',
    tjmHt: 3000,
    nbJours: 25,
    comment: 'string'
  }),
];
