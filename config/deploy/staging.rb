# repository info
set :branch, "development"

# This may be the same as your `Web` server
role :app, "ADDRESS"

# directories
set :deploy_to, "/home/ACCOUNT/subdomains/DOMAIN"
set :public, "#{deploy_to}/public_html"
set :extensions, %w[public template]
