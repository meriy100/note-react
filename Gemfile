source 'https://rubygems.org'

gem 'rails', '~> 5.0.0', '>= 5.0.0.1'
gem 'mysql2', '>= 0.3.18', '< 0.5'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'

gem 'jquery-rails'
gem 'jbuilder', '~> 2.5'

# UI/UX
gem 'bootstrap-sass'
gem 'bourbon'
gem 'font-awesome-rails'

# Configuration
gem 'dotenv-rails'
gem 'config', '~> 1.0.0'

# Seeds
gem 'seed-fu'

# Upload
gem 'carrierwave'
gem 'carrierwave-data-uri'
gem 'rmagick'
gem 'fog'

# Seach
gem "ransack"

group :development, :test do
  gem 'byebug', platform: :mri

  # Email
  gem 'letter_opener_web'

  # CLI
  gem 'spring'
  gem 'spring-commands-rspec'

  # Test
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'simplecov', require: false

  # Code analyze
  gem 'rubocop', '~> 0.39'
  gem 'reek', '~> 4.0'
  gem 'rails_best_practices'
  gem 'brakeman', require: false
  gem 'bullet'
  gem 'coffeelint'
  gem 'scss_lint', require: false

  # Debugger
  gem 'byebug'
  gem 'better_errors'
  gem 'pry'
  gem 'pry-byebug'
  gem 'pry-doc'
  gem 'pry-rails'
  gem 'pry-stack_explorer'

  # Print debug
  gem 'awesome_print'
  gem 'tapp'

  # Table/Schema
  gem 'annotate'
  gem 'migration_comments'

  # Deploy
  gem 'capistrano'
  gem 'capistrano-rails'
  gem 'capistrano-rbenv'
  gem 'capistrano-bundler'

  # Dummy Data
  gem "faker"
end

group :development do
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
end

group :production do
  # Application server
  gem "unicorn"
  gem 'therubyracer', platforms: :ruby
end

group :test do
  gem 'database_cleaner'
  gem 'fuubar'
  gem 'launchy'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers'
  gem 'timecop'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
