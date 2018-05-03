export const DUMMY_DATA = [
  {
    'message': 'Oh oh, dat heb ik niet goed begrepen. Kan je dat nog anders formuleren?',
    'type': 'text',
  },
  {
    'message': 'Hallo.',
    'type': 'text',
    'send': true
  },
  {
    'message': 'Welke akte heeft u nodig?',
    'type': 'text',
  },
  {
    'message': 'geboorteakte',
    'type': 'text',
    'send': true
  },
  {
    'message': 'U wil een geboorteakte opvragen.',
    'type': 'text',
  },
  {
    'message': 'Wiens geboorteakte heeft u nodig?',
    'type': 'text',
  },
  {
    'message': '',
    'elements': [
      {
        'replyText': 'de akte van mezelf',
        'text': 'de akte van mezelf'
      },
      {
        'replyText': 'de akte van iemand anders',
        'text': 'de akte van iemand anders'
      },
      {
        'replyText': 'de akte van een familielid in eerste lijn (kind, ouder, grootouder, kleinkind)',
        'text': 'de akte van een familielid in eerste lijn (kind, ouder, grootouder, kleinkind)'
      }
    ],
    'type': 'radio',
  }
];
