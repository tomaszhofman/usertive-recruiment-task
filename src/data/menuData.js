import crew from 'assets/icons/crew.png';
import rockets from 'assets/icons/rockets.png';
import starlink from 'assets/icons/starlink.png';
import capsules from 'assets/icons/capsules.png';

export const menu = [
  {
    name: 'Capsules',
    image: capsules,
    id: 'capsules',
    col1: 'Serial',
    col2: 'Type',
    sortingProperty: 'serial',
    infoProperty: 'type',
    sortingFunctionASC: (a, b) => a.serial.localeCompare(b.serial),
    sortingFunctionDESC: (a, b) => b.serial.localeCompare(a.serial),
  },
  {
    name: 'Rockets',
    image: rockets,
    id: 'rockets',
    col1: 'Name',
    col2: 'Company',
    sortingProperty: 'name',
    infoProperty: 'company',
    sortingFunctionASC: (a, b) => a.name.localeCompare(b.name),
    sortingFunctionDESC: (a, b) => b.name.localeCompare(a.name),
  },
  {
    name: 'Starlink',
    image: starlink,
    id: 'starlink',
    col1: 'Id',
    col2: 'Version',
    sortingProperty: 'id',
    infoProperty: 'version',
    sortingFunctionASC: (a, b) => a.id.localeCompare(b.id),
    sortingFunctionDESC: (a, b) => b.id.localeCompare(a.id),
  },
  {
    name: 'Crew',
    image: crew,
    id: 'crew',
    col1: 'Name',
    col2: 'Agency',
    sortingProperty: 'name',
    infoProperty: 'agency',
    sortingFunctionASC: (a, b) => a.name.localeCompare(b.name),
    sortingFunctionDESC: (a, b) => b.name.localeCompare(a.name),
  },
];
