'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const source = sourceString
    .split(';')
    .map((item) => item.replace('\n', '').trim())
    .filter((item) => item.includes(':'));

  for (const word of source) {
    const parts = word.split(':');
    const chave = parts[0].trim();
    const valor = parts[1].trim();

    result[chave] = valor;
  }

  return result;
}

module.exports = convertToObject;
