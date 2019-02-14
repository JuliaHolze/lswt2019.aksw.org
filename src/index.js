import 'bootstrap';
import './main.scss';

import IScroll from 'fullpage.js/vendors/scrolloverflow';
import fullpage from 'fullpage.js';

var fullPageInstance = new fullpage('#fullpage', {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ['Home', 'Programm', 'Veranstaltungsort', 'Organisationsteam', 'Rückblick'],
  navigation: true,
  slidesNavigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Home', 'Programm', 'Location', 'Team', 'PreviousEvents'],
  scrollOverflow: true,
  sectionsColor: ['#a7d1e2ff', '#b72c37ff', '#215063ff', '#81bdd5ff', '#3887a7ff', '#b64d55ff']
});
