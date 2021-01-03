/**
 * Created by Zero<mobius_pan@yeah.net> on 2021/1/3 11:49 下午.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cz = require('./.cz-config.js');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', cz.types.map((t) => t.value)],
    'type-case': [1, 'always', 'snake-case'],
  },
};
