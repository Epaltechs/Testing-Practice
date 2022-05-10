if (capitalize({
    properties: [
      { name: 'candy', sex: 'male', hobby: 'hockey' }
    ]
  }) !== capital) {
    throw new Error('Check fail: Capital')
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  