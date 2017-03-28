10.times do |i|
  i += 1
  User.seed(:id) do |u|
    u.id = i
    u.name = "user#{i}"
    u.email = "user#{i}@gmail.com"
    u.host = i % 2 
    u.salt = "asdasdastr4325234324sdfds"
    u.crypted_password = Sorcery::CryptoProviders::BCrypt.encrypt("password", "asdasdastr4325234324sdfds")
    u.admin = i % 2
  end
end


