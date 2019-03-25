function render(req, res, data) {
  let dummyDataLimit = 100;
  let dummyData = {
    img:
      "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F30edebae-4efe-11e9-8f44-fe4a86c48b33?source=next&fit=scale-down&width=700",
    thumbnail:
      "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F30edebae-4efe-11e9-8f44-fe4a86c48b33?source=next&fit=scale-down&width=3",
    author: "Jim Brunsden",
    published: "MARCH 25, 2019",
    title: "EU warns no-deal Brexit is ‘increasingly likely",
    excerpt:
      "It is “increasingly likely” the UK will leave the EU without a deal in less than three weeks time, Brussels said on Monday, as it announced the bloc was ready for a hard Brexit involving delays, customs checks and quizzing British travellers at the border.",
    link: "https://www.ft.com/content/d7974afa-4ef3-11e9-9c76-bf4a0ce37d49"
  };

  data.months.map(month => {
    if (month.content === undefined || month.content.length == 0) {
      for (var i = 0; i <= dummyDataLimit; i++) {
        month.content.push(dummyData);
      }
    }
  });

  res.render("index", data);
}

module.exports = {
  render
};
