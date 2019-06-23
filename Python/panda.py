import requests
from bs4 import BeautifulSoup

page = requests.get('https://forecast.weather.gov/MapClick.php?lat=34.05349000000007&lon=-118.24531999999999#.XMAurZNKjOQ')
soup = BeautifulSoup(page.content,'html-parser')
print(soup)