$('.selectize').selectize({
  options: [
    { text: 'Text #1', value: 'Value #1' },
    { text: 'Text #2', value: 'Value #2' },
    { text: 'Text #3', value: 'Value #3' },
  ]
});

$('.select-all').click(() => {
  $('.selectize')[0].selectize.setValue(['Value #1', 'Value #2', 'Value #3']);
});
