import { searchLibrary } from '../app/utils/searchEngine';
import { audioLibraryList } from '../data/dummy.library';

function runTest(query: string) {
  const results = searchLibrary(audioLibraryList, query);
  console.log(`\nSearch for: "${query}"`);
  console.log(`Found: ${results.length} results`);
  results.forEach((item) => {
    console.log(
      ` - [${item.id}] ${item.title} (Tags: ${item.tags.join(', ')})`,
    );
  });
}

console.log('Starting Search Engine Verification...');

// Test Case 1: Empty Query
runTest('');

// Test Case 2: Whitespace Query
runTest('   ');

// Test Case 3: Case-insensitive match (Jazz)
runTest('JAZZ');

// Test Case 4: Match in Tags (Chill)
runTest('chill');

// Test Case 5: Match in Description (pop song)
runTest('pop song');

// Test Case 6: No Match
runTest('nonexistentterm');

// Test Case 7: Partial match (Guitar)
runTest('Guitar');

console.log('\nVerification Complete.');
