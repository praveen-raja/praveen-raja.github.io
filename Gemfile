# Gemfile for optional local preview.
# GitHub Pages builds the site remotely, so this is not required to deploy.
#
# Local preview (if you have Ruby/Bundler):
#   bundle install
#   bundle exec jekyll serve
source "https://rubygems.org"

# Use the github-pages gem so the local build matches GitHub Pages exactly.
gem "github-pages", group: :jekyll_plugins

# Plugins used by the site.
group :jekyll_plugins do
  gem "jekyll-include-cache"
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
  gem "jekyll-seo-tag"
end

# Windows and JRuby do not include zoneinfo files, so bundle the tzinfo-data gem.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows.
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock http_parser.rb gem to v0.6.x on JRuby builds.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
