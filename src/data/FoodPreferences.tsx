import { MdAccessibility } from 'react-icons/md';
import { FaLeaf } from 'react-icons/fa';
import { TbJewishStar } from 'react-icons/tb';
import { GiPlantRoots } from 'react-icons/gi';

export const foodPreferencesDictionary = [
  {
    icon: <FaLeaf />,
    text: 'צמחוני',
    value: 'vegetarian',
  },
  {
    icon: <TbJewishStar />,
    text: 'כשר',
    value: 'kosher',
  },
  {
    icon: <GiPlantRoots />,
    text: 'טבעוני',
    value: 'vegan ',
  },
  {
    icon: <MdAccessibility />,
    text: 'חלאל',
    value: 'halal',
  },
];
