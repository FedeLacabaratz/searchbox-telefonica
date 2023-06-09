// Top 50 books based on popular films
const top50Books = [
  { id: 1, country: 'Andorra', text: 'The Shawshank Redemption', version: '1.0' },
  { id: 2, country: 'Argelia', text: 'The Godfather: Part II', version: '1.1' },
  { id: 3, country: 'Argentina', text: 'The Godfather', version: '1.2' },
  { id: 4, country: 'Barbados', text: 'The Dark Knight', version: '1.3' },
  { id: 5, country: 'Bahamas', text: '12 Angry Men', version: '1.4' },
  { id: 6, country: 'Brasil', text: "Schindler's List", version: '1.5' },
  { id: 7, country: 'Camerun', text: 'Pulp Fiction', version: '1.0' },
  { id: 8, country: 'Croacia', text: 'The Good, the Bad and the Ugly', version: '1.6' },
  { id: 9, country: 'Chile', text: 'Fight Club', version: '1.7' },
  { id: 10, country: 'Dinamarca', text: 'Forrest Gump', version: '1.0' },
  { id: 11, country: 'Estonia', text: 'Inception', version: '1.8' },
  { id: 12, country: 'Ecuador', text: "One Flew Over the Cuckoo's Nest", version: '1.9' },
  { id: 13, country: 'Egipto', text: 'Goodfellas', version: '2.0' },
  { id: 14, country: 'Finlandia', text: 'The Matrix', version: '1.7' },
  { id: 15, country: 'Francia', text: 'Seven Samurai', version: '2.1' },
  { id: 16, country: 'Fiji', text: 'City of God', version: '2.2' },
  { id: 17, country: 'Gibraltar', text: 'Se7en', version: '2.3' },
  { id: 18, country: 'Gran Bretaña', text: 'The Silence of the Lambs', version: '2.4' },
  { id: 19, country: 'Guinea', text: "It's a Wonderful Life", version: '2.5' },
  { id: 20, country: 'Hong Kong', text: 'Life Is Beautiful', version: '2.6' },
  { id: 21, country: 'Haiti', text: 'The Usual Suspects', version: '2.3' },
  { id: 22, country: 'Hungria', text: 'Léon: The Professional', version: '1.0' },
  { id: 23, country: 'Indonesia', text: 'Spirited Away', version: '2.7' },
  { id: 24, country: 'Irlanda', text: 'Saving Private Ryan', version: '2.8' },
  { id: 25, country: 'Italia', text: 'Once Upon a Time in the West', version: '2.9' },
  { id: 26, country: 'Jamaica', text: 'American History X', version: '2.8' },
  { id: 27, country: 'Japon', text: 'Interstellar', version: '3.0' },
  { id: 28, country: 'Kenia', text: 'Casablanca', version: '3.1' },
  { id: 29, country: 'Kazajistan', text: 'City Lights', version: '3.2' },
  { id: 30, country: 'Laos', text: 'Psycho', version: '3.3' },
  { id: 31, country: 'Lituania', text: 'The Green Mile', version: '1.7' },
  { id: 32, country: 'Marruecos', text: 'The Intouchables', version: '3.4' },
  { id: 33, country: 'Moldavia', text: 'Modern Times', version: '3.5' },
  { id: 34, country: 'Nicaragua', text: 'Raiders of the Lost Ark', version: '3.6' },
  { id: 35, country: 'Nigeria', text: 'Rear Window', version: '2.1' },
  { id: 36, country: 'Omán', text: 'The Pianist', version: '2.2' },
  { id: 37, country: 'Pakistan', text: 'The Departed', version: '3.7' },
  { id: 38, country: 'Polonia', text: 'Terminator 2: Judgment Day', version: '2.4' },
  { id: 39, country: 'Qatar', text: 'Back to the Future', version: '3.8' },
  { id: 40, country: 'Rusia', text: 'Whiplash', version: '3.0' },
  { id: 41, country: 'Rumania', text: 'Gladiator', version: '3.9' },
  { id: 42, country: 'Senegal', text: 'Memento', version: '3.9' },
  { id: 43, country: 'Suiza', text: 'The Prestige', version: '3.7' },
  { id: 44, country: 'Tailandia', text: 'The Lion King', version: '1.0' },
  { id: 45, country: 'Tunez', text: 'Apocalypse Now', version: '4.0' },
  { id: 46, country: 'Uruguay', text: 'Alien', version: '4.0' },
  { id: 47, country: 'Venezuela', text: 'Sunset Boulevard', version: '4.1' },
  { id: 48, country: 'Vietnam', text: 'The Great Dictator', version: '4.2' },
  { id: 49, country: 'Yemen', text: 'The Lives of Others', version: '3.7' },
  { id: 50, country: 'Zámbia', text: 'Cinema Paradiso', version: '4.3' },
];

export default top50Books