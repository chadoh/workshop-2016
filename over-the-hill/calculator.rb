print "The last year of a life lasts for what fraction of the first year? "

k = gets.to_f

# m1 = (4 + Math.sqrt(16 - (4 * (2 - (2*k)) * (1 + k)))) / (4 - (4 * k))
m = (4 - Math.sqrt(16 - (4 * (2 - (2*k)) * (1 + k)))) / (4 - (4 * k))

puts "\n  Such a life is halfway done when the being reaches #{(m * 100).round(2)}% of their final age."

puts "  If life expectancy is 80, the halfway point is #{(m * 80).round(2)}"
