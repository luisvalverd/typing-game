export default class Model {
  constructor() {
    this.view = null;
    this.text = `When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton. Bilbo was very rich and very peculiar, and had been the wonder of the Shire for sixty years, ever since his remarkable disappearance and unexpected return. The riches he had brought back from his travels had now become a local legend, and it was popularly believed, whatever the old folk might say, that the Hill at Bag End was full of tunnels stuffed with treasure. And if that was not enough for fame, there was also his prolonged vigour to marvel at. Time wore on, but it seemed to have little effect on Mr.Baggins. ninety he was much the same as at fifty.At ninety - nine they began to call him well preserved; but unchanged would have been nearer the mark.There were some that shook their heads and thought this was too much of a good thing; it seemed unfair that anyone should possess(apparently) perpetual youth as well as (reputedly) inexhaustible wealth. It will have to be paid for, they said. It isnt natural, and trouble will come of it! But so far trouble had not come; and as Mr.Baggins was generous with his money, most people were willing to forgive him his oddities and his good fortune.He remained on visiting terms with his relatives(except, of course, the Sackville - Bagginses), and he had many devoted admirers among the hobbits of poor and unimportant families. But he had no close friends, until some of his younger cousins began to grow up. The eldest of these, and Bilbos favourite, was young Frodo Baggins. When Bilbo was ninety - nine he adopted Frodo as his heir, and brought him to live at Bag End; and the hopes of the Sackville - Bagginses were finally dashed. Bilbo and Frodo happened to have the same birthday, September 22nd. You had better come and live here, Frodo my lad, said Bilbo one day; and then we can celebrate our birthday - parties comfortably together. At that time Frodo was still in his tweens, as the hobbits called the irresponsible twenties between childhood and coming of age at thirty - three. Twelve more years passed. Each year the Bagginses had given very lively combined birthday - parties at Bag End; but now it was understood that something quite exceptional was being planned for that autumn.
Bilbo was going to be eleventy - one, 111, a rather curious number, and a very respectable age for a hobbit(the Old Took himself had only reached 130); and Frodo was going to be thirty - three, 33, an important number: the date of his coming of age.
Tongues began to wag in Hobbiton and Bywater; and rumour of the coming event travelled all over the Shire.The history and character of Mr.Bilbo Baggins became once again the chief topic of conversation; and the older folk suddenly found their reminiscences in welcome demand.No one had a more attentive audience than old Ham Gamgee, commonly known as the Gaffer.He held forth at The Ivy Bush, a small inn on the Bywater road; and he spoke with some authority, for he had tended the garden at Bag End for forty years, and had helped old Holman in the same job before that.Now that he was himself growing old and stiff in the joints, the job was mainly carried on by his youngest son, Sam Gamgee.Both father and son were on very friendly terms with Bilbo and Frodo.They lived on the Hill itself, in Number 3 Bagshot Row just below Bag End.Well, so they say, said the Gaffer.You see: Mr.Drogo, he married poor Miss Primula Brandybuck.She was our Mr.Bilbos first cousin on the mothers side(her mother being the youngest of the Old Tooks daughters); and Mr.Drogo was his second cousin.So Mr.Frodo is his first and second cousin, once removed either way, as the saying is, if you follow me.And Mr.Drogo was staying at Brandy Hall with his father -in -law, old Master Gorbadoc, as he often did after his marriage(him being partial to his vittles, and old Gorbadoc keeping a mighty generous table); and he went out boating on the Brandywine River; and he and his wife were drownded, and poor Mr.Frodo only a child and all.I ve heard they went on the water after dinner in the moonlight, said Old Noakes; and it was Drogos weight as sunk the boat.And I heard she pushed him in, and he pulled her in after him, said Sandyman, the Hobbiton miller.That very month was September, and as fine as you could ask.A day or two later a rumour(probably started by the knowledgeable Sam) was spread about that there were going to be fireworks fireworks, what is more, such as had not been seen in the Shire for nigh on a century, not indeed since the Old Took died.Days passed and The Day drew nearer.An odd - looking waggon laden with odd - looking packages rolled into Hobbiton one evening and toiled up the Hill to Bag End.The startled hobbits peered out of lamplit doors to gape at it.It was driven by outlandish folk, singing strange songs: dwarves with long beards and deep hoods.A few of them remained at Bag End.At the end 
of the second week in September a cart came in through Bywater from the direction of Brandywine Bridge in broad daylight.`;
    this.list = [];
  }

  setView(view) {
    this.view = view;
  }

  getText() {
    return this.text;
  }

  isValidText(text) {
    this.list = [];
    let i = 0;
    while (i < text.length) {
      if (text[i] !== this.text[i]) {
        if (!this.list.includes(i)) {
          this.list.push(i);
        }
      }
      i++;
    }
    this.view.changeColorText(text, this.list);
  }
}
