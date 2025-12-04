<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  import { Facebook, Twitter, Instagram } from '@lucide/svelte';
  import { base } from '$app/paths';
</script>


<footer class="nonewnews-footer">
  <!------------------------------------------------------------------------>
  <!-- ... footer-top ... -->
  <!------------------------------------------------------------------------>
  <div class="footer-top">
    <div class="background-logo" aria-hidden="true">NoNewNews</div>

    <div class="links-section">
      <div class="link-column">
        <h3>Subscribe Now</h3>
        <ul>
          <li><a href="{base}/">Digital Access</a></li>
          <li><a href="{base}/">Home Delivery</a></li>
          <li><a href="{base}/">Gift Subscription</a></li>
        </ul>
      </div>
      <div class="link-column">
        <h3>Account</h3>
        <ul>
          <li><a href="{base}/">My Account</a></li>
          <li><a href="{base}/">Manage Account</a></li>
          <li><a href="{base}/">Help Center</a></li>
        </ul>
      </div>
      <div class="link-column">
        <h3>Contact</h3>
        <ul>
          <li><a href="{base}/">Contact Us</a></li>
          <li><a href="{base}/">Advertise</a></li>
          <li><a href="{base}/">Careers</a></li>
        </ul>
      </div>
      <div class="link-column">
        <h3>More</h3>
        <ul>
          <li><a href="{base}/">Newsletters</a></li>
          <li><a href="{base}/">ePaper</a></li>
          <li><a href="{base}/">Archives</a></li>
        </ul>
      </div>
    </div>
  </div>

  <!------------------------------------------------------------------------>
  <!-- ... footer-bottom ... -->
  <!------------------------------------------------------------------------>
  <div class="footer-bottom">
    <div class="social-media">
      <a href="{base}/" aria-label="Facebook" class="social-icon"><Facebook size={20} /></a>
      <a href="{base}/" aria-label="Twitter" class="social-icon"><Twitter size={20} /></a>
      <a href="{base}/" aria-label="Instagram" class="social-icon"><Instagram size={20} /></a>
    </div>
    <div class="copyright">
      <p>&copy; 2024 NoNewNews Media Partners, LLC</p>
      <ul>
        <li><a href="{base}/">Privacy Policy</a></li>
        <li><a href="{base}/">Terms of Service</a></li>
      </ul>
    </div>
  </div>
</footer>


