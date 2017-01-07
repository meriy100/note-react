post_attirbutes = (1..10).map do |idx|
  {
    id: idx,
    path: "/",
    body: Faker::Lorem.sentence(10),
  }
end
Post.seed(:id, post_attirbutes)
