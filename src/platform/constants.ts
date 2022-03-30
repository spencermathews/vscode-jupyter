// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

import { pathBase, pathJoin } from './common/platform/path.common';

const webpacked = !pathBase(__dirname).includes('platform');

export const EXTENSION_ROOT_DIR = webpacked ? pathJoin(__dirname, '..') : pathJoin(__dirname, '..', '..');

export const HiddenFileFormatString = '_HiddenFile_{0}.py';

export const MillisecondsInADay = 24 * 60 * 60 * 1_000;

export const IImportTracker = Symbol('IImportTracker');
