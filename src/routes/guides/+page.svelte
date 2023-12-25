<script lang="ts">
  /// import
  import { getHighlighter } from "shikiji";
  import { transformerNotationHighlight } from "shikiji-transformers";

  /// util
  import { getAgentSystem } from "../../utility/get-system";
  import dedent from "../../utility/dedent";

  /// var
  const separator = getAgentSystem() === "windows" ? "\\" : "/";

  /// dynavar
  $: codeSnippet = async(code: string, language: string) => {
    const highlighter = await getHighlighter();

    await highlighter.loadLanguage("shell");
    await highlighter.loadTheme("github-light");

    return highlighter.codeToHtml(
      dedent`${code}`, {
        lang: language,
        theme: "github-light",
        transformers: [
          transformerNotationHighlight()
        ]
      }
    );
  };
</script>

<style lang="scss">
  @import "src/scss/component/mixin";
  @import "src/scss/component/color";

  header {
    padding-bottom: 5rem;
    padding-top: 5rem;

    @media (max-width: 600px) {
      margin-top: 70px;
    }
  }

  .code-snippet {
    background-color: $uchu-gray-1;

    @media (max-width: 600px) {
      left: -2rem;
      margin: 1rem 0 0 0;
      position: relative;
      width: calc(100% + 4rem);
      padding-left: 1.75rem;
    }

    :global(code) {
      display: block;
      min-width: 100%;
      width: fit-content;
    }

    :global(pre) {
      background-color: transparent !important;
      cursor: inherit;
      overflow-x: scroll;
    }

    :global(.line) {
      display: inline-block;
      padding-right: 2rem;
      text-indent: 2rem;
    }

    :global(span.line:first-of-type) {
      margin-top: 2rem;
    }

    :global(span.line:last-of-type) {
      margin-bottom: 2rem;
    }

    :global(.highlighted) {
      margin: 0 -2rem; padding: 0 2rem;

      background-color: $uchu-yellow-3;
      display: inline-block;
      width: calc(100% + 4rem);
    }
  }
</style>

<svelte:head>
  <title>Dolo by Neuenet &middot; Guides</title>

  <meta name="description" content="Helpful guides to get your Handshake TLD up &amp; running with Dolo."/>
  <meta property="og:description" content="Helpful guides to get your Handshake TLD up &amp; running with Dolo."/>
  <meta property="og:title" content="Dolo by Neuenet &middot; Guides"/>

  <link rel="preload" href="/media/background/101.png" as="image"/>
</svelte:head>

<header>
  <div class="inner-wrap">
    <h1>Guides</h1>
    <h3>Tutorials to get your TLD up&nbsp;&amp;&nbsp;running</h3>
  </div>
</header>

