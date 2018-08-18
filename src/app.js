import { dom, library } from '@fortawesome/fontawesome-svg-core';

import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';

library.add([
  faStar,
]);

library.add([
  faGithub,
  faLinkedin,
  faMedium,
]);

dom.watch();

import './home';
