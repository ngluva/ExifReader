/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import {objectAssign} from './utils';
import TagNames0thIfd from './tag-names-0th-ifd';
import TagNamesExifIfd from './tag-names-exif-ifd';
import TagNamesGpsIfd from './tag-names-gps-ifd';
import TagNamesInteroperabilityIfd from './tag-names-interoperability-ifd';

const tagNames0thExifIfds = objectAssign({}, TagNames0thIfd, TagNamesExifIfd);

export default {
    '0th': tagNames0thExifIfds,
    'exif': tagNames0thExifIfds,
    'gps': TagNamesGpsIfd,
    'interoperability': TagNamesInteroperabilityIfd
};
