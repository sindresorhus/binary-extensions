import {expectType} from 'tsd';
import binaryExtensions from './index.js';

expectType<readonly string[]>(binaryExtensions);
