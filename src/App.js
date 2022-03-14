import './App.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://d4689097fdef46be943ca9eed1ba1754@o1166757.ingest.sentry.io/6257300",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
function App() { 
  return (
    <div className="App">
      <header className="App-header">
      <div><image src="../assets/Berrycious_Transparent.png"></image></div>
      <h1 id="privacy-policy-of-the-via-development">Privacy Policy of The Via Development</h1>
<p className='App-text'>Here&#39;s the privacy policy and terms that you agree to when adding the <strong>Via Bot</strong> to your server, or by being a member of a server that has the bot. This doesn&#39;t replace Discord&#39;s <a className='App-link' href="https://discord.com/terms">Terms of Service</a>, <a className='App-link' href="https://discord.com/guidelines">Community Guidelines</a> and <a className='App-link' href="https://discord.com/privacy">Privacy Policy</a>.</p>
<h2 id="bots-services-and-servers">Bots, Services, and Servers</h2>
<p>The following is a list of bots to which this privacy policy applies.</p>
<ul>
<li><strong>Via</strong>#0835 (851470585313230849)</li>
<li><strong>Via Alpha</strong>#6076 (920310412765954048)</li>
<li><strong>Via Development</strong>#7353 (874192006707052545)</li>
<li><strong>Aurora™</strong>#7671 (833537233817436260)</li>
<li><strong>Clyde</strong>#5791 (819545506019409941)</li>
</ul>
<p>This privacy policy also applies to all of these sites and their subdomains:</p>
<ul>
<li><strong>inex.ga</strong></li>
<li><strong>fly.ahmedbaari.gq</strong></li>
<li><strong>berry.is-a.dev</strong></li>
</ul>
<h2 id="terminology">Terminology</h2>
<p>In this document, we have used the following terms:</p>
<ul>
<li><strong>Bot</strong>: The Via Bot.</li>
<li><strong>Server</strong>: A Discord server.</li>
<li><strong>User</strong>: A Discord user.</li>
<li><strong>Server Manager</strong> - Anyone who has the ability to add a bot to a server or configure the bot for the server. This is usually an administrator or moderator</li>
<li><strong>Server Member</strong> - Anyone who is a member of server to which one of the bots has been added</li>
<li><strong>Service User</strong> - Anyone who authorizes an application (logs in) for a scope that provides additional information</li>
</ul>
<h2 id="data-collected-by-command">Data Collected By Command</h2>
<p className='App-text'>We collect data only when you use the economy commands. Type <code>-help</code> and click on <strong>Via Economy</strong> to see the list of economy commands.
The following data may be collected and stored when a user runs an economy command to the bot.</p>
<ul>
<li>User ID (for saving the user&#39;s balance)</li>
<li>User Presence Status: online, dnd, idle, offline</li>
</ul>
<h2 id="activity-data">Activity Data</h2>
<p className='App-text'>The collects data from the user&#39;s presence activity <strong>only</strong> when they meet all the following criteria:</p>
<ul>
<li>Listening to Spotify</li>
<li>Spotify account connected to Discord</li>
<li>The spotify session is not in a private session</li>
<li>Discord app is running</li>
<li>Presence status is online, dnd or idle</li>
<li>Member of server to which the bot has been added</li>
</ul>
<h3 id="activity-data-that-the-bot-collects-">Activity Data that the bot collects:</h3>
<ul>
<li>The song the user is listening to</li>
<li>The time the user started listening to the song</li>
<li>The number of songs the user has listened to</li>
<li>The information of the song including name, artist, album, art and spotify link to the song</li>
</ul>
<h3 id="the-activity-data-is-stored-in-a-database-and-is-processed-in-these-ways-">The activity data is stored in a database and is processed in these ways:</h3>
<ul>
<li>The songs you listen to are associated with your User ID (for the recent songs feature)</li>
<li>Your recent songs, last listening activity and number of songs played are shown in the &quot;-profile&quot; command</li>
</ul>
<h3 id="request-delete-or-opt-out-from-the-collection-of-your-activity-data-">Request, delete or opt out from the collection of your activity data:</h3>
<ul>
<li className='App-text'>To request, delete or opt out from the collection of your activity data, send an email to <a href="mailto:ahmed4baari@gmail.com">ahmed4baari@gmail.com</a> or contact us in our Support Server.</li>
</ul>
<h2 id="data-collected-with-optional-features">Data Collected With Optional Features</h2>
<p className='App-text'>The following items may be collected and stored when a user enables optional features. Data will not be collected unless the corresponding feature is enabled.</p>
<ul>
<li>List of a member&#39;s roles (splash roles feature)</li>
<li>Server&#39;s name, icon, member count, presence count and invite link (partnerships feature)</li>
<li>Username and User ID (Music queues feature)</li>
</ul>
<h2 id="data-collected-automatically">Data Collected Automatically</h2>
<p className='App-text'>These are necessary information for the bot to function properly. They are stored only in the cache and are deleted automatically. They are not stored in the database.</p>
<ul>
<li>Date and Time of last activity (For Command Cooldowns)</li>
<li>Any data needed for standard operation of Discord bots, such as server permissions, user permissions, and user roles.</li>
</ul>
<h2 id="data-storage">Data Storage</h2>
<p className='App-text'>The data collected by the bot is stored in a database which is hosted on MongoDB, encrypted with an AES-256 key that is stored in the bot&#39;s config file. Your data can be deleted at any time. We never share your data with a third party for any reason. The bot runs on a password protected platform, thus keeping your data safe. Please keep in mind that even with these protections, no data can ever be 100% secure. We do everything to keep your data secure and private, but its absolute security cannot be guaranteed.</p>
<h2 id="agreement">Agreement</h2>
<p className='App-text'>By adding any of Via bot to your server or using these bots or services in any way, you are consenting to the policies outlined in this document. In addition, you (the server manager) are agreeing to inform your members of Discord&#39;s <a href="https://discord.com/terms">Terms of Service</a>, <a href="https://discord.com/guidelines">Community Guidelines</a>, <a href="https://discord.com/privacy">Privacy Policy</a> and the contents of this document. If you, the server manager, do not agree to this document, you may remove the bot(s) from the server. If you, the server member, do not agree to this document, you may leave the server that contains the bot(s).</p>

      </header>
    </div>
  );
}

export default App;
