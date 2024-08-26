import icoDeliver from '../../public/Image/ICON/deliver.png';
import deliverMan from '../../public/Image/img/man.png';
import notification from '../../public//Image/ICON/notification.png';
import chef from '../../public/Image/img/chef.png';
import home from '../../public/Image/ICON/home.png';
import homeDeliver from '../../public/Image/img/deliver-home.png';

const AboutData = [
	{
		id          : 1,
		title       : 'Fast Delivery',
		description :
			'For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.',
		icon        : icoDeliver,
		img         : deliverMan
	},
	{
		id          : 2,
		title       : 'A good auto responder',
		description :
			'For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.',
		icon        : notification,
		img         : chef
	},
	{
		id          : 3,
		title       : 'Home Delivery',
		description :
			'For a memorable meal the quality of the service is something that guests often remember. Restaurant provides a physical good (prepared food), but also provides services in the form of ambience, the setting and clearing of the table, etc.',
		icon        : home,
		img         : homeDeliver
	}
];

export default AboutData;
