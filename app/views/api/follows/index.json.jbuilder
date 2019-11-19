@follows.each do |follow|
  json.set follow.id do
    json.partial! 'following', follow: follow
  end
end