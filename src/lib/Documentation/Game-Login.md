# Google Auth and Discord Auth

These two extensions let players log in to your game with their **Google** or **Discord** account. They use **your own** login setup: you create it once in Google's or Discord's developer website and enter its ID with a block. The game talks to Google or Discord directly; no other server sees the player's data.

What the game gets: name, user ID, picture (avatar), and the email address only if you turn it on. The details stay in the game's memory until the player logs out or closes the game; nothing is saved.

Before the login window opens, the game shows the player a short notice with a link to your **privacy policy**. If you sell your game or publish it publicly, you need a privacy policy: there is a template at the end of this page.

## How the login works

- **Desktop games** (this desktop editor, and games packaged as a desktop app, e.g. for Steam): the login page opens in the player's normal web browser. When the player is done, the browser sends them back to a small address on their own computer (`http://127.0.0.1...`) that the game listens to for a few minutes.
- **Web games** (HTML files, e.g. on itch.io or your own website): the login page opens in a popup window. When the player is done, the popup goes back to a page on your game's website (the "return page"), and the game reads the result from it. Upload an empty file named `callback.html` next to your game for this.

The game picks the right way by itself.

## Google Auth

```scratch
set desktop app client ID [123-abc.apps.googleusercontent.com] secret [GOCSPX-...]:: #4285F4
set web page client ID [456-def.apps.googleusercontent.com] return page [https://example.com/mygame/callback.html]:: #4285F4
set privacy policy address to [https://example.com/privacy.html]:: #4285F4
also ask for email address [no v]:: #4285F4
log in with Google:: #4285F4
if <logged in?:: #4285F4> then
say (join [Hello ] (user [name v]:: #4285F4))
else
say (last login error:: #4285F4)
end
```

### Setup (Google Cloud Console)

1. Go to `console.cloud.google.com`, create a project, open **Google Auth Platform**, and fill in the **Branding** page (app name, support email, your privacy policy address). Under **Audience**, choose **External**. While the app is in "Testing", only the test users you list can log in; click **Publish app** when your game is ready. With only the basic permissions these extensions use (`openid`, `profile`, and `email` if you turn it on), Google does not need to review your app.
2. Under **Clients**, create a client of type **Desktop app**. Copy its client ID and client secret into the `set desktop app client ID` block. (Google itself says a desktop app's secret can't be kept secret; it's fine inside the game.)
3. For a web game, create a second client of type **Web application**. Under **Authorized redirect URIs**, add the exact address of your `callback.html` (for example `https://example.com/mygame/callback.html`). Put that client ID and the same address into the `set web page client ID` block.

Notes:
- Google may refuse a return page on a website you don't own (for example itch.io's game pages). Your own website or GitHub Pages works best.
- The web way uses Google's "token" login for websites without a server. Google recommends a server for big websites; a game doesn't need one.

## Discord Auth

```scratch
set client ID [123456789012345678]:: #5865F2
set desktop app return address [http://127.0.0.1:53682/discord]:: #5865F2
set web page return page [https://example.com/mygame/callback.html]:: #5865F2
set privacy policy address to [https://example.com/privacy.html]:: #5865F2
also ask for email address [no v]:: #5865F2
log in with Discord:: #5865F2
if <logged in?:: #5865F2> then
say (join [Hello ] (user [display name v]:: #5865F2))
else
say (last login error:: #5865F2)
end
```

### Setup (Discord Developer Portal)

1. Go to `discord.com/developers/applications` and create an application. Fill in its **Privacy Policy URL** on the **General Information** page.
2. On the **OAuth2** page, copy the **Client ID** into the `set client ID` block, and turn on **Public Client**. (That lets the game log in without a secret.)
3. Under **Redirects**, add `http://127.0.0.1:53682/discord` for desktop games (or your own `http://127.0.0.1:<port>/<name>` address, and put the same in the `set desktop app return address` block), and the exact address of your `callback.html` for web games.

## Blocks

- **set ... client ID**: your login setup. Use it before `log in`, e.g. under the green flag.
- **set privacy policy address to**: shown as a link in the notice before the login window opens.
- **also ask for email address**: `no` by default. Only turn it on if your game really needs the email address.
- **log in with Google / Discord**: shows the notice, opens the login and waits until it is finished, cancelled or has failed (after 5 minutes at most).
- **logged in?**: true after a successful login.
- **user [ ]**: name, user ID, picture / avatar address, email (empty unless you asked for it).
- **last login error**: why the last login didn't work (e.g. `cancelled`, `login window closed`, `access_denied`), empty if it worked.
- **log out**: forgets the player's details and ends the game's access at Google or Discord.

## Privacy policy template

Copy this, replace everything in [brackets], and put it on a web page (your website, itch.io page, etc.). It only covers the login; add anything else your game collects.

> **Privacy policy for [Game name]**
>
> Last updated: [date]. Contact: [your name or studio, email address].
>
> **What we collect.** If you choose to log in with [Google / Discord], the game receives from your account: your name, your account ID and your profile picture[, and your email address]. We do not receive your password.
>
> **Why.** [To show your name and picture in the game / to tell players apart / to ...]. We don't sell this data or use it for advertising.
>
> **Where it is stored.** Only in the game's memory on your device while the game is running. It is not sent to us or to anyone else [change this if your game sends it to your own server, and say where that server is and how long you keep the data]. The game talks to [Google / Discord] directly to log you in; their own privacy policy applies to that.
>
> **How to delete it.** Use the game's log out button, or close the game: the data is then gone. You can also remove the game's access in your [Google account under Security → Third-party apps / Discord settings under Authorized Apps].
>
> **Children.** [The game is not meant for children under 13 / 16 in the EU, or explain how you handle this.]
>
> **Changes.** If this policy changes, we update this page and the date above.
