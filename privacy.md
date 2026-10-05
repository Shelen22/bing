# Aqua Spider: Water Reminder privacy policy

_Last updated: 5 October 2026_

Aqua Spider: Water Reminder does not collect, transmit, sell or share any personal data.

**What is stored:** your reminder settings (on/off, reminder interval, snooze time, daily goal, the name you type for the greeting and, if you add one, your calendar link), the number of glasses you logged today, and the start and end times of your upcoming calendar events. This is kept in your browser's local extension storage (`chrome.storage.local`) and never leaves your device.

**Calendar (optional):** if you paste a calendar link (an iCal/ICS address from Google Calendar, Outlook or similar), the extension downloads that calendar directly from your calendar provider every 15 minutes. It keeps only the start and end times of upcoming events, in your browser, to pause reminders during meetings and remind you before they start. Event titles, descriptions, attendees and locations are never stored or sent anywhere. The link itself is stored only in your browser. Remove the link to stop this.

**Tab addresses:** the extension checks the addresses of your open tabs for two things only: whether a Google Meet, Zoom (web) or Microsoft Teams / Slack call tab is open (to pause during calls), and whether the current tab is Chrome's New Tab page (to show the reminder inside it). Addresses are checked in the moment, never stored, and never sent anywhere. The extension never reads page content.

**Network access:** apart from downloading the calendar link you provide, the extension makes no network requests and loads no remote code. The calendar parser (ical.js) is bundled inside the extension.

**Permissions:**
- `alarms`: to schedule reminders and snoozes.
- `storage`: to save your settings and daily count on your device.
- `system.display`: to centre the fallback reminder window on your main screen.
- `scripting` and access to all sites: to draw the reminder on the page you have open. The extension only adds its own elements to the page. It never reads, records or sends anything from the pages you visit.

**Removing your data:** uninstalling the extension deletes everything it stored.

**Contact:** questions about this policy can be sent to the email address shown on the extension's Chrome Web Store page.
