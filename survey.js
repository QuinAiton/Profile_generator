const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('what is your name or nickname?', (answer) => {
  const a1 = answer;
  rl.question('what activities do you enjoy?', (answer) => {
    const a2 = answer;
    rl.question('What music do you like to listen to when doing that activity?', (answer) => {
      const a3 = answer;
      rl.question('what is your favourite meal of the day? (eg:dinner,bruch,ect', (answer) => {
        const a4 = answer;
        rl.question('what is your favourite thing to eat for that meal?', (answer) => {
          const a5 = answer;
          rl.question('what is your absoloute favourite sport or activity?', (answer) => {
            const a6 = answer;
            rl.question('In a few words only, what are you good at (your superpower)', (answer) => {
              const a7 = answer;
              rl.close();
              process.stdout.write('\n');
              process.stdout.write(`${a1} enjoys listening to ${a3} while ripping up some of their favourite activites: ${a2}. However theres nothing they like more than smashing a big old ${a5} for ${a4} and kicking butt at ${a6} since they think their really good at ${a7}`);
            });
          });
        });
      });
    });
  });
});
