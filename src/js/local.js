const save = (key, val) => {
  try {
    const localState = JSON.stringify(val);
    localStorage.setItem(key, localState);
  } catch (error) {
    console.error('Set error: ', error.message);
  }
};

const load = key => {
  try {
    const localState = localStorage.getItem(key);
    return localState === null ? undefined : JSON.parse(localState);
  } catch (error) {
    console.error('Get error: ', error.message);
  }
};

const remove = key => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    console.error('Get error: ', error.message);
  }
};

export default {
  save,
  load,
  remove,
};