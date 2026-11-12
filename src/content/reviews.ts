export type Review = {
  quote: string;
  rating: number;
  /** Shown in the homepage carousel. Everything is listed on the Reviews page. */
  featured?: boolean;
};

// Customer reviews from Google, as written, most recent first. Only stars and
// the review text are shown: reviewer names are left out on purpose.
//
// Rule for this list: reviews that name a staff member are only included when
// the names are Baljinder or Yash. Reviews naming anyone else are left out.
// Reviews with no text on Google are skipped. The homepage carousel shows the
// longer recent reviews (`featured`). The copied text had no star values, so
// confirm each `rating`.
export const reviews: Review[] = [
  {
    rating: 5,
    featured: true,
    quote:
      "Atlantis Utility is very professional, knowledgeable and friendly. We had connections issues with our phones and internet and they fixed and solved some issues for us when they came on site. Baljinder and Yash were great, very helpful and resourceful and very easy to work with. They also came up with a plan and some options on how we can improve our system more efficiently moving forward, which they will implement asap. We had a great experience working with them. Thank you Atlantis Utility!",
  },
  { rating: 5, quote: "The service is very dependable, and they are pleasant and friendly to speak with." },
  { rating: 5, quote: "Wonderful customer service" },
  {
    rating: 5,
    featured: true,
    quote:
      "Extremely time efficient, so happy with not only the install, but how easy they made it replace all of our phone systems with a new set up. Pricing, quality and ease made it one of the better experiences we have had here at the winery across all of the vendors we have used.",
  },
  { rating: 5, quote: "Extremely knowledgeable and professional!" },
  {
    rating: 5,
    featured: true,
    quote:
      "Great customer service from Atlantis Utility! Our business unexpectedly lost phone service, and when I called, their team quickly identified the issue and had our phone lines back up and running within 10 minutes. Fast, friendly, and efficient service—thank you!",
  },
  { rating: 5, quote: "Good people and good business!" },
  {
    rating: 5,
    featured: true,
    quote:
      "Atlantis offers sophisticated and user-friendly VOIP phones. Their DND feature is particularly impressive as it forwards all your calls to your cell phone. You can even take the phone with you on vacation and plug it into the internet to answer all your calls, as if you were in your office.",
  },
  {
    rating: 5,
    featured: true,
    quote:
      "Our service experienced an unexpected outage, and Atlantis responded immediately. Their team arrived at our office the same day and worked directly with technical support to quickly diagnose and resolve the issue. The level of customer service was exceptional, demonstrating a strong commitment to their clients and a willingness to go above and beyond to ensure the problem was fully addressed. We greatly appreciate their responsiveness, professionalism, and dedication to customer satisfaction.",
  },
  { rating: 5, quote: "The service is very good 👍" },
  {
    rating: 5,
    featured: true,
    quote:
      "The folks at Atlantis Utility provide exceptional customer support and services. Highly trained and informed staff make end user experience seemless.",
  },
  {
    rating: 5,
    featured: true,
    quote: "Fantastic company, they just managed the data/phone cabling portion of our office move. Highly recommended.",
  },
  {
    rating: 5,
    featured: true,
    quote:
      "we are very happy with atlantis utility company as they are prompt, helpful and understanding with our issues- easily to contact and reach.",
  },
  {
    rating: 5,
    quote:
      "Atlantis utility is a reliable quality telecom company. I can attest that they are accessible and easy to work with. Highly recommend!!!",
  },
  { rating: 5, quote: "Super friendly and helpful!" },
  {
    rating: 5,
    quote: "Atlantis utility goes above and beyond. If there was an option to give more than five stars they would get.",
  },
  {
    rating: 5,
    quote:
      "Company is extremely extremely professional. They were able to save us a little bit of money and on top of that gave us service that was out of this world",
  },
  { rating: 5, quote: "Very reliable company, always easy to get a hold of and very pleasant to deal with." },
  { rating: 5, quote: "Quick and easy to help us out. Better than major service providers because you can get help so easily…" },
  { rating: 5, quote: "Utility does an amazing job and are very accessible." },
  {
    rating: 5,
    quote:
      "Our internet went out on 12/24/25 and the guys from Atlantis send a person and put a temporary hot spot so our business could continue, great service!!",
  },
  {
    rating: 5,
    quote:
      "I just have to say, working with Atlantis Utility has been a fantastic experience! Their team played a pivotal role in setting up our VoIP systems at the local government office. They really know their stuff when it comes to navigating the big names in VoIP. How they tailored their services to what we needed. It wasn’t just about getting the job done; it was about finding the best fit for us. Their approach was a breath of fresh air - professional, yet super approachable and always there when we needed them. Big shout out to Atlantis Utility! If you’re looking for solid VoIP support, these are the folks to go to. They’ve been more than a service provider to us; they’ve been a reliable and invaluable partner.",
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);
