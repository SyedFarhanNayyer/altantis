export type Review = {
  quote: string;
  rating: number;
  /** Shown in the homepage carousel. Everything is listed on the Reviews page. */
  featured?: boolean;
};

// Customer reviews from Google, as written. Reviewer names are left out on
// purpose. Google's copy cut some reviews short; those end at the last complete
// sentence. The copied text had no star values, so confirm each `rating`.
export const reviews: Review[] = [
  { rating: 5, quote: "Atlantis offers sophisticated and user-friendly VOIP phones. Their DND feature is particularly impressive as it forwards all your calls to your cell phone." },
  { rating: 5, quote: "Our service experienced an unexpected outage, and Atlantis responded immediately. Their team arrived at our office the same day and worked directly with technical support to quickly diagnose and resolve the issue." },
  { rating: 5, quote: "We had all new phones installed with many multiple options other than our existing phones. They did a good job installing and always come back if we have issues. Experience level is very high with knowledgeable crew. Cort was awesome and we will recommend this Company!" },
  { rating: 5, featured: true, quote: "Great customer service from Atlantis Utility! Our business unexpectedly lost phone service, and when I called, their team quickly identified the issue and had our phone lines back up and running within 10 minutes. Fast, friendly, and efficient service—thank you!" },
  { rating: 5, quote: "Extremely time efficient, so happy with not only the install, but how easy they made it replace all of our phone systems with a new set up. Pricing, quality and ease made it one of the better experiences we have had here at the winery across all of the vendors we have used." },
  { rating: 5, quote: "Mr. Singh is kind and attentive to his customers' ever evolving needs and aspirations. In a single day, we were easily and comfortably able to move to a leaner invoice while improving and streamlining our VoIP services." },
  { rating: 5, featured: true, quote: "The folks at Atlantis Utility provide exceptional customer support and services. Highly trained and informed staff make end user experience seemless." },
  { rating: 5, featured: true, quote: "Atlantis Utility has been great. Alan and Cort have always been responsive and on the ball. They address any and all concerns in a timely fashion and have always been easy to work with. Plus they saved us some money which is a very very good thing. Thank you Atlantis Utility" },
  { rating: 5, quote: "Atlantis Utility is an A+ company. Cort in particular has been an absolute pleasure to work with. Super easy to get a hold of, very responsive and knowledgeable. Had an issue with my newly built PC and Cort was able to diagnose and fix the issue." },
  { rating: 5, featured: true, quote: "Atlantis utility is a reliable quality telecom company. I can attest that they are accessible and easy to work with. Highly recommend!!!" },
  { rating: 5, quote: "Hello All, Our business just had a total equipment upgrade and with Atlantis. Had the pleasure to work with Cort and Baljinder the best parts of the team." },
  { rating: 5, quote: "we are very happy with atlantis utility company as they are prompt, helpful and understanding with our issues- easily to contact and reach." },
  { rating: 5, featured: true, quote: "We are a small operation with a small system, and even then, Atlantis was able to reduce our bill by $2,500 year over year. More importantly Alan and Cort treat us like family. Amazing customer service!" },
  { rating: 5, quote: "The customer service of Atlantis Utility is above and beyond all other service providers. When our internet connection was lost with our current provider, Cort was able to save the day and get our office back up and running. I Highly recommend Atlantis Utility to any business owner." },
  { rating: 5, featured: true, quote: "Atlantis has helped us save money and stay connected. The customer service is top notch Cort is very quick to respond to anything I need. the system is awesome we have people in different locations and it is like we are all in the same office." },
  { rating: 5, quote: "Agromin can attest that Atlantis Utility is great to work with. We switched to VOIP and set up a point to point connection from one office to another along with internet." },
  { rating: 5, featured: true, quote: "Atlantis utility is a great company. They are always easy to get a hold of and prompt with their service. I would highly recommend Atlantis utility to any business or business owner Cort has been great." },
  { rating: 5, quote: "Atlantis utility is amazing. We couldn’t imagine having any other service provider for phone and Internet service. Cort has been extremely helpful and responsive. When I call them they answer and address it immediately. As a business owner, I would highly recommend them to anybody who owns a business or works from home." },
  { rating: 5, featured: true, quote: "this company is absolutely amazing. They are extremely accessible and prompt. Cort has done an amazing job addressing any issues and we highly recommend Atlantis utility to anyone and everyone who owns a business or working from home." },
  { rating: 5, quote: "Atlantis Utility has been amazing to Yolandas Ventura! We are always able to get ahold of them when we need them anytime. Cort in particular has been extremely helpful and supportive when we need anything. I highly recommend them to any business. Thank you Atlantis Utility. 😊❤️☝️" },
  { rating: 5, featured: true, quote: "I had an excellent experience thanks to Cort and Alan. Their service was truly outstanding professional, attentive, and efficient from start to finish. They went above and beyond to make sure everything was handled perfectly. I really appreciate their dedication and highly recommend them!" },
  { rating: 5, quote: "Atlantis utility has done Job for our company for Phone and Internet. Cort has gone above and beyond. I highly recommend them to any business owner to use for their Internet and phone service provider" },
  { rating: 5, quote: "Fantastic company, they just managed the data/phone cabling portion of our office move. Highly recommended." },
  { rating: 5, quote: "Know Alan & his team. When we relocated our office it was time to look at options and Alan was referred to me by several Personal & professional connections." },
  { rating: 5, quote: "The service is very dependable, and they are pleasant and friendly to speak with." },
  { rating: 5, quote: "Atlantis Utility really came through for our office. Cort and Allen were great! They made the transition from our old internet and phone system seamless! When we had 1 minor issue, they addressed it quickly and efficiently. I would highly recommend them." },
  { rating: 5, quote: "Atlantis Utility is a great company ! Would definitely recommend. Cort is awesome !" },
  { rating: 5, quote: "At Eloy is a great Telecom company. Alan in court have been amazing and we highly recommend them to any business or business owner." },
  { rating: 5, quote: "I just have to say, working with Atlantis Utility has been a fantastic experience! Their team played a pivotal role in setting up our VoIP systems at the local government office." },
  { rating: 5, quote: "Company is extremely extremely professional. They were able to save us a little bit of money and on top of that gave us service that was out of this world" },
  { rating: 5, quote: "Atlantis utility goes above and beyond. If there was an option to give more than five stars they would get." },
  { rating: 5, quote: "Our internet went out on 12/24/25 and the guys from Atlantis send a person and put a temporary hot spot so our business could continue, great service!!" },
  { rating: 5, quote: "Kourt is so such a wonderful person and love his job ! Can always count on him always a phone away for sunset dental !" },
  { rating: 5, featured: true, quote: "We recently had a problem with our vendor support of our phones. I’d known Ryan from my previous workplace and reached out to see what options we had. He and the team laid out and implemented a straight forward plan that met our needs and flexibility to support our growing business. Truly appreciate the help Ryan!!" },
  { rating: 5, quote: "I will never consider anyone else ! Alan Kosh is Briliant when it comes to telecommunications … He is and was a pioneer in this industry way back when …" },
  { rating: 5, quote: "Quick and easy to help us out. Better than major service providers because you can get help so easily…" },
  { rating: 5, quote: "Utility does an amazing job and are very accessible." },
  { rating: 5, quote: "CORT AND BALJINDWR DID A Great Job ob olut recently installation" },
  { rating: 5, quote: "Very reliable company, always easy to get a hold of and very pleasant to deal with." },
  { rating: 5, quote: "Extremely knowledgeable and professional!" },
  { rating: 5, quote: "The service is very good 👍" },
  { rating: 5, quote: "Cort is very helpful :D" },
  { rating: 5, quote: "Super friendly and helpful!" },
  { rating: 5, quote: "Alan is a great vendor to work with. Lots of resources." },
  { rating: 5, quote: "Very reliable and honest company..." },
  { rating: 5, quote: "Very good and strong support team who is focused on servicing their clients. And it seems to be getting better since the new ownership took over." },
  { rating: 5, quote: "Phone service and internet service. Best in ventura county. Thank you to Atlantis utility for the great service. Love the new team" },
  { rating: 5, quote: "Atlantis Utility is very professional, knowledgeable and friendly. We had connections issues with our phones and internet and they fixed and solved some issues for us when they came on site." },
  { rating: 5, quote: "Wonderful customer service" },
  { rating: 5, quote: "Good people and good business!" },
];

export const featuredReviews = reviews.filter((r) => r.featured);
