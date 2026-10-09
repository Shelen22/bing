# Aqua Spider: Water Reminder privacy policy

_Last updated: 8 October 2026_

Aqua Spider: Water Reminder does not collect, transmit, sell or share any personal data.

**What is stored:** your reminder settings (on/off, reminder interval, snooze time, daily goal, the name you type for the greeting and, if you add one, your calendar link), the number of drinks you logged today, and the start and end times of your upcoming calendar events. This is kept in your browser's local extension storage (`chrome.storage.local`) and never leaves your device.

**Calendar (optional):** if you paste a calendar link (an iCal/ICS address from Google Calendar, Outlook or similar), the extension downloads that calendar directly from your calendar provider every 15 minutes. It keeps only the start and end times of upcoming events, in your browser, to pause reminders during meetings and remind you before they start. Event titles, descriptions, attendees and locations are never stored or sent anywhere. The link itself is stored only in your browser. Remove the link to stop this.

**Google Calendar tab (optional, off by default):** if you switch on "Read my Google Calendar tab", the extension reads meeting times from Google Calendar pages (calendar.google.com) you have open. Only start and end times are kept, in your browser; titles, descriptions, attendees and locations are never stored or sent anywhere. Switch it off to stop and delete what was read.

**Calendar file (optional):** if you import a calendar file (.ics or Google Calendar's .zip export), it is read in your browser and only meeting start and end times for the next 60 days are kept. The file itself is not stored or sent anywhere.

**Meetings you add:** start and end times of meetings you add by hand, or when you click "In a meeting", are kept in your browser.

**Site access is optional:** the extension asks for no website access when you install it. Each feature that needs a site asks Chrome for that site only when you switch it on, and gives it back when you switch it off.

**Meeting calls (optional, off by default):** if you switch on "Pause during Meet, Zoom, Teams and Slack calls", the extension can see whether one of those call tabs is open, and for Teams and Slack whether it is playing call audio, so it can pause during calls. It only checks those sites' addresses, in the moment; it never reads those pages, and nothing is stored or sent anywhere.

**Showing on the page you're on (optional, off by default):** if you switch on "Show on the page I'm on", Chrome asks you to allow access to websites, so the hero can be drawn on whatever page you have open. On those pages the extension only adds its own drawing; it never reads, records or sends anything from them. Switch it off and the access is given back.

**Network access:** apart from downloading the calendar link you provide, the extension makes no network requests and loads no remote code. The calendar parser (ical.js) is bundled inside the extension.

**Permissions:**
- `alarms`: to schedule reminders and snoozes.
- `storage`: to save your settings and daily count on your device.
- `system.display`: to centre the fallback reminder window on your main screen.
- `scripting`: to draw the reminder, and (only if you switch it on) to read meeting times from Google Calendar pages.
- Access to calendar.google.com (optional, only if you switch on "Read my Google Calendar tab").
- Access to meet.google.com, zoom.us, teams.microsoft.com, teams.live.com and app.slack.com (optional, only if you switch on pausing during calls).
- Access to all websites (optional, only if you switch on "Show on the page I'm on"): to draw the hero on the page you have open. Without it, the hero appears in his own small window.
- A calendar link from another provider: Chrome asks for access to that one site when you paste the link.

**Removing your data:** uninstalling the extension deletes everything it stored.

**Contact:** questions about this policy can be sent to the email address shown on the extension's Chrome Web Store page.
