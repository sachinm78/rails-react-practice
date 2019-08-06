# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


surfboards = Surfboard.create([
    {
        name: "Lightning",
        price: 999,
        img_url: 'https://images.evo.com/imgp/700/161026/633236/catch-surf-odysea-x-lost-rnf-5-5-surfboard-apple-green.jpg',
        length: 70    
    },
    {
        name: "Thunder",
        price: 499,
        img_url: 'https://images.evo.com/imgp/700/150975/611736/catch-surf-skipper-thruster-x-taj-burrow-pro-surfboard-5-6.jpg',
        length: 52   
    },
    {
        name: "Rain",
        price: 799,
        img_url: 'https://images.evo.com/imgp/700/165044/652028/modern-highline-pu-surfboard-sea-tint.jpg',
        length: 72   
    }
])