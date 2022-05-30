// import { apiClient } from '../apiClient';
import { IWatch, IPriceData, IWatchList, IWatchArticle } from '../../types';

import johnmayer from '../../assets/images/johnmayer.jpg';
import bingingwithbabish from '../../assets/images/bingingwithbabish.jpeg';
import christianoronaldo from '../../assets/images/christianoronaldo.jpeg';
import hodinkeeimage from '../../assets/images/hodinkeeimage.jpeg';
import theoandharrisimage from '../../assets/images/theoandharrisimage.jpeg';

/**
 * Returns watch object given id.
 * @param id of watch.
 * @returns watch object.
 */
export async function getWatch(id: string): Promise<IWatch> {
  const fakeData: IWatch = {
    id: '1',
    specs: {
      model: 'Nautilus 5711/1A-014',
      brand: 'Patek Phillipe',
      referenceNumber: '5711/1A-014',
      yearOfProduction: '2021',
      caseMaterial: 'Steel',
      braceletMaterial: 'Steel',
      description: `On its 5711/1A model, Patek Philippe unveils a dial in a brand-new
      olive-green shade that is new to the Nautilus collection and which
      should delight lovers of this cult watch, an icon of sporting elegance.
      The highly recognizable design of the case, bezel and bracelet is
      enhanced by a subtle alternation between satinated and polished manual
      finishing. Inside this model water-resistant to 120m beats a
      self-winding caliber visible through a transparent sapphire crystal
      case-back.`,
    },
    priceData: getFakeWatchPriceData(),
  };
  return fakeData;
}
/**
 * Get all trending lists
 * @returns a list of watch lists
 */
export async function getTrendingLists(): Promise<IWatchList[]> {
  const trendingListTags: IWatchList[] = [
    {
      image: johnmayer,
      text: 'John Mayer',
      id: 1,
    },
    {
      image: bingingwithbabish,
      text: 'Binging with Babish',
      id: 1,
    },
    {
      image: christianoronaldo,
      text: 'Christiano Ronaldo',
      id: 1,
    },
    {
      image: christianoronaldo,
      text: 'Christiano Ronaldo',
      id: 1,
    },
    {
      image: johnmayer,
      text: 'John Mayer',
      id: 1,
    },
    {
      image: johnmayer,
      text: 'John Mayer',
      id: 1,
    },
    {
      image: bingingwithbabish,
      text: 'Binging with Babish',
      id: 1,
    },
    {
      image: christianoronaldo,
      text: 'Christiano Ronaldo',
      id: 1,
    },
    {
      image: christianoronaldo,
      text: 'Christiano Ronaldo',
      id: 1,
    },
  ];
  return trendingListTags;
}

export async function getTrendingListWatches(): Promise<IWatch[]> {
  /** Fake data */
  const watch1: IWatch = {
    id: '1',
    specs: {
      model: 'Nautilus 5711/1A-014',
      brand: 'Patek Phillipe',
      referenceNumber: '5711/1A-014',
      yearOfProduction: '2021',
      caseMaterial: 'Steel',
      braceletMaterial: 'Steel',
      description: `On its 5711/1A model, Patek Philippe unveils a dial in a brand-new
      olive-green shade that is new to the Nautilus collection and which
      should delight lovers of this cult watch, an icon of sporting elegance.
      The highly recognizable design of the case, bezel and bracelet is
      enhanced by a subtle alternation between satinated and polished manual
      finishing. Inside this model water-resistant to 120m beats a
      self-winding caliber visible through a transparent sapphire crystal
      case-back.`,
    },
    priceData: getFakeWatchPriceData(),
  };

  const watch2: IWatch = {
    id: '1',
    specs: {
      model: 'Rolex GMT Master II',
      brand: 'Rolex',
      referenceNumber: '126710BLRO',
      yearOfProduction: '2021',
      caseMaterial: 'Steel',
      braceletMaterial: 'Steel',
      description: `Designed to show the time in two different time zones simultaneously,
    the GMT-Master, launched in 1955, was originally developed as a navigation instrument
    for professionals criss-crossing the globe. Heir to the original model, 
    the GMT-Master II was unveiled in 1982, with a new movement ensuring ease of use. 
    Its combination of peerless functionality, robustness and instantly recognizable
    aesthetics has attracted a wider audience of world travellers.`,
    },
    priceData: getFakeWatchPriceData(),
  };

  const watch3: IWatch = {
    id: '1',
    specs: {
      model: 'AP Royal Oak "Jumbo"',
      brand: 'Audemars Piguets',
      referenceNumber: '15202',
      yearOfProduction: '2021',
      caseMaterial: 'Rose Gold',
      braceletMaterial: 'Rose Gold',
      description: `Inside the watch is an all-new movement from Audemars Piguet. 
    Gone is the 2121 movement, and in it's stead is the 7121. Practically speaking,  
    the movement is an improvement upon it's older brother. The movement features a 
    55-hour power reserve instead of the 40-hour of the 2121. The movement will now beat 
    at 4-Hz instead of 2.75-Hz. And, to enthusiast delight everywhere, a quick-set date.`,
    },
    priceData: getFakeWatchPriceData(),
  };
  return [
    watch1,
    watch2,
    watch3,
    watch1,
    watch2,
    watch3,
    watch1,
    watch2,
    watch3,
    watch1,
    watch2,
    watch3,
  ];
}

export async function getArticles(): Promise<IWatchArticle[]> {
  const watchArticles: IWatchArticle[] = [
    {
      company: 'Theo & Harris',
      heading: 'Now Rolex And Cartier Are Up Over 400% In A Week (Pt. 2)',
      articleSnippet:
        'What does this mean for the watch market? Are we in a bubble? Is a bubble even possible or is that just plain old silly? This seems to have happened because of the Patek Tiffany 5711 selling for many many millions of dollars but what does it mean? Do Rolex watches hold their value?',
      image: theoandharrisimage,
      url: 'https://theoandharris.com/now-rolex-and-cartier-are-up-over-400-in-a-week-pt-2/',
    },
    {
      company: 'Hodinkee',
      heading:
        "Introducing: Zenith's Latest Defy Is The Funky '60s Revival I've Been Waiting For",
      articleSnippet:
        'The contemporary Zenith Defy collection, in its current form since 2017, looks like a watch that was designed to meet the trends of the 2020s. The connection between the bracelet and strap has an integrated aesthetic.',
      image: hodinkeeimage,
      url: 'https://www.hodinkee.com/articles/zeniths-defy-revival-a3642-vintage',
    },
  ];
  return watchArticles;
}

/**
 * Utility function to generate fake watch price history data
 * @returns fake watch price data array
 */
export function getFakeWatchPriceData(): IPriceData[] {
  let startDate = new Date('12/24/2021');
  let startPrice = Math.floor(Math.random() * 200001); // random start price between 0 and $200,000

  let fakeData = Array.from({ length: 500 }, () => {
    startDate = new Date(startDate.setDate(startDate.getDate() + 1));
    // randomly add or subtract but ensure a pos price
    if (Math.round(Math.random() * 1) === 1 || startPrice < 0) {
      startPrice += Math.floor(Math.random() * 10000) + 5000; // add amount between $10,000 and $5,000
    } else if (startPrice > 10000) {
      startPrice -= Math.floor(Math.random() * 10000) + 5000; // subtract ''
    }
    return { price: startPrice, date: startDate };
  });
  /* For some reason ^ adds an extra day at the end thats repeated... */
  return fakeData.slice(0, -1);
}