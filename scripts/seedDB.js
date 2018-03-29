const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ipsumlist",
  {
    useMongoClient: true
  }
);

const ipsumSeed = [
  {
    title: "Bacon Ipsum",
    url: "https://baconipsum.com/",
    sample: "Bacon ipsum dolor amet strip steak ground round jowl, turkey flank picanha cow bresaola biltong pork leberkas short ribs. Ham porchetta jerky landjaeger fatback. Beef ribs shoulder jerky venison chuck turducken swine jowl picanha spare ribs tri-tip landjaeger t-bone pork loin. Ball tip filet mignon short loin shankle shoulder leberkas pork belly. Spare ribs salami tongue, tenderloin short loin pork chop ball tip tri-tip capicola."
  },
  {
    title: "Cat Ipsum",
    url: "http://www.catipsum.com/",
    sample: "Purr more napping, more napping all the napping is exhausting destroy house in 5 seconds. Hiss and stare at nothing then run suddenly away. Cat cat moo moo lick ears lick paws. Love you, then bite you demand to be let outside at once, and expect owner to wait for me as i think about it and groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked and refuse to leave cardboard box i'm going to lap some water out of my master's cup meow. Cat fur is the new black."
  },
  {
    title: "Cupcake Ipsum",
    url: "http://www.cupcakeipsum.com/",
    sample: "Cupcake ipsum dolor sit amet sweet sweet muffin. Fruitcake cotton candy cake gummi bears jujubes caramels toffee croissant. Cookie chupa chups lollipop ice cream brownie brownie croissant. Jelly sugar plum pie sweet halvah wafer cupcake chocolate toffee. Bear claw carrot cake macaroon soufflé sweet sweet roll icing. Brownie marzipan lollipop sugar plum dessert macaroon. Cheesecake dragée toffee marzipan donut tiramisu cheesecake lollipop. Tiramisu gummies carrot cake lollipop icing sugar plum tiramisu."
  },
  {
    title: "Fillerama",
    url: "http://fillerama.io/",
    sample: "Perhaps, but perhaps your civilization is merely the sewer of an even greater society above you! Oh sure! Blame the wizards! I feel like I was mauled by Jesus. You can see how I lived before I met you. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? No, just a regular mistake. My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards. I feel like I was mauled by Jesus."
  },
  {
    title: "Bob Ross Ipsum",
    url: "http://www.bobrosslipsum.com/",
    sample: "It's a very cold picture, I may have to go get my coat. It’s about to freeze me to death. Brown is such a nice color. Maybe he has a little friend that lives right over here. Paint anything you want on the canvas. Create your own world. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. Pretend you're water. Just floating without any effort. Having a good day."
  },
  {
    title: "Hairy Lipsum",
    url: "http://hairylipsum.com/",
    sample: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sportacus gentleman vincent price des lynam, super mario caterpillar sportacus gentleman funny walk big daft brush casual style colonel mustard des lynam vincent price, dodgy uncle clive old west sheriff sportacus des lynam john aldridge big daft brush frightfully nice Fallen eyebrow caterpillar funny walk gentleman super mario colonel mustard tom selleck worn with distinction vincent price casual style?"
  },
  {
    title: "Hipsum",
    url: "https://hipsum.co/",
    sample: "Lorem ipsum dolor amet whatever bitters before they sold out, post-ironic hell of glossier keytar wayfarers paleo banh mi fashion axe cliche pug knausgaard. 8-bit farm-to-table fixie, readymade bicycle rights affogato mumblecore disrupt narwhal taiyaki sriracha small batch williamsburg migas. Banh mi locavore farm-to-table hashtag hella fixie stumptown copper mug poke occupy edison bulb tumblr direct trade roof party shaman. Migas before they sold out cred chartreuse semiotics banh mi actually, pour-over authentic. Roof party wayfarers brunch skateboard offal single-origin coffee polaroid +1 keytar heirloom XOXO woke bicycle rights. Butcher put a bird on it organic succulents tattooed gochujang."
  },
  {
    title: "Hodor Ipsum",
    url: "http://hodoripsum.com/",
    sample: "Hodor, hodor; hodor hodor... Hodor hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor... Hodor hodor hodor?! Hodor! Hodor hodor, hodor, hodor. Hodor hodor?! Hodor hodor - HODOR hodor, hodor hodor; hodor hodor. Hodor, hodor. Hodor. Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor... Hodor hodor hodor?! Hodor, HODOR hodor, hodor hodor... Hodor hodor hodor, hodor. Hodor hodor... Hodor hodor hodor?"
  },
  {
    title: "Office Ipsum",
    url: "http://officeipsum.com/",
    sample: "This proposal is a win-win situation which will cause a stellar paradigm shift. Horsehead offer can you ballpark the cost per unit for me, so closer to the metal are there any leftovers in the kitchen?. Idea shower blue sky for forcing function for proceduralize. That jerk from finance really threw me under the bus cloud strategy move the needle hit the ground running. I'll book a meeting so we can solution this before the sprint is over after I ran into Helen at a restaurant, I realized she was just office pretty, for turd polishing. Herding cats we need to button up our approach cross functional teams enable out of the box brainstorming we need to harvest synergy effects."
  },
  {
    title: "Pommy Ipsum",
    url: "http://www.pommyipsum.com/",
    sample: "Pommy ipsum pezzy little how's your father macca up North and, up North and nose rag could be a bit of a git for sooth. Conked him one on the nose it's the dogs bollocks wibbly-wobbly timey-wimey stuff knee high to a grasshopper i'll be a monkey's uncle punter pigeons in Trafalgar Square up the duff off with her head, bangers and mash ask your mother if bowler hat sling one's hook sausage roll grub's up tip-top, a reet bobbydazzler Bob's your uncle odds and sods flip flops done up like a kipper nowt, cheerio blighty bread and butter pudding don't get your knickers in a twist sod's law Victoria sponge cake."
  },
  {
    title: "Sagan Ipsum",
    url: "http://saganipsum.com/",
    sample: "Permanence of the stars Sea of Tranquility hydrogen atoms shores of the cosmic ocean worldlets rich in mystery culture, as a patch of light, circumnavigated, Apollonius of Perga rich in mystery! Light years, a billion trillion the carbon in our apple pies are creatures of the cosmos Vangelis prime number take root and flourish, something incredible is waiting to be known! Vanquish the impossible, white dwarf Cambrian explosion, hundreds of thousands kindling the energy hidden in matter! The carbon in our apple pies with pretty stories for which there's little good evidence explorations hearts of the stars."
  },
  {
    title: "Slipsum",
    url: "http://slipsum.com/",
    sample: "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends."
  },
  {
    title: "Social Good Ipsum",
    url: "http://socialgoodipsum.com/#/",
    sample: "Shared unit of analysis, collaborate, systems thinking the resistance synergy issue outcomes empathetic. Vibrant; capacity building innovate efficient social entrepreneur, efficient; families we must stand up impact. Changemaker ecosystem program area when; change-makers to. Expose the truth social capital corporate social responsibility corporate social responsibility co-creation. Game-changer support, synergy then overcome injustice systems thinking. Ideate engaging thought leadership global, progress unprecedented challenge families sustainable."
  },
  {
    title: "Zombie Ipsum",
    url: "http://www.zombieipsum.com/",
    sample: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus."
  },
  {
    title: "Lorem Ipsum",
    url: "https://www.lipsum.com/",
    sample: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus erat quis elit feugiat, vel auctor diam finibus. Sed eget erat dapibus, porttitor nisi vitae, mattis enim. Maecenas malesuada hendrerit dui, sit amet vulputate elit sagittis gravida. Fusce vel libero convallis felis tempor aliquam vitae sed enim. Aenean non imperdiet nunc, non lacinia erat. Integer in magna tortor. Maecenas volutpat at leo id viverra."
  },
];

db.Ipsum
  .remove({})
  .then(() => db.Ipsum.collection.insertMany(ipsumSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
