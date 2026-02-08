import type { AudioLibSearchElement } from '../app/types/library.types';

/**
 * Audio library data array containing searchable items.
 * Each item represents an audio resource with metadata and source links.
 */
// TODO: change this mock to reflect of the real usage of the audiolibrary and put mock podcasts in it
export const audioLibraryList: AudioLibSearchElement[] = [
  {
    id: '001',
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    spotifyLink: 'https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8',
    timestamp: 0,
    talkTitle: 'Classic 80s Pop Hit',
    topicTitle: '80s Pop Music',
    description:
      'An iconic pop song from the 1980s with upbeat tempo and memorable melody',
    tags: ['pop', '80s', 'classic', 'upbeat'],
  },
  {
    id: '002',
    youtubeLink: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
    timestamp: 42,
    talkTitle: 'Smooth Jazz Saxophone Solo',
    description:
      'Relaxing jazz performance featuring melodic saxophone improvisations',
    tags: ['jazz', 'instrumental', 'saxophone', 'chill'],
  },
  {
    id: '003',
    spotifyLink: 'https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp',
    timestamp: 0,
    talkTitle: 'Lo-Fi Hip Hop Beats',
    description:
      'Perfect study music with laid-back beats and atmospheric sounds',
    tags: ['lofi', 'hiphop', 'study', 'chill', 'beats'],
  },
  {
    id: '004',
    youtubeLink: 'https://www.youtube.com/watch?v=vTIIMJ9tUc8',
    spotifyLink: 'https://open.spotify.com/track/5CQ30WqJwcep0pYcV4AMNc',
    timestamp: 15,
    talkTitle: 'Epic Orchestral Soundtrack',
    description:
      'Cinematic orchestral piece with dramatic strings and powerful brass',
    tags: ['orchestral', 'epic', 'cinematic', 'instrumental', 'soundtrack'],
  },
  {
    id: '005',
    youtubeLink: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    timestamp: 120,
    talkTitle: 'Gangnam Style Dance',
    description: 'Viral K-pop dance hit that took the world by storm',
    tags: ['kpop', 'dance', 'viral', 'party'],
  },
  {
    id: '006',
    spotifyLink: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
    timestamp: 0,
    talkTitle: 'Acoustic Guitar Meditation',
    description:
      'Peaceful acoustic guitar melodies for relaxation and mindfulness',
    tags: ['acoustic', 'guitar', 'meditation', 'peaceful', 'instrumental'],
  },
  {
    id: '007',
    youtubeLink: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
    spotifyLink: 'https://open.spotify.com/track/2374M0fQpWi3dLnB54qaLX',
    timestamp: 30,
    talkTitle: 'Bohemian Rhapsody',
    topicTitle: 'Classic Rock Masterpieces',
    description:
      "Queen's legendary rock opera masterpiece with multiple movements",
    tags: ['rock', 'classic', 'opera', '70s', 'queen'],
  },
  {
    id: '008',
    youtubeLink: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
    timestamp: 0,
    talkTitle: 'Electronic Dance Music Festival',
    description: 'High-energy EDM track with pulsing bass and euphoric drops',
    tags: ['edm', 'electronic', 'dance', 'festival', 'energy'],
  },
  {
    id: '009',
    spotifyLink: 'https://open.spotify.com/track/1301WleyT98MSxVHPZCA6M',
    timestamp: 0,
    talkTitle: 'Classical Piano Nocturne',
    description: "Chopin's romantic piano composition performed with elegance",
    tags: ['classical', 'piano', 'romantic', 'chopin', 'instrumental'],
  },
  {
    id: '010',
    youtubeLink: 'https://www.youtube.com/watch?v=kXYiU_JCYtU',
    spotifyLink: 'https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI',
    timestamp: 90,
    talkTitle: 'Reggae Beach Vibes',
    description: 'Feel-good reggae rhythms perfect for summer relaxation',
    tags: ['reggae', 'summer', 'beach', 'tropical', 'chill'],
  },
  {
    id: '011',
    youtubeLink: 'https://www.youtube.com/watch?v=M4sEcIHG0Yc',
    timestamp: 60,
    talkTitle: 'Heavy Metal Guitar Riff',
    description:
      'Aggressive metal track with face-melting guitar solos and powerful drums',
    tags: ['metal', 'rock', 'guitar', 'heavy', 'intense'],
  },
  {
    id: '012',
    spotifyLink: 'https://open.spotify.com/track/6habFhsOp2NvshLv26DqMb',
    timestamp: 0,
    talkTitle: 'Ambient Space Soundscape',
    description:
      'Ethereal ambient music evoking the vastness of space with synthesizer textures',
    tags: ['ambient', 'space', 'electronic', 'meditation', 'atmospheric'],
  },
  {
    id: '013',
    youtubeLink: 'https://www.youtube.com/watch?v=HgzGwKwLmgM',
    spotifyLink: 'https://open.spotify.com/track/0DiWol3AO6WpXZgp0goxAV',
    timestamp: 0,
    talkTitle: 'Blues Guitar 12-Bar',
    description:
      'Traditional blues progression with soulful guitar bends and expressive vocals',
    tags: ['blues', 'guitar', 'soul', 'traditional', 'vocal'],
  },
];
