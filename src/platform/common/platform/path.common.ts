// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';

// Use path-browserify instead of node to do path operations. This way it's platform neutral
import * as path from 'path-browserify';

export function pathJoin(...paths: string[]): string {
    return path.join(...paths);
}

export function pathBase(file: string): string {
    return path.basename(file);
}

export function pathIsAbsolute(file: string): boolean {
    return path.isAbsolute(file);
}
