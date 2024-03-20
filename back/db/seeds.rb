# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Post.create!(
    [
      {
        title: 'これはseedタイトルです'
      },
      {
        title: 'これはseedタイトルです-2'
      },
      {
        title: 'これはseedタイトルです-3'
      },
      {
        title: 'これはseedタイトルです-4'
      },
      {
        title: 'これはseedタイトルです-5'
      },
    ]
  )
