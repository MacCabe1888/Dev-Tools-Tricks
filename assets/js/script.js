const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Clearing
console.clear();

// Regular
console.log("Hello!");

// Interpolated
console.log("Hello, I am a result of %s!", "interpolation");

// Styled
console.log("%cHello, I am styled text!", "font-size: 20px; color: yellow; text-shadow: 1px 1px 0 blue; background: red");

// Warning
console.warn("WARNING!");

// Error
console.error("ERROR!");

// Info
console.info("The odds of getting a royal flush are exactly 1 in 649,740.");

// Testing
console.assert(1 == 1, "That's right!");
console.assert(1 == 2, "That's wrong!");

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p);

// Table
console.table(dogs);

// Grouping Together
dogs.forEach((dog, i) => {
  // console.group(`Dog #${i + 1}: ${dog.name}`);
  console.groupCollapsed(`Dog #${i + 1}: ${dog.name}`);
  console.log(`This is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.groupEnd(`Dog #${i + 1}: ${dog.name}`);
});

// Counting
console.count("cue ball");
console.count("solids");
console.count("solids");
console.count("solids");
console.count("solids");
console.count("solids");
console.count("solids");
console.count("solids");
console.count("8 ball");
console.count("stripes");
console.count("stripes");
console.count("stripes");
console.count("stripes");
console.count("stripes");
console.count("stripes");
console.count("stripes");

// Timing
console.time("Fetching data");
fetch(`https://api.github.com/users/${window.location.host.split(".")[0]}`)
  .then(data => data.json())
  .then(data => {
    console.timeEnd("Fetching data");
    console.log(data);
  });
