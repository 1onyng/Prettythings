# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

photos = [ 
  "1.jpeg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
]

titles = [
  "Sunrise on the lake",
  "Lani's wedding",
  "Paris vacation",
  "This is just cool"
]

Post.destroy_all
User.destroy_all

demo_user = User.create!(username: "demo_user", password: "hunter02")

until photos.empty?
  photo = photos.shift
  post = Post.new(title: titles.shift, user_id: demo_user.id)
  file = open("https://pretty-things-dev.s3-us-west-1.amazonaws.com/#{photo}")
  post.photo.attach(io: file, filename: photo)
  post.save!
end

# post = Post.create!(title: "Sunrise on the lake", user_id: demo_user.id)
# file = open('https://pretty-things-seeds.s3-us-west-1.amazonaws.com/1.jpeg')
# post.photo.attach(io: file, filename: "1.jpeg")

# post = Post.create!(title: "Lani's wedding", user_id: demo_user.id)
# file = open('https://pretty-things-seeds.s3-us-west-1.amazonaws.com/2.jpg')
# post.photo.attach(io: file, filename: "2.jpg")

# post = Post.create!(title: "Paris vacation", user_id: demo_user.id)
# file = open('https://pretty-things-seeds.s3-us-west-1.amazonaws.com/3.jpg')
# post.photo.attach(io: file, filename: "3.jpg")

# post = Post.create!(title: "This is just cool", user_id: demo_user.id)
# file = open('https://pretty-things-seeds.s3-us-west-1.amazonaws.com/4.jpg')
# post.photo.attach(io: file, filename: "4.jpg")

