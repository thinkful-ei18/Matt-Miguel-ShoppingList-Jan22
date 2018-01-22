const Item = (function () {
  const foo = 'bar';

  function validateName(name) {
    console.log('Entered valid');
    if (name === undefined || name === '') {
      console.log('Entered if statement');
      throw new Error('Name does not exist.');
    } else {
      console.log('Validation success');
    }
  }

  function create(name) {
    return {
      id: cuid(),
      name: name,
      checked: false,
    }
  }

  return {
    validateName,
    create
  }
}());