<section class="ancillary">
  <div class="inner-wrap">
    <details open>
      <summary>Guide #01: Dolo, nsd, and&nbsp;nginx</summary>
      <h3>Prerequisites</h3>

      <ul>
        <li>Handshake TLD (and Handshake wallet, by extension)*</li>
        <li>IPv4 of your VPS (we’ll install nsd and nginx on it)</li>
        <li>SFTP client</li>
        <li>terminal/terminal emulator</li>
        <li>patience</li>
      </ul>

      <p><em>* This guide assumes you own a Handshake TLD; either self‑custodied or within your account on a marketplace like <a href="https://shakestation.io" rel="noopener noreferrer" target="_blank">Shakestation</a> or <a href="https://namebase.io" rel="noopener noreferrer" target="_blank">Namebase</a>. Please refer to those platforms for information on how to acquire HNS tokens/TLDs.</em></p>

      <hr/>

      <h3>Run Dolo</h3>

      <p>On the New Export screen, enter your TLD (in ASCII/punycode) and nameserver IP, and click “generate.” <em>A future update will automatically convert Unicode/emoji to their ASCII/punycode variants <strong>and</strong> support IPv6 addresses.</em></p>
      <p class="img-wrap"><img alt="Dolo import screen" src="/media/dolo-new.png"/></p>
      <p>The generation is nearly instant and you should see something like this:</p>
      <p class="img-wrap"><img alt="Dolo export screen showing the 'examplename' TLD" src="/media/dolo.png"/></p>

      <h3>Update blockchain records</h3>

      <p>Copy the <code>DS</code>, <code>GLUE4</code>, and <code>NS</code> fields in the “Wallet Records” section and apply them to your TLD.</p>
      <p class="img-wrap"><img alt="'examplename' blockchain records view within Bob Wallet" src="/media/guide-01/bob-wallet-examplename.png"/></p>

      <p>Your TLD updates should get picked up by Handshake in ~15 minutes. The block update where your changes are live occurs 4x a day. Needless to say, you’ll be waiting awhile but that’s okay! Time is security. In the meantime, let’s get our nameserver running.</p>
      <p>Before that though, click the folder icon in the top‑right of Dolo; it’ll open your local <code>Documents{separator}Dolo</code> directory with your TLD’s export (we’ll get back to this later).</p>

      <h3>Prepare nameserver</h3>

      <p><a href="https://nlnetlabs.nl/projects/nsd/about/" rel="noopener noreferrer" target="_blank">nsd</a> is authoritative nameserver software from NLnet Labs. It boasts speed, reliability, stability and security; <strong>perfect</strong> for us.</p>

      <p>SSH into your VPS and run these commands. You’re gonna install <code>nsd</code> and create folders:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # install nsd on Debian/Ubuntu distros
          apt install nsd -y

          # create directory for zone files (filenames in <tld.zone> format)
          mkdir /etc/nsd/zone

          # create directory for key-signing key (KSK) and zone-signing key (ZSK) files
          mkdir /etc/nsd/key
        `, "shell") then value}
          {@html value}
        {/await}
      </div>

      <p>On your local machine, you should see something like this in the directory you opened via Dolo:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          Dolo
          └─ examplename
             ├─ ksk
             │  ├─ Kexamplename.+003+27500.key
             │  └─ Kexamplename.+003+27500.private
             ├─ tls
             │  ├─ examplename.crt
             │  └─ examplename.key
             ├─ zsk
             │  ├─ Kexamplename.+003+32951.key
             │  └─ Kexamplename.+003+32951.private
             ├─ output.toml
             └─ records.toml
        `, "plain") then value}
          {@html value}
        {/await}
      </div>

      <p>We’re going to upload the contents of <code>ksk</code> and <code>zsk</code> first. SFTP into your VPS and navigate to <code>/etc/nsd/key</code>. Create a folder with the same name as your TLD. Upload your <code>ksk</code> and <code>zsk</code> files to it. You should see something like this:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          nsd
          └─ key
             └─ examplename
                ├─ Kexamplename.+003+27500.key
                ├─ Kexamplename.+003+27500.private
                ├─ Kexamplename.+003+32951.key
                └─ Kexamplename.+003+32951.private
        `, "plain") then value}
          {@html value}
        {/await}
      </div>

      <p>Next, you’ll upload your zonefile to <code>/etc/nsd/zone</code> (adding onto the previous code snippet for clarity).</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          nsd
          ├─ key
          │  └─ examplename
          │     ├─ Kexamplename.+003+27500.key
          │     ├─ Kexamplename.+003+27500.private
          │     ├─ Kexamplename.+003+32951.key
          │     └─ Kexamplename.+003+32951.private
          └─ zone // [!code highlight]
             └─ examplename.zone // [!code highlight]
        `, "plain") then value}
          {@html value}
        {/await}
      </div>

      <p>Now that your files are in place, let’s update <code>nsd.conf</code>:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # create/edit nsd config
          nano /etc/nsd/nsd.conf
        `, "shell") then value}
          {@html value}
        {/await}
      </div>

      <p>Paste the contents of the code snippet below to the <code>nsd.conf</code> file you just opened (replace <code>examplename</code> with the name of your TLD):</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # NSD configuration file for Debian.
          #
          # See the nsd.conf(5) man page.
          #
          # See /usr/share/doc/nsd/examples/nsd.conf for a commented
          # reference config file.

          server:
                  hide-version: yes
                  server-count: 1 # use this number of cpu cores
                  zonesdir: "/etc/nsd/zone"

          zone:
                  name: examplename
                  zonefile: examplename.zone

          # The following line includes additional configuration files from the
          # /etc/nsd/nsd.conf.d directory.

          include: "/etc/nsd/nsd.conf.d/*.conf"
        `, "plain") then value}
          {@html value}
        {/await}
      </div>

      <p><em>When you want to add more TLDs to your authoritative nameserver, just create another <code>zone</code> block. Easy‑peasy.</em></p>
      <p>Save and quit the file. We’re almost done!</p>
      <p>A good practice is to check your zone file for any issues before restarting the <code>nsd</code> service:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # you know the drill…replace \`examplename\` with your TLD’s name
          nsd-checkzone examplename /etc/nsd/zone/examplename.zone

          # self explanatory
          service nsd restart
        `, "shell") then value}
          {@html value}
        {/await}
      </div>

      <p>Et voilà! The weird stuff is done (DNS <strong>and</strong> blockchain? C’mon). Now it’s time for the webserver. Light work.</p>
      <p>You can use any webserver you want but we’ll use nginx.</p>

      <h3>Setup nginx</h3>

      <p><em>What follows is a rather shameless copy/paste <a href="https://nginx.org/en/linux_packages.html" rel="noopener noreferrer" target="_blank">from nginx</a> themselves:</em></p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # install the prerequisites
          apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring -y
        `, "shell") then value}
          {@html value}
        {/await}
      </div>

      <p>Let’s import the official nginx signing key so apt can verify the package’s authenticity. Then, we’ll verify it.</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # fetch the key
          curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \\
              | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

          # verify
          gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
        `, "shell") then value}
          {@html value}
        {/await}
      </div>

      <p>The output should contain the full fingerprint <code>573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62</code> (at the time of this post):</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          pub   rsa2048 2011-08-19 [SC] [expires: 2024-06-14]
                573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
          uid                      nginx signing key <signing-key@nginx.com>
        `, "plain") then value}
          {@html value}
        {/await}
      </div>

      <p><strong>If the fingerprint is different, remove the file.</strong></p>
      <p>Now we’ll set up the apt repository for mainline nginx packages:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \\
          http://nginx.org/packages/mainline/ubuntu \`lsb_release -cs\` nginx" \\
              | sudo tee /etc/apt/sources.list.d/nginx.list
        `, "shell") then value}
          {@html value}
        {/await}
      </div>

      <p>Finally, set up repository pinning to prefer nginx’s packages over distribution-provided ones:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          echo -e "Package: *&#92;nPin: origin nginx.org&#92;nPin: release o=nginx&#92;nPin-Priority: 900&#92;n" \\
              | sudo tee /etc/apt/preferences.d/99nginx
        `, "shell") then value}
          {@html value}
        {/await}
      </div>

      <p>That was a lot of preamble but now we’re finally ready to install nginx.</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # check for updates
          apt update && apt upgrade -y

          # woohoo
          apt install nginx -y
        `, "shell") then value}
          {@html value}
        {/await}
      </div>

      <h3>A website for your TLD?!</h3>

      <p>Sure, why not? Besides, you have a TLS cert there&hellip;use it!</p>

      <p>It doesn’t matter where you put your certs, but for <code>examplename</code>, we have the certs for that TLD (and others) in <code>/etc/neuenet</code>.</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          neuenet
          ├─ examplename
          │  ├─ examplename.crt
          │  ├─ examplename.dhparams.pem
          │  └─ examplename.key
          ├─ theregistry
          │  ├─ theregistry.crt
          │  ├─ theregistry.dhparams.pem
          │  └─ theregistry.key
          └─ xor
             ├─ xor.crt
             ├─ xor.dhparams.pem
             └─ xor.key
        `, "plain") then value}
          {@html value}
        {/await}
      </div>

      <p>Wherever your certs, be sure to use this level of organization (or better)!</p>
      <p>Don’t worry about the <code>dhparams</code>, that’s an optional file you can generate via OpenSSL (on your local machine to SFTP later). I like generating 4096‑bit <code>dhparams</code> for ridiculous security but it’s time‑intensive; it takes roughly an hour on my machine.</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # generate the file in the current directory
          openssl dhparam -out examplename.dhparams.pem 4096

          # most people use 2048‑bit as it's reasonably secure and quick
          openssl dhparam -out examplename.dhparams.pem 2048
        `, "shell") then value}
          {@html value}
        {/await}
      </div>

      <p>After uploading your cert and key (remember, they’re in the <code>tls</code> folder within your local <code>Documents{separator}Dolo</code> directory), navigate to <code>/etc/nginx/snippets</code>. The placeholder files in there are safe to delete.</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # create location snippet
          nano location.conf
        `, "shell") then value}
          {@html value}
        {/await}
      </div>

      <p>Paste these contents into <code>location.conf</code>, and save:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          proxy_set_header X-Forwarded-Proto $scheme;
          proxy_set_header Connection "upgrade";
          proxy_set_header Host $http_host;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-NginX-Proxy true;
          proxy_set_header X-Real-IP $remote_addr;

          proxy_cache_key sfs$request_uri$scheme;
          proxy_http_version 1.1;
          proxy_redirect off;
        `, "plain") then value}
          {@html value}
        {/await}
      </div>

      <p>We’ll do the same for another file, <code>security.conf</code>:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          ssl_protocols TLSv1.2;
          ssl_prefer_server_ciphers on;

          ssl_ciphers AES256+EECDH:AES256+EDH:!aNULL;

          #ssl_stapling on;        # should be off for self‑signed certs // [!code highlight]
          #ssl_stapling_verify on; # should be off for self‑signed certs // [!code highlight]
          gzip off;                # should be off for SSL/TLS // [!code highlight]

          ssl_session_cache shared:SSL:10m;
          ssl_session_timeout 10m;
          ssl_ecdh_curve secp384r1;
          ssl_session_tickets off;

          add_header Content-Security-Policy "default-src https: wss: data: 'unsafe-inline' 'unsafe-eval'" always;
          add_header Referrer-Policy "no-referrer-when-downgrade";
          add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
          add_header X-Content-Type-Options "nosniff" always;
          add_header X-Frame-Options SAMEORIGIN;
          add_header X-XSS-Protection "1; mode=block";
        `, "plain") then value}
          {@html value}
        {/await}
      </div>

      <p>When getting <code>examplename</code> online, several pitfalls were encountered. Frantic <a href="https://kagi.com/" rel="noopener noreferrer" target="_blank">Kagi</a> searches revealed solutions so, keep these in mind when utilizing self‑signed certs.</p>

      <p>Alright! Back out of <code>/etc/nginx/snippets</code> and into <code>/etc/nginx/sites-available</code>; time to create a server block.</p>
      <p>It’s a good practice to create a named file for each domain you manage with nginx. Give the file the same name as your TLD (no extension is necessary). Here’s the contents of <code>/etc/nginx/sites-available/examplename</code>:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          server {
            listen 443 ssl;
            listen [::]:443 ssl;

            server_name examplename;

            root /var/www/examplename;
            index index.html;

            include snippets/location.conf;

            #   S E C U R I T Y

            include snippets/security.conf;

            ssl_certificate /etc/neuenet/examplename/examplename.crt;
            ssl_certificate_key /etc/neuenet/examplename/examplename.key;
            ssl_dhparam /etc/neuenet/examplename/examplename.dhparams.pem;
          }
        `, "plain") then value}
          {@html value}
        {/await}
      </div>

      <p>As you can see, we reference the two snippet files we created earlier. We do this for each of our TLDs, to drastically reduce boilerplate code. The certs and dhparam are also referenced here. Finally, our website for <code>examplename</code> resides in the <code>/var/www/examplename</code> directory.</p>
      <p>nginx still doesn’t know about our site though&hellip;it looks in the <code>/etc/nginx/sites-enabled</code> directory for sites to serve.</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # create shortcut for your TLD’s server block(s)
          ln -s /etc/nginx/sites-available/examplename /etc/nginx/sites-enabled/
        `, "sh") then value}
          {@html value}
        {/await}
      </div>

      <p>A good practice when working with nginx is to run <code>nginx -t</code> whenever changes are made to config files. If there are errors, it’ll let you know.</p>
      <p>Another pitfall we ran into was nginx not picking up our changes (this was discovered by examining the output of <code>nginx -T</code>&hellip;similar to the previous command, but uppercase). Turns out, <code>nginx.conf</code> needed an extra directive.</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # open nginx.conf
          nano /etc/nginx/nginx.conf
        `, "sh") then value}
          {@html value}
        {/await}
      </div>

      <p>Paste the highlighted line into your <code>nginx.conf</code> and save:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          user  root;
          worker_processes  auto;

          error_log  /var/log/nginx/error.log notice;
          pid        /var/run/nginx.pid;

          events {
              worker_connections  1024;
          }

          http {
              include       /etc/nginx/mime.types;
              default_type  application/octet-stream;

              log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                                '$status $body_bytes_sent "$http_referer" '
                                '"$http_user_agent" "$http_x_forwarded_for"';

              access_log  /var/log/nginx/access.log  main;

              sendfile        on;
              #tcp_nopush     on;

              keepalive_timeout  65;

              #gzip  on;

              include /etc/nginx/conf.d/*.conf;
              include /etc/nginx/sites-enabled/*; // [!code highlight]
          }
        `, "plain") then value}
          {@html value}
        {/await}
      </div>

      <p>Then:</p>

      <div class="code-snippet">
        {#await codeSnippet(`
          # get nginx to serve up your changes
          service nginx restart
        `, "sh") then value}
          {@html value}
        {/await}
      </div>

      <p>Amazing&hellip;it’s finally over. <em>Phew!</em></p>
      <p>Six hours from now, your TLD updates should be confirmed in the blockchain and picked up by light clients. Your DNS changes propagate a lot quicker. Rithvik Vibhu operates a hella useful tool that analyzes DNS, DANE, and DNSSEC for Handshake TLDs — <a href="https://sitecheck.htools.work/check/examplename" rel="noopener noreferrer" target="_blank">htools</a>. It’s <a href="https://github.com/htools-org/htools-sitecheck" rel="noopener noreferrer" target="_blank">open-source</a> so you can run your own as well.</p>

      <h3>FIN</h3>

      <p>Once you get equipped with a Handshake light client, you’ll be able to visit <a href="https://examplename" rel="noopener noreferrer" target="_blank">https://examplename</a> and see this lovely site:</p>
      <p class="img-wrap"><img alt="screenshot of 'https://examplename' within Arc browser" src="/media/guide-01/website-examplename.png"/></p>
      <p>I acquired this TLD for the sole purpose of educational content for the Handshake community. It’s effectively our version of <code>example.com</code>.</p>
      <p>The rest of my TLD sites share a uniform look (the background gradient is animated):</p>
      <p class="img-wrap"><img alt="screenshot of 'https://xor' within Arc browser" src="/media/guide-01/website-xor.png"/></p>

      <p>There is a dearth of content on Handshake and understandably so (how many words did you just read); things are very early and the need for technical folks to break things down and make tools is quite high. Hopefully, this guide helped you!</p>
      <p>If you’ve found an error or see where this guide could be improved, feel free to open an issue in the <a href="https://github.com/neuenet/dolo-www" rel="noopener noreferrer" target="_blank">neuenet/dolo-www repo</a>.</p>
    </details>
  </div>
</section>

<section class="blurb">
  <p class="inner-wrap">Good grief that guide was long&hellip;might as well browse <a href="/features">the&nbsp;features</a> and/or get your questions answered in <a href="/faq">the&nbsp;FAQ</a>!</p>
</section>
