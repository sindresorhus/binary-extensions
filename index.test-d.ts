import {expectType} from 'tsd';
import binaryExtensions = require('.');
import binaryExtensionsJson = require('./binary-extensions.json');

expectType<readonly string[]>(binaryExtensions);
expectType<readonly string[]>(binaryExtensionsJson);
