post_attirbutes = (1..10).map do |idx|
  {
    id: idx,
    path: idx % 2 == 0 ? "template/"+"#{idx}" : "hoge/"+"#{idx}",
    body: "%{me}ppp%{year}"+"#{Faker::Lorem.sentence(5)}"
  }
end
Post.seed(:id, post_attirbutes)
