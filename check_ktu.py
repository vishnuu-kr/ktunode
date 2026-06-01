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
        
        # Target the first announcement link on the page
        link_element = soup.select_one('.announcement-list a')
        if not link_element: 
            print("Could not find the announcement element.")
            return
        
        latest_link = link_element['href']
        
        # Read the last link we saved to see if it changed
        last_link = ""
        if os.path.exists(STATE_FILE):
            with open(STATE_FILE, 'r') as f:
                last_link = f.read().strip()

        # If it's a new link, ping your Telegram phone
        if latest_link != last_link:
            msg = f"🔔 New KTU Update Detected!\n\nLink: {latest_link}"
            requests.post(f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage", 
                          data={"chat_id": CHAT_ID, "text": msg})
            
            # Save it so we don't spam notifications
            with open(STATE_FILE, 'w') as f:
                f.write(latest_link)
            print("New link found! Telegram notification sent.")
        else:
            print("No new updates found on KTU site.")
            
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    check_for_updates()