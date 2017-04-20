# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.create(title:'How to make a web app with Rails', content: "Stuff goes here", blog: Blog.first)
Post.create(title:'How to make a game with Rails', content: "Stuff goes here", blog: Blog.first)
Post.create(title:'How to solve algorithms with Ruby',content: "Stuff goes here",  blog: Blog.first)
Post.create(title:'Creating the Perfect Fighter', content: "Stuff goes here", blog: Blog.second )
Post.create(title:'Creating the Perfect Sorcerer', content: "Stuff goes here", blog: Blog.second )
Post.create(title:'Customizing Feats', content: "Stuff goes here", blog: Blog.second )
Post.create(title:'Exercises for being the perfect hit man', content: "Stuff goes here", blog: Blog.third )
Post.create(title:'Poison or Knife?', content: "Stuff goes here", blog: Blog.third )
Post.create(title:'Shoes for perfect stealth', content: "Stuff goes here", blog: Blog.third )
Post.create(title:'Python Basics', content: "Stuff goes here", blog: Blog.fourth )
Post.create(title:'For Loops and While Loops', content: "Stuff goes here", blog: Blog.fourth )
Post.create(title:'Taking the algo challenge', content: "Stuff goes here", blog: Blog.fourth )
Post.create(title:'Rolling 1d20 properly', content: "Stuff goes here", blog: Blog.last )
Post.create(title:'Left-handers take notice!', content: "Stuff goes here", blog: Blog.last )
Message.create(author: 'John', discussion: 'Your blog sucks!', post: Post.first)
Message.create(author: 'Michael', discussion: 'I hate Rails and I hate you!', post: Post.first)
Message.create(author: 'Sam', discussion: "This is two hours of my life I'll never get back!", post: Post.first)
Message.create(author: 'Christie', discussion: 'I better not ever meet you in person! You are a dead man!', post: Post.first)
