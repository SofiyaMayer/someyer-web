import * as migration_20261020_201528_initial from './20261020_201528_initial';

export const migrations = [
  {
    up: migration_20261020_201528_initial.up,
    down: migration_20261020_201528_initial.down,
    name: '20261020_201528_initial'
  },
];
