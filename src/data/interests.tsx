import { MdFastfood, MdNaturePeople, MdTheaterComedy } from 'react-icons/md';
import { FaGlassMartiniAlt } from 'react-icons/fa';
import { TbBuildingCastle, TbJewishStar } from 'react-icons/tb';

export const interestsDictionary = [
  {
    icon: <MdFastfood />,
    text: 'מסעדות',
    value: 'restaurants',
  },
  {
    icon: <TbJewishStar />,
    text: 'יהדות',
    value: 'judaism',
  },
  {
    icon: <FaGlassMartiniAlt />,
    text: 'חיי לילה',
    value: 'night_life',
  },
  {
    icon: <MdNaturePeople />,
    text: 'טבע ונופים',
    value: 'nature',
  },
  {
    icon: <MdTheaterComedy />,
    text: 'אירועי תרבות',
    value: 'culture',
  },
  {
    icon: <TbBuildingCastle />,
    text: 'היסטוריה ואדריכלות',
    value: 'history',
  },
];
