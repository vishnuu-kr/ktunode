import requests
from bs4 import BeautifulSoup
import os

URL = "https://ktu.edu.in/eu/announcements/announcements.htm"
BOT_TOKEN = os.environ['TELEGRAM_BOT_TOKEN']
CHAT_ID = os.environ['TELEGRAM_CHAT_ID']
STATE_FILE = "last_link.txt"

def check_for_updates():
    try:
        response = requests.get(URL, timeout=15)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # KTU utilizes classic tables. Let's pull all links on the page.
        links = soup.find_all('a', href=True)
        
        # Filter for genuine announcement attachments or portal links
        announcement_links = [l for l in links if 'attachments' in l['href'].lower() or 'eu' in l['href'].lower()]
        
        # Fallback if the layout variations hide the keywords
        if not announcement_links:
            announcement_links = [l for l in links if not l['href'].startswith('#') and 'home' not in l['href'].lower()]

        if not announcement_links:
            print("Could not parse any layout links from the portal page.")
            return
            
        # Target the top-most link element
        link_element = announcement_links[0]
        latest_link = link_element['href']
        
        # Form absolute URL structure if relative
        if latest_link.startswith('/'):
            latest_link = f"https://ktu.edu.in{latest_link}"
            
        print(f"Latest parsed portal link: {latest_link}")
        
        # Load the previous state check
        last_link = ""
        if os.path.exists(STATE_FILE):
            with open(STATE_FILE, 'r') as f:
                last_link = f.read().strip()

        # Execute alert logic on matching differences
        if latest_link != last_link:
            msg = f"🔔 New KTU Update Detected!\n\nLink: {latest_link}"
            requests.post(f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage", 
                          data={"chat_id": CHAT_ID, "text": msg})
            
            with open(STATE_FILE, 'w') as f:
                f.write(latest_link)
            print("State modified. Notification dispatched to device.")
        else:
            print("State matches. No recent updates found.")
            
    except Exception as e:
        print(f"Exception encountered during runtime: {e}")

if __name__ == "__main__":
    check_for_updates()