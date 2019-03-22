/**
 * "Gervi" API sem skilar statískum gögnum fyrir fyrirlestra. Gætum hæglega
 * tengt hérna við "alvöru" API.
 * Sameinar statísk gögn við gögn geymd í localStorage.
 */

import data from './lectures.json';

// Lykill sem við geymum vistaðar færslur undir.
const LOCALSTORAGE_KEY = 'saved_lectures';

/**
 * Sækir alla vistaða fyrirlestra í localStorage.
 * @returns {array} Fylki af slug fyrir vistaða fyrirlestra.
 */
export function loadSavedLectures() {
  /* todo */
  const lectures = localStorage.getItem(LOCALSTORAGE_KEY);

  return JSON.parse(lectures);
}

/**
 * Skilar lista af fyrirlestrum, síuuðum eftir flokkum eða ekki. Gögn um það
 * hvort notandi hafi klárað fyrirlestrar er bætt við gögn.
 *
 * @param {array} filters Fylki af flokkum sem fyrirlestrar mega vera í.
 *                        Sjálfgefið [].
 * @returns {array} Fylki af fyrirlestrum.
 */
export function getLectureList(filters = []) {
  /* todo */
  const lectures = data.lectures;
  const saved = loadSavedLectures();
  
  if (saved) {
    lectures.forEach(lecture => { lecture.finished = saved.find(slug => slug === lecture.slug) ? true : false; })
  }
  if (filters.length === 0) {
    return lectures;
  } else {
    return lectures.filter(lecture => filters.find(category => category === lecture.category));
  }
}

/**
 * Sækir ákveðinn fyrirlestur eftir slug. Bætir við upplýsingum um hvort
 * fyrirlestur sé kláraður ekki.
 *
 * @param {string} slug Slug á fyrirlestri sem sækja á.
 * @returns {object} Fyrirlestri sem fannst eða null ef engin fannst.
 */
export function getLecture(slug) {
  /* todo */
  const lecture = data.lectures.find(obj => obj.slug === slug);
  const done = ((array) => { return array ? array.find(element => element === slug) : null; })(loadSavedLectures())
  lecture.finished = done ? true : false;
  return lecture;
}

/**
 * Setur fyrirlestur sem kláraðann eða ekki eftir slug. Ef fyrirlestur var
 * kláraðar er hann settur sem ókláraður og öfugt.
 *
 * @param {string} slug Slug á fyrirlestri sem klára á.
 */
export function toggleLectureFinish(slug) {
  /* todo */
  const saved = loadSavedLectures();
  const index = saved.indexOf(slug);
  if (index >= 0) {
    saved.splice(index, 1);
  } else {
    saved.push(slug);
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(saved));
}
