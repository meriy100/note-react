task :build_frontend do
  sh "npm -v"
  sh "which npm"
  sh 'npm install'
  sh 'npm run release'
end

Rake::Task['assets:precompile'].enhance(%i(build_frontend))