<style>
  /*------------------------------------------------------------------------*/
  /* @property - Typed Custom Properties */
  /*------------------------------------------------------------------------*/
  /* Background colors */
  @property --footer-bg-light {
    syntax: "<color>";
    inherits: false;
    initial-value: #f8f9fa;
  }
  @property --footer-bg-dark {
    syntax: "<color>";
    inherits: false;
    initial-value: #1a1a1a;
  }

  /* Text colors */
  @property --footer-text-light {
    syntax: "<color>";
    inherits: false;
    initial-value: #333;
  }
  @property --footer-text-dark {
    syntax: "<color>";
    inherits: false;
    initial-value: #e0e0e0;
  }

  /* Border colors */
  @property --border-light {
    syntax: "<color>";
    inherits: false;
    initial-value: #333;
  }
  @property --border-dark {
    syntax: "<color>";
    inherits: false;
    initial-value: #666;
  }

  /* Separator line colors */
  @property --separator-light {
    syntax: "<color>";
    inherits: false;
    initial-value: #e0e0e0;
  }
  @property --separator-dark {
    syntax: "<color>";
    inherits: false;
    initial-value: #333;
  }

  /* Logo/watermark colors */
  @property --logo-light {
    syntax: "<color>";
    inherits: false;
    initial-value: #333;
  }
  @property --logo-dark {
    syntax: "<color>";
    inherits: false;
    initial-value: #666;
  }

  /* Heading colors */
  @property --heading-light {
    syntax: "<color>";
    inherits: false;
    initial-value: #000;
  }
  @property --heading-dark {
    syntax: "<color>";
    inherits: false;
    initial-value: #fff;
  }

  /* Link colors */
  @property --link-light {
    syntax: "<color>";
    inherits: false;
    initial-value: #555;
  }
  @property --link-dark {
    syntax: "<color>";
    inherits: false;
    initial-value: #aaa;
  }

  /* Social icon background colors */
  @property --social-bg-light {
    syntax: "<color>";
    inherits: false;
    initial-value: #e0e0e0;
  }
  @property --social-bg-dark {
    syntax: "<color>";
    inherits: false;
    initial-value: #2a2a2a;
  }

  /* Social icon hover colors */
  @property --social-hover-light {
    syntax: "<color>";
    inherits: false;
    initial-value: #ccc;
  }
  @property --social-hover-dark {
    syntax: "<color>";
    inherits: false;
    initial-value: #3a3a3a;
  }

  /* Copyright text colors */
  @property --copyright-light {
    syntax: "<color>";
    inherits: false;
    initial-value: #666;
  }
  @property --copyright-dark {
    syntax: "<color>";
    inherits: false;
    initial-value: #999;
  }

  /* Numeric properties */
  @property --logo-opacity {
    syntax: "<number>";
    inherits: false;
    initial-value: 0.05;
  }
  @property --logo-scale-x {
    syntax: "<number>";
    inherits: false;
    initial-value: 2.1;
  }
  @property --logo-scale-y {
    syntax: "<number>";
    inherits: false;
    initial-value: 1.5;
  }

  /*------------------------------------------------------------------------*/
  /* light-dark() - Automatic Theme Switching */
  /*------------------------------------------------------------------------*/
  :root {
    color-scheme: light dark;
  }


  /*------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------*/
  .nonewnews-footer {
    background-color: light-dark(var(--footer-bg-light), var(--footer-bg-dark));
    /* !! min() !! - Padding scales with viewport but doesn't exceed max values */
    padding: min(0.75rem, 2vw) min(2rem, 5vw);
    border-top: 0.25rem double light-dark(var(--border-light), var(--border-dark));
    color: light-dark(var(--footer-text-light), var(--footer-text-dark));
    overflow: hidden;
  }
  .nonewnews-footer ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .nonewnews-footer a {
    text-decoration: none;
  }
  .nonewnews-footer a:hover {
    text-decoration: underline;
  }

  .footer-top {
    position: relative;
    padding: 0.5rem 0;
  }
  .footer-top::after {
    content: '';
    position: absolute;
    bottom: 0;
    /* !! min() !! - Separator extends based on footer padding */
    left: calc(-1 * min(2rem, 5vw));
    right: calc(-1 * min(2rem, 5vw));
    height: 0.1rem;
    background-color: light-dark(var(--separator-light), var(--separator-dark));
  }
  .footer-bottom {
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    /* !! max() & min() !! - Gap scales but doesn't go below 0.75rem or above 1rem */
    gap: max(0.75rem, min(1rem, 2vw));
  }

  .background-logo {
    transform: scale(var(--logo-scale-x), var(--logo-scale-y));
    position: absolute;
    top: -1rem;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: var(--logo-opacity);
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    /* !! max() & min() !! - Font size scales with viewport but stays between 5rem and 8rem */
    font-size: max(5rem, min(8rem, 12vw));
    color: light-dark(var(--logo-light), var(--logo-dark));
  }

  .links-section {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    /* !! min() !! - Padding scales but doesn't exceed 4rem */
    padding: 0 min(4rem, 8vw);
  }
  .link-column {
    text-align: center;
  }
  .link-column h3 {
    /* !! max() & min() !! - Font size stays between 0.875rem and 1rem */
    font-size: max(0.875rem, min(1rem, 2.5vw));
    font-weight: bold;
    text-transform: uppercase;
    color: light-dark(var(--heading-light), var(--heading-dark));
    margin: 0 0 0.5rem;
  }
  .link-column li {
    margin-bottom: 0.5rem;
  }
  .link-column a {
    color: light-dark(var(--link-light), var(--link-dark));
    /* !! max() & min() !! - Link font size stays between 0.8rem and 0.9rem */
    font-size: max(0.8rem, min(0.9rem, 2vw));
  }

  .social-media {
    display: flex;
    /* !! max() !! - Gap doesn't go below 0.75rem */
    gap: max(0.75rem, 1.5vw);
  }
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background-color: light-dark(var(--social-bg-light), var(--social-bg-dark));
    color: light-dark(var(--footer-text-light), var(--footer-text-dark));
    border-radius: 50%;
    transition: background-color 0.2s;
  }
  .social-icon:hover {
    background-color: light-dark(var(--social-hover-light), var(--social-hover-dark));
  }

  .copyright {
    /* !! max() & min() !! - Font size stays between 0.65rem and 0.75rem */
    font-size: max(0.65rem, min(0.75rem, 1.8vw));
    color: light-dark(var(--copyright-light), var(--copyright-dark));
    text-align: right;
  }
  .copyright p {
    margin: 0 0 0.1rem;
  }
  .copyright ul {
    display: flex;
    /* !! max() !! - Gap doesn't go below 0.75rem */
    gap: max(0.75rem, 1.5vw);
    justify-content: flex-end;
  }
</style>
