import { dom, library } from '@fortawesome/fontawesome-svg-core';

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';

library.add([
  faGithub,
  faLinkedin,
  faMedium,
]);

dom.watch();
