from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

my_url = 'https://www.theravive.com/cities/md/'

#opening up connection, grabbing the page
uClient = uReq(my_url)
page1_html = uClient.read()
uClient.close()

#html parsing
page1_soup = soup(page1_html, "html.parser")


#grabs each product
containers = page1_soup.findAll("div", {"class": "profile-info"})
container = containers[0]

filename = "maryland.csv"
f = open(filename, "w")

headers = "Name, Profession, Contact_Info\n"
f.write(headers)

for container in containers:
	address_container = container.findAll("div", {"class" : "profile-address"})
	address = address_container[0].text.strip()

	name_container = container.findAll("h4", {"class" : "green-text"})
	name = name_container[0].text

	prof_container = container.findAll("h6", {"class" : "pink-dark-text light-weight"})
	prof = prof_container[0].text

	print("name:" + name)
	print("profession: " + prof)
	print("address: " + address + "\n")

	f.write(name.replace(",", "|") + "," + prof.replace(",","|") + "," + address.replace(",","|") + "\n")

f.close()
