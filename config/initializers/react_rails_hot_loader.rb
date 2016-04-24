if Rails.env.development?
  # Starts a websocket server to push changes:
  React::Rails::HotLoader.start()
  React::Rails::HotLoader::AssetChangeSet.asset_glob = "**/*.{js,es6}*"
end